import React from "react";

const Questions = () => {
  return (
    <div id="questions" className="h-[100vh] bg-[#dbe1d1] pt-10">
      <article className="flex items-center justify-center flex-col">
        <span className="text-2xl border-b-[1px] border-[#302e27] px-28 pb-4">
          Can’t wait to see you there!
        </span>
        <span className="text-5xl mt-20">QUESTIONS?</span>
        <span className="text-xl mt-5">
          Call Mariana at 123-456-7890 or leave us a message
        </span>
      </article>
      <div className="flex flex-col gap-1 bg-[#ffffff94] rounded-lg shadow-2xl lg:mx-[10rem] lg:px-[10rem] lg:pb-[5rem] lg:pt-[1px] mt-16">
        <article className="mt-28 ">
          <div className="flex items-center justify-around gap-[10rem]">
            <div className="wave-group w-full">
              <input required="" type="text" className="input" />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char">Name</span>
              </label>
            </div>
            <div className="wave-group w-full">
              <input required="" type="text" className="input" />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char">Message</span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-around gap-[10rem] mt-24">
            <div className="wave-group w-full">
              <input required="" type="email" className="input" />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char">Email</span>
              </label>
            </div>
            <div className="wave-group w-full">
              <input required="" type="number" className="input" />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char">Phone</span>
              </label>
            </div>
          </div>
        </article>
        <div className="mt-16">
          <span className="tracking-[4px] standard-btn mt-14 font-semibold">
            <span className="px-8">Send</span>
          </span>
        </div>
      </div>
      <div>
        <span className="flex items-center justify-center py-10 mt-4">
          <p className=" border-t-[1px] border-[#302e27] px-[9rem] pt-9">
            © 2023 by Kate’s Baby Shower. Powered and secured by Foothill
          </p>
        </span>
      </div>
    </div>
  );
};

export default Questions;
