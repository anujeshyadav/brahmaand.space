import React from "react";
import "../components/blog.css";
import blog from "../images/2.png";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardImg,
} from "reactstrap";
import profile3 from "../images/5.png";
import profile4 from "../images/7.png";
import profile5 from "../images/14.png";
import profile6 from "../images/12.png";
import profile7 from "../images/11.png";
import profile8 from "../images/13.png";
import profile from "../images/3.png";
import profile1 from "../images/6.png";
import profile2 from "../images/4.png";
import pic3 from "../images/10.png";
import pic2 from "../images/8.png";
import pic1 from "../images/9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Blog() {
  return (
    <div className="" style={{ background: "white" }}>
      <Container fluid className="" style={{ position: "relative" }}>
        <div
          style={{
            backgroundImage: `url(${blog})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            padding: "200px 46%",
            backgroundRepeat: "no-repeat",
            height: "80vh",
            opacity: 0.8,
          }}
        >
          <h1 style={{ color: "#fff" }}>Blogs</h1>
        </div>
      </Container>

      <Container>
        <Row className=" m-2 ">
          <h1 style={{ font: "GT Walsheim Pro" }}>Recommended Blogs</h1>
        </Row>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <Row>
            <SwiperSlide>
              <Col lg="12">
                <Row>
                  <Col lg="6">
                    <img src={profile} className="" width={"100%"} />
                  </Col>
                  <Col lg="6">
                    <Row>
                      <b>
                        5 Terrific Sites to Ask Your Programming Questions
                        Besides Stackoverflow
                      </b>
                    </Row>

                    <h6 style={{ color: "#5F56C6"}}>Sep 14, 2022</h6>
                    <h6>
                      Introduction to Java + Installing Java JDK and IntelliJ
                      IDEA for Java 19:00 Basic Structure of a Java Program:
                      Understanding our First Java Hello World Program 14:09{" "}
                    </h6>
                    <h6>
                      posted by <img src={profile1} /> <b>Florian</b>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col lg="12">
                <Row>
                  <Col lg="6">
                    <img src={profile2} className="" width={"100%"} />
                  </Col>
                  <Col lg="6">
                    <Row>
                      <b>
                        5 Terrific Sites to Ask Your Programming Questions
                        Besides Stackoverflow
                      </b>
                    </Row>
                    <h6 style={{ color: "#5F56C6" }}>Sep 14, 2022</h6>
                    <h6>
                      Introduction to Java + Installing Java JDK and IntelliJ
                      IDEA for Java 19:00 Basic Structure of a Java Program:
                      Understanding our First Java Hello World Program 14:09{" "}
                    </h6>
                    <h6>
                      posted by <img src={profile1} /> <b>Florian</b>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col lg="12">
                <Row>
                  <Col lg="6">
                    <img src={profile2} className="" width={"100%"} />
                  </Col>
                  <Col lg="6">
                    <Row>
                      <b>
                        5 Terrific Sites to Ask Your Programming Questions
                        Besides Stackoverflow
                      </b>
                    </Row>
                    <h6 style={{ color: "#5F56C6" }}>Sep 14, 2022</h6>
                    <h6>
                      Introduction to Java + Installing Java JDK and IntelliJ
                      IDEA for Java 19:00 Basic Structure of a Java Program:
                      Understanding our First Java Hello World Program 14:09{" "}
                    </h6>
                    <h6>
                      posted by <img src={profile1} /> <b>Florian</b>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </SwiperSlide>
          </Row>
        </Swiper>
      </Container>
      <Container>
        <Row className=" m-2 ">
          <h1 style={{ font: "GT Walsheim Pro" }}>Popular Blogs</h1>
        </Row>
        <Row>
          <Col lg="4">
            <Card>
              <CardImg src={profile3} className="photo" />
              <CardBody>
                <CardTitle>
                  <b>
                    
                    5 Terrific Sites to Ask Your Programming Questions Besides
                    Stackoverflow
                  </b>
                </CardTitle>
                <CardSubtitle>
                  <span>
                    <b style={{ color: "#5F56C6" }}>Sep 14,2022 </b>
                  </span>
                </CardSubtitle>
                <br></br>
                <CardText>
                  <span>
                    
                    Introduction to java + installing java JDK and intelliJ IDEA
                    for Java 19:00 Basic Structure of a Java Program:
                    Understanding our First Java Hello World Program 14:09
                  </span>
                </CardText>
                <CardText>
                  posted by &nbsp;&nbsp;
                  <img src={pic1} className="photo" />
                  &nbsp;&nbsp;<b>Florian</b>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card>
              <CardImg src={profile4} className="photo" />
              <CardBody>
                <CardTitle>
                  <b>
                    
                    5 Terrific Sites to Ask Your Programming Questions Besides
                    Stackoverflow
                  </b>
                </CardTitle>
                <CardSubtitle>
                  <span>
                    <b style={{ color: "#5F56C6" }}>Sep 14,2022 </b>
                  </span>
                </CardSubtitle>
                <br></br>
                <CardText>
                  <span>
                    
                    Introduction to java + installing java JDK and intelliJ IDEA
                    for Java 19:00 Basic Structure of a Java Program:
                    Understanding our First Java Hello World Program 14:09
                  </span>
                </CardText>
                <CardText>
                  posted by &nbsp;&nbsp;
                  <img src={pic2} className="photo" />
                  &nbsp;&nbsp;<b>Florian</b>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card>
              <CardImg src={profile5} className="photo" />
              <CardBody>
                <CardTitle>
                  <b>
                    
                    5 Terrific Sites to Ask Your Programming Questions Besides
                    Stackoverflow
                  </b>
                </CardTitle>
                <CardSubtitle>
                  <span>
                  <Row> <b style={{ color: "#5F56C6" }}>Sep 14,2022 </b></Row>
                   
                  </span>
                </CardSubtitle>
                <br></br>
                <CardText>
                  <span>
                    
                    Introduction to java + installing java JDK and intelliJ IDEA
                    for Java 19:00 Basic Structure of a Java Program:
                    Understanding our First Java Hello World Program 14:09
                  </span>
                </CardText>
                <CardText>
                  posted by &nbsp;&nbsp;
                  <img src={pic3} className="photo" />
                  &nbsp;&nbsp;<b>Florian</b>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col lg="4">
            <Card>
              <CardImg src={profile6} className="photo" />
              <CardBody>
                <CardTitle>
                  <b>
                    
                    5 Terrific Sites to Ask Your Programming Questions Besides
                    Stackoverflow
                  </b>
                </CardTitle>
                <CardSubtitle>
                  <span>
                    <b style={{ color: "#5F56C6" }}>Sep 14,2022 </b>
                  </span>
                </CardSubtitle>
                <br></br>
                <CardText>
                  <span>
                    
                    Introduction to java + installing java JDK and intelliJ IDEA
                    for Java 19:00 Basic Structure of a Java Program:
                    Understanding our First Java Hello World Program 14:09
                  </span>
                </CardText>
                <CardText>
                  posted by &nbsp;&nbsp;
                  <img src={pic1} className="photo" />
                  &nbsp;&nbsp;<b>Florian</b>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardImg src={profile7} className="photo" />
              <CardBody>
                <CardTitle>
                  <b>
                   
                    5 Terrific Sites to Ask Your Programming Questions Besides
                    Stackoverflow
                  </b>
                </CardTitle>
                <CardSubtitle>
                  <span>
                    <b style={{ color: "#5F56C6" }}>Sep 14,2022 </b>
                  </span>
                </CardSubtitle>
                <br></br>
                <CardText>
                  <span>
                   
                    Introduction to java + installing java JDK and intelliJ IDEA
                    for Java 19:00 Basic Structure of a Java Program:
                    Understanding our First Java Hello World Program 14:09
                  </span>
                </CardText>
                <CardText>
                  posted by &nbsp;&nbsp;
                  <img src={pic2} className="photo" />
                  &nbsp;&nbsp;<b>Florian</b>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardImg src={profile8} className="photo" />
              <CardBody>
                <CardTitle>
                  <b>
                    
                    5 Terrific Sites to Ask Your Programming Questions Besides
                    Stackoverflow
                  </b>
                </CardTitle>
                <CardSubtitle>
                  <span>
                    <b style={{ color: "#5F56C6" }}>Sep 14,2022 </b>
                  </span>
                </CardSubtitle>
                <br></br>
                <CardText>
                  <span>
                    
                    Introduction to java + installing java JDK and intelliJ IDEA
                    for Java 19:00 Basic Structure of a Java Program:
                    Understanding our First Java Hello World Program 14:09
                  </span>
                </CardText>
                <CardText>
                  posted by &nbsp;&nbsp;
                  <img src={pic3} className="photo" />
                  &nbsp;&nbsp;<b>Florian</b>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Blog;
