import React from "react";
import Container from "./Container";

const ServiceModelsTable = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <div>
      <Container>
        <div className="py-20 flex flex-col gap-16">
          <div className="flex flex-col gap-8 items-center text-baseColor text-center">
            <h3 className="text-4xl">{title}</h3>
            <p className="lg:w-[50%] text-base md:text-lg text-gray-600">
              {desc}
            </p>
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="md:hidden mb-2 font-medium">
              Scroll right for more
            </div>
            <div className="overflow-x-auto sm:overflow-visible lg:w-[80%]">
              <table className="w-full border-collapse">
                {/* Table Head */}
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="sticky left-0 bg-scolor px-6 py-4 text-left text-white">
                      Service Models We Offer
                    </th>
                    <th className="px-6 py-4 text-left">
                      Nearshore Software Talent Augmentation
                    </th>
                    <th className="px-6 py-4 text-left">
                      Dedicated Outsourced Development Team
                    </th>
                    <th className="px-6 py-4 text-left">
                      End-to-End Project Management & Delivery
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {[
                    ["Expand your team quickly", "✅", "✅", "✅"],
                    ["Add our developers to your team", "✅", "✅", "—"],
                    ["Get a complete, dedicated team", "—", "✅", "✅"],
                    ["You manage one of our teams", "✅", "✅", "—"],
                    ["We handle everything", "—", "—", "✅"],
                    ["Access to our vCTO Consulting", "✅", "✅", "✅"],
                  ].map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="sticky left-0 bg-white px-6 py-4">
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 text-center">{row[1]}</td>
                      <td className="px-6 py-4 text-center">{row[2]}</td>
                      <td className="px-6 py-4 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceModelsTable;
