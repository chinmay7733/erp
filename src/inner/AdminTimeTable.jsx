const adminTimeTable = [
  {
    day: "Monday",
    time: "09:00 - 10:00",
    teacher: "Mr. Sharma",
    subject: "Mathematics",
    class: "10-A",
  },
  {
    day: "Monday",
    time: "10:00 - 11:00",
    teacher: "Ms. Gupta",
    subject: "English",
    class: "9-B",
  },
  {
    day: "Tuesday",
    time: "09:00 - 10:00",
    teacher: "Mr. Verma",
    subject: "Physics",
    class: "11-A",
  },
  {
    day: "Tuesday",
    time: "10:00 - 11:00",
    teacher: "Ms. Roy",
    subject: "Biology",
    class: "10-C",
  },
  {
    day: "Wednesday",
    time: "09:00 - 10:00",
    teacher: "Mr. Sharma",
    subject: "Mathematics",
    class: "10-A",
  },
  {
    day: "Wednesday",
    time: "11:00 - 12:00",
    teacher: "Ms. Gupta",
    subject: "English",
    class: "9-B",
  },
];

const AdminTimeTable = () => {
  return (
    <div className="bg-white border rounded-lg p-4 h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-700">
          Teachers Time Table (Admin View)
        </h3>
        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
          Weekly
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-2 border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="border px-3 py-2 text-left">Day</th>
              <th className="border px-3 py-2">Time</th>
              <th className="border px-3 py-2">Teacher</th>
              <th className="border px-3 py-2">Subject</th>
              <th className="border px-3 py-2">Class</th>
            </tr>
          </thead>

          <tbody>
            {adminTimeTable.map((item, index) => (
              <tr
                key={index}
                className="text-gray-700 hover:bg-gray-50"
              >
                <td className="border px-1 py-1 font-medium">
                  {item.day}
                </td>
                <td className="border px-1.5 py-1.5">{item.time}</td>
                <td className="border px-1 py-2">{item.teacher}</td>
                <td className="border px-3 py-2 text-blue-600">
                  {item.subject}
                </td>
                <td className="border px-3 py-2">{item.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTimeTable;
