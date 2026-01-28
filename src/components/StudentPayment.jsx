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
    <div className="w-full   bg-white rounded-md shadow  p-4 px-1 sm:p-6">
     
      <div className="flex justify-between items-center border-b  py-4 pb-2 mb-4 mt-4">
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