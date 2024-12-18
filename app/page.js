import LoginButton from "@/components/LoginButton";

export default function Home() {
  const UserData = {
    isLoggedin: false,
    UserName: "Marc",
  };
  const { isLoggedin, UserName } = UserData;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-3xl text-yellow-300">
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
  );
}
