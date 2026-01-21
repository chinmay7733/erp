import {
  FiSearch,
  FiUsers,
  FiUser,
  FiDollarSign,
  FiMail,
  FiBell,
  FiGlobe,
} from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
import FeeChart from "../inner/FeeCharts";
import TimeTable from "../inner/AdminTimeTable";
import EventCalendar from "../inner/EventCalendar";
import NoticeBoard from "../inner/NoticeBoard";
import RecentActivities from "../inner/RecentActivities";

const Dashboard = () => {
  return (
    <div className="w-full pt-0">
      <div className="bg-white rounded-md shadow-sm  p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <MdOutlineSchool className="text-xl text-yellow-500" />
          <span className="font-semibold">
            Welcome To Akkhor
            <span className="text-gray-400 font-normal">
              {" "}
              School Management System
            </span>
          </span>
        </div>
        <div className="relative w-full lg:w-100">
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
      <div className="mt-5">
        <h3 className="text-1xl font-semibold text-gray-700">
          Admin Dashboard
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <Card
          icon={<FiUsers className="text-green-500" />}
          title="Students"
          value="50,000"
        />
        <Card
          icon={<FiUser className="text-blue-500" />}
          title="Teachers"
          value="10,000"
        />
        <Card
          icon={<FiUsers className="text-yellow-500" />}
          title="Parents"
          value="15,000"
        />
        <Card
          icon={<FiDollarSign className="text-cyan-500" />}
          title="Total Earnings"
          value="$30,000"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
       
        <div className="lg:col-span-2">
          <FeeChart />
        </div>
        <TimeTable />
      </div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
  <EventCalendar />
  <NoticeBoard />
  <RecentActivities />
</div>

    </div>
  );
};

export default Dashboard;

const Card = ({ icon, title, value }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center gap-4 hover:shadow-sm transition">
    <div className="text-3xl">
      {icon}
      <p className="text-sm text-gray-500">{title}</p>
    </div>
    <p className="gap-7"></p>
    <p className=" text-2xl font-semibold text-gray-800">{value}</p>
  </div>
);
