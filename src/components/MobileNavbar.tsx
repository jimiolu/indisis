"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  ArrowLeft,
  Menu,
  MoveRight,
  MoveUpRight,
  ArrowUpRight,
} from "lucide-react"; // Import icons
import {
  AILinks,
  CloudLink,
  ConsumerLink,
  EcommerceLink,
  EnergyLink,
  FinanceLink,
  HealthcareLink,
  InnovationLink,
  ManagementLink,
  MartechLink,
  PublicLink,
  SoftwareLink,
  TechnologyLink,
  UXLink,
} from "@/Data";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState<null | string>(null);

  return (
    <div className="relative">
      {/* Main Mobile Menu Trigger */}
      <div className="flex items-center justify-between p-4 fixed top-0 left-0 z-50 w-full h-20 bg-white/90 backdrop-blur-sm shadow-sm">
        <Link href="/" className="flex gap-2 items-center">
          <img src="/icon2.svg" alt="Logo" className="size-8" />
          <div className="flex flex-col">
            <span className=" text-3xl text-scolor font-semibold">Indisis</span>
            <span className="text-[6px] font-medium text-baseColor">
              Intelligence Beyond Systems
            </span>
          </div>
        </Link>

        <button onClick={() => setOpenMenu("main")}>
          <Menu className="size-8 text-baseColor" />
        </button>
      </div>

      {/* Full-Screen Overlay */}
      {openMenu && (
        <div className="fixed inset-0 bg-white shadow-sm p-6 z-50 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setOpenMenu(null)}
            className="absolute top-4 right-4 text-gray-600"
          >
            <X size={30} />
          </button>

          {/* Back Button */}
          {openMenu !== "main" && (
            <button
              onClick={() => setOpenMenu("main")}
              className="absolute top-4 left-4 text-gray-600"
            >
              <ArrowLeft size={30} />
            </button>
          )}

          {/* Main Menu */}
          {openMenu === "main" && (
            <div className="mt-12">
              <h2 className="text-xl text-gray-600">Menu</h2>
              <ul className="mt-4 space-y-14">
                <li>
                  <button
                    className="flex gap-2 items-center text-gray-800 text-2xl font-medium"
                    onClick={() => setOpenMenu("services")}
                  >
                    <span>Services</span>
                    <MoveRight className="size-4" />
                  </button>
                </li>
                <li>
                  <button
                    className="flex gap-2 items-center text-gray-800 text-2xl font-medium"
                    onClick={() => setOpenMenu("industries")}
                  >
                    <span>Industries</span>
                    <MoveRight className="size-4" />
                  </button>
                </li>
                <li>
                  <button
                    className="flex gap-2 items-center text-gray-800 text-2xl font-medium"
                    onClick={() => setOpenMenu("insights")}
                  >
                    <span>Insights</span>
                    <MoveRight className="size-4" />
                  </button>
                </li>
                <li>
                  <button
                    className="flex gap-2 items-center text-gray-800 text-2xl font-medium"
                    onClick={() => setOpenMenu("career")}
                  >
                    <span>Career</span>
                    <MoveRight className="size-4" />
                  </button>
                </li>
                <li>
                  <button
                    className="flex gap-2 items-center text-gray-800 text-2xl font-medium mt-10"
                    onClick={() => setOpenMenu("about")}
                  >
                    <span>About us</span>
                    <MoveRight className="size-4" />
                  </button>
                </li>
                <li>
                  <Link
                    href="/get-in-touch"
                    className="flex items-center gap-2 text-2xl font-medium text-gray-800"
                  >
                    <span>Contact</span>
                    <ArrowUpRight className="size-6" />
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Services Menu */}
          {openMenu === "services" && (
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-800">Services</h2>
              <p className="mt-2 text-gray-600">
                Our worldwide expertise, combined with strong partnerships,
                drives exceptional outcomes.
              </p>
              <Link
                href="#"
                className="flex items-center gap-1 text-lg text-scolor mt-4"
              >
                <span className="uppercase font-semibold">Read Overview</span>
                <MoveRight />
              </Link>

              <div className="mt-6 space-y-10">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Artificial Intelligence
                  </h3>
                  {AILinks.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Cloud & engineering
                  </h3>
                  {CloudLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Software & development
                  </h3>
                  {SoftwareLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    E-Commerce
                  </h3>
                  {EcommerceLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Innovation
                  </h3>
                  {InnovationLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    MarTech
                  </h3>
                  {MartechLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Management Consulting
                  </h3>
                  {ManagementLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Experience design
                  </h3>
                  {UXLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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
          )}

          {/* Industries  */}
          {openMenu === "industries" && (
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-800">
                Industries
              </h2>
              <p className="mt-2 text-gray-600">
                Rooted in industry insights, best practices, and proven
                experience, our experts deliver lasting value to clients.
              </p>
              <Link
                href="#"
                className="flex items-center gap-1 text-lg text-scolor mt-4"
              >
                <span className="uppercase font-semibold">Read Overview</span>
                <MoveRight />
              </Link>

              <div className="mt-6 space-y-10">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Consumer
                  </h3>
                  {ConsumerLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Financial Services & Insurance
                  </h3>
                  {FinanceLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Healthcare & life sciences
                  </h3>
                  {HealthcareLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Energy & utilities
                  </h3>
                  {EnergyLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Technology, media, & communications
                  </h3>
                  {TechnologyLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-600">
                    Public Sector
                  </h3>
                  {PublicLink.map((item) => {
                    return (
                      <div key={item.id}>
                        <ul className="flex flex-col text-gray-500 text-lg list-disc list-inside">
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
          )}

          {/* Insights  */}
          {openMenu === "insights" && (
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-800">Insights</h2>
              <p className="mt-2 text-gray-600">
                From unique perspectives on cutting-edge technologies and global
                events to an inside look at Upbace culture, our insights deliver
                practical value.
              </p>
              <Link
                href="#"
                className="flex items-center gap-1 text-lg text-scolor mt-4"
              >
                <span className="uppercase font-semibold">Read Overview</span>
                <MoveRight />
              </Link>

              <div className="mt-14 space-y-10">
                <div className="flex flex-col gap-14">
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Case studies
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Blogs
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Podcasts
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    White papers
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Community
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Career  */}
          {openMenu === "career" && (
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-800">Career</h2>
              <p className="mt-2 text-gray-600">
                Our expanding team consists of industry experts and thought
                leaders driven by a deep passion for authentic connections and
                excellence.
              </p>
              <Link
                href="#"
                className="flex items-center gap-1 text-lg text-scolor mt-4"
              >
                <span className="uppercase font-semibold">Read Overview</span>
                <MoveRight />
              </Link>

              <div className="mt-14 space-y-10">
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
              </div>
            </div>
          )}

          {/* About  */}
          {openMenu === "about" && (
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-800">About us</h2>
              <p className="mt-2 text-gray-600">
                Empower businesses with cutting-edge technology, seamless
                digital solutions, and innovative development services to drive
                growth, scalability, and long-term success.
              </p>
              <Link
                href="#"
                className="flex items-center gap-1 text-lg text-scolor mt-4"
              >
                <span className="uppercase font-semibold">Read Overview</span>
                <MoveRight />
              </Link>

              <div className="mt-14 space-y-10">
                <div className="flex flex-col gap-14">
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    About Upbace
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Our mission
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Client reviews
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Leadership
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Where to start
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 items-center text-xl text-gray-600 hover:text-scolor hover:underline"
                  >
                    Referral program
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

// import React from "react";
// import Container from "./Container";
// import Link from "next/link";
// import MobileMenu from "./ui/mobile-menu";

// const MobileNavbar = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-sm h-20 shadow-sm">
//       <Container>
//         <div className="container flex items-center justify-between h-full">
//           {/* Logo  */}
//           <Link href="/" className="flex gap-2 items-center">
//             <img src="/icon.svg" alt="Logo" className="size-10" />
//             <span className="uppercase text-3xl text-baseColor font-semibold">
//               upbace
//             </span>
//           </Link>

//           {/* Mobile Nav  */}
//           <div>
//             <MobileMenu />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default MobileNavbar;
