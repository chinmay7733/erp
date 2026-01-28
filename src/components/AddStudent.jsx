import { useState } from "react";

const AddStudent = () => {
  const [studentPhoto, setStudentPhoto] = useState(null);
  const [parentPhoto, setParentPhoto] = useState(null);

  const inputClass =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    // 🔥 FULL WIDTH – NO BLANK LEFT SPACE
    <div className="w-full   bg-white rounded-md shadow  p-4 px-1 sm:p-6">
      <h2 className="font-semibold text-gray-700 border-b py-8  pb-3 mb-6">
        Add Student Form
      </h2>

      {/* STUDENT INFO */}
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

        {/* STUDENT PHOTO */}
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">
            Upload Student Photo (150px × 150px)
          </label>
          <div className="flex items-center gap-4">
            <label className="bg-gray-200 px-4 py-2 rounded cursor-pointer">
              Choose File
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  setStudentPhoto(
                    e.target.files[0]
                      ? URL.createObjectURL(e.target.files[0])
                      : null
                  )
                }
              />
            </label>
            {studentPhoto && (
              <img
                src={studentPhoto}
                className="w-16 h-16 rounded object-cover border"
              />
            )}
          </div>
        </div>
      </div>

      {/* PARENTS INFO */}
      <h3 className="text-blue-600 font-semibold border-b pb-2 my-8">
        Parents Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Field label="Father Name"><input className={inputClass} /></Field>
        <Field label="Mother Name"><input className={inputClass} /></Field>
        <Field label="Father Occupation"><input className={inputClass} /></Field>
        <Field label="Mother Occupation"><input className={inputClass} /></Field>
        <Field label="Phone Number"><input className={inputClass} /></Field>
        <Field label="Nationality"><input className={inputClass} /></Field>
        <Field label="Present Address"><input className={inputClass} /></Field>
        <Field label="Permanent Address"><input className={inputClass} /></Field>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-10">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded">
          Save
        </button>
        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

const Field = ({ label, children }) => (
  <div>
    <label className="block text-sm mb-1">{label}</label>
    {children}
  </div>
);

export default AddStudent;
