import React, { useState } from "react";
import brand from "../../assets/images/logo.png";
import Navigation from "./Navigation";
import { IoChevronDown, IoCloseOutline as IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button";
function Navbar() {
  const navigationList: Array<any> = [
    { link: "/home", label: "Home" },
    { link: "/cinemas", label: "Cinemas" },
    { link: "/ticket", label: "Buy Tickets" },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuHandler = () => setIsOpen((prev) => !prev);
  return (
    <nav className="bg-slate-200 w-full flex justify-between px-4 py-4 md:px-16 md:py-8 sticky">
      <div className="flex gap-20 items-center ">
        <img alt="brand" src={brand} className="w-36 h-10 md:aspect-auto" />
        <Navigation items={navigationList} />
      </div>
      <div className="flex md:hidden items-center">
        {isOpen ? (
          <IoClose onClick={menuHandler} className="text-2xl" />
        ) : (
          <GiHamburgerMenu onClick={menuHandler} className="text-2xl" />
        )}
        {isOpen && <Navigation items={navigationList} />}
      </div>
      <div className="hidden md:flex flex-row justify-end items-center gap-8">
        <div className="flex gap-4 items-center">
          <p>Location</p>
          <IoChevronDown />
        </div>
        <CiSearch className="text-2xl" />
        <section className="flex gap-4">
          <Button variant="outline" className="w-24">
            Sign In
          </Button>
          <Button>Sign Up</Button>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
