import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    <nav className=" static top-0 right-0 left-0 bg-slate-750 ">
      <div className="container justify-between mx-auto flex lg:flex-row flex-col  py-6">
        <div className="mx-6">
          <Link className="   text-white text-3xl font-extrabold" to="">
            START FRAMEWORK
          </Link>
        </div>
        <div>
          <ul className="container justify-between mx-auto flex lg:flex-row flex-col ">
            <li className="py-3"><NavLink className="text-white text-lg font-bold mx-5  h-12 w-16 px-7 py-2 rounded-lg " to="about">About</NavLink></li>
            <li className="py-3"><NavLink className="text-white text-lg font-bold mx-5  h-12 w-16 px-7 py-2 rounded-lg" to="portfolio">Portfolio</NavLink></li>
            <li className="py-3"><NavLink className="text-white text-lg font-bold mx-5  h-12 w-16 px-7 py-2 rounded-lg" to="contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
}
