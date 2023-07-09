import './payroll.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Chart from '../../components/payroll-chart/Chart'
import { useState,useEffect } from 'react';

import PieChart from '../../components/payroll-chart/Piechart'
import { Directions } from '@mui/icons-material';




export const Payroll = () => {
    const [data, setdata] = useState();
    useEffect(() => {
        const fetchDatas = async () => {
          const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
          const data = await res.json();
          console.log(data);
          setdata(data?.data);
        };
        fetchDatas();
      }, []);
    return (
        <div className='payroll'>
            <TopSearch/>
           <div  className="payroll-two-cards" style={{display:'flex', flexDirections:'row',flexWrap:'wrap',justifyContent:'space-between',marginTop:"20px"}}> 
           <Chart data={data}  />
           <PieChart className="payroll-pie-chart"/>
           </div>
            
        </div>
    )
}