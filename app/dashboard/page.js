import LogoutButton from "@/components/LogoutButton";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  return (
    <div className="bg-base-200 text-center py-5 pt-10 px-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-3 bg-base-200 shadow-xl mx-4">
        <div className="font-extrabold text-primary hover:text-secondary link no-underline">
          CodeApp
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
      <section className="bg-base-200 text-center py-5 pt-10 px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-3 justify-center items-center">
        <div className="lg:text-center">
          <h1 className="text-3xl font-extrabold mb-10 lg:text-4xl md:text-2xl">
            Hello Mr. {session.user.name}
            <span className="text-sm font-thin text-primary block">
              {session.user.email}
            </span>
          </h1>

          <div className="opacity-1 mb-10 font-sans text-base-400 text-lg">
            Collecting customer feedback is essential for creating better
            products and meeting user needs. Start by defining clear objectives,
            such as identifying usability issues, understanding preferences, or
            prioritizing new features. Use multiple channels to gather insights,
            including surveys.
          </div>
        </div>
      </section>
    </div>
  );
}
