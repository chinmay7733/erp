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
    <div className="min-h-screen  p-1 md:p-1">
      <div className="bg-white rounded-md shadow-sm  p-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-1 text-gray-700">
          <MdOutlineSchool className="text-xl text-yellow-500" />
          <span className="font-semibold">
            Welcome To Akkhor
            <span className="text-gray-400 font-normal">
              {" "}
              School Management System
            </span>
          </span>
        </div>
        <div className="relative w-full lg:w-50">
          <FiSearch className="absolute right-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full pl-5 pr-3 py-2 bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="flex items-center gap-5 text-sm text-gray-600">
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
            <FiGlobe />
            <select className=" rounded  py-1">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className="relative cursor-pointer bg-gray-100 rounded-full p-2">
            <FiMail className="text-lg" />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              5
            </span>
          </div>
          <div className="relative cursor-pointer  bg-gray-100 rounded-full p-2">
            <FiBell className="text-lg" />
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              9
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
            <div className="leading-tight hidden sm:block">
              <p className="font-semibold text-gray-700">Kazi Fahim</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-2xl font-semibold text-gray-700">Issue Books</div> */}
      {/* HEADER */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div className="mt-5">
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
