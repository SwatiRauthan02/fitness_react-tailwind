import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Button } from "../ui/button";
import { ModeToggle } from "../Theme/ModeToggle";
import hambar from "../../assets/hambar.svg";

const Navbar = () => {
  return (
    <div className="container flex justify-between py-4">
      <div className="logo w-[60px] h-[60px] flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
      <nav className="links sm:block hidden ">
        <div className="flex gap-[52px] text-[21px] font-medium font-[inter] items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/service"}>Service</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
          <div className="btn flex gap-3.5">
            <Button
              variant={"btn"}
              className="text-[16.13px] font-bold py-[13px] px-4"
            >
              Log in
            </Button>
            <Button
              variant={"orange"}
              className="text-[16.13px] font-bold py-[13px] px-4"
            >
              Sign up
            </Button>
          </div>
        </div>
      </nav>
      <img src={hambar} alt="menuIcon" className="sm:hidden block"/>
    </div>
  );
};

export default Navbar;
