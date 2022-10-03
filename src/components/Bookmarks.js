import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardTitle, CardSubtitle, } from 'reactstrap'
import cate from '../images/24.png'
import cate1 from '../images/25.png'
import cate2 from '../images/26.png'
import cate3 from '../images/27.png'
import cate4 from '../images/28.png'
import cate5 from '../images/29.png'
import { FaCalendar } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import topBar from "../css/topBar.css"

function Bookmarks() {
  return (
    <div className='test nohover'>
      <div className=''>
        <Card>
          <Row className=' m-3 '>
            <Col lg='4'>
              <div className=''>
                <img src={cate} className='cardImage' />
              </div>

            </Col>
            <Col lg='8' style={{ textAlign: 'left' }}>
              <CardTitle className='' style={{ color: 'blue', textAlign: 'left' }}>#best &nbsp; #study</CardTitle>
              <CardSubtitle><b>Java Tutorials For Begninner In Hindi </b></CardSubtitle>
              <CardSubtitle>by &nbsp;  <b>CodeWithHarry</b>&nbsp;&nbsp;<span style={{ color: '#5F56C6' }}><FaCalendar color='#5F56C6' />12 September 2022</span></CardSubtitle>
              <CardText>Introduction to java + installing java JDK and intelliJ IDEA for Java 19:00 Basic Structure Program 14:09</CardText>
              <Row>
                <Col lg='2' style={{ color: '#FCAF3B' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Col>
                <Col lg='2' style={{ color: '#FCAF3B' }}>4.0</Col>
                <Col lg='3'><b><span style={{ color: '#5F56C6' }}>12.2k Reviews</span></b></Col>
              </Row>
              <Row>
                <Col lg='2'>2022</Col>
                <Col lg='2'>#Java</Col>
                <Col lg='2'>#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=' m-2 '>
            <Col lg='4'>
              <div className=''>
                <img src={cate1} className='cardImage' />
              </div>

            </Col>
            <Col lg='8' style={{ textAlign: 'left' }}>
              <CardTitle className='text-align right' style={{ color: 'blue' }}>#best &nbsp; #study</CardTitle>
              <CardSubtitle><b>Java Tutorials For Begninner In Hindi </b></CardSubtitle>
              <CardSubtitle>by &nbsp;  <b>CodeWithHarry</b>&nbsp;&nbsp;<span style={{ color: '#5F56C6' }}><FaCalendar color='#5F56C6' />12 September 2022</span></CardSubtitle>
              <CardText>Introduction to java + installing java JDK and intelliJ IDEA for Java 19:00 Basic Structure Program 14:09</CardText>
              <Row>
                <Col lg='2' style={{ color: '#FCAF3B' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Col>

                <Col lg='2' style={{ color: '#FCAF3B' }}>4.0</Col>
                <Col lg='3'><b><span style={{ color: '#5F56C6' }}>12.2k Reviews</span></b></Col>
              </Row>
              <Row>
                <Col lg='2'>2022</Col>
                <Col lg='2'>#Java</Col>
                <Col lg='2'>#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=' m-2 '>
            <Col lg='4'>
              <div className=''>
                <img src={cate2} className='cardImage' />
              </div>

            </Col>
            <Col lg='8' style={{ textAlign: 'left' }}>
              <CardTitle className='text-align right' style={{ color: 'blue' }}>#best &nbsp; #study</CardTitle>
              <CardSubtitle><b>Java Tutorials For Begninner In Hindi </b></CardSubtitle>
              <CardSubtitle>by &nbsp;  <b>CodeWithHarry</b>&nbsp;&nbsp;<span style={{ color: '#5F56C6' }}><FaCalendar color='#5F56C6' />12 September 2022</span></CardSubtitle>
              <CardText>Introduction to java + installing java JDK and intelliJ IDEA for Java 19:00 Basic Structure Program 14:09</CardText>
              <Row>
                <Col lg='2' style={{ color: '#FCAF3B' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Col>

                <Col lg='2' style={{ color: '#FCAF3B' }}>4.0</Col>
                <Col lg='3'><b><span style={{ color: '#5F56C6' }}>12.2k Reviews</span></b></Col>
              </Row>
              <Row>
                <Col lg='2'>2022</Col>
                <Col lg='2'>#Java</Col>
                <Col lg='2'>#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=' m-2 '>
            <Col lg='4'>
              <div className=''>
                <img src={cate3} className='cardImage' />
              </div>

            </Col>
            <Col lg='8' style={{ textAlign: 'left' }}>
              <CardTitle className='text-align right' style={{ color: 'blue' }}>#best &nbsp; #study</CardTitle>
              <CardSubtitle><b>Java Tutorials For Begninner In Hindi </b></CardSubtitle>
              <CardSubtitle>by &nbsp;  <b>CodeWithHarry</b>&nbsp;&nbsp;<span style={{ color: '#5F56C6' }}><FaCalendar color='#5F56C6' />12 September 2022</span></CardSubtitle>
              <CardText>Introduction to java + installing java JDK and intelliJ IDEA for Java 19:00 Basic Structure Program 14:09</CardText>
              <Row>
                <Col lg='2' style={{ color: '#FCAF3B' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Col>

                <Col lg='2' style={{ color: '#FCAF3B' }}>4.0</Col>
                <Col lg='3'><b><span style={{ color: '#5F56C6' }}>12.2k Reviews</span></b></Col>
              </Row>
              <Row>
                <Col lg='2'>2022</Col>
                <Col lg='2'>#Java</Col>
                <Col lg='2'>#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=' m-2 '>
            <Col lg='4'>
              <div className=''>
                <img src={cate4} className='cardImage' />
              </div>

            </Col>
            <Col lg='8' style={{ textAlign: 'left' }}>
              <CardTitle className='text-align right' style={{ color: 'blue' }}>#best &nbsp; #study</CardTitle>
              <CardSubtitle><b>Java Tutorials For Begninner In Hindi </b></CardSubtitle>
              <CardSubtitle>by &nbsp;  <b>CodeWithHarry</b>&nbsp;&nbsp;<span style={{ color: '#5F56C6' }}><FaCalendar color='#5F56C6' />12 September 2022</span></CardSubtitle>
              <CardText>Introduction to java + installing java JDK and intelliJ IDEA for Java 19:00 Basic Structure Program 14:09</CardText>
              <Row>
                <Col lg='2' style={{ color: '#FCAF3B' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Col>

                <Col lg='2' style={{ color: '#FCAF3B' }}>4.0</Col>
                <Col lg='3'><b><span style={{ color: '#5F56C6' }}>12.2k Reviews</span></b></Col>
              </Row>
              <Row>
                <Col lg='2'>2022</Col>
                <Col lg='2'>#Java</Col>
                <Col lg='2'>#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=' m-2 '>
            <Col lg='4'>
              <div className=''>
                <img src={cate5} className='cardImage' />
              </div>

            </Col>
            <Col lg='8'>
              <CardTitle className='text-align right' style={{ color: 'blue' }}>#best &nbsp; #study</CardTitle>
              <CardSubtitle><b>Java Tutorials For Begninner In Hindi </b></CardSubtitle>
              <CardSubtitle>by &nbsp;  <b>CodeWithHarry</b>&nbsp;&nbsp;<span style={{ color: '#5F56C6' }}><FaCalendar color='#5F56C6' />12 September 2022</span></CardSubtitle>
              <CardText>Introduction to java + installing java JDK and intelliJ IDEA for Java 19:00 Basic Structure Program 14:09</CardText>
              <Row>
                <Col lg='2' style={{ color: '#FCAF3B' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Col>

                <Col lg='2' style={{ color: '#FCAF3B' }}>4.0</Col>
                <Col lg='3'><b><span style={{ color: '#5F56C6' }}>12.2k Reviews</span></b></Col>
              </Row>
              <Row>
                <Col lg='2'>2022</Col>
                <Col lg='2'>#Java</Col>
                <Col lg='2'>#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    </div>

  )
}

export default Bookmarks