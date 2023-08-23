import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="md:h-20 h-14 flex items-center justify-between sticky top-0 bg-transparent backdrop-blur-2xl z-20">
      <button className="md:hidden flex pl-7" onClick={toggleDrawer}>
        <img
          width="37"
          height="37"
          src="https://img.icons8.com/sf-regular/48/menu.png"
          alt="menu"
        />
      </button>
      <ul className="hidden md:flex pl-24 items-center justify-start gap-14 sm:text-xl tracking-widest text-[#100f0f] font-semibold">
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
      <div className="md:hidden flex">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          style={{ width: "80%" }}
        >
          <div className="flex justify-between items-center px-5 my-4">
            <span className="text-2xl font-bold">Baby shower</span>
            <span onClick={() => setIsOpen(!isOpen)}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/pulsar-line/48/cancel.png"
                alt="cancel"
                className=" hover:rotate-180 duration-150 cursor-pointer"
              />
            </span>
          </div>
          <ul className="flex items-start justify-start flex-col gap-14 text-xl font-semibold text-[#0f1726] mt-24 ml-14">
            <li onClick={() => setIsOpen(!isOpen)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setIsOpen(!isOpen)}>
              <a href="#join">Join us</a>
            </li>
            <li onClick={() => setIsOpen(!isOpen)}>
              <a href="#questions">Questions</a>
            </li>
          </ul>
        </Drawer>
      </div>
      <span className="tracking-[8px] sm:text-[1rem] text-[13px] standard-btn mt-1 font-semibold md:mr-24 mr-7 py-[6px] pl-3 sm:py-[0.6rem] sm:px-[1rem] sm:pl-[30px]">
        RSVP
      </span>
    </nav>
  );
};

export default Header;
