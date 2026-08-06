import React, { useEffect, useState } from "react";
import image from "../../assets/login image.jpg";
import api from "../../api/Axios";


export default function JobDetailCard({ oneJob }) {

  const [applied, setApplied] = useState(false)

  const handleApply = async () => {
    try {
      const res = await api.post(`/users/alljob/${oneJob._id}`)
      console.log(res.data)
      setApplied(true)
    } catch (error) {
      console.log(error.response?.data?.message);
      if (error.response?.data?.message === "You have already applied for this job.") {
        setApplied(true);
      }
    }


  }


  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      {/* Logo + Title */}
      <div className="flex items-center gap-5">

        <div className="bg-gray-100 p-3 rounded-xl shadow-sm">
          <img
            src={oneJob.company?.companyLogo}
            alt=""
            className="h-16 w-16 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            {oneJob.title}
          </h1>

          <p className="text-gray-500 text-lg mt-1">
            {oneJob.company?.companyName}
          </p>
        </div>

      </div>

      {/* Job Info */}
      <div className="flex flex-wrap gap-3 mt-8">

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          📍{oneJob.location}
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          💼 {oneJob.workMode}
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          👨‍💻 {oneJob.experience}
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          🕒 Full-Time
        </span>

      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 mt-8">

        {oneJob.skills?.map((skill, index) => (
          <span className="border border-blue-300 bg-blue-50 px-4 py-2 rounded-full" key={index}>
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5">
        <button onClick={handleApply} disabled={applied} className="bg-blue-600 text-white p-3 text-2xl rounded-2xl active:scale-95 text-center">{applied ? "Applied ✓" : "Apply Job"}</button>
      </div>

    </div>
  );
}