import connectMongoos from "@/libs/mongoos";
import Board from "@/models/Board";
import { redirect } from "next/navigation";

const getBoard = async (boardId) => {
  await connectMongoos();

  const board = await Board.findById(boardId);

  if (!board) redirect("/dashboard");
  return board;
};

export default async function FeedbackBoard({ params }) {
  const { boardId } = await params; // No need to await here, params is synchronous
  const board = await getBoard(boardId); // Await the asynchronous getBoard function

  return (
    <div>
      {board ? (
        <div>A Dynamic page for Public Board Name: {board.name}</div>
      ) : (
        <div>Board not found</div>
      )}
    </div>
  );
}
