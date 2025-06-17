"use client";
import { useState, useRef, useEffect } from "react";
import { PhoneCall, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ScheduleToggle() {
  const [activeTab, setActiveTab] = useState<"call" | "schedule">("call");
  const [sliderPos, setSliderPos] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const maxSlide = 220;
  const sliderWidth = 60;

  useEffect(() => {
    setSliderPos(0);
    setIsCompleted(false);
  }, [activeTab]);

  const startDrag = () => setIsSliding(true);
  const stopDrag = () => {
    setIsSliding(false);
    if (sliderPos >= maxSlide - 10) {
      setSliderPos(maxSlide);
      setIsCompleted(true);
      window.location.href = "tel:+2347083432153";
      setTimeout(() => {
        setSliderPos(0);
        setIsCompleted(false);
      }, 3000); // Reset after 3s
    } else {
      setSliderPos(0);
    }
  };

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isSliding || isCompleted) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const container = sliderRef.current?.getBoundingClientRect();
    if (!container) return;

    let newX = clientX - container.left - sliderWidth / 2;
    if (newX < 0) newX = 0;
    if (newX > maxSlide) newX = maxSlide;

    setSliderPos(newX);
  };

  return (
    <div className="flex items-center flex-col space-y-6">
      {/* Tagline */}
      <div className="text-sm font-semibold text-scolor px-3 py-1 border border-scolor rounded-full mx-auto">
        <span>● Premium Solutions</span>
      </div>

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-medium text-gray-800 text-center">
        Transform Your <span className="text-scolor">Digital</span> Experience
      </h3>

      {/* Description */}
      <p className="text-gray-600 max-w-xl text-center">
        Our team of experts delivers tailored IT solutions that drive
        innovation, efficiency, and growth for your enterprise. Experience the
        difference of working with industry leaders.
      </p>

      {/* Toggle Mode */}
      <div className="flex flex-col items-center gap-6 w-full pt-5">
        {/* Toggle Tabs */}
        <div className="flex items-center bg-white rounded-full shadow-md p-1">
          <button
            className={`px-6 py-4 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
              activeTab === "call" ? "bg-scolor text-white" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("call")}
          >
            <PhoneCall className="w-4 h-4" />
            Call Now
          </button>
          <button
            className={`px-6 py-4 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
              activeTab === "schedule"
                ? "bg-scolor text-white"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab("schedule")}
          >
            <Calendar className="w-4 h-4" />
            Schedule Meeting
          </button>
        </div>

        {/* Call Now Slider */}
        {activeTab === "call" && (
          <div
            ref={sliderRef}
            onMouseMove={handleMove}
            onMouseUp={stopDrag}
            onTouchMove={handleMove}
            onTouchEnd={stopDrag}
            className="relative w-[280px] h-[65px] bg-white border-2 border-gray-100 rounded-full overflow-hidden flex items-center px-2 shadow-md cursor-pointer select-none"
          >
            <div
              onMouseDown={startDrag}
              onTouchStart={startDrag}
              style={{ transform: `translateX(${sliderPos}px)` }}
              className={`absolute left-0 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 transition-all duration-200 ease-out ${
                isCompleted ? "translate-x-[220px]" : ""
              }`}
            >
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <span
              className={`w-full text-center font-semibold text-lg text-gray-600 transition-opacity duration-300 ${
                isCompleted ? "opacity-0" : "opacity-100"
              }`}
            >
              Slide to Call
            </span>
          </div>
        )}

        {/* Schedule Meeting Button */}
        {activeTab === "schedule" && (
          <div>
            <Link href="/get-in-touch">
              <button
                onClick={() => alert("Redirecting to meeting scheduler...")}
                className="flex w-full items-center gap-2 justify-center rounded-full py-4 bg-scolor text-white text-sm font-semibold shadow-md cursor-pointer transition"
              >
                <span className="text-base">Schedule a Meeting</span>
                <ChevronRight />
              </button>
            </Link>
            <span className="text-sm text-gray-600 mt-1">
              Free 30-minutes strategy session with our expert.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
