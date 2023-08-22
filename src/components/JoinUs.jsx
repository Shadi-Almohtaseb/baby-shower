import React from "react";

const JoinUs = () => {
  return (
    <div id="join" className="h-[100vh] bg-[#dbe1d1]">
      <article className="flex justify-center flex-col mt-3 pt-16">
        <span className="text-[6rem] text-center z-10 mt-10 tracking-wider text-[#242f25]">
          Join Us
        </span>
        <span className="text-center text-xl text-[#424742]">
          Come celebrate baby Isabella Barkley upcoming arrival{" "}
        </span>
        <span className="text-center text-xl text-[#424742]">
          as we shower Kate, her amazing mom-to-be!
        </span>
      </article>
      <div className="flex items-center justify-center flex-col mx-16 mt-12 shadow-2xl">
        <div className="flex items-center justify-center w-full">
          <article className="flex flex-col items-center justify-center rounded-tl-lg bg-[#ffffff] w-full h-[20rem] opacity-70">
            <img
              width="80"
              height="80"
              src="https://img.icons8.com/cute-clipart/64/clock.png"
              alt="clock"
            />
            <span className="text-[4.5rem] text-center z-10 tracking-wider text-[#242f2d]">
              When?
            </span>
            <span className="text-center text-xl text-[#424742]">
              Friday, June 23, 2035, <br /> at 11 AM
            </span>{" "}
          </article>
          <article className="flex flex-col items-center justify-center rounded-tr-lg bg-[#ffffff8f] w-full h-[20rem]">
            <img
              width="80"
              height="80"
              src="https://img.icons8.com/cotton/64/shipping-location--v1.png"
              alt="shipping-location--v1"
            />
            <span className="text-[4.5rem] text-center z-10 tracking-wider text-[#242f2d]">
              Where?
            </span>
            <span className="text-center text-xl text-[#424742]">
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
