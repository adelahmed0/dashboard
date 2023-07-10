import './attendance.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Attendencetable from '../../components/attendence/Attendencetable.jsx';

export const Attendance = () => {
    return (
        <div className='attendance'>
            <TopSearch/>
            <Attendencetable/>
            
        </div>
    )
}