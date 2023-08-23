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
    <div
      id="home"
      className="flex justify-center flex-col h-full bg-[#daebe3] md:mt-0 mt-10"
    >
      <article className="flex items-center flex-col">
        <span className="md:text-[8rem] sm:text-[6rem] text-[3rem] font-semibold text-[#37bfdb]">
          Oh Baby!
        </span>
        <span className="md:text-xl text-base text-[#175c6a] tracking-wider">
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
        <span className="z-10 mt-10 sm:text-2xl text-xl tracking-widest">
          KATE’S BABY SHOWER
        </span>
        <span className="z-10 sm:mt-0 mt-3">Jun 23, 2035, 11:00 AM</span>
      </div>
      <div className="flex items-center justify-center">
        <span className="tracking-[10px] sm:text-[1rem] text-[14px] standard-btn mb-7 mt-16 flex justify-center font-semibold mx-8 px-[15px] py-[13px] pl-8 sm:py-[0.9rem] sm:px-[2rem] sm:pl-[40px]">
          RSVP NOW
        </span>
      </div>
    </div>
  );
};

export default Home;
