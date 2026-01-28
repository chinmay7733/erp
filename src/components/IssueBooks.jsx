import { useState } from "react";
import { MdOutlineSchool } from "react-icons/md";
import {
  FiSearch,
  FiGlobe,
  FiMail,
  FiBell,
  FiX,
  FiRefreshCw,
} from "react-icons/fi";

const IssueBooks = () => {
  return (
   <div className="w-full   bg-white rounded-md shadow  p-4 px-1 sm:p-6">
      <h2 className="font-semibold text-gray-700 border-b py-8  pb-3 mb-6">
      Issue Books
      </h2>   <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div className="mt-0">
        <h3 className="text-2xl font-semibold text-gray-700">Book Information</h3>
      </div>


        <div className="flex items-center gap-3 text-gray-500">
          <FiRefreshCw className="cursor-pointer text-green-600 hover:text-green-600" />
          <FiX className="cursor-pointer text-red-600 hover:text-red-600" />
        </div>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="text-sm text-gray-600">Book Name</label>
          <input
            type="text"
            className="w-full mt-1 bg-gray-100 rounded-2xl px-3 py-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Subject</label>
          <input
            type="text"
            className="w-full mt-1 bg-gray-100 rounded-2xl px-3 py-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Writer Name</label>
          <input
            type="text"
            className="w-full mt-1 bg-gray-100 rounded-2xl px-3 py-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Class</label>
          <input
            type="text"
            className="w-full mt-1 bg-gray-100 rounded-2xl px-3 py-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Publishing Year</label>
          <input
            type="text"
            className="w-full mt-1 bg-gray-100 rounded-2xl px-3 py-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Upload Date</label>
          <input
            type="date"
            className="w-full mt-1 bg-gray-100 rounded-2xl   px-3 py-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">ID No</label>
          <input
            type="text"
            className="w-full mt-1 bg-gray-100 rounded-2xl px-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-6">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded text-sm">
          Save
        </button>
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded text-sm">
          Reset
        </button>
      </div>
    </div>
  );
};
export default IssueBooks;
