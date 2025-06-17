"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonials } from "@/Data";
import { Star, UsersRound } from "lucide-react";

export function CarouselCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Testimonials.map((item) => (
          <CarouselItem key={item.id}>
            <div className="flex flex-col gap-3 justify-center p-4  md:py-6 md:px-8 bg-white h-full border-2 border-gray-100 rounded-3xl">
              <div className="flex gap-1">
                <Star fill="#FFA500" stroke="none" size={20} />
                <Star fill="#FFA500" stroke="none" size={20} />
                <Star fill="#FFA500" stroke="none" size={20} />
                <Star fill="#FFA500" stroke="none" size={20} />
                <Star fill="#FFA500" stroke="none" size={20} />
              </div>
              <p className="text-lg text-gray-700 line-clamp-4 md:line-clamp-3">"{item.text}"</p>
              <div className="flex items-center gap-2">
                <div className="bg-scolor/10 p-4 rounded-full">
                  <UsersRound className="text-scolor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg text-gray-700">{item.name}</span>
                  <span className="text-sm text-gray-600">{item.role}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
