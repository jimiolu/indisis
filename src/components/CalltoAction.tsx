import React from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";

const CalltoAction = () => {
  return (
    <div className="">
      <div className="relative flex w-full bg-scolor dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-scolor [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] "></div>
        <div className="py-20 w-full z-20">
          <Container>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 text-white">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl leading-tight text-white font-medium md:w-[80%]">
                  Innovative Software Partner for Growing Businesses
                </h3>
              </div>
              <div className="flex flex-col gap-5 flex-1">
                <div className="space-y-2">
                  <h4 className="text-lg md:text-2xl font-medium">
                    Ready to Get Started?
                  </h4>
                  <span className="text-base">
                    Achieve reliable outcomes, build smart applications, and
                    collaborate seamlessly in real-time with Indisis.
                  </span>
                </div>
                <button className="text-scolor bg-white px-8 py-3 transition duration-500 ease-in-out hover:scale-105 mr-auto">
                  <Link
                    href="/get-in-touch"
                    className="flex gap-2 items-center"
                  >
                    <span className="uppercase font-medium text-sm md:text-base">
                      Get Started
                    </span>
                    <ArrowRight className="size-5" />
                  </Link>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CalltoAction;
