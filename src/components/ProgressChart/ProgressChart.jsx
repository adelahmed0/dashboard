import './progresschart.css';
// import {Cell, Pie, PieChart} from "recharts";
import {Chart} from "react-google-charts";


export const ProgressChart = () => {
    // const data = [
    //     {name: 'Group A', value: 500},
    //     {name: 'Group B', value: 200},
    // ];
    // const COLORS = ['#034488', 'rgba(3, 68, 136, 0.30)'];

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];
    // const options {
    //     colors:[
    //         {}
    //     ]
    // }
    return (
        <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"200px"}
        />
        // <div className='w-25'>
        //     <PieChart width={220} height={170} onClick={false}>
        //         <Pie
        //             width={20}
        //             data={data}
        //             innerRadius={60}
        //             outerRadius={80}
        //             cx="40%" cy="50%"
        //             dataKey="value"
        //
        //         >
        //             {data.map((entry, index) => (
        //                 <Cell key={`cell-${index}`}
        //                       fill={COLORS[index % COLORS.length]}/>
        //             ))}
        //         </Pie>
        //
        //     </PieChart>
        // </div>
    )
}