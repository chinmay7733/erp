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
    <div className="w-full   bg-white rounded-md shadow  p-4 px-1 sm:p-6">
      <h2 className="font-semibold text-gray-700 border-b py-8  pb-3 mb-6">
      Admin  Dashboard
      </h2>  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
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
