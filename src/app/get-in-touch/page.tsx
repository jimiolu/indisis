import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import ResendForm from "@/components/ResendForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex-2 h-full flex flex-col gap-10 justify-center text-baseColor">
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <img src="/icon1.png" alt="form icon" className="size-8" />
                <span className="text-lg">Top-Rated Software Company</span>
              </div>
              <div className="lg:w-[60%]">
                <h3 className="text-3xl md:text-5xl leading-tight">
                  Complete below form and schedule a meeting with us
                </h3>
              </div>
            </div>

            {/* FORM  */}
            <div>
              {/* <ContactForm /> */}
              <ContactForm />
            </div>
          </div>

          <div className="flex-1 overflow-hidden hidden lg:flex h-full w-full py-4">
            <Image
              src="https://images.pexels.com/photos/8485724/pexels-photo-8485724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Form Image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
