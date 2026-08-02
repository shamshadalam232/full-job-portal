import React from 'react'

export default function JobOverview({oneJob}) {
  return (
    <> 
    <div className="bg-white rounded-2xl shadow-lg p-6">
    <div>
       <div className="bg-white rounded-lg shadow p-5 w-full max-w-sm">
  <h2 className="text-lg font-semibold mb-4">Job Overview</h2>

  <table className="w-full">
    <tbody>
      <tr className="border-b">
        <td className="py-3 text-gray-500">Experience</td>
        <td className="py-3 text-right font-medium">{oneJob.experience}</td>
      </tr>

      <tr className="border-b">
        <td className="py-3 text-gray-500">Work Mode</td>
        <td className="py-3 text-right font-medium">{oneJob.workMode}</td>
      </tr>

      <tr className="border-b">
        <td className="py-3 text-gray-500">Job Type</td>
        <td className="py-3 text-right font-medium">Full Time</td>
      </tr>

      <tr className="border-b">
        <td className="py-3 text-gray-500">Salary</td>
        <td className="py-3 text-right font-medium">{oneJob.salary}</td>
      </tr>

      <tr className="border-b">
        <td className="py-3 text-gray-500">Location</td>
        <td className="py-3 text-right font-medium">{oneJob.location}</td>
      </tr>

      <tr className="border-b">
        <td className="py-3 text-gray-500">Posted On</td>
        <td className="py-3 text-right font-medium">{new Date(oneJob.createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })}</td>
      </tr>

      <tr>
        <td className="py-3 text-gray-500">Valid Till</td>
        <td className="py-3 text-right font-medium">{new Date(oneJob.validDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })}</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    </div>


    <div className="bg-white rounded-2xl shadow-lg p-6 mt-2">
   <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm">
  <h2 className="text-lg font-semibold mb-5">About Company</h2>

  {/* Logo + Company Name */}
  <div className="flex items-center gap-3 mb-4">
    <div className="w-12 h-12 bg-gray-200 rounded-md">
        <img src={oneJob.company?.companyLogo}/>
    </div>

    <div>
      <h3 className="text-lg font-semibold">{oneJob.company?.companyName}</h3>
    </div>
  </div>

  {/* Description */}
  <p className="text-sm text-gray-600 leading-6 mb-5">
    TechNova Solutions is a fast-growing product-based company building
    innovative solutions for businesses worldwide.
  </p>

  {/* Company Details */}
  <div className="space-y-4">

    <div className="flex items-center gap-3">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
      <span className="text-gray-700 text-sm">
        50-200 Employees
      </span>
    </div>

    <div className="flex items-center gap-3">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
      <span className="text-gray-700 text-sm">
        {oneJob.location}
      </span>
    </div>

    <div className="flex items-center gap-3">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
      <span className="text-blue-600 text-sm">
        https.techNovaSolutions.com
      </span>
    </div>

  </div>
</div>
    </div>
    </>
  )
}
