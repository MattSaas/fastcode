import { NextResponse } from "next/server";
import { auth } from "@/auth";
import User from "@/models/User";
import Board from "@/models/Board";
import connectMongoos from "@/libs/mongoos";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name) {
      //Check board name
      return NextResponse.json(
        { error: "Board name is required!" },
        { status: 400 }
      );
    }

    // Check loing
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { error: "Not authorized persson!" },
        { status: 401 }
      );
    }

    // Connect Database
    await connectMongoos();

    // Find user
    const user = await User.findById(session.user.id);

    // Create collaction
    const board = await Board.create({
      userId: user._id,
      name: body.name,
    });

    // Update user board
    user.board.push(board._id);
    await user.save();

    return NextResponse.json(board);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e.error }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    if (!boardId) {
      return NextResponse.json(
        { error: "Board name is required!" },
        { status: 401 }
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { error: "Not authorized persson!" },
        { status: 401 }
      );
    }

    // Delete the board from the Board collection
    const deleted = await Board.deleteOne({
      _id: boardId, // Match the board by its unique ID
      userId: session?.user?.id, // Ensure the board belongs to the authenticated user
    });

    // Check if the board was deleted
    if (deleted.deletedCount === 0) {
      return NextResponse.json(
        { error: "Board not found or not authorized to delete!" },
        { status: 404 } // Not Found if no board was deleted
      );
    }

    // Update the user's board list by removing the deleted board's ID
    const user = await User.findById(session?.user?.id); // Find the authenticated user's document

    if (user) {
      user.board = user.board.filter((id) => id.toString() !== boardId); // Remove the board ID from the user's board array
      await user.save(); // Save the updated user document to the database
    }

    // Return a success response
    return NextResponse.json(
      { message: "Board successfully deleted!" },
      { status: 200 } // OK
    );
  } catch (e) {
    return NextResponse.json({ error: e.error }, { status: 500 });
  }
}
