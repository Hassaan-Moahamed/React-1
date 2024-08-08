import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-green-750 h-lvh flex flex-col justify-center items-center text-white sm:max-lg:text-center">
        <div className="logo1">
          <h1 className= "mb-5  text-center text-white text-5xl font-extrabold" to="">
            ABOUT COMPONENT
          </h1>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center">
            <div className="line mx-3"></div>
            <p >
              <i class="fa-solid fa-star"></i>
            </p>
            <div className="line  mx-3"></div>
          </div>
         
        </div>
        <div className=" container  mx-auto flex lg:flex-row flex-col justify-center items-center px-40">
          <div className=""> 
            <p >
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="sm:max-lg: py-5 ">
            <p className=" ">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
