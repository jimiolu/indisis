"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MoveRight, Search, X } from "lucide-react";
import Container from "../Container";
import {
  ConsumerLink,
  EnergyLink,
  FinanceLink,
  HealthcareLink,
  PublicLink,
  TechnologyLink,
} from "@/Data";

const MegaMenu2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-base font-medium text-baseColor hover:text-scolor">
        <span className="uppercase text-sm">Industries</span>
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
                    Industries
                  </h3>
                  <span className="text-gray-700 text-sm">
                    Rooted in industry insights, best practices, and proven
                    experience, our experts deliver lasting value to clients.
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-lg text-scolor"
                  >
                    <span className="uppercase font-medium text-base">
                      Read Overview
                    </span>
                    <MoveRight className="size-5" />
                  </Link>
                </div>

                <div className="h-52 w-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dropdown Image"
                    className="size-full object-cover"
                  />
                </div>
              </div>

              <div className="">
                <div className="space-y-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-lg text-gray-600">Consumer</span>
                    {ConsumerLink.map((item) => {
                      return (
                        <div key={item.id}>
                          <ul className="flex flex-col text-gray-500 text-base list-disc list-inside">
                            <li>
                              <Link href={item.url} className="hover:underline">
                                {item.name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-lg text-gray-600">
                      Financial Services & Insurance
                    </span>
                    {FinanceLink.map((item) => {
                      return (
                        <div key={item.id}>
                          <ul className="flex flex-col text-gray-500 text-base list-disc list-inside">
                            <li>
                              <Link href={item.url} className="hover:underline">
                                {item.name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-lg text-gray-600">
                      Healthcare & life sciences
                    </span>
                    {HealthcareLink.map((item) => {
                      return (
                        <div key={item.id}>
                          <ul className="flex flex-col text-gray-500 text-base list-disc list-inside">
                            <li>
                              <Link href={item.url} className="hover:underline">
                                {item.name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="">
                <div className="space-y-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-lg text-gray-600">
                      Energy & utilities
                    </span>
                    {EnergyLink.map((item) => {
                      return (
                        <div key={item.id}>
                          <ul className="flex flex-col text-gray-500 text-base list-disc list-inside">
                            <li>
                              <Link href={item.url} className="hover:underline">
                                {item.name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-lg text-gray-600">
                      Technology, media, & communications
                    </span>
                    {TechnologyLink.map((item) => {
                      return (
                        <div key={item.id}>
                          <ul className="flex flex-col text-gray-500 text-base list-disc list-inside">
                            <li>
                              <Link href={item.url} className="hover:underline">
                                {item.name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-lg text-gray-600">Public Sector</span>
                    {PublicLink.map((item) => {
                      return (
                        <div key={item.id}>
                          <ul className="flex flex-col text-gray-500 text-base list-disc list-inside">
                            <li>
                              <Link href={item.url} className="hover:underline">
                                {item.name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
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

export default MegaMenu2;
