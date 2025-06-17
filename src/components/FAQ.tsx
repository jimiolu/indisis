import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./Container";

const FAQ = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="w-full md:w-[80%] lg:w-[60%] mx-auto space-y-16">
          <h3 className="text-3xl md:text-4xl leading-tight text-baseColor text-center">
            Frequently Asked Questions (FAQ)
          </h3>
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full text-baseColor"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  1. What is Indisis?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Indisis is a forward-thinking technology company focused on
                  building next-generation digital infrastructure, platforms,
                  and tools that power innovation, enhance connectivity, and
                  accelerate transformation across industries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  2. What services does Indisis offer?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  We specialize in:
                  <ul className="list-disc list-inside">
                    <li>Digital Identity & Access Systems</li>
                    <li>Cloud-native Application Development</li>
                    <li>Enterprise Software Solutions</li>
                    <li>AI & Data Intelligence</li>
                    <li>Blockchain & Web3 Infrastructure</li>
                    <li>Tech Consulting and Custom Development</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  3. Who can benefit from Indisis solutions?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Our solutions are built for:
                  <ul className="list-disc list-inside">
                    <li>Governments and Public Sector</li>
                    <li>Enterprises & Corporations</li>
                    <li>Startups & Innovators</li>
                    <li>Developers & Technical Teams</li>
                    <li>
                      Global and African markets seeking scalable digital
                      transformation
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  4. Is Indisis focused on Africa or global markets?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  While rooted in Africa’s tech potential, Indisis is a global
                  company with scalable technologies designed to solve problems
                  for a global audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  5. How is Indisis different from other tech companies?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Indisis blends enterprise-grade software engineering with
                  innovative, human-centered design to build reliable,
                  future-ready solutions. Our approach combines:
                  <ul className="list-disc list-inside">
                    <li>Scalability by design</li>
                    <li>Developer-first tools</li>
                    <li>Open standards and interoperability</li>
                    <li>Strong focus on security and trust</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  6. Can I partner or collaborate with Indisis?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Absolutely. We welcome partnerships with startups, developers,
                  governments, and organizations that align with our mission.
                  Reach out via our contact page to start the conversation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  7. Is Indisis hiring?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Yes! We're always looking for talented engineers, designers,
                  researchers, and thinkers to join our mission. Visit our
                  Careers page to see open positions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  8. Where is Indisis headquartered?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Indisis operates remotely with a presence in major innovation
                  hubs across Africa and global markets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl">
                  9. How do I get started with your services?
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                  Simply visit our Contact or Get Started page, and a team
                  member will connect with you to understand your goals and
                  recommend the right solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
