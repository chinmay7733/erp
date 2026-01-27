import { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiX,
  FiRefreshCw,
  FiGlobe,
  FiMail,
  FiBell,
} from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const StudentPayment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const initialForm = {
    name: state?.name || "",
    id: state?.id || "",
    class: state?.class || "",
    section: state?.section || "",
    totalFee: state?.fee || "",
    paymentMethod: "",
    status: "",
    date: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Payment Saved:", form);
    alert("Payment Recorded Successfully");
    navigate(-1);
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <div className="p-1 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-md shadow-sm p-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0">
        <div className="flex items-center gap-1 text-gray-700">
          <MdOutlineSchool className="text-xl text-yellow-500" />
          <span className="font-semibold">
            Welcome To Akkhor
            <span className="text-gray-400 font-normal">
              {" "}School Management System
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
              <p className="font-semibold text-gray-700">Kazi Fahim</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-b pb-2 mb-4 mt-4">
        <h2 className="font-semibold text-gray-700">
          Payment Information
        </h2>

        <div className="flex items-center gap-3">
          <FiRefreshCw
            className="text-green-600 cursor-pointer"
            title="Reset"
            onClick={handleReset}
          />
          <FiX
            className="text-red-600 cursor-pointer"
            title="Close"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-gray-100 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">ID</label>
          <input
            name="id"
            value={form.id}
            readOnly
            className="w-full bg-gray-100 px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Class</label>
          <select
            name="class"
            value={form.class}
            onChange={handleChange}
            className="w-full bg-gray-100 px-3 py-2 rounded"
          >
            <option value="">Select Class</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600">Section</label>
          <select
            name="section"
            value={form.section}
            onChange={handleChange}
            className="w-full bg-gray-100 px-3 py-2 rounded"
          >
            <option value="">Select Section</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600">Total Fee</label>
          <input
            name="totalFee"
            value={form.totalFee}
            readOnly
            className="w-full bg-gray-100 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full bg-gray-100 px-3 py-2 rounded"
          >
            <option value="">Select Method</option>
            <option>Cash</option>
            <option>UPI</option>
            <option>Card</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full bg-gray-100 px-3 py-2 rounded"
          >
            <option value="">Select Status</option>
            <option>Paid</option>
            <option>Due</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full bg-gray-100 px-3 py-2 rounded"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleSave}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2 rounded text-sm"
        >
          Save
        </button>
        <button
          onClick={handleReset}
          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-2 rounded text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StudentPayment;