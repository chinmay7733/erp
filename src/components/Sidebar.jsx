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
} from "react-icons/fi";
import { FaSchool } from "react-icons/fa";
import cap from "../assets/cap.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [collapse, setCollapse] = useState(false);

  const [studentsOpen, setStudentsOpen] = useState(false);
  const [teachersOpen, setTeachersOpen] = useState(false);
  const [parentsOpen, setParentsOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const location = useLocation();

  const linkClass = (active) =>
    `flex items-center gap-3 px-3 py-2 text-sm transition
     hover:bg-white/10
     ${active ? "bg-white/20 border-l-4 border-yellow-400" : ""}`;

  // SAFE MENU ITEMS
  const menuItems = [
    { label: "Class", path: "/class", icon: FaSchool },
    { label: "Subject", path: "/subject", icon: FiBook },
    { label: "Class Routine", path: "/routine", icon: FiBell },
    { label: "Attendance", path: "/attendance", icon: FiUsers },
    { label: "Exam", path: "/exam", icon: FiBook },
    { label: "Transport", path: "/transport", icon: FiMapPin },
    { label: "Hostel", path: "/hostel", icon: FiHome },
    { label: "Notice", path: "/notice", icon: FiBell },
    { label: "Message", path: "/message", icon: FiMail },
    { label: "UI Elements", path: "/ui-elements", icon: FiGrid },
    { label: "Map", path: "/map", icon: FiMapPin },
  ];

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 w-full h-14 bg-[#FFC107] flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2">
          <img src={cap} className="w-6 h-6" alt="logo" />
          <span className="font-bold text-white">Akkhor</span>
        </div>
        <button onClick={() => setOpen(true)} className="text-white text-2xl">
          <FiMenu />
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-screen
        ${collapse ? "w-16" : "w-64"}
        bg-gradient-to-b from-[#0f2a44] to-[#0a1f33]
        text-white z-40 transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 flex flex-col`}
      >
        {/* LOGO */}
        <div className="h-14 bg-[#FFC107] flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <img src={cap} className="w-6 h-6" alt="logo" />
            {!collapse && (
              <span className="font-bold text-white">
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
            className="text-white text-xl"
          >
            <FiMenu />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex-1 overflow-y-auto pt-2">
          {/* DASHBOARD */}
          <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
            <FiHome />
            {!collapse && "Dashboard"}
          </NavLink>

          {/* STUDENTS */}
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

          {/* TEACHERS */}
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

          {/* PARENTS */}
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

          {/* 📚 LIBRARY */}
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

          {/* OTHER LINKS */}
          {menuItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => linkClass(isActive)}
            >
              <Icon className="text-lg" />
              {!collapse && <span>{label}</span>}
            </NavLink>
          ))}

          {/* ACCOUNT */}
          <Dropdown
            icon={FiUser}
            label="Account"
            open={accountOpen}
            setOpen={setAccountOpen}
            collapse={collapse}
            bottom
          >
            {[
              ["Profile", "/account/profile"],
              ["Settings", "/account/settings"],
              ["Logout", "/logout"],
            ]}
          </Dropdown>
        </nav>
      </aside>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </>
  );
};

/* 🔹 REUSABLE DROPDOWN COMPONENT */
const Dropdown = ({
  icon: Icon,
  label,
  open,
  setOpen,
  collapse,
  children,
  bottom,
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
        <div className={`ml-10 text-xs ${bottom ? "mb-4" : ""}`}>
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
