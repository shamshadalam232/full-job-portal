import React from 'react'

export default function JobDescription() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-4">
  <h2 className="text-xl font-semibold mb-6">Job Description</h2>

  {/* Description */}
  <p className="text-gray-600 leading-7 mb-8">
    We are looking for a passionate Node.js Backend Developer to build
    scalable and high-performance server-side applications. You will be
    working with our cross-functional team to design and develop RESTful
    APIs, integrate with databases, and ensure the performance, quality,
    and responsiveness of the applications.
  </p>

  {/* Responsibilities */}
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">Responsibilities</h3>

    <ul className="list-disc pl-6 space-y-3 text-gray-700">
      <li>Design, develop and maintain scalable backend services using Node.js and Express.js</li>
      <li>Build and integrate RESTful APIs</li>
      <li>Work with MongoDB to design and optimize database schemas</li>
      <li>Implement authentication and authorization using JWT</li>
      <li>Write clean, maintainable and efficient code</li>
      <li>Collaborate with frontend developers and other team members</li>
      <li>Test and deploy applications and backend services</li>
    </ul>
  </div>

  {/* Requirements */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Requirements</h3>

    <ul className="list-disc pl-6 space-y-3 text-gray-700">
      <li>0 - 1 years of experience in backend development</li>
      <li>Strong knowledge of Node.js, Express.js and MongoDB</li>
      <li>Understanding of RESTful APIs and HTTP methods</li>
      <li>Basic knowledge of authentication (JWT)</li>
      <li>Good problem-solving skills and attention to detail</li>
      <li>Familiarity with Git and version control</li>
    </ul>
  </div>
</div>
  )
}
