import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul className="flex justify-center items-center bg-black text-white gap-5 py-5">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
