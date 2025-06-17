import React from "react";
import Container from "./Container";
import Link from "next/link";
import {
  Facebook,
  FacebookIcon,
  Github,
  Instagram,
  Linkedin,
  LucideInstagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <div className="flex-1 space-y-5">
            <Link href="/" className="flex gap-2 items-center">
              <img src="/icon2.svg" alt="Logo" className="size-12" />
              <div className="flex flex-col">
                <span className=" text-4xl text-scolor font-semibold">
                  Indisis
                </span>
                <span className="text-[8px] font-medium text-baseColor">
                  Intelligence Beyond Systems
                </span>
              </div>
            </Link>
            <p className="text-sm font-medium text-gray-500 md:w-[60%] lg:w-full leading-relaxed">
              Indisis blends strategic consulting, deep industry insight, and
              cutting-edge AI expertise to deliver impactful digital experiences
              and drive accelerated growth for businesses across the globe.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://x.com/indisis"
                target="_blank"
                className="size-10 flex items-center justify-center rounded-full shadow-sm border hover:border-scolor transition duration-500"
              >
                <Twitter fill="#6E1478" stroke="#FFFF" className="size-7" />
              </Link>
              <Link
                href="https://linkedin.com/in/indisis"
                target="_blank"
                className="size-10 flex items-center justify-center rounded-full shadow-sm border hover:border-scolor transition duration-500"
              >
                <Linkedin fill="#6E1478" stroke="#6E1478" className="size-5" />
              </Link>
              <Link
                href="https://instagram.com/indisishq"
                target="_blank"
                className="size-10 flex items-center justify-center rounded-full shadow-sm border hover:border-scolor transition duration-500"
              >
                <Instagram className="size-5" stroke="#6E1478" />
              </Link>
              <Link
                href="https://facebook.com/indisishq"
                target="_blank"
                className="size-10 flex items-center justify-center rounded-full shadow-sm border hover:border-scolor transition duration-500"
              >
                <Facebook fill="#6E1478" stroke="#6E1478" className="size-5" />
              </Link>
              <Link
                href="https://youtube.com/@indisishq"
                target="_blank"
                className="size-10 flex items-center justify-center rounded-full shadow-sm border hover:border-scolor transition duration-500"
              >
                <Youtube className="size-5" stroke="#6E1478" />
              </Link>
              <Link
                href="https://github.com/indisis"
                target="_blank"
                className="size-10 flex items-center justify-center rounded-full shadow-sm border hover:border-scolor transition duration-500"
              >
                <Github fill="#6E1478" stroke="#6E1478" className="size-5" />
              </Link>
            </div>
          </div>

          <div className="flex-2 flex flex-col lg:flex-row justify-between gap-10">
            <div className="space-y-5 text-baseColor">
              <h3 className="text-xl font-semibold text-scolor">Services</h3>
              <div className="flex flex-col gap-5">
                <Link href="#">Dedicated Team</Link>
                <Link href="#">Software Staffing</Link>
                <Link href="#">Project Management</Link>
                <Link href="#">Virtual CTO</Link>
                <Link href="#">Enterprise</Link>
              </div>
            </div>

            <div className="space-y-5 text-baseColor">
              <h3 className="text-xl font-semibold text-scolor">Expertise</h3>
              <div className="flex flex-col gap-5">
                <Link href="#">Artificial Intelligence</Link>
                <Link href="#">Application Development</Link>
                <Link href="#">Mobile Development</Link>
                <Link href="#">Data Engineering</Link>
                <Link href="#">Cloud Services</Link>
                <Link href="#">Industry Expertise</Link>
                <Link href="#">All Softwares</Link>
                <Link href="#">All Technologies</Link>
              </div>
            </div>

            <div className="space-y-5 text-baseColor">
              <h3 className="text-xl font-semibold text-scolor">About</h3>
              <div className="flex flex-col gap-5">
                <Link href="#">Our Clients</Link>
                <Link href="#">Join us</Link>
                <Link href="#">Our Values</Link>
                <Link href="#">About us</Link>
                <Link href="#">Awards</Link>
                <Link href="#">Referral Program</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-20">
          <p className="mt-2 text-gray-600">
            Copyright &copy; {new Date().getFullYear()} Indisis LLC. All rights
            reserved
            <span className="text-scolor">
              <Link href="#">&nbsp;- Privacy Policy</Link>
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
