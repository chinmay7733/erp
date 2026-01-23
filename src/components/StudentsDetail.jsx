import { FiEdit, FiPrinter, FiDownload } from "react-icons/fi";

import React from "react";
import { useLocation, useParams } from "react-router-dom";
const StudentsDetail = () => {
  const { roll } = useParams(); // URL se roll number
  const { state } = useLocation();
     if (!state) {
    return (
      <div className="p-6 text-red-500">
        No student data found for roll {roll}
      </div>
    );
  }   
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow rounded">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b">
          <h2 className="font-semibold text-gray-700">
            Student Details - Roll No: {roll}
          </h2>

          <div className="flex gap-3 text-gray-500">
            <FiEdit className="cursor-pointer hover:text-blue-500" />
            <FiPrinter className="cursor-pointer hover:text-blue-500" />
            <FiDownload className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 p-6">
          
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 bg-cyan-500 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                alt="student"
                className="w-32 h-32"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              About Me
              <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-blue-500"></span>
            </h3>

             <div className="space-y-2 text-sm">
            <Row label="Roll" value={state.roll} />
            <Row label="Name" value={state.name} />
            <Row label="Gender" value={state.gender} />
            <Row label="Parent" value={state.parent} />
            <Row label="Class" value={state.class} />
            <Row label="Section" value={state.section} />
            <Row label="Address" value={state.address} />
            <Row label="DOB" value={state.dob} />
            <Row label="Mobile" value={state.mobile} />
            <Row label="Email" value={state.email} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex">
    <span className="w-32 text-gray-500">{label} :</span>
    <span>{value}</span>
  </div>
);

export default StudentsDetail;
