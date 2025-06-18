import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CustomSoftwareLink } from "@/Data";

const CustomSoftware = () => {
  return (
    <div>
      <Container>
        <div className="py-20 space-y-5 text-baseColor">
          <h3 className="text-2xl md:text-3xl lg:w-[40%] leading-tight">
            Custom Software Development Solutions Expertise
          </h3>
          <div className="space-y-5">
            <p className="text-sm md:text-base lg:w-[40%] text-neutral-500">
              At Indisis, we specialize in the frameworks and technologies that
              drive today's most advanced solutions. Backed by deep domain
              expertise, we help you modernize, innovate, and maintain your core
              software applications consistently delivering results, no matter
              the complexity of the challenge.
            </p>
            <Link
              href="#"
              className="flex gap-1 items-center text-scolor hover:underline"
            >
              <span className="uppercase font-semibold text-base">
                custom solutions
              </span>
              <ArrowUpRight className="size-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 pt-5">
            {CustomSoftwareLink.map(({ title, link, buttonText }, index) => (
              <Link key={index} href={link}>
                <div
                  className={`h-full flex flex-col justify-between p-6 space-y-10 hover:scale-105 transition-all duration-500 ${
                    index % 4 === 0 || index % 4 === 2
                      ? "bg-scolor/10"
                      : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-lg text-medium font-semibold text-baseColor">
                    {title}
                  </h3>
                  <div className="flex gap-1 items-center text-scolor hover:underline">
                    <span className="uppercase font-semibold text-sm">
                      {buttonText || "explore service"}
                    </span>
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomSoftware;
