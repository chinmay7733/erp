import React, { useState } from "react";
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
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  
  const [students, setStudents] = useState([
    {
      ID: 2901,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
      ID: 2902,
      name: "Kazi Fahim",
      gender: "Male",
      Subject: "Physics",
      class: 2,
      section: "B",
      address: "59 Street, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    {
      ID: 2903,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Chemistry",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2904,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Biology",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2905,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2906,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2907,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2908,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2909,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2910,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2911,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2912,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2913,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2914,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2915,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2916,
      name: "Richi Rozario",
      gender: "Female",
      Subject: "Mathematics",
      class: 1,
      section: "A",
      address: "TA-110, North Sydney",
      dob: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
  ]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const navigate =useNavigate();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(filtered.map((s) => s.ID));
    } else {
      setSelected([]);
    }
  };

  const handleSelectOne = (roll) => {
    setSelected((prev) =>
      prev.includes(roll) ? prev.filter((r) => r !== roll) : [...prev, roll],
    );
  };

  const handleDelete = () => {
    setStudents((prev) => prev.filter((s) => !selected.includes(s.roll)));
    setSelected([]);
  };

  const handleRefresh = () => {
    setSearch("");
    setSelected([]);
  };
  const confirmDelete = () => {
    if (deleteTarget === null) {
      // bulk delete
      setStudents((prev) => prev.filter((s) => !selected.includes(s.ID)));
      setSelected([]);
    } else {
      // single delete
      setStudents((prev) => prev.filter((s) => s.roll !== deleteTarget));
    }

    setShowDeleteModal(false);
    setDeleteTarget(null);
  };
const TeacherDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  if (!state) {
    return <div>No teacher data found for ID {id}</div>;
  }

  return <div>{state.name}</div>;
};
  return (
    <div className="p-1 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-md shadow-sm  p-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0">
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
        <div className="relative w-full lg:w-80">
          <FiSearch className="absolute right-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Here..."
            className="w-80 pl-5 pr-2 py-2 bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
      <div className="mt-5">
        <h3 className="text-2xl font-semibold text-gray-700">All Teachers</h3>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4 flex justify-between">
        <div className="flex items-center gap-2">
          <MdOutlineSchool className="text-yellow-500 text-xl" />
          <span className="font-semibold">All Teachers</span>
        </div>

        <div className="flex gap-2 items-center">
          <input
            placeholder="#ID Type Here..."
            className="bg-gray-100 rounded-full px-2 py-1.5 text-sm w-44"
          />
          <input
            placeholder="Type Class..."
            className="bg-gray-100 rounded-full px-2 py-1.5 text-sm w-44"
          />

          <input
            placeholder="Subject..."
            className="bg-gray-100 rounded-full px-2 py-1.5 text-sm w-44"
          />

          <button className="bg-blue-600 text-white text-sm px-2 py-1.5 rounded-full">
            SEARCH
          </button>

          <FiRefreshCw
            className="text-blue-500 cursor-pointer"
            onClick={handleRefresh}
          />
          <FiTrash2
            className="text-red-500 cursor-pointer"
            onClick={() => {
              if (selected.length === 0) return;
              setDeleteTarget(null);
              setShowDeleteModal(true);
            }}
          />
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-auto h-[420px]">
        <table className="min-w-[1200px] w-full text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={
                    filtered.length > 0 && selected.length === filtered.length
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th className="p-1 text-left">ID</th>
              <th className="p-1">Photo</th>
              <th className="p-1 text-left">Name</th>
              <th className="p-1 text-left">Gender</th>
              <th className="p-1 text-left">Subject</th>
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
                  <input
                    type="checkbox"
                    checked={selected.includes(s.ID)}
                    onChange={() => handleSelectOne(s.ID)}
                  />
                </td>
                <td className="p-1">{s.ID}</td>
                <td className="p-1">
                  <img
                    src={s.avatar}
                    className="w-7 h-7 rounded-full mx-auto"
                  />
                </td>
                <td className="p-1">{s.name}</td>
                <td className="p-1 text-left">{s.gender}</td>
                <td className="p-1 text-left">{s.Subject}</td>
                <td className="p-1 text-center">{s.class}</td>
                <td className="p-1 text-center">{s.section}</td>
                <td className="p-1">{s.address}</td>
                <td className="p-1 text-center">{s.dob}</td>
                <td className="p-1 text-center">{s.mobile}</td>
                <td className="p-1">{s.email}</td>
                <td className="p-1">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() =>
                        navigate(`/teachers/${s.ID}`, { state: s })
                      }
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiEye />
                    </button>

                    <FiEdit className="text-green-600 cursor-pointer" />
                    <FiTrash2
                      className="text-red-500 cursor-pointer inline"
                      onClick={() => {
                        setDeleteTarget(s.roll);
                        setShowDeleteModal(true);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-md p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Confirm Delete
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-red-600">
                {deleteTarget === null
                  ? `${selected.length} selected student(s)`
                  : "this teachers"}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteTarget(null);
                }}
                className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;
