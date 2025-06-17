import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Recognition = () => {
  return (
    <div className="bg-scolor">
      <Container>
        <div className="flex flex-col gap-20 py-20 text-white">
          <div className="flex flex-col lg:flex-row gap-10">
            <h3 className="text-2xl md:text-3xl font-medium leading-tight">
              We're a Leading Software Development Company with Proven
              Excellence
            </h3>
            <div className="space-y-5">
              <p className="text-base md:text-lg">
                We provide top-tier software engineers, data scientists, and
                cloud specialists who excel at problem-solving, executing tasks,
                and driving your projects to success.
              </p>
              <Link href="#">
                <div className="inline-flex items-center justify-center gap-2 text-scolor bg-white px-6 py-3 transition duration-500 ease-in-out hover:bg-baseColor hover:text-white">
                  <span className="font-medium uppercase text-sm md:text-base">
                    How we do it
                  </span>
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1 space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-3 md:gap-10 px-10 py-5 bg-white text-scolor shadow-md md:h-32 ">
                <span className="text-3xl md:text-5xl font-bold">4.2</span>
                <div className="flex flex-col gap-2">
                  <img src="/img6.png" alt="Trustpilot" className="w-36" />
                  <span className="font-medium">Verified Client Rating</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-3 md:gap-10 px-10 py-5 bg-white text-scolor shadow-md md:h-32 ">
                <span className="text-3xl md:text-5xl font-bold">80%</span>
                <div className="flex flex-col gap-2">
                  <span className="text-xl md:text-2xl font-semibold">
                    Net Promoter Score
                  </span>
                  <span className="font-medium">
                    Client's willing to refer us
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-3 md:gap-10 px-10 py-5 bg-white text-scolor shadow-md md:h-32 ">
                <span className="text-3xl md:text-5xl font-bold">150%</span>
                <div className="flex flex-col gap-2">
                  <span className="text-xl md:text-2xl font-semibold">
                    Net Retention Rate
                  </span>
                  <span className="font-medium">Annual growth in renewals</span>
                </div>
              </div>
            </div>

            <div className="flex-[1.5] space-y-5">
              <h2 className="text-2xl font-medium">Why choose us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex flex-col items-center text-center gap-2 bg-gray-100 text-baseColor p-4">
                  <img
                    src="/img7.png"
                    alt="Vetted Developer"
                    className="size-20"
                  />
                  <span className="text-lg font-medium text-baseColor">
                    Skilled & Vetted Developers
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 bg-gray-100 text-baseColor p-4">
                  <img
                    src="/img8.png"
                    alt="Vetted Developer"
                    className="size-20"
                  />
                  <span className="text-lg font-medium text-baseColor">
                    Cutting-Edge Technology Stack
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 bg-gray-100 text-baseColor p-4">
                  <img
                    src="/img9.png"
                    alt="Vetted Developer"
                    className="size-20"
                  />
                  <span className="text-lg font-medium text-baseColor">
                    Agile & Scalable Development
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 bg-gray-100 text-baseColor p-4">
                  <img
                    src="/img10.png"
                    alt="Vetted Developer"
                    className="size-20"
                  />
                  <span className="text-lg font-medium text-baseColor">
                    Robust Security & Compliance
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 bg-gray-100 text-baseColor p-4">
                  <img
                    src="/img11.webp"
                    alt="Vetted Developer"
                    className="size-20"
                  />
                  <span className="text-lg font-medium text-baseColor">
                    Tailored Solutions & Transparency
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 bg-gray-100 text-baseColor p-4">
                  <img
                    src="/img12.png"
                    alt="Vetted Developer"
                    className="size-20"
                  />
                  <span className="text-lg font-medium text-baseColor">
                    Cost-Effective Nearshore Development{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Recognition;
