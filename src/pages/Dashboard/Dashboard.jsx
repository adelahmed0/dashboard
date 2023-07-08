import './dashboard.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import BasicCard from "../../components/DashboardCard/DashboardCard";
import Card from "react-bootstrap/Card";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HikingIcon from '@mui/icons-material/Hiking';
import {PieChart, Pie, Cell,} from 'recharts';

export const Dashboard = () => {
    const data = [
        {name: 'Group A', value: 200},
        {name: 'Group B', value: 500},
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    return (
        <div className='dashboard'>
            <TopSearch/>
            <div className='mt-5'>
                <Row>
                    <Col sm={6} md={3}>
                        <Card className='cards-dashboard' border='none'>
                            <span className='cards-icon' style={{
                                backgroundColor: ' rgba(44, 128, 213, 0.70)',
                            }}>
                                <Diversity3Icon/>
                            </span>
                            <h6>Total Employees</h6>
                            <div className='spans-dashboard'>
                                <span className='fw-bold fs-5 me-1 text-card'>200</span>
                                <span className='color-dashboard me-1'>/</span>
                                <span className='color-dashboard'>200</span>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={6} md={3}>
                        <Card className='cards-dashboard' border='none'>
                            <span className='cards-icon' style={{
                                backgroundColor: 'rgba(255, 148, 122, 0.80)',
                            }}>
                                <CalendarTodayIcon/>
                            </span>
                            <h6>On Leave</h6>
                            <div className='spans-dashboard'>
                                <span className='fw-bold fs-5 me-1 text-card'>10</span>
                                <span className='color-dashboard me-1'>/</span>
                                <span className='color-dashboard'>200</span>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={6} md={3}>
                        <Card className='cards-dashboard' border='none'>
                            <span className='cards-icon' style={{
                                backgroundColor: 'rgba(79, 209, 197, 0.70)',
                            }}>
                                <HikingIcon/>
                            </span>
                            <h6>Trainers</h6>
                            <div className='spans-dashboard'>
                                <span className='fw-bold fs-5 me-1 text-card'>50</span>
                                <span className='color-dashboard me-1'>/</span>
                                <span className='color-dashboard'>100</span>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={6} md={3}>
                        <Card className='cards-dashboard' border='none'>
                            <PieChart width={120} height={150}>
                                <Pie
                                    data={data}
                                    innerRadius={60}
                                    outerRadius={80}
                                    cx="50%" cy="50%"
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`}
                                              fill={COLORS[index % COLORS.length]}/>
                                    ))}
                                </Pie>

                            </PieChart>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}