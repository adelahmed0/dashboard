import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PayTable = () => {
    function PayrollcreateData(id, name, email_address, gross, taxes, net, performance, status) {
        return { id, name, email_address, gross, taxes, net, performance, status };
      }

      const rows = [
       PayrollcreateData ("01", " Fatma Omar","fatma@gmail.com", "6000 EGP","1200", "4800 EGP", "Good", "Paid", ),
       PayrollcreateData ("02", " Fatma Omar", "fatma@gmail.com", "6000 EGP","1200", "4800 EGP", "Poor", "UnPaid",),
       PayrollcreateData("03", " Fatma Omar", "fatma@gmail.com", "6000 EGP","1200", "4800 EGP", "Moderate", "Pending",),
       PayrollcreateData("04", " Fatma Omar", "fatma@gmail.com", "6000 EGP","1200", "4800 EGP","Good", "Paid",)
      ];

  return (
    <div style={{width:"100%",marginTop:30 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="payroll-left">ID</TableCell>
                <TableCell align="payroll-left">name</TableCell>
                <TableCell align="payroll-left">Email Address </TableCell>
                <TableCell align="payroll-left">Gross</TableCell>
                <TableCell align="payroll-left">Taxes</TableCell>
                <TableCell align="payroll-left">Net</TableCell>
                <TableCell align="payroll-left">Performance</TableCell>
                <TableCell align="payroll-left">Status</TableCell>
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
                  <TableCell align="payroll-left">{row.name}</TableCell>
                  <TableCell align="payroll-left">{row.email_address}</TableCell>
                  <TableCell align="payroll-left">{row.gross}</TableCell>
                  <TableCell align="payroll-left">{row.taxes}</TableCell>
                  <TableCell align="payroll-left">{row.net}</TableCell>
                  <TableCell align="payroll-left">{row.performance}</TableCell>
                  <TableCell align="payroll-left">{row.status}</TableCell>
                  <TableCell align="payroll-left">{row.Reason}</TableCell>
                  {/* <TableCell align="left"><CheckCircleIcon /><ClearIcon /></TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      
    
  )
}

export default PayTable
