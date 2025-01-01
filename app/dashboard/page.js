import LogoutButton from "@/components/LogoutButton";
import connectMongoos from "@/libs/mongoos";
import { auth } from "@/auth";
import FormNewBoard from "@/components/FormNewBoard";
import User from "@/models/User";
import Board from "@/models/Board";
import Link from "next/link";

async function getUser() {
  const session = await auth();
  await connectMongoos();
  return await User.findById(session.user.id).populate("board");
}

export default async function Dashboard() {
  const session = await auth();
  const user = await getUser();
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero */}
      <div className="flex justify-between items-center py-3 bg-base-100 shadow-xl px-4">
        <div className="font-extrabold text-primary hover:text-secondary link no-underline">
          CodeApp
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>

      {/* Main */}
      <section className="bg-base-200 py-10 px-8 flex flex-col justify-center items-center">
        <div className="w-4/6 mx-auto">
          {/* greet text */}
          <h1 className="text-4xl font-extrabold mb-10 text-center">
            Hello Mr. {session.user.name}
            <span className="text-base font-thin text-primary block italic">
              {session.user.email}
            </span>
          </h1>

          <FormNewBoard />

          <div className="my-8 max-w-3xl">
            <h1 className="font-extrabold text-2xl my-4">
              {user.board.length} Boards
            </h1>
            <ul className="space-y-4">
              {user.board.map((board) => {
                return (
                  <li key={board._id}>
                    <Link
                      href={`/dashboard/b/${board._id}`}
                      className="bg-base-100 p-4 rounded-xl font-semibold text-1xl block hover:bg-neutral hover:text-neutral-content duration-1000"
                    >
                      {board.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div className="opacity-1 mb-10 font-sans text-base-400 text-lg">
            Collecting customer feedback is essential for creating better
            products and meeting user needs. Start by defining clear objectives,
            such as identifying usability issues, understanding preferences, or
            prioritizing new features. Use multiple channels to gather insights,
            including surveys.
          </div> */}
        </div>
      </section>
    </div>
  );
}
