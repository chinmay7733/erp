import { FiCheck, FiRefreshCw, FiX } from "react-icons/fi";

const notices = [
  {
    date: "16 May, 2017",
    items: [
      {
        name: "Jennyfer Lopez",
        color: "text-blue-600",
        time: "5 min ago",
        text: "Great School management system simply dummy text of the printing.",
      },
      {
        name: "Kiley Miller",
        color: "text-orange-500",
        time: "55 min ago",
        text: "Great School management system simply dummy text of the printing.",
      },
    ],
  },
  {
    date: "15 May, 2017",
    items: [
      {
        name: "Jennyfer Lopez",
        color: "text-blue-600",
        time: "5 min ago",
        text: "Great School management system simply.",
      },
      {
        name: "Mike Hussy",
        color: "text-green-600",
        time: "5 min ago",
        text: "Great School management system simply.",
      },
    ],
  },
];

const NoticeBoard = () => {
  return (
    <div className="bg-white border rounded-lg h-full flex flex-col">

      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h3 className="font-semibold text-gray-700">Notice Board</h3>
        <div className="flex gap-2 text-sm">
          <FiCheck className="text-green-500 cursor-pointer" />
          <FiRefreshCw className="text-blue-500 cursor-pointer" />
          <FiX className="text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="relative flex-1 overflow-y-auto px-4 py-3 text-sm scrollbar-akkhor">

       

        {notices.map((group, index) => (
          <div key={index} className="mb-5">
          
            <p className="text-xs text-gray-400 mb-2">
              {group.date}
            </p>
            <div className="space-y-4">
              {group.items.map((item, i) => (
                <div key={i}>
                  <p className={`font-semibold ${item.color}`}>
                    {item.name}
                    <span className="text-xs text-gray-400 ml-2">
                      {item.time}
                    </span>
                  </p>
                  <p className="text-gray-600 leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
