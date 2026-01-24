import { useState } from "react";
import { FiSearch, FiGlobe, FiMail, FiBell } from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";


const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    className: "",
    section: "",
    gender: "",
    dob: "",
    roll: "",
    admissionNo: "",
    religion: "",
    email: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    motherOccupation: "",
    phone: "",
    nationality: "",
    presentAddress: "",
    permanentAddress: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Student Saved (frontend only)");
  };

  const handleReset = () => {
    setFormData({});
  };
  

  return (
    <div className="flex flex-col gap-4">
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
      <div className=" bg-gray-50 min-h-screen">
        <div className="bg-white rounded shadow">
          <div className="border-b px-6 py-3 font-semibold text-gray-700">
            Add Student Form
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-blue-600 border-b pb-2 mb-6">
                Student Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="label">First Name</label>
                  <input
                    type="text"
                    className="input w-50 h-7 px-1 rounded-2xl bg-gray-100"
                  />
                </div>

                <div>
                  <label className="label">Last Name</label>
                  <input
                    type="text"
                    className="input w-50 h-7 px-1 rounded-2xl bg-gray-100"
                  />
                </div>

                <div className="w-full">
                  <label className="label">Class</label>
                  <select className="input w-50 h-7 px-2 rounded-2xl bg-gray-100">
                    <option>Please Select Class</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>

                <div>
                  <label className="label">Section</label>
                  <select className="input w-50 h-7 px-2 rounded-2xl bg-gray-100">
                    <option>Please Select Section</option>
                    <option>A</option>
                    <option>B</option>
                  </select>
                </div>

                <div>
                  <label className="label">Gender</label>
                  <select className="input w-50 h-7 px-2 rounded-2xl bg-gray-100">
                    <option>Please Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <label className="label">Date Of Birth</label>
                  <input
                    type="date"
                    className="input w-50 h-7 px-2 rounded-2xl bg-gray-100"
                  />
                </div>

                <div>
                  <label className="label">Roll</label>
                  <input
                    type="text"
                    className="input w-50 h-7 px-2 rounded-2xl bg-gray-100"
                  />
                </div>
                <div>
                  <label className="label">Admission No</label>
                  <input
                    type="text"
                    className="input w-50 h-7 px-2 rounded-2xl bg-gray-100"
                  />
                </div>

                <div>
                  <label className="label">Religion</label>
                  <input
                    type="text"
                    className="input w-50 h-7 px-2 rounded-2xl bg-gray-100"
                  />
                </div>

                <div>
                  <label className="label">E-mail</label>
                  <input
                    type="email"
                    className="input w-50 h-7 px-2 rounded-2xl bg-gray-100"
                  />
                </div>

                <div>
                  <label className="label">
                    Upload Student Photo{" "}
                    <span className="text-xs">(150px × 150px)</span>
                  </label>

                  <div className="file-wrapper">
                    <label className="file-btn">
                      Choose File
                      <input
                        type="file"
                        hidden
                        onChange={(e) =>
                          (document.getElementById("parentFileName").innerText =
                            e.target.files[0]?.name || "No file chosen")
                        }
                      />
                    </label>

                    <span id="parentFileName" className="file-name">
                      No file chosen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-blue-600 border-b pb-2 mb-6">
                Parents Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="label">Father Name</label>
                  <input type="text" className="input" />
                </div>
                <div>
                  <label className="label">Mother Name</label>
                  <input type="text" className="input" />
                </div>
                <div>
                  <label className="label">Father Occupation</label>
                  <input type="text" className="input" />
                </div>

                <div>
                  <label className="label">Mother Occupation</label>
                  <input type="text" className="input" />
                </div>

                <div>
                  <label className="label">Phone Number</label>
                  <input type="text" className="input" />
                </div>
                <div>
                  <label className="label">Nationality</label>
                  <input type="text" className="input" />
                </div>

                <div>
                  <label className="label">Present Address</label>
                  <input type="text" className="input" />
                </div>

                <div>
                  <label className="label">Permanent Address</label>
                  <input type="text" className="input" />
                </div>
                <div>
                  <label className="label">
                    Upload Parents Photo{" "}
                    <span className="text-xs">(150px × 150px)</span>
                  </label>

                  <div className="file-wrapper">
                    <label className="file-btn">
                      Choose File
                      <input
                        type="file"
                        hidden
                        onChange={(e) =>
                          (document.getElementById("parentFileName").innerText =
                            e.target.files[0]?.name || "No file chosen")
                        }
                      />
                    </label>

                    <span id="parentFileName" className="file-name">
                      No file chosen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
              >
                Save
              </button>

              <button
                type="reset"
                onClick={handleReset}
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
