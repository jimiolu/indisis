import React from "react";
import Container from "./Container";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-80px)] md:h-[calc(90vh-80px)] lg:h-[calc(100vh-96px)]">
      <Container>
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center  h-full">
            <div className="flex-[1.5] space-y-4">
              <h1 className="hidden md:flex md:w-[90%] text-6xl text-scolor font-medium leading-tight">
                Lead the Future <br />
                of Innovation
              </h1>
              <h1 className="md:hidden text-4xl md:text-6xl text-scolor font-medium leading-tight">
                Lead the Future of Innovation
              </h1>
              <h3 className="md:w-[90%] lg:w-[70%] text-lg font-light leading-relaxed text-baseColor">
                Let's Collaborate to{" "}
                <span className="text-scolor">Create Smart, Scalable</span> Apps
                Together.
              </h3>
              <p className="md:w-[90%] lg:w-[65%] text-sm md:text-base text-justify font-light leading-relaxed text-gray-500">
                Indisis is a premier software development firm specializing in
                <span className="font-semibold">
                  &nbsp;AI, Data, Mobile, and Web
                </span>{" "}
                solutions. Build your dedicated nearshore team and integrate
                expert talent to drive innovation, scalability, and long-term
                growth.
              </p>
              <button className="text-white bg-scolor px-8 py-4 transition duration-500 ease-in-out hover:scale-105 mt-5">
                <Link href="/get-in-touch" className="flex gap-2 items-center">
                  <span className="uppercase font-semibold text-sm md:text-base">
                    Schedule a call
                  </span>
                  <MoveRight className="size-5" />
                </Link>
              </button>
            </div>

            <div className="hidden lg:block flex-1 text-right">
              <Image
                src="/img.webp"
                alt="Antikythera Mechanism"
                width={1000}
                height={1000}
              />
              <div className="flex flex-col text-baseColor">
                <span className="font-mono">2,100 years old</span>
                <span className="font-semibold font-mono">
                  Antikythera Mechanism
                </span>
              </div>
            </div>
          </div>

          <div className="h-36 overflow-hidden p-4">
            <Marquee>
              <div className="flex gap-20 items-center justify-center h-full">
                <img
                  src="/img2.jpeg"
                  alt="Emcare pharmacy"
                  className="w-24 grayscale"
                />
                <img
                  src="/img3.jpeg"
                  alt="Federal College of Education, Abeokuta"
                  className="w-24 grayscale"
                />
                <img
                  src="/img4.jpeg"
                  alt="Drughub"
                  className="w-24 grayscale"
                />
                <img
                  src="/img5.jpg"
                  alt="Vitacent"
                  className="w-24 grayscale"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
