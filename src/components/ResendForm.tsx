"use client";

import { useState } from "react";

export default function ResendForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        name="firstName"
        placeholder="First Name"
        required
        className="w-full p-2 border"
      />
      <input
        name="lastName"
        placeholder="Last Name"
        required
        className="w-full p-2 border"
      />
      <input
        type="email"
        name="email"
        placeholder="Work Email"
        required
        className="w-full p-2 border"
      />
      <input
        name="brandName"
        placeholder="Brand Name"
        required
        className="w-full p-2 border"
      />

      <select name="companySize" required className="w-full p-2 border">
        <option value="">Company Size</option>
        <option value="1-10">1–10</option>
        <option value="11-50">11–50</option>
        <option value="51-200">51–200</option>
        <option value="200+">200+</option>
      </select>

      <select name="howCanWeHelp" required className="w-full p-2 border">
        <option value="">How can we help?</option>
        <option value="Hire Developers">Hire Developers</option>
        <option value="Project Development">Project Development</option>
        <option value="Consultation">Consultation</option>
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        className="bg-black text-white py-2 px-6 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit"}
      </button>

      {status && <p className="mt-2 text-center text-sm">{status}</p>}
    </form>
  );
}

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useState } from "react";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   brandName: string;
//   companySize: string;
//   helpType: string;
// };

// const ResendForm = () => {
//   const { register, handleSubmit, reset } = useForm<FormData>();
//   const [status, setStatus] = useState("");

//   const onSubmit = async (data: FormData) => {
//     setStatus("Sending...");
//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (res.ok) {
//       setStatus("Message sent! We’ll be in touch soon.");
//       reset();
//     } else {
//       setStatus("Something went wrong. Please try again.");
//     }
//   };
//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-4 max-w-xl mx-auto p-6 bg-white rounded shadow"
//     >
//       <div className="flex space-x-4">
//         <input
//           {...register("firstName", { required: true })}
//           placeholder="First Name"
//           className="w-1/2 p-2 border rounded"
//         />
//         <input
//           {...register("lastName", { required: true })}
//           placeholder="Last Name"
//           className="w-1/2 p-2 border rounded"
//         />
//       </div>

//       <input
//         {...register("email", { required: true })}
//         type="email"
//         placeholder="Work or Business Email"
//         className="w-full p-2 border rounded"
//       />

//       <input
//         {...register("brandName", { required: true })}
//         placeholder="Brand Name"
//         className="w-full p-2 border rounded"
//       />

//       <select
//         {...register("companySize", { required: true })}
//         className="w-full p-2 border rounded"
//       >
//         <option value="">Select Company Size</option>
//         <option value="1–10">1–10</option>
//         <option value="11–50">11–50</option>
//         <option value="51–200">51–200</option>
//         <option value="201–500">201–500</option>
//         <option value="500+">500+</option>
//       </select>

//       <select
//         {...register("helpType", { required: true })}
//         className="w-full p-2 border rounded"
//       >
//         <option value="">How can we help you?</option>
//         <option value="Hire Developers">Hire Developers</option>
//         <option value="Project Collaboration">Project Collaboration</option>
//         <option value="Product Support">Product Support</option>
//         <option value="Other">Other</option>
//       </select>

//       <button type="submit" className="bg-black text-white px-6 py-2 rounded">
//         Submit
//       </button>
//       <p className="text-sm mt-2 text-gray-600">{status}</p>
//     </form>
//   );
// };

// export default ResendForm;
