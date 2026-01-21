import{
    FiSearch,
    FiMail,
    FiBell,
    FiGlobe,
} from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
const Students = () => {
  return (
    <div className="w-full pt-0">
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
     </div>
);  
    }
    export default Students;
