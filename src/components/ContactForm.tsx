"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm("service_h0ye1lo", "template_2et48nq", formRef.current, {
          publicKey: "l27XpFYSaiCdY9qZj",
        })
        .then((result) => {
          console.log(result.text);
          setDone(true);
          formRef.current?.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };
  return (
    <div className="w-full md:w-[90%] lg:w-[60%]">
      <form
        ref={formRef}
        autoComplete="off"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="form-control">
          <input
            type="text"
            className="input input-bordered w-full pl-5 size-12 bg-white font-medium text-base focus:text-base text-basecolor border border-baseColor placeholder-scolor focus:text-scolor focus:border-scolor focus:outline-none text-scolor"
            placeholder="First Name*"
            required
            name="user_firstName"
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            className="input input-bordered w-full pl-5 size-12 bg-white font-medium text-base focus:text-base text-basecolor border border-baseColor placeholder-scolor focus:text-scolor focus:border-scolor focus:outline-none text-scolor"
            placeholder="Last Name*"
            required
            name="user_lastName"
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            className="input input-bordered w-full pl-5 size-12 bg-white font-medium text-base focus:text-base text-basecolor border border-baseColor placeholder-scolor focus:text-scolor focus:border-scolor focus:outline-none text-scolor"
            placeholder="Work or Business Email*"
            required
            name="user_email"
          />
        </div>
        {/* <div className="form-control">
          <input
            type="tel"
            className="input input-bordered w-full pl-5 size-12 bg-white font-medium text-base focus:text-base text-basecolor border border-baseColor placeholder-scolor focus:text-scolor focus:border-scolor focus:outline-none"
            placeholder="Contact Phone Number*"
            required
            name="user_number"
          />
        </div> */}
        <div className="form-control">
          <input
            type="text"
            required
            className="input input-bordered w-full pl-5 size-12 bg-white font-medium text-base focus:text-base text-basecolor border border-baseColor placeholder-scolor focus:text-scolor focus:border-scolor focus:outline-none text-scolor" 
            placeholder="Brand Name*"
            name="brand_name"
          />
        </div>
        <div className="form-control">
          <select
            name="company_size"
            defaultValue=""
            className="input input-bordered w-full pl-5 size-12 bg-white font-medium text-base text-basecolor border border-baseColor placeholder-scolor focus:text-scolor focus:border-scolor focus:outline-none text-scolor"
          >
            <option value="" disabled>
              Company Size*
            </option>
            <option value="1-10">1–10 Employees</option>
            <option value="11-50">11–50 Employees</option>
            <option value="51-200">51–200 Employees</option>
            <option value="201-500">201–500 Employees</option>
            <option value="501-1000">501–1,000 Employees</option>
            <option value="1000+">1,000+ Employees</option>
          </select>
        </div>
        <div className="form-control">
          <select
            name="service"
            required
            defaultValue=""
            className="input input-bordered w-full pl-5 size-12 bg-white font-medium text-base text-basecolor border border-baseColor focus:text-scolor focus:border-scolor focus:outline-none text-scolor"
          >
            <option value="" disabled>
              How can we help...*
            </option>
            <option value="Chatbot">Chatbot</option>
            <option value="Ai_Development">AI Development</option>
            <option value="Data_Engineer">Data Engineer</option>
            <option value="Mobile_Development">Mobile Development</option>
            <option value="Software_Development">Software Development</option>
            <option value="Something_Else">Something else</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 text-white bg-scolor px-14 py-3 transition duration-500 ease-in-out hover:bg-white hover:border hover:border-scolor hover:text-scolor cursor-pointer"
        >
          <span className="font-medium uppercase text-sm md:text-base">
            BOOK NOW
          </span>
        </button>
        {done && (
          <div className="bg-scolor p-5 text-white mt-5 flex flex-col gap-2">
            <span className="font-semibold">Thanks for reaching out!</span>
            <span>
              We’ve received your message and a member of our team will get back
              to you shortly. Expect a response within 24 hours.
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
