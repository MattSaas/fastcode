import Link from "next/link";

const LoginButton = ({ isLoggedin, Username }) => {
  if (isLoggedin) {
    return (
      <Link className="btn btn-sm btn-accent text-white" href="/dashboard">
        Welcome Back {Username}
      </Link>
    );
  }

  return <div className="btn btn-outline btn-warning">Login</div>;
};

export default LoginButton;
