import connectMongoos from "@/libs/mongoos";
import Board from "@/models/Board";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import CardBoardLink from "@/components/CardBoardLink";
import ButtonDeleteBoard from "@/components/ButtionDeleteBoard";

const getBoard = async (boardId) => {
  const session = await auth();

  await connectMongoos();

  const board = await Board.findOne({
    _id: boardId,
    userId: session?.user?.id,
  });

  if (!board) redirect("/dashboard");

  // const board = await Board.findById(boardId);
  return board;
};

export default async function FeedbackBoard({ params }) {
  const { boardId } = await params; // No need to await here, params is synchronous
  const board = await getBoard(boardId); // Await the asynchronous getBoard function

  return (
    <div className="bg-base-200 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center py-3 bg-base-100 shadow-xl px-4">
        <div className="font-extrabold text-primary hover:text-secondary link no-underline">
          CodeApp | Board
        </div>
        <div>
          <Link href={"/dashboard"} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Link>
        </div>
      </div>

      {/* Main */}
      <section className="bg-base-200 py-10 px-8 flex flex-col justify-center items-center">
        <div className="w-4/6 mb-10">
          {/* greet text */}
          <h1 className="text-4xl font-extrabold mb-10 text-center">
            {board.name}
          </h1>
          <CardBoardLink boardId={board._id.toString()} />
        </div>
        <ButtonDeleteBoard boardId={board._id.toString()} />
      </section>
    </div>
  );
}
