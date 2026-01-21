import { FiCheck, FiRefreshCw, FiX } from "react-icons/fi";

const RecentActivities = () => {
  const activities = [
    {
      time: "9 minutes ago",
      text: "You followed Olivia Williamson",
      color: "border-purple-500",
    },
    {
      time: "20 minutes ago",
      text: "You Subscribed to Harold Fuller",
      highlight: "Subscribed",
      color: "border-yellow-500",
    },
    {
      time: "30 minutes ago",
      text: "You updated your profile picture",
      color: "border-green-500",
    },
    {
      time: "35 minutes ago",
      text: "You deleted homepage.psd",
      color: "border-pink-500",
    },
    {
      time: "35 minutes ago",
      text: "You deleted homepage.psd",
      color: "border-lime-500",
    },
    {
      time: "35 minutes ago",
      text: "You deleted homepage.psd",
      color: "border-blue-500",
    },
  ];

  return (
    <div className="bg-white border rounded-lg h-full flex flex-col">

      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h3 className="font-semibold text-gray-700">
          Recent Activities
        </h3>
        <div className="flex gap-2 text-sm">
          <FiCheck className="text-green-500 cursor-pointer" />
          <FiRefreshCw className="text-blue-500 cursor-pointer" />
          <FiX className="text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 text-sm scrollbar-akkhor">
        <ul className="space-y-4">
          {activities.map((item, index) => (
            <li key={index} className="flex gap-3">

              <span
                className={`w-3 h-3 mt-2 rounded-full border-2 ${item.color}`}
              />

              <div>
                <p className="text-xs text-gray-400 mb-1">
                  {item.time}
                </p>
                <p className="text-gray-700 leading-snug">
                  {item.highlight ? (
                    <>
                      {item.text.split(item.highlight)[0]}
                      <span className="text-red-500 font-semibold">
                        {item.highlight}
                      </span>
                      {item.text.split(item.highlight)[1]}
                    </>
                  ) : (
                    item.text
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivities;
