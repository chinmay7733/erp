import { FiEdit, FiPrinter, FiDownload } from "react-icons/fi";
import { useLocation, useParams } from "react-router-dom";
const TeacherDetail = () => {
  const { state } = useLocation(); // 👈 teacher data

  if (!state) {
    return (
      <div className="p-6 text-red-500">No teacher data found for ID {id}</div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow rounded">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b">
          <h2 className="font-semibold text-gray-700">About Andrew Martin</h2>

          <div className="flex gap-3 text-gray-500">
            <FiEdit className="cursor-pointer hover:text-blue-500" />
            <FiPrinter className="cursor-pointer hover:text-blue-500" />
            <FiDownload className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 bg-gray-300 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="teacher"
                className="w-32 h-32"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              About Me
              <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-blue-500"></span>
            </h3>

            <div className="space-y-3 text-sm">
              <Row label="ID" value={state.ID} />
              <Row label="Name" value={state.name} />
              <Row label="Gender" value={state.gender} />
              <Row label="Date Of Birth" value={state.dob} />
              <Row label="Email" value={state.email} />
              <Row label="Subject" value={state.Subject} />
              <Row label="Class" value={state.class} />
              <Row label="Section" value={state.section} />
              <Row label="Address" value={state.address} />
              <Row label="mobile" value={state.mobile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex">
    <span className="w-40 text-gray-500">{label} :</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default TeacherDetail;
