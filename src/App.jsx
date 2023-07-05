// import {useState} from 'react'
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Dashboard} from "./pages/Dashboard/Dashboard";
import {Members} from "./pages/Members/Members";
import {Departments} from "./pages/Departments/Departments";
import {Attendance} from "./pages/Attendance/Attendance";
import {Leaves} from "./pages/Leaves/Leaves";
import {Projects} from "./pages/Projects/Projects";
import {Events} from "./pages/Events/Events";
import {Payroll} from "./pages/Payroll/Payroll.jsx";
import {Settings} from "./pages/Settings/Settings";
import {Signup} from './pages/Signup/Signup';

function App() {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/members" element={<Members/>}/>
                    <Route path="/departments" element={<Departments/>}/>
                    <Route path="/attendance" element={<Attendance/>}/>
                    <Route path="/leaves" element={<Leaves/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/payroll" element={<Payroll/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </Sidebar>
        </BrowserRouter>)
}

export default App
