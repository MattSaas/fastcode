import LoginButton from "@/components/LoginButton";

export default function Home() {
  const UserData = {
    isLoggedin: true,
    UserName: "John",
  };
  const { isLoggedin, UserName } = UserData;

  return (
    <main>
      <section className="bg-base-200 ">
        <div className="flex justify-between items-center px-10 py-2 max-w-6xl mx-auto md:flex-shrink-0">
          <div className="font-extrabold text-white hover:text-sky-400 link no-underline">
            CodeApp
          </div>
          <div className="space-x-4 hidden md:block">
            <a className="link link-hover hover:text-sky-400 no-underline">
              Pricing
            </a>
            <a className="link link-hover hover:text-sky-400 no-underline">
              FAQ
            </a>
          </div>
          <div>
            <LoginButton isLoggedin={isLoggedin} Username={UserName} />
          </div>
        </div>
      </section>
      <section className="text-center py-32 px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 lg:text-5xl md:text-3xl">
          Collecting customer feedback to creating products that truly meet
          expectations of your users.
        </h1>

        <div className="opacity-1 mb-10 font-sans text-base-400 text-lg">
          Collecting customer feedback is essential for creating better products
          and meeting user needs. Start by defining clear objectives, such as
          identifying usability issues, understanding preferences, or
          prioritizing new features. Use multiple channels to gather insights,
          including surveys.
        </div>
        <LoginButton isLoggedin={isLoggedin} Username={UserName} />
      </section>

      {/* <section className=" border-e-yellow-300">
        <div className="card card-side bg-base-100 shadow-xl max-w-3xl mx-auto my-5 border border-sky-500">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl text-yellow-300 font-semibold font-mono uppercase">
              New movie is released!
            </h2>
            <p className="text-emerald-500">
              Click the button to watch on Jetflix app.
            </p>
            <div className="card-actions justify-end">
              <LoginButton isLoggedin={isLoggedin} Username={UserName} />
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
