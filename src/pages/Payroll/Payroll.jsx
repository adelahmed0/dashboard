import './payroll.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Chart from '../../components/payroll-chart/Chart'
import { useState,useEffect } from 'react';

import PieChart from '../../components/payroll-chart/Piechart'
import { Directions } from '@mui/icons-material';
import PayTable from '../../components/payroll-chart/PayTable';




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
           <div  className="d-flex flex-wrap justify-content-between mt-4" > 
           <Chart data={data}  />
           <PieChart className="payroll-pie-chart"/>
           </div>
           <PayTable/>
            
        </div>
    )
}