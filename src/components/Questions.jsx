import React, { useState } from "react";

const Questions = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [phone, setPhone] = useState();
  return (
    <div
      id="questions"
      className="h-full bg-gradient-to-b from-[#fff6ed] to-[#daebe3] pt-10"
    >
      <article className="flex items-center justify-center flex-col">
        <span className="md:text-2xl text-[1.1rem] border-b-[1px] border-[#302e27] md:px-28 px-5 pb-4">
          Can’t wait to see you there!
        </span>
        <span className="md:text-5xl text-[2rem] font-semibold sm:mt-20 mt-14">
          QUESTIONS?
        </span>
        <span className="sm:text-xl text-base mt-5 mx-4">
          Call Mariana at 123-456-7890 or leave us a message
        </span>
      </article>
      <div className="flex flex-col gap-1 bg-[#ffffff94] rounded-lg shadow-2xl lg:mx-[5rem] mx-[10px] lg:px-[3rem] lg:pb-[5rem] pb-[2rem] lg:pt-[1px] mt-16">
        <article className="mt-28">
          <div className="md:flex block md:px-5 ms:px-16 px-4 items-center justify-around lg:gap-[10rem] gap-[3rem]">
            <div className="wave-group w-full ">
              <input
                required=""
                type="text"
                className="input"
                onChange={(e) => setName(e.target.value)}
              />
              <span className="bar"></span>
              <label className="label">
                <span
                  className={`label-char ${name ? "translate-y-[-25px]" : ""}`}
                >
                  Name
                </span>
              </label>
            </div>
            <div className="wave-group w-full md:mt-0 mt-16 ">
              <input
                required=""
                type="text"
                className="input"
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className="bar"></span>
              <label className="label">
                <span
                  className={`label-char ${
                    message ? "translate-y-[-25px]" : ""
                  }`}
                >
                  Message
                </span>
              </label>
            </div>
          </div>
          <div className="md:flex block md:px-5 ms:px-16 px-4 items-center justify-around lg:gap-[10rem] gap-[3rem] md:mt-24 mt-16">
            <div className="wave-group w-full ">
              <input
                required=""
                type="email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="bar"></span>
              <label className="label">
                <span
                  className={`label-char ${email ? "translate-y-[-25px]" : ""}`}
                >
                  Email
                </span>
              </label>
            </div>
            <div className="wave-group w-full md:mt-0 mt-16">
              <input
                required=""
                type="number"
                className="input"
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="bar"></span>
              <label className="label">
                <span
                  className={`label-char ${phone ? "translate-y-[-25px]" : ""}`}
                >
                  Phone
                </span>
              </label>
            </div>
          </div>
        </article>
        <div className="flex items-center justify-start mt-10 ml-4 lg:ml-5 md:mt-16">
          <span className="sm:tracking-[8px] tracking-[7px] sm:text-[1rem] text-[15px] standard-btn-blue flex justify-center font-semibold px-[13px] py-[11px] pl-6 sm:py-[0.7rem] sm:px-[1.6rem] sm:pl-[40px]">
            Send
          </span>
        </div>
      </div>
      <div>
        <span className="flex items-center justify-center py-10 mt-4">
          <p className=" border-t-[1px] border-[#302e27] md:px-[9rem] mx-6 pt-9 mb-10 text-center">
            © 2023 by Kate’s Baby Shower. Powered and secured by Foothill
          </p>
        </span>
      </div>
    </div>
  );
};

export default Questions;
