import React, { useEffect, useState } from 'react'
import api from '../../api/Axios'



export default function EditModal({ isOpen, onClose, job, fetchJobs }) {

    const [formData, setFormData] = useState({
        description: "",
        location: "",
        workMode: "",
        category: "",
        validDate: "",
        salary: "",
        experience: "",
        skills: []
    })


    const editApplication = async (id) => {
        const res = await api.patch(`/users/get-job/${id}`, formData)
        await fetchJobs()
        onClose()
    }

    useEffect(() => {
        if (job) {
            setFormData({
                description: job.description || "",
                location: job.location || "",
                workMode: job.workMode || "",
                category: job.category || "",
                validDate: job.validDate
                    ? job.validDate.split("T")[0]
                    : "",
                salary: job.salary || "",
                experience: job.experience || "",
                skills: job.skills || []
            })
        }
    }, [job])

    if (!isOpen) {
        return null
    }

    return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

    <div className="bg-white p-6 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
            <h1 className="text-2xl font-bold">
                Edit Job
            </h1>

            <button
                onClick={onClose}
                className="text-gray-500 hover:text-red-500 text-xl"
            >
                ✕
            </button>
        </div>

        {/* Job Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-5">
            {job?.title}
        </h2>

        <div className="space-y-4">

            {/* Description */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                </label>

                <textarea
                    rows="3"
                    value={formData.description || ""}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            description: e.target.value
                        })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Location + Work Mode */}
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                    </label>

                    <input
                        type="text"
                        value={formData.location || ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                location: e.target.value
                            })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Work Mode
                    </label>

                    <select
                        value={formData.workMode || ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                workMode: e.target.value
                            })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="On-site">On-site</option>
                    </select>
                </div>

            </div>

            {/* Category + Salary */}
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                    </label>

                    <input
                        type="text"
                        value={formData.category || ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                category: e.target.value
                            })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Salary
                    </label>

                    <input
                        type="number"
                        value={formData.salary || ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                salary: e.target.value
                            })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

            </div>

            {/* Valid Date + Experience */}
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Valid Date
                    </label>

                    <input
                        type="date"
                        value={formData.validDate ? job.validDate.split("T")[0] : ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                validDate: e.target.value
                            })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Experience
                    </label>

                    <select
                        value={formData.experience || ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                experience: e.target.value
                            })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Experience</option>
                        <option value="0">0</option>
                        <option value="0-1">0-1</option>
                        <option value="1-2">1-2</option>
                        <option value="2-5">2-5</option>
                        <option value="5+">5+</option>
                    </select>
                </div>

            </div>

            {/* Skills */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills
                </label>

                <input
                    type="text"
                    placeholder="React, Node.js, MongoDB"
                    value={formData.skills?.join(", ") || ""}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            skills: e.target.value
                                .split(",")
                                .map((skill) => skill.trim())
                        })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t">

            <button
                onClick={onClose}
                className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
                Cancel
            </button>

            <button
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => {
                    editApplication(job._id)
                }}
            >
                Update Job
            </button>

        </div>

    </div>

</div>
    )
}
