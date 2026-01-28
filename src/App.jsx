import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Students from './components/Students.jsx'
import StudentsForm from './components/AddStudent.jsx'
import AddStudent from './components/AddStudent.jsx';
import Teachers from './components/Teachers.jsx';
import StudentsDetail from './components/StudentsDetail.jsx';
import TeacherDetail from "./components/TeachersDetail.jsx";
import AddTeacher from './components/AddTeacher.jsx';
import Parents from './components/Parents.jsx';
import LibraryList from './components/LibraryList.jsx';
import FeeCollection from './components/FeeCollection.jsx';
import IssueBooks from './components/IssueBooks.jsx';
import Expenses from './components/Expenses.jsx'
import StudentPayment from './components/StudentPayment.jsx'
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
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/students/:roll" element={<StudentsDetail />} />
          <Route path="/teachers/:id" element={<TeacherDetail />} />
          <Route path="/teachers" element={<Teachers />} />
           <Route path="/teachers/add" element={<AddTeacher />} />
          <Route path="/parents" element={<Parents />} />
          <Route  path="/library/issue" element={<IssueBooks/>}/>
          <Route path="/library" element={<LibraryList />} />
          <Route path="/account/feecollection" element={<FeeCollection/>}/>
          <Route path="/account/studentpayment" element={<StudentPayment/>}/>
          <Route path ="/allexpenses"  element={<Expenses/>}/>
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
