import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  AIMLTechStack,
  DesktopTechStack,
  MobileTechStack,
  WebTechStack,
} from "@/Data";

const TechStack = () => {
  return (
    <div className="bg-scolor py-20">
      <Container>
        <div className="bg-white p-5 md:p-14">
          <div className="space-y-10">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl leading-tight text-gray-800">
                  We are a Comprehensive Full-Stack Software Development Partner
                </h3>
              </div>
              <div className="flex-1">
                <div className="space-y-5">
                  <p className="text-md md:text-base text-neutral-500 leading-relaxed">
                    We've built our company around bringing together exceptional
                    developers skilled in the frameworks and technologies that
                    drive modern digital solutions.
                  </p>
                  <Link
                    href="/get-in-touch"
                    className="flex gap-1 items-center text-scolor hover:underline"
                  >
                    <span className="uppercase font-semibold text-base">
                      start now
                    </span>
                    <ArrowUpRight className="size-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-baseColor space-y-10">
              <div className="space-y-5">
                <h4 className="text-lg md:text-xl font-medium">Web</h4>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-2">
                  {WebTechStack.map(({ title, img }, index) => (
                    <div key={index}>
                      <div className="flex flex-col gap-1 items-center bg-white py-2 px-6  rounded-lg border-2 border-gray-100 cursor-pointer transition-all duration-500 hover:scale-105 hover:border hover:border-scolor">
                        <img
                          src={img}
                          alt="Tech Stack"
                          className="w-8 h-8 object-contain"
                        />
                        <span className="font-light text-sm">{title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="text-lg md:text-xl font-medium">Mobile</h4>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-2">
                  {MobileTechStack.map(({ title, img }, index) => (
                    <div key={index}>
                      <div className="flex flex-col gap-1 items-center bg-white py-2 px-6  rounded-lg border-2 border-gray-100 cursor-pointer transition-all duration-500 hover:scale-105 hover:border hover:border-scolor">
                        <img
                          src={img}
                          alt="Tech Stack"
                          className="w-8 h-8 object-contain"
                        />
                        <span className="font-light text-sm">{title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="text-lg md:text-xl font-medium">
                  AI/ML & Cloud
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-2">
                  {AIMLTechStack.map(({ title, img }, index) => (
                    <div key={index}>
                      <div className="flex flex-col gap-1 items-center bg-white py-2 px-6  rounded-lg border-2 border-gray-100 cursor-pointer transition-all duration-500 hover:scale-105 hover:border hover:border-scolor">
                        <img
                          src={img}
                          alt="Tech Stack"
                          className="w-8 h-8 object-contain"
                        />
                        <span className="font-light text-sm">{title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="text-lg md:text-xl font-medium">Desktop</h4>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-2">
                  {DesktopTechStack.map(({ title, img }, index) => (
                    <div key={index}>
                      <div className="flex flex-col gap-1 items-center bg-white py-2 px-6  rounded-lg border-2 border-gray-100 cursor-pointer transition-all duration-500 hover:scale-105 hover:border hover:border-scolor">
                        <img
                          src={img}
                          alt="Tech Stack"
                          className="w-8 h-8 object-contain"
                        />
                        <span className="font-light text-sm">{title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechStack;
