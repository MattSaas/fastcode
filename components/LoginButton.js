import Link from "next/link";

const LoginButton = ({ isLoggedin, Username }) => {
  if (isLoggedin) {
    return (
      <Link className="btn btn-outline btn-accent" href="/dashboard">
        Go Dashboard {Username}
      </Link>
    );
  }

  return <div className="btn btn-outline btn-warning">Login</div>;
};

export default LoginButton;
