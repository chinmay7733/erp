import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiHome,
  FiUsers,
  FiUser,
  FiBook,
  FiBell,
  FiMail,
  FiMapPin,
  FiChevronDown,
  FiUserCheck,
  FiGrid,
  FiBookOpen,
  FiSearch,
  FiGlobe,
} from "react-icons/fi";
import { FaSchool } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import cap from "../assets/cap.png";

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [collapse, setCollapse] = useState(false);

  const [studentsOpen, setStudentsOpen] = useState(false);
  const [teachersOpen, setTeachersOpen] = useState(false);
  const [parentsOpen, setParentsOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const linkClass = (active) =>
    `flex items-center gap-3 px-3 py-2 text-sm transition
     hover:bg-white/10
     ${active ? "bg-white/20 border-l-4 border-yellow-400" : ""}`;

  return (
    <div className="flex">
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 h-screen
        ${collapse ? "w-16" : "w-64"}
        bg-gradient-to-b from-[#0f2a44] to-[#0a1f33]
        text-white z-40 transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* LOGO */}
        <div className="h-14 bg-[#FFC107] flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <img src={cap} className="w-6 h-6" alt="logo" />
            {!collapse && (
              <span className="font-bold">
                Akkhor <sup className="text-xs">TM</sup>
              </span>
            )}
          </div>
          <button
            onClick={() =>
              window.innerWidth < 768
                ? setOpen(false)
                : setCollapse(!collapse)
            }
            className="text-xl"
          >
            <FiMenu />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex-1 overflow-y-auto pt-2">
          <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
            <FiHome />
            {!collapse && "Dashboard"}
          </NavLink>

          <Dropdown
            icon={FiUsers}
            label="Students"
            open={studentsOpen}
            setOpen={setStudentsOpen}
            collapse={collapse}
          >
            {[
              ["All Students", "/students"],
              ["Admit Form", "/AddStudent"],
            ]}
          </Dropdown>

          <Dropdown
            icon={FiUserCheck}
            label="Teachers"
            open={teachersOpen}
            setOpen={setTeachersOpen}
            collapse={collapse}
          >
            {[
              ["All Teachers", "/teachers"],
              ["Add Teacher", "/teachers/add"],
            ]}
          </Dropdown>

          <Dropdown
            icon={FiUserCheck}
            label="Parents"
            open={parentsOpen}
            setOpen={setParentsOpen}
            collapse={collapse}
          >
            {[
              ["All Parents", "/parents"],
              ["Add Parents", "/parents/add"],
            ]}
          </Dropdown>

          <Dropdown
            icon={FiBookOpen}
            label="Library"
            open={libraryOpen}
            setOpen={setLibraryOpen}
            collapse={collapse}
          >
            {[
              ["All Books", "/library"],
              ["Issue Book", "/library/issue"],
              ["Return Book", "/library/return"],
            ]}
          </Dropdown>

          <Dropdown
            icon={FiUser}
            label="Account"
            open={accountOpen}
            setOpen={setAccountOpen}
            collapse={collapse}
          >
            {[
              ["Fee Collection", "/account/feecollection"],
              ["Student Payment", "/account/studentpayment"],
              ["All Expenses", "/allexpenses"],
              ["Add Expenses", "/addexpenses"],
            ]}
          </Dropdown>
        </nav>
      </aside>

      {/* ================= MAIN AREA ================= */}
      <div
        className={`flex-1 min-h-screen bg-gray-100 transition-all duration-300
        ${collapse ? "md:ml-16" : "md:ml-64"}`}
      >
        {/* ================= FIXED HEADER ================= */}
        <div
          className={`fixed top-0 right-0
          ${collapse ? "md:left-16" : "md:left-64"}
          left-0 z-30 bg-white shadow-sm p-3
          flex flex-col lg:flex-row
          lg:items-center lg:justify-between gap-4`}
        >
          {/* LEFT */}
          <div className="flex items-center gap-2 text-gray-700">
            <MdOutlineSchool className="text-xl text-yellow-500" />
            <span className="font-semibold">
              Welcome To Akkhor
              <span className="text-gray-400 font-normal">
                {" "}School Management System
              </span>
            </span>
          </div>

          {/* SEARCH */}
          <div className="relative w-full lg:w-60">
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search Here..."
              className="w-full pl-4 pr-10 py-2 bg-gray-100 rounded-2xl
              focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 text-sm text-gray-600">
            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
              <FiGlobe />
              <select className="bg-transparent outline-none">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            <div className="relative bg-gray-100 rounded-full p-2">
              <FiMail />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                5
              </span>
            </div>

            <div className="relative bg-gray-100 rounded-full p-2">
              <FiBell />
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                9
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                className="w-8 h-8 rounded-full"
                alt="profile"
              />
              <div className="hidden sm:block leading-tight">
                <p className="font-semibold text-gray-700">Kazi Fahim</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PAGE CONTENT ================= */}
        <div className=" pt-2 px-0">{children}</div>
      </div>
    </div>
  );
};

/* ================= DROPDOWN ================= */
const Dropdown = ({
  icon: Icon,
  label,
  open,
  setOpen,
  collapse,
  children,
}) => {
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 hover:bg-white/10"
      >
        <div className="flex items-center gap-3">
          <Icon />
          {!collapse && label}
        </div>
        {!collapse && (
          <FiChevronDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {open && !collapse && (
        <div className="ml-10 text-xs">
          {children.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={`block py-2 hover:text-yellow-400 ${
                location.pathname === path ? "text-yellow-400" : ""
              }`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
