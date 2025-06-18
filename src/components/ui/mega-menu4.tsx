"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, MoveRight, Search, X } from "lucide-react";
import Container from "../Container";

const MegaMenu4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-base font-medium text-baseColor hover:text-scolor">
        <span className="uppercase text-sm">Careers</span>
        <ChevronDown className="size-5" />
      </button>

      {/* Mega Menu Dropdown (Full Screen Width) */}
      <div
        className={`fixed top-[100px] left-0 w-full bg-white shadow-xl border-t border-gray-200 transition-all duration-500 ease-in-out origin-top transform
              ${
                isOpen
                  ? "scale-y-100 opacity-100 visible h-[70vh]"
                  : "scale-y-0 opacity-0 invisible h-0"
              }`}
      >
        <div className="py-12">
          {/* Dropdown Trigger  */}
          <Container>
            <div className="flex justify-between mb-6">
              <div className="w-[25%] space-y-10">
                <div className="flex flex-col gap-5">
                  <h3 className="text-2xl font-medium text-gray-700">
                    Careers
                  </h3>
                  <span className="text-gray-700 text-sm">
                    Our expanding team consists of industry experts and thought
                    leaders driven by a deep passion for authentic connections
                    and excellence.
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-lg text-scolor"
                  >
                    <span className="uppercase font-medium text-base">
                      view open positions
                    </span>
                    <MoveRight className="size-5" />
                  </Link>
                </div>

                <div className="h-52 w-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dropdown Image"
                    className="size-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-14">
                <Link
                  href="#"
                  className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                >
                  Overview
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                >
                  Experienced professionals
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                >
                  Students
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                >
                  Life at upbace
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                >
                  Talents
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-red-600"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu4;
