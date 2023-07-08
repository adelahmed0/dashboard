import './departments.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import EnhancedTable from '../../components/table/EnhancedTable';

export const Departments = () => {
    return (
        <div className='departments'>
            <TopSearch/>
            <EnhancedTable/>
        </div>
    )
}