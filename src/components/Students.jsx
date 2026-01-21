import { useState } from "react";
import {
  FiSearch,
  FiEye,
  FiEdit,
  FiTrash2,
  FiGlobe,
  FiMail,
  FiBell,
  FiCheck,
  FiRefreshCw,
  FiX,

} from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";

const Students = () => {
  const students = [
    {
      roll: 2901,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
      roll: 2902,
      name: "Kazi Fahim",
      gender: "Male",
      parent: "Mike Hussy",
      class: 2,
      section: "B",
      address: "59 Street, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      roll: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    
  ];

  const [search, setSearch] = useState("");

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full p-0 bg-gray-50 min-h-screen">
      {/* 🔹 HEADER BAR — ADD THIS ABOVE TABLE */}
      <div className="bg-white rounded-md shadow-sm p-2 flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 text-gray-700">
          <MdOutlineSchool className="text-xl text-yellow-500" />
          <span className="font-semibold">
            Welcome To Akkhor{" "}
            <span className="text-gray-400 font-normal">
              School Management System
            </span>
          </span>
        </div>

        <div className="relative w-full md:w-90 max-w-md">
          <FiSearch className="absolute right-3 top-3 text-gray-400" />
          <input
            placeholder="Search Here..."
            className="w-full px-4 py-2 bg-gray-100 rounded-2xl focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
            <FiGlobe />
            <select className="bg-transparent outline-none">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="relative bg-gray-100 rounded-full p-2">
            <FiMail />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              5
            </span>
          </div>

          <div className="relative bg-gray-100 rounded-full p-2">
            <FiBell />
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              9
            </span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden sm:block">
              <p className="font-semibold">Kazi Fahim</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-semibold text-gray-700">
           All Students
        </h3>
      </div>
      
      {/* STUDENTS TABLE */}
     {/* STUDENTS TABLE WRAPPER */}
<div className="bg-white rounded border mt-4">

  {/* 🔹 FILTER BAR (NO SCROLL) */}
  <div className="bg-white rounded-md shadow-sm p-3 flex items-center border-b">
    <h2 className="text-lg font-semibold">All Students</h2>

    <div className="ml-auto flex items-center gap-3">
      <input
        placeholder="Roll Type Here..."
        className="bg-gray-100 rounded-full px-4 py-1.5 text-sm w-44"
      />

      <input
        placeholder="Type Section..."
        className="bg-gray-100 rounded-full px-4 py-1.5 text-sm w-44"
      />

      <button className="bg-blue-600 text-white text-sm px-6 py-1.5 rounded-full">
        SEARCH
      </button>

      <div className="flex gap-2 text-sm">
        <FiCheck className="text-green-500 cursor-pointer" />
        <FiRefreshCw className="text-blue-500 cursor-pointer" />
        <FiX className="text-red-500 cursor-pointer" />
      </div>
    </div>
  </div>

  {/* 🔹 TABLE SCROLL AREA */}
  <div className="overflow-x-auto overflow-y-auto h-[420px]">
    <table className="min-w-[1200px] w-full text-sm">
      <thead className="bg-gray-100 sticky top-0 z-10">
        <tr>
          <th className="p-2 text-center w-10">
            <input type="checkbox" />
          </th>
          <th className="p-1 text-left">Roll</th>
          <th className="p-1">Photo</th>
          <th className="p-1 text-left">Name</th>
          <th className="p-1">Gender</th>
          <th className="p-1 text-left">Parent</th>
          <th className="p-1">Class</th>
          <th className="p-1">Section</th>
          <th className="p-1 text-left">Address</th>
          <th className="p-1">DOB</th>
          <th className="p-1">Mobile</th>
          <th className="p-1 text-left">Email</th>
          <th className="p-1 text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {filtered.map((s) => (
          <tr key={s.roll} className="border-t hover:bg-gray-50">
            <td className="p-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="p-1">{s.roll}</td>
            <td className="p-1">
              <img src={s.avatar} className="w-7 h-7 rounded-full mx-auto" />
            </td>
            <td className="p-2">{s.name}</td>
            <td className="p-1 text-center">{s.gender}</td>
            <td className="p-1">{s.parent}</td>
            <td className="p-1 text-center">{s.class}</td>
            <td className="p-1 text-center">{s.section}</td>
            <td className="p-1">{s.address}</td>
            <td className="p-1 text-center">{s.dob}</td>
            <td className="p-1 text-center">{s.mobile}</td>
            <td className="p-1">{s.email}</td>
            <td className="p-1">
              <div className="flex justify-center gap-2">
                <FiEye className="text-gray-500 cursor-pointer" />
                <FiEdit className="text-green-600 cursor-pointer" />
                <FiTrash2 className="text-red-500 cursor-pointer" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    
    </div>
  );
};

export default Students;
