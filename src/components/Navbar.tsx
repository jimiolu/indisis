"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import MegaMenu1 from "./ui/mega-menu1";
import MegaMenu2 from "./ui/mega-menu2";
import MegaMenu3 from "./ui/mega-menu3";
import MegaMenu4 from "./ui/mega-menu4";
import MegaMenu5 from "./ui/mega-menu5";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-24 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <Container>
        <div className="container flex items-center justify-between h-full">
          {/* Logo  */}
          <div>
            <Link href="/" className="flex gap-2 items-center">
              <img src="/icon2.svg" alt="Logo" className="size-10" />
              <div className="flex flex-col">
                <span className=" text-4xl text-scolor font-medium">
                  Indisis
                </span>
                <span className="text-[7px] font-medium text-baseColor">Intelligence Beyond Systems</span>
              </div>
            </Link>
          </div>

          {/* Mega Menu Trigger  */}
          <div className="flex gap-10">
            <MegaMenu1 />
            <MegaMenu2 />
            <MegaMenu3 />
            <MegaMenu4 />
            <MegaMenu5 />
          </div>

          {/* CTA  */}
          <div>
            <Link href="/get-in-touch">
              <div className="flex items-center gap-4 text-white bg-scolor px-6 py-3 transition duration-500 ease-in-out hover:scale-105">
                <span className="font-medium uppercase">Contact us</span>
                <ArrowRight className="size-3" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
