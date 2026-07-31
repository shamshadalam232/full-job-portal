import React from 'react'
import image from '../../assets/images.png'

export default function JobCard(data) {

  return (
   <div className="p-3">
  <div className="bg-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-[470px] flex flex-col justify-between p-5">

    <div>

      <img
        src={data.companyLogo}
        alt=""
        className="h-14 w-14 rounded-xl object-cover"
      />

      <h1 className="text-xl font-bold mt-4">
        {data.title}
      </h1>

      <p className="text-gray-600 mb-4">
        {data.companyName}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 text-sm">

        <span className="bg-white px-3 py-1 rounded-full">
          {data.experience} Yr
        </span>

        <span className="bg-white px-3 py-1 rounded-full">
          {data.workMode}
        </span>

        <span className="bg-white px-3 py-1 rounded-full">
          {data.location}
        </span>

      </div>

      <div className="flex flex-wrap gap-2 mb-5">

        {data.skills.map((skill, index) => (

          <span
            key={index}
            className="bg-white border text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>

    <div>

      <p className="text-sm text-gray-600 mb-3">
        Valid Till : {data.validDate}
      </p>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 active:scale-95 transition"
      >
        Apply Now
      </button>

    </div>

  </div>
</div>
  )}