import React from "react";
import image from "../../assets/login image.jpg";

export default function JobDetailCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      {/* Logo + Title */}
      <div className="flex items-center gap-5">

        <div className="bg-gray-100 p-3 rounded-xl shadow-sm">
          <img
            src={image}
            alt=""
            className="h-16 w-16 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Node.js Developer
          </h1>

          <p className="text-gray-500 text-lg mt-1">
            TechNova Solutions
          </p>
        </div>

      </div>

      {/* Job Info */}
      <div className="flex flex-wrap gap-3 mt-8">

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          📍 Pune, Maharashtra
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          💼 On-site
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          👨‍💻 0-1 Year
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          🕒 Full-Time
        </span>

      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 mt-8">

        <span className="border border-blue-300 bg-blue-50 px-4 py-2 rounded-full">
          HTML
        </span>

        <span className="border border-blue-300 bg-blue-50 px-4 py-2 rounded-full">
          CSS
        </span>

        <span className="border border-blue-300 bg-blue-50 px-4 py-2 rounded-full">
          JavaScript
        </span>

        <span className="border border-blue-300 bg-blue-50 px-4 py-2 rounded-full">
          React
        </span>

        <span className="border border-blue-300 bg-blue-50 px-4 py-2 rounded-full">
          Node.js
        </span>

        <span className="border border-blue-300 bg-blue-50 px-4 py-2 rounded-full">
          MongoDB
        </span>

      </div>

    </div>
  );
}