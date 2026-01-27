import { MdOutlineSchool } from "react-icons/md";
import {
  FiSearch,
  FiGlobe,
  FiMail,
  FiBell,
  FiRefreshCw,
  FiTrash2,
  FiEye,
  FiEdit,
} from "react-icons/fi";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Parents = () => {
  const { ID } = useParams();
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    {
      ID: 2901,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "HouseWife",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
      ID: 2902,
      name: "Kazi Fahim",
      gender: "Male",
      Occupation: "Banker",
      address: "59 Street, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    {
      ID: 2903,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2904,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },

    {
      ID: 2905,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2906,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2907,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2908,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2909,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2910,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2911,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2912,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2913,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2914,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2915,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      ID: 2916,
      name: "Richi Rozario",
      gender: "Female",
      Occupation: "Accountant",
      address: "TA-110, North Sydney",
      mobile: "+8812 00 5098",
      email: "nidsors@gmail.com",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
  ]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchMobileno, setSearchMobileno] = useState("");
const [appliedFilters, setAppliedFilters] = useState({
    name: "",
    id: "",
    mobile: "",
  });
  const filtered = students.filter((s) => {
    const matchName = appliedFilters.name
      ? s.name.toLowerCase().includes(appliedFilters.name.toLowerCase())
      : true;

    const matchId = appliedFilters.id
      ? String(s.ID).includes(appliedFilters.id)
      : true;

    const matchMobile = appliedFilters.mobile
      ? String(s.mobile).includes(appliedFilters.mobile)
      : true;

    return matchName && matchId && matchMobile;
  });

  const handleRefresh = () => {
  setSearch("");
  setSearchId("");
  setSearchMobileno("");
  setSelected([]);
  setAppliedFilters({
    name: "",
    id: "",
    mobile: "",
  });
};

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(filtered.map((s) => s.ID));
    } else {
      setSelected([]);
    }
  };
  

  const handleSelectOne = (ID) => {
    setSelected((prev) =>
      prev.includes(ID) ? prev.filter((r) => r !== ID) : [...prev, ID],
    );
  };

  const handleDelete = () => {
    setStudents((prev) => prev.filter((s) => !selected.includes(s.ID)));
    setSelected([]);
  };

  
  const handleSearch = () => {
    setAppliedFilters({
      name: search,
      id: searchId,
      mobile: searchMobileno,
    });
  };

  const confirmDelete = () => {
    if (deleteTarget === null) {
      setStudents((prev) => prev.filter((s) => !selected.includes(s.ID)));
      setSelected([]);
    } else {
      setStudents((prev) => prev.filter((s) => s.ID !== deleteTarget));
    }

    setShowDeleteModal(false);
    setDeleteTarget(null);
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
        <div className="flex items-center gap-3 text-sm text-gray-600">
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
        <h3 className="text-2xl font-semibold text-gray-700">All Parents</h3>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4 flex justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">All Parents List</span>
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="ID Type Here..."
            className="bg-gray-100 rounded-full px-2 py-1.5 text-sm w-44"
          />

          <input
            type="text"
            value={searchMobileno}
            onChange={(e) => setSearchMobileno(e.target.value)}
            placeholder="Type Mobile No..."
            className="bg-gray-100 rounded-full px-2 py-1.5 text-sm w-44"
          />

         
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white text-sm px-2 py-1.5 rounded-full"
          >
            SEARCH
          </button>

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
              <th className="p-1 text-left">Occupation</th>
              <th className="p-1 text-left">Address</th>
              <th className="p-1">Mobile</th>
              <th className="p-1 text-left">Email</th>
              <th className="p-1 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s) => (
              <tr key={s.ID} className="border-t hover:bg-gray-50">
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
                    alt="avatar"
                  />
                </td>

                <td className="p-1">{s.name}</td>
                <td className="p-1 text-left">{s.gender}</td>
                <td className="p-1 text-left">{s.Occupation}</td>
                <td className="p-1">{s.address}</td>
                <td className="p-1 text-center">{s.mobile}</td>
                <td className="p-1">{s.email}</td>

                <td className="p-1">
                  <div className="flex justify-center gap-2">
                    <FiEdit
                      className="text-green-600 cursor-pointer"
                      title="Edit"
                    />

                    {/* DELETE */}
                    <FiTrash2
                      className="text-red-500 cursor-pointer"
                      title="Delete"
                      onClick={() => {
                        setDeleteTarget(s.ID);
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
export default Parents;
