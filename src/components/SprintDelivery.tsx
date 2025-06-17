import React from "react";
import Container from "./Container";
import {
  AudioLines,
  Blocks,
  Boxes,
  Clock1,
  CodeXml,
  Users,
} from "lucide-react";

const SprintDelivery = () => {
  return (
    <div className="bg-scolor py-20">
      <Container>
        <div className="space-y-16">
          <h3 className="text-3xl md:text-4xl lg:w-[40%] leading-tight text-white">
            Innovation in Every Iteration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="border border-white p-5 text-white space-y-5 h-full">
              <div className="bg-white size-14 flex items-center justify-center rounded-full">
                <Clock1 strokeWidth={1.5} className="size-8 text-scolor" />
              </div>
              <h3 className="text-xl font-medium">
                Devs Aligned to Your Time Zone
              </h3>
              <span className="text-sm">
                Our nearshore developers work in sync with your business hours
                for seamless collaboration.
              </span>
            </div>
            <div className="border border-white p-5 text-white space-y-5 h-full">
              <div className="bg-white size-14 flex items-center justify-center rounded-full">
                <Users strokeWidth={1.5} className="size-8 text-scolor" />
              </div>
              <h3 className="text-xl font-medium">
                Seasoned Software Engineers
              </h3>
              <span className="text-sm">
                We recruit mid-level software professionals and empower their
                growth through continuous investment.
              </span>
            </div>
            <div className="border border-white p-5 text-white space-y-5 h-full">
              <div className="bg-white size-14 flex items-center justify-center rounded-full">
                <AudioLines strokeWidth={1.5} className="size-8 text-scolor" />
              </div>
              <h3 className="text-xl font-medium">Transparent Communication</h3>
              <span className="text-sm">
                Great software is built on a foundation of transparent, clear,
                and always honest communication.
              </span>
            </div>
            <div className="border border-white p-5 text-white space-y-5 h-full">
              <div className="bg-white size-14 flex items-center justify-center rounded-full">
                <Boxes strokeWidth={1.5} className="size-8 text-scolor" />
              </div>
              <h3 className="text-xl font-medium">
                Owner's Mindset Developments
              </h3>
              <span className="text-sm">
                We accelerate progress by adopting a problem-solving mindset in
                software development.
              </span>
            </div>
            <div className="border border-white p-5 text-white space-y-5 h-full">
              <div className="bg-white size-14 flex items-center justify-center rounded-full">
                <CodeXml strokeWidth={1.5} className="size-8 text-scolor" />
              </div>
              <h3 className="text-xl font-medium">
                Reliable, Consistent Results
              </h3>
              <span className="text-sm">
                Our robust internal quality assurance process guarantees the
                deployment of reliable, well-functioning code.
              </span>
            </div>
            <div className="border border-white p-5 text-white space-y-5 h-full">
              <div className="bg-white size-14 flex items-center justify-center rounded-full">
                <Blocks strokeWidth={1.5} className="size-8 text-scolor" />
              </div>
              <h3 className="text-xl font-medium">Agile Project Management</h3>
              <span className="text-sm">
                We adhere to strict project management principles to ensure we
                stay aligned with your goals.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SprintDelivery;
