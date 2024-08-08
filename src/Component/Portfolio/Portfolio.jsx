import React, { useState } from "react";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  let imges = [img1, img2, img3, img1, img2, img3];
  const [isopen, setisOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  function isOpened(image) {
    setisOpen(true);
    setCurrentImage(image)
  }
  function isClosed() {
    setisOpen(false);
  }
  return (
    <>
    <div className="container mx-auto">
    <div className="bg-slate-50  flex flex-col justify-center items-center text-co py-10 ">
       <div className="logo1">
         <h1 className="mb-5  text-5xl font-extrabold text-center" to="">
           PORTFOLIO COMPONENT
         </h1>
       </div>
       <div>
         <div className="flex flex-row  justify-center items-center">
           <div className="line1 mx-3"></div>
           <p>
             <i class="fa-solid fa-star"></i>
           </p>
           <div className="line1  mx-3"></div>
         </div>
       </div>
     </div>
     <div className="container relative pic mx-auto my-2">
         <div className="flex lg:flex-row flex-col  justify-center items-center flex-wrap pb-32  ">
         
           {imges.map((ele, index) => (
             <div className="lg:w-1/4 m-4 relative" onClick={()=>isOpened(ele) }>
                 <div className="layer absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center  rounded-2xl "><i _ngcontent-hlj-c19="" class="text-white fa-solid fa-plus fa-6x"></i></div>
               <img src={ele} alt="" className="w-full" />
             </div>
           ))}
         </div>
       </div>
     {isopen && (
        <div className="fixed bottom-0 top-0 right-0 left-0 flex justify-center items-center pic" onClick={isClosed}>
        <div className="absolute bottom-0 top-0 right-0 left-0 bg-slate-600 opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center text-white text-2xl">
          <img src={currentImage} alt="" className="w-auto max-h-full max-w-full" />
        </div>
      </div>
     )}
    </div>
   </>
  );
}
