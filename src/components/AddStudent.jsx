import { useState } from "react";

const AddStudent = () => {
  const [studentPhoto, setStudentPhoto] = useState("");
  const [parentPhoto, setParentPhoto] = useState("");

  const inputClass =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-md shadow p-4 sm:p-6">
      {/* PAGE TITLE */}
      <h2 className="font-semibold text-gray-700 border-b pb-3 mb-6">
        Add Student Form
      </h2>

      {/* ================= STUDENT INFO ================= */}
      <section>
        <h3 className="text-blue-600 font-semibold border-b pb-2 mb-6">
          Student Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Field label="First Name">
            <input className={inputClass} />
          </Field>

          <Field label="Last Name">
            <input className={inputClass} />
          </Field>

          <Field label="Class">
            <select className={inputClass}>
              <option>Please Select</option>
            </select>
          </Field>

          <Field label="Section">
            <select className={inputClass}>
              <option>Please Select</option>
            </select>
          </Field>

          <Field label="Gender">
            <select className={inputClass}>
              <option>Please Select</option>
            </select>
          </Field>

          <Field label="Date Of Birth">
            <input type="date" className={inputClass} />
          </Field>

          <Field label="Roll">
            <input className={inputClass} />
          </Field>

          <Field label="Admission No">
            <input className={inputClass} />
          </Field>

          <Field label="Religion">
            <input className={inputClass} />
          </Field>

          <Field label="E-mail">
            <input type="email" className={inputClass} />
          </Field>

          {/* FILE UPLOAD (2 COLUMN SPAN) */}
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">
              Upload Student Photo{" "}
              <span className="text-xs">(150px × 150px)</span>
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <label className="bg-gray-200 px-4 py-2 rounded cursor-pointer text-sm">
                Choose File
                <input
                  type="file"
                  hidden
                  onChange={(e) =>
                    setStudentPhoto(e.target.files[0]?.name || "")
                  }
                />
              </label>
              <span className="text-sm text-gray-500">
                {studentPhoto || "No file chosen"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARENTS INFO ================= */}
      <section className="mt-10">
        <h3 className="text-blue-600 font-semibold border-b pb-2 mb-6">
          Parents Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Field label="Father Name">
            <input className={inputClass} />
          </Field>

          <Field label="Mother Name">
            <input className={inputClass} />
          </Field>

          <Field label="Father Occupation">
            <input className={inputClass} />
          </Field>

          <Field label="Mother Occupation">
            <input className={inputClass} />
          </Field>

          <Field label="Phone Number">
            <input className={inputClass} />
          </Field>

          <Field label="Nationality">
            <input className={inputClass} />
          </Field>

          <Field label="Present Address">
            <input className={inputClass} />
          </Field>

          <Field label="Permanent Address">
            <input className={inputClass} />
          </Field>

          {/* FILE UPLOAD */}
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">
              Upload Parents Photo{" "}
              <span className="text-xs">(150px × 150px)</span>
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <label className="bg-gray-200 px-4 py-2 rounded cursor-pointer text-sm">
                Choose File
                <input
                  type="file"
                  hidden
                  onChange={(e) =>
                    setParentPhoto(e.target.files[0]?.name || "")
                  }
                />
              </label>
              <span className="text-sm text-gray-500">
                {parentPhoto || "No file chosen"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUTTONS ================= */}
      <div className="flex flex-wrap gap-4 mt-10">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded">
          Save
        </button>
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

/* ================= FIELD WRAPPER ================= */
const Field = ({ label, children }) => (
  <div>
    <label className="block text-sm text-gray-700 mb-1">{label}</label>
    {children}
  </div>
);

export default AddStudent;
