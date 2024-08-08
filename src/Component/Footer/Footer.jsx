import React from "react";

export default function Footer() {
  return (
    <>
      <nav className=" static  bottom-0 right-0 left-0 bg-slate-750 ">
        <div className="container justify-between mx-auto flex lg:flex-row flex-col  py-6">
          <div className="py-4 text-center r lg:w-1/3">
            <h1 className="text-white pt-4 text-3xl font-semibold">LOCATON</h1>
            <p className="text-white pb-6">2215 John Daniel Drive </p>
            <span className="text-white py-4">Clark, MO 65243</span>
          </div>
          <div className="py-4 text-center r lg:w-1/3 ">
            <h1 className="text-white pt-4 text-3xl font-semibold">
              AROUND THE WEB
            </h1>
            <ul className="container  mx-auto flex flex-row social-links justify-center ">
              <li className="py-3 px-3">
              <i class="fa-brands fa-facebook-f  fa-2x "></i>
              </li>
              <li className="py-3 px-3 ">
              <i class="fa-brands fa-twitter fa-2x"></i>
              </li>
              <li className="py-3 px-3">
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              </li>
              <li className="py-3 px-3">
              <i  class="fa-solid fa-globe mx-1 icon fa-2x "></i>
              </li>
            </ul>
          </div>
          <div className="py-4 text-center  lg:w-1/3">
            <h1 className="text-white  pt-4  pb-4 text-3xl font-semibold">
              ABOUT FREELANCER
            </h1>
            <p className="text-white pb-6">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
