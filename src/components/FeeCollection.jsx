import { useState } from "react";
import {
  FiSearch,
  FiGlobe,
  FiMail,
  FiEdit,
  FiTrash2,
  FiEye,
  FiBell,
  FiX,
  FiDelete,
} from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FeeCollection = () => {
  const navigate = useNavigate();

  /* ================= DATA ================= */
  const initialStudents = [
    {
      id: 2901,
      name: "Richi Rozario",
      gender: "Female",
      parent: "Nathan Smith",
      class: 1,
      section: "A",
      fees: "$2,000",
      status: "Paid",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/08/2017",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2902,
      name: "Kazi Fahim",
      gender: "Male",
      parent: "Mike Hussy",
      class: 2,
      section: "B",
      fees: "$1,500",
      status: "Paid",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "09/08/2017",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 2903,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2904,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2905,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2906,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2907,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },

    {
      id: 2908,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2909,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2910,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2911,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2912,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2913,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2914,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },

    {
      id: 2915,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2916,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2917,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2918,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 2919,
      name: "Richi Rozario",
      gender: "Female",
      parent: "David Smith",
      class: 4,
      section: "C",
      fees: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];

  const [students, setStudents] = useState(initialStudents);

  /* ================= SEARCH ================= */
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const handleSearch = () => {
    setAppliedSearch(searchInput);
    setSelected([]);
  };

  const filtered = students.filter((s) =>
    appliedSearch ? String(s.id).includes(appliedSearch) : true,
  );

  /* ================= CHECKBOX ================= */
  const [selected, setSelected] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(filtered.map((s) => s.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  /* ================= DELETE ================= */
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteOne = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleBulkDelete = () => {
    if (selected.length === 0) return;
    setDeleteId(null);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteId === null) {
      // bulk delete
      setStudents((prev) => prev.filter((s) => !selected.includes(s.id)));
      setSelected([]);
    } else {
      // single delete
      setStudents((prev) => prev.filter((s) => s.id !== deleteId));
    }
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  return (
    <div className="w-full   bg-white rounded-md shadow  p-4 px-1 sm:p-6">
      <h2 className="font-semibold text-gray-700 border-b py-8  pb-3 mb-6">
      Fee Collection 
      </h2>

      {/* ================= TITLE + SEARCH ================= */}
      <div className="flex justify-between items-center mt-6 mb-3">
        <h2 className="text-xl font-semibold text-gray-700">
          Students Collection Fees Table
        </h2>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="ID Search Here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-gray-100 rounded-full px-3 py-1.5 text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full"
          >
            SEARCH
          </button>
          <button
            onClick={handleBulkDelete}
            className="flex items-center gap-1 text-red-600 text-sm"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded shadow overflow-x-auto overflow-y-auto max-h-[420px]">
        <table className="min-w-[1200px] w-full text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="p-2">
                <input
                  type="checkbox"
                  checked={
                    filtered.length > 0 && selected.length === filtered.length
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Parents</th>
              <th>Class</th>
              <th>Section</th>
              <th>Fees</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-t hover:bg-gray-50 text-center">
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(s.id)}
                    onChange={() => handleSelectOne(s.id)}
                  />
                </td>
                <td>{s.id}</td>
                <td>
                  <img
                    src={s.avatar}
                    alt=""
                    className="w-7 h-7 rounded-full mx-auto"
                  />
                </td>
                <td>{s.name}</td>
                <td>{s.gender}</td>
                <td>{s.parent}</td>
                <td>{s.class}</td>
                <td>{s.section}</td>
                <td>{s.fees}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs text-white ${
                      s.status === "Paid" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td>{s.phone}</td>
                <td>{s.email}</td>
                <td>{s.date}</td>
                <td>
                  <div className="flex justify-center gap-2">
                    <FiEye
                      className="text-blue-500 cursor-pointer"
                      title="Pay Fees"
                      onClick={() =>
                        navigate("/payment", {
                          state: {
                            name: s.name,
                            id: s.id,
                            class: s.class,
                            section: s.section,
                            fee: s.fees,
                          },
                        })
                      }
                    />

                    <FiEdit className="text-green-600 cursor-pointer" />
                    <FiTrash2
                      className="text-red-600 cursor-pointer"
                      onClick={() => handleDeleteOne(s.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= DELETE MODAL ================= */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-md p-6">
            <h3 className="text-lg font-semibold mb-2">Confirm Delete</h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-red-600">
                {deleteId === null
                  ? `${selected.length} selected record(s)`
                  : "this record"}
              </span>
              ?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteId(null);
                }}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeeCollection;
