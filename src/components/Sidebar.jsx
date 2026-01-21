import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiMenu,
  FiHome,
  FiUsers,
  FiUser,
  FiBook,
  FiBell,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaSchool } from "react-icons/fa";
import cap from "../assets/cap.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false); 
  const [collapse, setCollapse] = useState(false); 

  const menu = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Students", path: "/students", icon: <FiUsers /> },
    { name: "Teachers", path: "/teachers", icon: <FiUser /> },
    { name: "Parents", path: "/parents", icon: <FiUsers /> },
    { name: "Library", path: "/library", icon: <FiBook /> },
    { name: "Class", path: "/class", icon: <FaSchool /> },
    { name: "Subject", path: "/subject", icon: <FiBook /> },
    { name: "Class Routine", path: "/routine", icon: <FiBell /> },
    { name: "Attendance", path: "/attendance", icon: <FiUsers /> },
    { name: "Exam", path: "/exam", icon: <FiBook /> },
    { name: "Transport", path: "/transport", icon: <FiMapPin /> },
    { name: "Hostel", path: "/hostel", icon: <FiHome /> },
    { name: "Notice", path: "/notice", icon: <FiBell /> },
    { name: "Message", path: "/message", icon: <FiMail /> },
    { name: "Map", path: "/map", icon: <FiMapPin /> },
    { name: "Account", path: "/account", icon: <FiUser /> },
  ];

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full h-14 bg-[#FFC107] flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2">
          <img src={cap} className="w-6 h-6" />
          <span className="font-bold text-white">Akkhor</span>
        </div>
        <button onClick={() => setOpen(true)} className="text-white text-2xl">
          <FiMenu />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen
        ${collapse ? "w-16" : "w-64"}
        bg-gradient-to-b from-[#0f2a44] to-[#0a1f33]
        text-white z-40 transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* 🔸 SIDEBAR HEADER */}
        <div className="h-14 bg-[#FFC107] flex items-center justify-between px-3">
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
              window.innerWidth < 768
                ? setOpen(false)
                : setCollapse(!collapse)
            }
            className="text-white text-xl"
          >
            <FiMenu />
          </button>
        </div>
        <nav className="mt-2">
          {menu.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm
                 hover:bg-white/10 transition
                 ${isActive ? "bg-white/20 border-l-4 border-yellow-400" : ""}`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {!collapse && item.name}
            </NavLink>
          ))}
        </nav>
      </div>
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
