import React from "react";
import logo from "../../assets/logoq.svg";

export default function Start() {
  return (
    <>
      <div className="bg-green-750 h-screen flex flex-col justify-center items-center text-white">
        <div className="logo1">
          <img src={logo} alt="" />
        </div>
        <div>
          <h1 className="my-5 text-white text-3xl font-extrabold" to="">
            START FRAMEWORK
          </h1>
          <div className="flex flex-row justify-center items-center">
            <div className="line mx-3"></div>
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <div className="line  mx-3"></div>
          </div>
          <p className="mt-5">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
