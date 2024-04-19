import React from "react";
import Nav from "./Nav";
import "./profile.css";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <>
      <Nav />
      <nav id="Profile">
        <label className="choose">Who are you?</label>
        <Link to="/Customer">
          <button className="Customer">Customer</button>
        </Link>
        <Link to="/Owner">
          <button className="Owner">Owner</button>
        </Link>
      </nav>
    </>
  );
}

export default Profile;
