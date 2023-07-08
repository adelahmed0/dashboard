import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ViewerMember from '../attendence/ViewerMember.jsx'

function Attendencetable() {

    function createData(Emp_ID, Emp_name, Department_name, Date, Check_in, Check_out, Production , Status, Overtime,Details) {
        return {Emp_ID, Emp_name, Department_name, Date, Check_in, Check_out, Production, Status, Overtime, Details};
      }
      
      const rows = [
        createData(1,"Sara Wael","Ali Mohamed","15/6/2023","-","-","-","Absent","-"),
        createData(2,"Sara Wael","Ali Mohamed","15/6/2023","09:00 AM","-","9 Hrs","Present","2 Hrs"),
        createData(2,"Sara Wael","Ali Mohamed","15/6/2023","-","09:00 AM","9 Hrs","Absent","-"),
        createData(3,"Sara Wael","Ali Mohamed","15/6/2023","06:00 AM","09:00 AM","-","Late","3 Hrs"),
        createData(4,"Sara Wael","Ali Mohamed","15/6/2023","09:00 AM","-","-","Present","-"),
        createData(5,"Sara Wael","Ali Mohamed","15/6/2023","09:00 AM","-","-","Present","-"),
        createData(6,"Sara Wael","Ali Mohamed","15/6/2023","09:00 AM","-","-","Present","-"),
        createData(7,"Sara Wael","Ali Mohamed","15/6/2023","09:00 AM","-","-","Present","-")

      ];

  return (
    <div>
            <div className='attendence-container'>
                <Row>
                    <Col className='attendence-header'>Attendence</Col>
                    <Col>
                        <div className='search-attendence'>
                            <input className='attendence-search-input' type='search' placeholder='Search for attendences'/>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col><input className='Date-Attendence' type='date'/></Col>

                </Row>
            <br/>
                    <TableContainer component={Paper}>
        <Table sx={{minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Emp ID</TableCell>
                <TableCell align="left">Emp. Name</TableCell>
                <TableCell align="left">Dept. Name</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Check in</TableCell>
                <TableCell align="left">Check Out</TableCell>
                <TableCell align="left">Production</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Overtime</TableCell>
                <TableCell align="left">Details</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.Emp_ID}
                </TableCell>
                <TableCell align="left">{row.Emp_name}</TableCell>
                <TableCell align="left">{row.Department_name}</TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">{row.Check_in}</TableCell>
                <TableCell align="left">{row.Check_out}</TableCell>
                <TableCell align="left">{row.Production}</TableCell>
                <TableCell align="left">{row.Status}</TableCell>
                <TableCell align="left">{row.Overtime}</TableCell>
                <TableCell align="left"><button className='Attendence-btn'>view</button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
            </div>
        <ViewerMember/>

    </div>
  )
}

export default Attendencetable;