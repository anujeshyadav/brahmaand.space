import React from "react";
import { useEffect, useState, useMemo } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "../components/blog.css";
import blog from "../images/2.png";
import axios from "axios";
import swal from "sweetalert";
import ShowMore from "react-show-more";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardImg,
} from "reactstrap";

import profile6 from "../images/12.png";
import profile7 from "../images/11.png";
import profile8 from "../images/13.png";

import pic3 from "../images/10.png";
import pic2 from "../images/8.png";
import pic1 from "../images/9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Blog() {
  const [recomblog, setRecomblog] = useState([]);
  useEffect(() => {
    reconmendedblog();
    popularblog();
  }, []);

  const reconmendedblog = () => {
    axios
      .get(`http://3.7.173.138:9000/user/recomanded_Blog`)

      .then((response) => {
        setRecomblog(response.data.data);
        console.log(recomblog);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  };
  const [popblog, setPop] = useState([]);
  const popularblog = () => {
    axios
      .get(`http://3.7.173.138:9000/user/popularBlog`)

      .then((response) => {
        setPop(response.data.data);
        console.log(recomblog);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  };

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
        {/* this is working blog */}
        <Row className=" mt-5 ">
          <h1 className="mb-5" style={{ font: "GT Walsheim Pro" }}>
            Recommended Blogs
          </h1>
        </Row>

        {/* api down here */}

        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <Row>
            {recomblog?.map((value) => (
              <SwiperSlide
                className="mb-3 mt-4"
                style={{
                  boxShadow: "9px 13px 8px -11px",
                  borderRadius: "10px",
                }}
              >
                <Col lg="12">
                  <Row>
                    <Col lg="6">
                      <img
                        src={value.blogImg}
                        style={{
                          borderRadius: "12px",
                          width: "280px",
                          height: "280px",
                        }}
                      />
                    </Col>
                    <Col lg="6">
                      <Row className="mt-3">
                        <b>
                          <h3>{value.blog_title}</h3>
                        </b>
                      </Row>

                      <h6 style={{ color: "#5F56C6" }}>
                        <Moment format="lll">{value.createdAt}</Moment>
                        {/* <Moment >{}</Moment> */}
                      </h6>
                      <ShowMore
                        lines={2}
                        more="Show more"
                        less="Show less"
                        anchorClass=""
                      >
                        <h6>{value.desc}</h6>
                      </ShowMore>

                      <h6>
                        posted by
                        <img
                          className="mx-3"
                          src={value.posted_by_img}
                          style={{
                            width: "70px",
                            height: "65px",
                            borderRadius: "50%",
                          }}
                        />
                        <b>{value.posted_by}</b>
                      </h6>
                    </Col>
                  </Row>
                </Col>
              </SwiperSlide>
            ))}
          </Row>
        </Swiper>
      </Container>
      <br></br>
      <Container className=" mt-4 ">
        <Row className="mb-4">
          <h1 style={{ font: "GT Walsheim Pro" }}>Popular Blogs</h1>
        </Row>
        <Row>
          {popblog?.map((value) => (
            <Col lg="4" sm="6" xs="12">
              <Card>
                <CardImg
                  style={{
                    width: "auto",
                    height: "250px",
                  }}
                  src={value.blogImg}
                  className="photo"
                />
                <CardBody>
                  <CardTitle>
                    <b>{value.blog_title}</b>
                  </CardTitle>
                  <CardSubtitle>
                    <b style={{ color: "#5F56C6" }}>
                      <Moment format="lll">{value.createdAt}</Moment>
                    </b>
                  </CardSubtitle>
                  <br></br>
                  <CardText>
                    <ShowMore
                      lines={3}
                      more="Show more"
                      less="Show less"
                      anchorClass=""
                    >
                      {value.desc}
                    </ShowMore>
                  </CardText>
                  <CardText>
                    posted by
                    <img
                      className="mx-3"
                      src={value.posted_by_img}
                      style={{
                        width: "70px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    <b>{value.posted_by}</b>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <br></br>
        {/* <Row>
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
        </Row> */}
      </Container>
    </div>
  );
}
export default Blog;
