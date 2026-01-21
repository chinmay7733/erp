import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiRefreshCw,
  FiX,
} from "react-icons/fi";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const events = {
  "2024-04-14": "blue",
  "2024-04-18": "green",
  "2024-04-27": "red",
};

const EventCalendar = () => {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonthLastDate - i,
      muted: true,
    });
  }
  for (let day = 1; day <= lastDate; day++) {
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    calendarDays.push({
      day,
      color: events[key],
      today: isToday,
    });
  }
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push({
      day: calendarDays.length,
      muted: true,
    });
  }

  const changeMonth = (direction) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  const resetToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="bg-white border rounded-lg p-4 h-full">

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">Event Calendar</h3>
        <div className="flex gap-2 text-sm">
          <FiCheck className="text-green-500 cursor-pointer" />
          <FiRefreshCw
            className="text-blue-500 cursor-pointer"
            onClick={resetToToday}
          />
          <FiX className="text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* 🔹 MONTH NAVIGATION */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => changeMonth(-1)}
          className="w-6 h-6 flex items-center justify-center bg-yellow-400 text-white rounded-full"
        >
          <FiChevronLeft size={14} />
        </button>

        <p className="text-sm font-semibold text-gray-600">
          {currentDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <button
          onClick={() => changeMonth(1)}
          className="w-6 h-6 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full"
        >
          <FiChevronRight size={14} />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
        {days.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
        {calendarDays.map((item, index) => (
          <div
            key={index}
            className={`
              mx-auto w-8 h-8 flex items-center justify-center rounded-full
              ${item.muted ? "text-gray-300" : "text-gray-700"}
              ${item.today ? "border-2 border-yellow-400 font-bold" : ""}
              ${item.color === "blue" ? "bg-blue-600 text-white" : ""}
              ${item.color === "green" ? "bg-green-500 text-white" : ""}
              ${item.color === "red" ? "bg-pink-500 text-white" : ""}
            `}
          >
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
