import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BlogPosts } from "@/Data";

const Blog = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <h3 className="text-3xl md:text-4xl lg:w-[40%] leading-tight text-baseColor">
              Insights From Our Team
            </h3>
            <Link href="#">
              <div className="inline-flex items-center justify-center gap-2 text-white bg-scolor px-6 py-3 transition duration-500 ease-in-out hover:bg-white hover:text-scolor">
                <span className="font-medium uppercase text-sm md:text-base">
                  View all
                </span>
                <ArrowRight className="size-4" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BlogPosts.map((item) => {
              return (
                <div key={item.id}>
                  <Link href="#">
                    <div className="hidden lg:block relative shadow-sm">
                      <div className="relative max-w-96 aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt="blog"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 px-4 py-5 bg-baseColor/50 backdrop-blur-xl">
                          <h3 className="text-white text-xl font-bold shadow-sm">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div className="px-4 py-5 flex flex-col gap-5">
                        <span className="text-sm font-medium text-gray-500">
                          {item.date}
                        </span>
                        <p className="font-semibold text-baseColor font-mono line-clamp-2">
                          {item.subTitle}
                        </p>
                        <div className="flex gap-1 items-center text-scolor hover:underline">
                          <span className="uppercase font-bold text-sm">
                            READ POST
                          </span>
                          <ArrowUpRight className="size-5" />
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Mobile blogs  */}
                  <div className="lg:hidden">
                    <Link href="#">
                      <div className="flex gap-4 items-center">
                        <div className="max-w-26 lg:max-w-60 aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt="Blog image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <span className="font-medium text-gray-500">
                              {item.date}
                            </span>
                            <h3 className="line-clamp-2 font-semibold">
                              {item.title}
                            </h3>
                          </div>
                          <div className="flex gap-1 mt-4 items-center text-scolor hover:underline">
                            <span className="uppercase font-bold text-sm">
                              READ POST
                            </span>
                            <ArrowUpRight className="size-5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
