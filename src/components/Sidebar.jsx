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
} from "react-icons/fi";
import { FaSchool } from "react-icons/fa";
import cap from "../assets/cap.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [collapse, setCollapse] = useState(false);

  const [studentsOpen, setStudentsOpen] = useState(false);
  const [teachersOpen, setTeachersOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const location = useLocation();

  const linkClass = (active) =>
    `flex items-center gap-3 px-2 py-2 text-sm transition
     hover:bg-white/10
     ${active ? "bg-white/20 border-l-4 border-yellow-400" : ""}`;

  return (
    <>
      {/* 🔹 MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 w-full h-14 bg-[#FFC107] flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2">
          <img src={cap} className="w-6 h-6" />
          <span className="font-bold text-white">Akkhor</span>
        </div>
        <button onClick={() => setOpen(true)} className="text-white text-2xl">
          <FiMenu />
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 h-screen
        ${collapse ? "w-16" : "w-64"}
        bg-gradient-to-b from-[#0f2a44] to-[#0a1f33]
        text-white z-40 transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        flex flex-col`}
      >
        <div className="h-14 bg-[#FFC107] flex items-center justify-between px-3 shrink-0">
          <div className="flex items-center gap-2">
            <img src={cap} className="w-6 h-6" />
            {!collapse && (
              <span className="font-bold text-white">
                Akkhor <sup className="text-xs">TM</sup>
              </span>
            )}
          </div>
          <button
            onClick={() =>
              window.innerWidth < 768 ? setOpen(false) : setCollapse(!collapse)
            }
            className="text-white text-xl"
          >
            <FiMenu />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto scrollbar-akkhor">
          <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
            <FiHome />
            {!collapse && "Dashboard"}
          </NavLink>
          <button
            onClick={() => setStudentsOpen(!studentsOpen)}
            className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <FiUsers />
              {!collapse && "Students"}
            </div>
            {!collapse && (
              <FiChevronDown
                className={`transition-transform ${
                  studentsOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {studentsOpen && !collapse && (
            <div className="ml-10 text-xs">
              {[
                ["All Students", "/students"],
                ["Admit Form", "/AddStudent"],
               
              ].map(([label, path]) => (
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

          <button
            onClick={() => setTeachersOpen(!teachersOpen)}
            className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <FiUserCheck />
              {!collapse && "Teachers"}
            </div>
            {!collapse && (
              <FiChevronDown
                className={`transition-transform ${
                  teachersOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {teachersOpen && !collapse && (
            <div className="ml-10 text-xs">
              {[
                ["All Teachers", "/teachers"],
                ["Add Teacher", "/teachers/add"],
                
              ].map(([label, path]) => (
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

          {[
            // ["Teachers", "/teachers", <FiUser />],
            ["Parents", "/parents", <FiUsers />],
            ["Library", "/library", <FiBook />],
            ["Class", "/class", <FaSchool />],
            ["Subject", "/subject", <FiBook />],
            ["Class Routine", "/routine", <FiBell />],
            ["Attendance", "/attendance", <FiUsers />],
            ["Exam", "/exam", <FiBook />],
            ["Transport", "/transport", <FiMapPin />],
            ["Hostel", "/hostel", <FiHome />],
            ["Notice", "/notice", <FiBell />],
            ["Message", "/message", <FiMail />],
            ["UI Elements", "/ui-elements", <FiGrid />],
            ["Map", "/map", <FiMapPin />],
          ].map(([label, path, icon]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => linkClass(isActive)}
            >
              {icon}
              {!collapse && label}
            </NavLink>
          ))}

          <button
            onClick={() => setAccountOpen(!accountOpen)}
            className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <FiUser />
              {!collapse && "Account"}
            </div>
            {!collapse && (
              <FiChevronDown
                className={`transition-transform ${
                  accountOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {accountOpen && !collapse && (
            <div className="ml-10 text-xs mb-4">
              {[
                ["Profile", "/account/profile"],
                ["Settings", "/account/settings"],
                ["Logout", "/logout"],
              ].map(([label, path]) => (
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
        </nav>
      </aside>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
