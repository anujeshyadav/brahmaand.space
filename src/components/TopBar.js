import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import profile from "../images/1.png";
import topBar from "../css/topBar.css"
import ProfileRouter from './ProfileRouter';

function TopBar() {
    return (
        <section className='mt-200'>

            <Container className='mt-100' >
                <div className='userDiv bg-white'>
                    <div className='st-1 text-center'>
                        <img src={profile} className='imageone' />
                    </div>
                    <Row className=' m-2 '>
                        <Col lg='4'>
                            <div className='list-st'>
                                <pre>
                                    <ul>
                                        <li style={{ color: 'black' }}>Username:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>CromSoldier</b></li>
                                        <li style={{ color: 'black' }}>Display name: <b>CromSoldier</b></li>
                                        <li style={{ color: 'black' }}>User Since:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>jun 26,2022</b></li>
                                        <li style={{ color: 'black' }}>Karma:        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>3700</b></li>
                                    </ul>
                                </pre>
                            </div>
                        </Col>
                        <Col lg='8'>
                            <b>About Us:</b>
                            <p>Professionnal embedded software engineer in real life, moonlighting with Android dev.
                                From the land of wine and cheese</p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <ProfileRouter />
        </section >

    )
}

export default TopBar;