import React from "react";
import Container from "./Container";
import ScheduleToggle from "./ScheduleToggle";
import { Clock2, ShieldCheck, Sparkles } from "lucide-react";
import { CarouselCard } from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-scolor/10 to-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <ScheduleToggle />
          </div>

          <div className="flex-1 flex flex-col gap-10">
            {/* Support Items  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-2 items-center text-center bg-white shadow-md h-full rounded-xl py-4">
                <div className="bg-scolor/10 p-3 rounded-full">
                  <Sparkles strokeWidth={2} className="size-7 text-scolor" />
                </div>
                <div className="text-baseColor">
                  <h3 className="text-2xl font-extrabold">100+</h3>
                  <span className="text-gray-600">User satisfaction</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center text-center bg-white shadow-md h-full rounded-xl py-4">
                <div className="bg-scolor/10 p-3 rounded-full">
                  <Clock2 strokeWidth={2} className="size-7 text-scolor" />
                </div>
                <div className="text-baseColor">
                  <h3 className="text-2xl font-extrabold">24/7</h3>
                  <span className="text-gray-600">Customer support</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center text-center bg-white shadow-md h-full rounded-xl py-4">
                <div className="bg-scolor/10 p-3 rounded-full">
                  <ShieldCheck strokeWidth={2} className="size-7 text-scolor" />
                </div>
                <div className="text-baseColor">
                  <h3 className="text-2xl font-extrabold">100%</h3>
                  <span className="text-gray-600">Project completion</span>
                </div>
              </div>
            </div>

            {/* Testimonial card  */}
            <div>
              <CarouselCard />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
