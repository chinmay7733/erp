import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Students from './components/Students.jsx'
function App() {
  const [count, setCount] = useState(0)
const Page = ({ title }) => (
  <h1 className="text-2xl font-bold">{title}</h1>)
  return (
  
    <div className="flex">
        
      <Sidebar open={open} />
        
      <div className="flex-1 p-6 md:ml-64">
        <Routes>
      
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Page title="Teachers" />} />
          <Route path="/parents" element={<Page title="Parents" />} />
          <Route path="/library" element={<Page title="Library" />} />
          <Route path="/class" element={<Page title="Class" />} />
          <Route path="/subject" element={<Page title="Subject" />} />
          <Route path="/routine" element={<Page title="Class Routine" />} />
          <Route path="/attendance" element={<Page title="Attendance" />} />
          <Route path="/exam" element={<Page title="Exam" />} />
          <Route path="/transport" element={<Page title="Transport" />} />
          <Route path="/hostel" element={<Page title="Hostel" />} />
          <Route path="/notice" element={<Page title="Notice" />} />
          <Route path="/message" element={<Page title="Message" />} />
          <Route path="/map" element={<Page title="Map" />} />
          <Route path="/account" element={<Page title="Account" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
