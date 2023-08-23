import React from "react";

const JoinUs = () => {
  return (
    <div id="join" className="h-full bg-[#cfd6c4] pb-16">
      <article className="flex justify-center flex-col mt-3 pt-16">
        <span className="md:text-[6rem] sm:text-[4rem] text-[3rem] text-center z-10 md:mt-10 mt-0 tracking-wider text-[#242f25]">
          Join Us
        </span>
        <span className="text-center md:text-xl sm:text-[1rem] mx-2 text-[#424742]">
          Come celebrate baby Isabella Barkley upcoming arrival
          <br />
          as we shower Kate, her amazing mom-to-be!
        </span>
      </article>
      <div className="flex items-center justify-center flex-col md:mx-16 sm:mx-10 mx-2 mt-12 shadow-2xl">
        <div className="lg:flex items-center justify-center w-full h-full">
          <article className="flex flex-col items-center justify-center h-full py-7 rounded-tl-lg lg:rounded-tr-none rounded-tr-lg bg-[#ffffff] w-full opacity-70">
            <img
              width="70"
              height="70"
              src="https://img.icons8.com/cute-clipart/64/clock.png"
              alt="clock"
            />
            <span className="md:text-[4.5rem] sm:text-[4rem] text-[3rem] text-center z-10 tracking-wider text-[#0b0e0d]">
              When?
            </span>
            <span className="text-center md:text-xl text-[1.1rem] text-[#424742]">
              Friday, June 23, 2035, <br /> at 11 AM
            </span>{" "}
          </article>
          <article className="flex flex-col items-center justify-center lg:rounded-tr-lg bg-[#ffffff8f] w-full h-full py-7">
            <img
              width="70"
              height="70"
              src="https://img.icons8.com/cotton/64/shipping-location--v1.png"
              alt="shipping-location--v1"
            />
            <span className="md:text-[4.5rem] sm:text-[4rem] text-[3rem] text-center z-10 tracking-wider text-[#2d3836]">
              Where?
            </span>
            <span className="text-center md:text-xl text-[1.1rem] px-4 text-[#424742]">
              The Barber Home, 500 Terry A Francine Blvd <br /> San Francisco,
              CA 94158
            </span>{" "}
          </article>
        </div>
        <span className="tracking-[12px] w-full h-16 flex items-center justify-center font-semibold self-center bg-[#48414191] text-white">
          <p className="cursor-pointer hover:text-[#ffffffa4]">RSVP NOW</p>
        </span>
      </div>
    </div>
  );
};

export default JoinUs;
