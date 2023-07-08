import './leaves.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Employee from '../../components/Employee.jsx';
import Table from 'react-bootstrap/Table';

export const Leaves = () => {
    const [employees,setEmployees] = useState([]);
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setEmployees(data))
    },[])

    const EmployeesData = employees.map((employee) => {
        return(
            <Employee key={employee.id} employee={employee}/>
        );
    })
    return (
        <div className='leaves'>
            <TopSearch/>
            <div className='leaves-container'>
                <Row className=''>
                    <Col className='leaves-header'>Leaves Request</Col>
                    <Col>
                        <div className='search-leaves'>
                            <input className='leaves-search-input' type='search' placeholder='Search for Employees'/>
                        </div>
                    </Col>
                </Row>
                <div className='Table-leaves'>
                        <Table responsive borderless>
            <thead>
                <tr>
                {Array.from({ length: 1 }).map((id) => (
                    <th className='Name-leaves' key={id}>id</th>
                ))}
                {Array.from({ length: 1 }).map((title) => (
                    <th className='Name-leaves' key={title}>Name</th>
                ))}
                {Array.from({ length: 1 }).map((Department_Role) => (
                    <th className='Department_Role-leaves' key={Department_Role}>Depatment Role</th>
                ))}
                {Array.from({ length: 1 }).map((Date) => (
                    <th className='Date-leaves' key={Date}>Date</th>
                ))}
                {Array.from({ length: 1 }).map((Status) => (
                    <th className='Status-leaves' key={Status}>Status</th>
                ))}
                {Array.from({ length: 1 }).map((Leave_From) => (
                    <th className='Leave_From-leaves' key={Leave_From}>Leave From</th>
                ))}
                {Array.from({ length: 1 }).map((Leave_To) => (
                    <th className='Leave_To-leaves' key={Leave_To}>Leave To</th>
                ))}
                {Array.from({ length: 1 }).map((Leave_Type) => (
                    <th className='Leave_Type-leaves' key={Leave_Type}>Leave Type</th>
                ))}
                {Array.from({ length: 1 }).map((Reason) => (
                    <th className='Reason-leaves' key={Reason}>Reason</th>
                ))}
                {Array.from({ length: 1 }).map((Action) => (
                    <th className='Action-leaves' key={Action}>Action</th>
                ))}
                </tr> 
            </thead>
            <tbody>
                {/* <td>1</td> */}
                {/* {Array.from({ length: 10 }).map((id) => (
                    <td key={id}> 
                    {EmployeesData}
                    </td>
                ))} */}
            {employees.map(employee => (
              <>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.title}</td>
                <td>{employee.description}</td>
                <td>{employee.price}</td>
                <td>{employee.category}</td>
                <td>{employee.category}</td>
              </tr>
              </>
            ))}
            </tbody>
            </Table>
            </div>
            </div>
        </div>
    )
}