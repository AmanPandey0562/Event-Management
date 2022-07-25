import React from "react";
import logo from "../Components/logo.png";
import {Link} from "react-router-dom";

function Header() {

  return (
    <div className="flex flex-row justify-between h-auto bg-purple-700">
      <div className="flex px-12 my-2 py-2">
      <span><img src={logo} className="h-10 w-24 mb-" /></span>
        {/* <span className="font-bold text-2xl text-blue-700 mr-2">Knowledge</span>
        <span className="text-white text-3xl ">|</span>
        <span className="text-blue-700 ml-1 pb-0.5"> World</span> */}
      </div>
      <div className="pr-8 flex flex-row">
        <ul className="flex py-5 font-bold text-white">
          <li className="px-4 ">
            <Link to="/Home">Home</Link>
          </li>
          <li className="px-4 ">
          <Link to="/About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/AddEvents">UpComing Events</Link>
          </li>
          <li className="px-4">
            <Link to="/AddonEvents">Add Events</Link>
          </li>
        </ul>

        <div>
          <button className="border-blue-600 px-5 py-2 mt-3 bg-yellow-200 text-black font-bold mx-2 rounded-lg"><Link to="/Signup">Sign Up</Link>
          </button>
          <button className="border-blue-600 px-5 py-2 mt-3 bg-yellow-200 text-black font-bold mx-2 rounded-lg"><Link to="/Login">Log In</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;