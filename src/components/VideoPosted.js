import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardText, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

import cate from "../images/24.png";
import cate1 from "../images/25.png";
import cate2 from "../images/26.png";
import cate3 from "../images/27.png";
import cate4 from "../images/28.png";
import cate5 from "../images/29.png";
import { FaCalendar, FaRegHeart, FaHeart, FaBlackTie } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "../../src/styles/Filter.css";
import topBar from "../css/topBar.css";
import Heart from "react-heart";

function VideoPosted() {
  const [active, setActive] = useState(false);
  // const [style, setStyle] = useState({
  //   color: "black",
  //   backgroundColor: "#f9f9f9",
  // });

  const clicked = () => {
    setActive(!active);
    console.log("you clicked it");
  };

  return (
    <div className="test nohover">
      <div className="">
        <div className="search-st mb-4">
          <Row className="videopostedall">
            <Col md="4">
              <div class="product-image8 st-2">
                <Link to="#">
                  <img
                    src={cate}
                    alt=""
                    style={{ borderRadius: "10px" }}
                    width="100%"
                  />
                </Link>
                <span
                  class="product-discount-label st-1"
                  // style={{ width: "2rem" }}
                >
                  <Heart
                    size={25}
                    isActive={active}
                    onClick={clicked}
                    className="heartlike faregheart"
                  />
                </span>
              </div>
            </Col>
            <Col md="8">
              <div class="product-content">
                <ul class="rating mb-3">
                  <li>
                    <Link to="#" className="btt">
                      #best
                    </Link>
                    <Link to="#" className="btt">
                      #study
                    </Link>
                  </li>
                </ul>
                <h3 className="mb-3">Java Tutorials For Beginners In Hindi</h3>
                <h5 className="mb-3">
                  <span>By</span> CodeWithHarry
                </h5>
                <h6 className="mb-3">
                  Introduction to Java + Installing Java JDK and IntelliJ IDEA
                  for Java 19:00 Basic Structure of a Java Program:
                  Understanding our First JavaHello World Program 14:09
                </h6>
                <div className="">
                  <Row className="review">
                    <Col lg="2" style={{ color: "#FCAF3B" }}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Col>
                    <Col lg="2" style={{ color: "#FCAF3B" }}>
                      4.0
                    </Col>
                    <Col lg="2">
                      <b>
                        <span style={{ color: "#5F56C6" }}>12.2k Reviews</span>
                      </b>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="2">2022</Col>
                    <Col lg="2">#Java</Col>
                    <Col lg="2">#Andorid</Col>
                  </Row>
                  {/* <ul class="rating">
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <span>(4.0)</span>
                    <span className="ft-star">12.2k Reviews</span>
                  </ul>
                  <ul class="rating">
                    <li>
                      <Link to="#" className="tag">
                        2022
                      </Link>
                      <Link to="#" className="tag">
                        #Java
                      </Link>
                      <Link to="#" className="tag">
                        #Android
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Card className="videopostedcard">
          <Row className=" m-3 ">
            <Col lg="4">
              <div className="">
                {/* <FaRegHeart size={25} className="faregheart" /> */}
                {/* <FaHeart /> */}
                <img src={cate} className="cardImage likeimage" />
                {/* <img src="" alt="likeimage" className="likeimagesmall" /> */}
              </div>
            </Col>
            <Col lg="8" style={{ textAlign: "left" }}>
              <CardTitle
                className="mb-3"
                style={{ color: "blue", textAlign: "left" }}
              >
                #best &nbsp; #study
              </CardTitle>
              <CardSubtitle className="mt-3 mb-3">
                <h4>
                  <b>Java Tutorials For Begninner In Hindi</b>
                </h4>
              </CardSubtitle>
              <CardSubtitle className="mb-3">
                by &nbsp; <b>CodeWithHarry</b>&nbsp;&nbsp;
                <span style={{ color: "#5F56C6" }}>
                  <FaCalendar color="#5F56C6" />
                  12 September 2022
                </span>
              </CardSubtitle>
              <CardText className="mb-3">
                Introduction to java + installing java JDK and intelliJ IDEA for
                Java 19:00 Basic Structure Program 14:09
              </CardText>
              <Row className="review">
                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Col>
                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  4.0
                </Col>
                <Col lg="2">
                  <b>
                    <span style={{ color: "#5F56C6" }}>12.2k Reviews</span>
                  </b>
                </Col>
              </Row>
              <Row>
                <Col lg="2">2022</Col>
                <Col lg="2">#Java</Col>
                <Col lg="2">#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=" m-3 ">
            <Col lg="4">
              <div className="">
                <img src={cate1} className="cardImage" />
              </div>
            </Col>
            <Col lg="8" style={{ textAlign: "left" }}>
              <CardTitle className="text-align right" style={{ color: "blue" }}>
                #best &nbsp; #study
              </CardTitle>
              <CardSubtitle>
                <b>Java Tutorials For Begninner In Hindi </b>
              </CardSubtitle>
              <CardSubtitle>
                by &nbsp; <b>CodeWithHarry</b>&nbsp;&nbsp;
                <span style={{ color: "#5F56C6" }}>
                  <FaCalendar color="#5F56C6" />
                  12 September 2022
                </span>
              </CardSubtitle>
              <CardText>
                Introduction to java + installing java JDK and intelliJ IDEA for
                Java 19:00 Basic Structure Program 14:09
              </CardText>
              <Row>
                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Col>

                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  4.0
                </Col>
                <Col lg="3">
                  <b>
                    <span style={{ color: "#5F56C6" }}>12.2k Reviews</span>
                  </b>
                </Col>
              </Row>
              <Row>
                <Col lg="2">2022</Col>
                <Col lg="2">#Java</Col>
                <Col lg="2">#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=" m-3 ">
            <Col lg="4">
              <div className="">
                <img src={cate2} className="cardImage" />
              </div>
            </Col>
            <Col lg="8" style={{ textAlign: "left" }}>
              <CardTitle className="text-align right" style={{ color: "blue" }}>
                #best &nbsp; #study
              </CardTitle>
              <CardSubtitle>
                <b>Java Tutorials For Begninner In Hindi </b>
              </CardSubtitle>
              <CardSubtitle>
                by &nbsp; <b>CodeWithHarry</b>&nbsp;&nbsp;
                <span style={{ color: "#5F56C6" }}>
                  <FaCalendar color="#5F56C6" />
                  12 September 2022
                </span>
              </CardSubtitle>
              <CardText>
                Introduction to java + installing java JDK and intelliJ IDEA for
                Java 19:00 Basic Structure Program 14:09
              </CardText>
              <Row>
                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Col>

                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  4.0
                </Col>
                <Col lg="3">
                  <b>
                    <span style={{ color: "#5F56C6" }}>12.2k Reviews</span>
                  </b>
                </Col>
              </Row>
              <Row>
                <Col lg="2">2022</Col>
                <Col lg="2">#Java</Col>
                <Col lg="2">#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=" m-3 ">
            <Col lg="4">
              <div className="">
                <img src={cate3} className="cardImage" />
              </div>
            </Col>
            <Col lg="8" style={{ textAlign: "left" }}>
              <CardTitle className="text-align right" style={{ color: "blue" }}>
                #best &nbsp; #study
              </CardTitle>
              <CardSubtitle>
                <b>Java Tutorials For Begninner In Hindi </b>
              </CardSubtitle>
              <CardSubtitle>
                by &nbsp; <b>CodeWithHarry</b>&nbsp;&nbsp;
                <span style={{ color: "#5F56C6" }}>
                  <FaCalendar color="#5F56C6" />
                  12 September 2022
                </span>
              </CardSubtitle>
              <CardText>
                Introduction to java + installing java JDK and intelliJ IDEA for
                Java 19:00 Basic Structure Program 14:09
              </CardText>
              <Row>
                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Col>

                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  4.0
                </Col>
                <Col lg="3">
                  <b>
                    <span style={{ color: "#5F56C6" }}>12.2k Reviews</span>
                  </b>
                </Col>
              </Row>
              <Row>
                <Col lg="2">2022</Col>
                <Col lg="2">#Java</Col>
                <Col lg="2">#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=" m-3 ">
            <Col lg="4">
              <div className="">
                <img src={cate4} className="cardImage" />
              </div>
            </Col>
            <Col lg="8" style={{ textAlign: "left" }}>
              <CardTitle className="text-align right" style={{ color: "blue" }}>
                #best &nbsp; #study
              </CardTitle>
              <CardSubtitle>
                <b>Java Tutorials For Begninner In Hindi </b>
              </CardSubtitle>
              <CardSubtitle>
                by &nbsp; <b>CodeWithHarry</b>&nbsp;&nbsp;
                <span style={{ color: "#5F56C6" }}>
                  <FaCalendar color="#5F56C6" />
                  12 September 2022
                </span>
              </CardSubtitle>
              <CardText>
                Introduction to java + installing java JDK and intelliJ IDEA for
                Java 19:00 Basic Structure Program 14:09
              </CardText>
              <Row>
                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Col>

                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  4.0
                </Col>
                <Col lg="3">
                  <b>
                    <span style={{ color: "#5F56C6" }}>12.2k Reviews</span>
                  </b>
                </Col>
              </Row>
              <Row>
                <Col lg="2">2022</Col>
                <Col lg="2">#Java</Col>
                <Col lg="2">#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className=" m-3 ">
            <Col lg="4">
              <div className="">
                <img src={cate5} className="cardImage" />
              </div>
            </Col>
            <Col lg="8" style={{ textAlign: "left" }}>
              <CardTitle className="text-align right" style={{ color: "blue" }}>
                #best &nbsp; #study
              </CardTitle>
              <CardSubtitle>
                <b>Java Tutorials For Begninner In Hindi </b>
              </CardSubtitle>
              <CardSubtitle>
                by &nbsp; <b>CodeWithHarry</b>&nbsp;&nbsp;
                <span style={{ color: "#5F56C6" }}>
                  <FaCalendar color="#5F56C6" />
                  12 September 2022
                </span>
              </CardSubtitle>
              <CardText>
                Introduction to java + installing java JDK and intelliJ IDEA for
                Java 19:00 Basic Structure Program 14:09
              </CardText>
              <Row>
                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Col>

                <Col lg="2" style={{ color: "#FCAF3B" }}>
                  4.0
                </Col>
                <Col lg="3">
                  <b>
                    <span style={{ color: "#5F56C6" }}>12.2k Reviews</span>
                  </b>
                </Col>
              </Row>
              <Row>
                <Col lg="2">2022</Col>
                <Col lg="2">#Java</Col>
                <Col lg="2">#Andorid</Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default VideoPosted;
