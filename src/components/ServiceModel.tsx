import React from "react";
import Container from "./Container";
import Link from "next/link";
import {
  ArrowUpRight,
  Command,
  FolderGit2,
  LaptopMinimal,
  Network,
} from "lucide-react";

const ServiceModel = () => {
  return (
    <div>
      <Container>
        <div className="pt-20 space-y-10 text-baseColor">
          <h3 className="text-3xl md:text-4xl lg:w-[50%] leading-tight">
            Experience our Nearshore Software Development Solutions
          </h3>
          <div className="space-y-5">
            <p className="text-base md:text-lg lg:w-[40%] text-gray-500">
              We adapt to your needs—whether you require a single expert, a full
              development team, or strategic technical guidance, our flexible
              approach ensures seamless support at every stage.
            </p>
            <Link
              href="#"
              className="flex gap-1 items-center text-scolor hover:underline"
            >
              <span className="uppercase font-bold text-base">
                Nearshore service Models
              </span>
              <ArrowUpRight className="size-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="#"
              className="transition duration-500 ease-in-out hover:scale-105"
            >
              <div className="p-5 bg-scolor/10 space-y-5">
                <Command strokeWidth={1} className="size-14 text-baseColor" />
                <h3 className="text-xl font-medium">
                  Nearshore Software Talent Augmentation
                </h3>
                <p className="text-gray-700 text-sm">
                  We expand your team with the skilled professionals essential
                  for your development success.
                </p>
                <div className="flex gap-1 items-center text-scolor hover:underline">
                  <span className="uppercase font-semibold text-sm">
                    Explore Talent augmentation
                  </span>
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="transition duration-500 ease-in-out hover:scale-105"
            >
              <div className="p-5 bg-scolor/10 space-y-5">
                <Network strokeWidth={1} className="size-14 text-baseColor" />
                <h3 className="text-xl font-medium">
                  Dedicated Outsourced Development Team
                </h3>
                <p className="text-gray-700 text-sm">
                  We assemble dedicated offshore development teams with top and
                  professional expertise.
                </p>
                <div className="flex gap-1 items-center text-scolor hover:underline">
                  <span className="uppercase font-semibold text-sm">
                    Explore Dedicated team
                  </span>
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="transition duration-500 ease-in-out hover:scale-105"
            >
              <div className="p-5 bg-scolor/10 space-y-5">
                <FolderGit2
                  strokeWidth={1}
                  className="size-14 text-baseColor"
                />
                <h3 className="text-xl font-medium">
                  End-to-End Project Delivery & Management
                </h3>
                <p className="text-gray-700 text-sm">
                  We define requirements, oversee tasks, and ensure seamless
                  software delivery with zero exception.
                </p>
                <div className="flex gap-1 items-center text-scolor hover:underline">
                  <span className="uppercase font-semibold text-sm">
                    Explore project delivery
                  </span>
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="transition duration-500 ease-in-out hover:scale-105"
            >
              <div className="p-5 bg-scolor/10 space-y-5">
                <LaptopMinimal
                  strokeWidth={1}
                  className="size-14 text-baseColor"
                />
                <h3 className="text-xl font-medium w-[90%]">
                  Virtual CTO Consulting Services
                </h3>
                <p className="text-gray-700 text-sm">
                  We advise and architect scalable and secure software
                  technology solutions for AI, Data, and Web.
                </p>
                <div className="flex gap-1 items-center text-scolor hover:underline">
                  <span className="uppercase font-semibold text-sm">
                    Explore virtual CTO
                  </span>
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceModel;
