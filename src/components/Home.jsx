import React, { useState, useEffect } from "react";
import babyShowerImage1 from "../assets/images/baby shower-amico (1).png";
import babyShowerImage2 from "../assets/images/baby-shower3.png";
import backgroundImage from "../assets/images/bg.png";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(babyShowerImage1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === babyShowerImage1 ? babyShowerImage2 : babyShowerImage1
      );
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="flex flex-col h-[100vh] bg-[#daebe3]">
      <article className="flex items-center flex-col">
        <span className="text-[8rem] font-semibold text-[#37bfdb]">
          Oh Baby!
        </span>
        <span className=" text-xl text-[#175c6a] tracking-wider">
          "You're invited to"
        </span>
      </article>
      <div className="flex items-center flex-col justify-center mt-10">
        <img
          className="absolute"
          src={backgroundImage}
          width={1100}
          height={500}
          alt="background Image"
        />
        <img
          className="z-10"
          src={currentImage}
          width={500}
          alt="baby shower image"
        />
        <span className="z-10 mt-10 text-2xl tracking-widest">
          KATE’S BABY SHOWER
        </span>
        <span className="z-10">Jun 23, 2035, 11:00 AM</span>
      </div>
      <span className="tracking-[12px] standard-btn mt-12 font-semibold w-fit self-center">
        RSVP NOW
      </span>
    </div>
  );
};

export default Home;
