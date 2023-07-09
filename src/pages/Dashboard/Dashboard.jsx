import './dashboard.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HikingIcon from '@mui/icons-material/Hiking';
import {ProgressChart} from "../../components/ProgressChart/ProgressChart.jsx";
import {ChartColumnDashboard} from "../../components/ChartColumnDashboard/ChartColumnDashboard.jsx";

export const Dashboard = () => {

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
                        <Card className='cards-dashboard d-flex flex-row' border='none'>
                            <ProgressChart/>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='mt-5'>
                <Row className='justify-content-between'>
                    <Col className='me-1 pt-5' style={{backgroundColor: '#fff', borderRadius: '16px'}} md={8}>
                        <ChartColumnDashboard/>
                    </Col>
                    <Col className='px-4' style={{backgroundColor: '#fff', borderRadius: '16px'}} md={3}>
                        <div className='dash-events py-5'>
                            <h4 style={{color: '#034488', marginBottom: '20px'}}>Events</h4>
                            <Row className='flex-column g-2'>
                                <Col>
                                    <div className='dash-event-card d-flex'>
                                        <div className='me-2 dash-date'>
                                            <span className='d-block'>10</span>
                                            <span className=''>Jun</span>
                                        </div>
                                        <div>
                                            <h6>Team Meeting</h6>
                                            <p>Attend all Projects</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='dash-event-card d-flex'>
                                        <div className='me-2 dash-date'>
                                            <span className='d-block'>10</span>
                                            <span className=''>Jun</span>
                                        </div>
                                        <div>
                                            <h6>Team Meeting</h6>
                                            <p>Attend all Projects</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='dash-event-card d-flex'>
                                        <div className='me-2 dash-date'>
                                            <span className='d-block'>10</span>
                                            <span className=''>Jun</span>
                                        </div>
                                        <div>
                                            <h6>Team Meeting</h6>
                                            <p>Attend all Projects</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='dash-event-card d-flex'>
                                        <div className='me-2 dash-date'>
                                            <span className='d-block'>10</span>
                                            <span className=''>Jun</span>
                                        </div>
                                        <div>
                                            <h6>Team Meeting</h6>
                                            <p>Attend all Projects</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='mt-5'>
                <Row>
                    <Col sm={6} md={3}>
                        <Card className='cards-dashboard d-flex flex-row' border='none'>
                            <ProgressChart/>
                        </Card>
                    </Col>
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
                </Row>
            </div>
        </div>
    )
}