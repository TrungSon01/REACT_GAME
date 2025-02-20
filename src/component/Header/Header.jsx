import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  let user = useSelector((state) => {
    return state.userSlice;
  });
  return (
    <div>
      <Link to="/" className="btn btn-primary">
        Home{" "}
      </Link>
      <Link to="/login" className="btn btn-primary mx-2">
        Login
      </Link>
      <Link to="/redux" className="btn btn-primary mx-2">
        Learn Redux
      </Link>
      <span className="text-danger ">{user.username}</span>

      <Link to="/ex-shoe" className="btn btn-primary mx-2">
        Ex shoe
      </Link>
    </div>
  );
}
