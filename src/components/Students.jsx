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

const Students = () => {
  const { roll } = useParams();
  const navigate = useNavigate();

  const [students, setStudents] = useState([
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
      roll: 2904,
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
      roll: 2905,
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
      roll: 2906,
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
      roll: 2907,
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
      roll: 2908,
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
      roll: 2909,
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
      roll: 2910,
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
      roll: 2911,
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
      roll: 2912,
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
      roll: 2913,
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
      roll: 2914,
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
      roll: 2915,
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
      roll: 2916,
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
  ]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(filtered.map((s) => s.roll));
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
      setStudents((prev) => prev.filter((s) => !selected.includes(s.roll)));
      setSelected([]);
    } else {
      setStudents((prev) => prev.filter((s) => s.roll !== deleteTarget));
    }

    setShowDeleteModal(false);
    setDeleteTarget(null);
  };

  return (
    <div className="p-1 bg-white min-h-screen">
      
      <div className="mt-5">
        <h3 className="text-2xl font-semibold py-5 text-gray-700">All Students</h3>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4 flex justify-between">
        <div className="flex items-center gap-2">
          <MdOutlineSchool className="text-yellow-500 text-xl" />
          <span className="font-semibold">All Students</span>
        </div>

        <div className="flex gap-2 items-center">
          <input
            placeholder="Roll Type Here..."
            className="bg-gray-100 rounded-full px-2 py-1.5 text-sm w-44"
          />

          <input
            placeholder="Type Section..."
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
              <th className="p-1 text-left">Roll</th>
              <th className="p-1">Photo</th>
              <th className="p-1 text-left">Name</th>
              <th className="p-1 text-left">Gender</th>
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
                  <input
                    type="checkbox"
                    checked={selected.includes(s.roll)}
                    onChange={() => handleSelectOne(s.roll)}
                  />
                </td>

                <td className="p-1">{s.roll}</td>

                <td className="p-1">
                  <img
                    src={s.avatar}
                    className="w-7 h-7 rounded-full mx-auto"
                    alt="avatar"
                  />
                </td>

                <td className="p-1">{s.name}</td>
                <td className="p-1 text-left">{s.gender}</td>
                <td className="p-1 text-left">{s.parent}</td>
                <td className="p-1 text-center">{s.class}</td>
                <td className="p-1 text-center">{s.section}</td>
                <td className="p-1">{s.address}</td>
                <td className="p-1 text-center">{s.dob}</td>
                <td className="p-1 text-center">{s.mobile}</td>
                <td className="p-1">{s.email}</td>

                <td className="p-1">
                  <div className="flex justify-center gap-2">
                    {/* VIEW */}
                    <button
                      onClick={() =>
                        navigate(`/students/${s.roll}`, { state: s })
                      }
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiEye />
                    </button>

                    {/* EDIT */}
                    <FiEdit
                      className="text-green-600 cursor-pointer"
                      title="Edit"
                    />

                    {/* DELETE */}
                    <FiTrash2
                      className="text-red-500 cursor-pointer"
                      title="Delete"
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
                  : "this student"}
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

export default Students;
