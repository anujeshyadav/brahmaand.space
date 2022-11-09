import { Container, Row, Col } from "reactstrap";
import { Card, CardText, CardTitle, CardSubtitle } from "reactstrap";
import cate from "../images/24.png";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import topBar from "../css/topBar.css";
import React, { useState, useEffect } from "react";
import Heart from "react-heart";
import { Link } from "react-router-dom";

function Bookmarks() {
  const [active, setActive] = useState(false);
  const [mylikes, setMylikes] = useState([]);
  const clicked = () => {
    setActive(!active);
    console.log("you clicked it");
  };
  useEffect(() => {
    mylikehandler();
  }, []);

  const mylikehandler = () => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    axios
      .get(`http://3.7.173.138:9000/user/my_likes/${userId}`)
      .then((res) => {
        setMylikes(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container test nohover">
      <h3 className="d-flex justify-content-center mt-3 mb-3">Your Likes</h3>
      <div className="search-st mb-4">
        {mylikes?.map((data) => (
          <Row className="videopostedall mb-4" key={data?._id}>
            <Col md="4">
              <div class="product-image8 st-2">
                <Link to="#">
                  <img
                    height={280}
                    src={data.submitresrcId.img}
                    alt=""
                    style={{ borderRadius: "10px" }}
                    width="90%"
                  />
                </Link>
                <span
                  class="product-discount-label st-1"
                  // style={{ width: "2rem" }}
                >
                  {/* <Heart
                    size={25}
                    isActive={active}
                    // onClick={clicked}
                    className="heartlike faregheart"
                  /> */}
                </span>
              </div>
            </Col>
            <Col md="8">
              <div class="product-content">
                <ul class="rating mb-3 topicslike">
                  {data?.submitresrcId.topics?.map((val) => (
                    <Link to="#">{val}</Link>
                  ))}

                  <li></li>
                </ul>
                <h3 className="mb-3">{data?.submitresrcId.resTitle}</h3>
                <h5 className="mb-3">
                  <span>By </span> {data.submitresrcId.creatorName}
                </h5>
                <h6 className="mb-3">{data.submitresrcId.desc}</h6>
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
                        <span style={{ color: "#5F56C6" }}>
                          {data.submitresrcId.__v} Reviews
                        </span>
                      </b>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="2">{data.submitresrcId.relYear[0].yrName}</Col>
                    {/* <Col lg="2">#Java</Col>
                    <Col lg="2">#Andorid</Col> */}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
