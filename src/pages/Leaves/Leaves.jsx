import './leaves.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Employee from '../../components/Employee.jsx';
// import Table from 'react-bootstrap/Table';


export const Leaves = () => {


  function createData(id, name, Department_role, Date, Status, Leave_from, Leave_To, Leave_Type, Reason, Action) {
    return { id, name, Department_role, Date, Status, Leave_from, Leave_To, Leave_Type, Reason, Action };
  }

  const rows = [
    createData(1, "Ayman Hossam", "Graphic Designer", "20 Feb 2022", "Pending", "20 Feb 2022", "20 Feb 2022", "Sick", "Lorem ipsum",),
    createData(2, "Ayman Hossam", "Graphic Designer", "20 Feb 2022", "Pending", "20 Feb 2022", "20 Feb 2022", "Sick", "Lorem ipsum",),
    createData(3, "Ayman Hossam", "Graphic Designer", "20 Feb 2022", "Pending", "20 Feb 2022", "20 Feb 2022", "Sick", "Lorem ipsum",),
    createData(4, "Ayman Hossam", "Graphic Designer", "20 Feb 2022", "Pending", "20 Feb 2022", "20 Feb 2022", "Sick", "Lorem ipsum",)
  ];


  return (
    <div className='leaves'>
      <TopSearch />
      <div className='leaves-container'>
        <Row>
          <Col className='leaves-header'>Leaves Request</Col>
          <Col>
            <div className='search-leaves'>
              <input className='leaves-search-input' type='search' placeholder='Search for Employees' />
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">name</TableCell>
                <TableCell align="left">Department Role</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Leave From</TableCell>
                <TableCell align="left">Leave To</TableCell>
                <TableCell align="left">Leave Type</TableCell>
                <TableCell align="left">Reason</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.Department_role}</TableCell>
                  <TableCell align="left">{row.Date}</TableCell>
                  <TableCell align="left">{row.Status}</TableCell>
                  <TableCell align="left">{row.Leave_from}</TableCell>
                  <TableCell align="left">{row.Leave_To}</TableCell>
                  <TableCell align="left">{row.Leave_Type}</TableCell>
                  <TableCell align="left">{row.Reason}</TableCell>
                  <TableCell align="left"><CheckCircleIcon /><ClearIcon /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
