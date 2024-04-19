import { IoHome } from "react-icons/io5";
import { FaHotel, FaAddressBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className="list active">
          <a href="#">
            <Link to="/Home" className="Link">
              <button className="icon">
                <IoHome />
              </button>
              <button className="text">HOME</button>
            </Link>
          </a>
        </li>

        <li className="list active">
          <a href="#">
            <Link to="/Restaurants" className="Link">
              <button className="icon">
                <FaHotel />
              </button>
              <button className="text">Restaurants</button>
            </Link>
          </a>
        </li>

        <li className="list active">
          <a href="#">
            <Link to="/Profile" className="Link">
              <button className="icon">
                <CgProfile />
              </button>
              <button className="text">Profile</button>
            </Link>
          </a>
        </li>

        <li className="list active">
          <a href="#">
            <Link to="/About" className="Link">
              <button className="icon">
                <FaBookOpen />
              </button>
              <button className="text">About</button>
            </Link>
          </a>
        </li>

        <li className="list active">
          <a href="#">
            <Link to="/Contact">
              <button className="icon">
                <MdContactPhone />
              </button>
              <button className="text">Contact</button>
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
