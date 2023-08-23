import React, { useState, useEffect } from "react";
import babyShowerImage1 from "../assets/images/Baby-amico.png";
import babyShowerImage2 from "../assets/images/baby shower-bro.png";
import babyShowerImage from "../assets/images/bg-gifts.png";

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
      className="flex justify-center flex-col h-full bg-[#feeaef] md:mt-0 mt-10"
    >
      <article className="flex items-center flex-col">
        <span className="md:text-[8rem] sm:text-[6rem] text-[3rem] font-semibold text-[#FD90B7]">
          Oh Baby!
        </span>
        <span className="md:text-xl text-base text-[#981543] tracking-wider">
          "You're invited to"
        </span>
      </article>
      <div className="flex items-center flex-col justify-center mt-0">
        <img
          className="absolute hidden md:flex"
          src={babyShowerImage}
          width={1000}
          height={400}
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
