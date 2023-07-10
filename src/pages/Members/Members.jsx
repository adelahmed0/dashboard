import './members.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import AddEmployee from "../../components/AddEmployee/AddEmployee.jsx";
import {useState} from "react";
import {AllEmployees} from "../../components/AllEmployees/AllEmployees.jsx";

export const Members = () => {

    const [addEmployee, setAddEmployee] = useState(false);
    const handleShow = () => {
        setAddEmployee(!addEmployee)
    }
    return (
        <div className='members'>
            <TopSearch/>
            {
                addEmployee ? <AddEmployee handleShow={handleShow}/> : <AllEmployees handleShow={handleShow}/>
            }

        </div>
    )
}