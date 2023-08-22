import React from "react";

const Header = () => {
  return (
    <nav className="h-16 pl-24 pr-24 flex items-center justify-between sticky top-0 bg-transparent backdrop-blur-xl z-20">
      <ul className="flex items-center justify-start gap-14 text-xl text-[#2d4066]">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#join">Join us</a>
        </li>
        <li>
          <a href="#questions">Questions</a>
        </li>
      </ul>
      <span className="tracking-[12px] standard-btn mt-4 font-semibold">
        RSVP
      </span>
    </nav>
  );
};

export default Header;
