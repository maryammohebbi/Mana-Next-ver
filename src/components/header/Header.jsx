"use client";

import ThemeToggle from "@/ui/ThemeToggle";
import Image from "next/image";
import React, { useState } from "react";
import Menu from "./Menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-20 w-full bg-tertiary mb-16 shadow-lg sticky top-0 left-0 right-0 z-50">
      <div
        className="flex justify-between items-center w-full h-full
                      max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto p-2"
      >
        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-secondary transition-all duration-500"
        >
          {open ? <MdClose /> : <RxHamburgerMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="p-2 h-[90%] bg-primary rounded-xl hidden lg:flex items-center">
          <Menu />
        </div>

        {/* Logo + toggle */}
        <div className="h-[90%] flex items-center justify-center gap-x-5">
          <ThemeToggle />
          <Image
            src="/images/ohm.png"
            width={1000}
            height={1000}
            alt="ohm"
            className="w-11 h-11"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-tertiary shadow-lg p-4 rounded-b-2xl animate-slideDown w-44 ">
          <Menu mobile onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Header;
