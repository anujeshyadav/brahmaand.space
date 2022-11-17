import { Container, Row, Col } from "reactstrap";
import { Card, CardText, CardTitle, CardSubtitle } from "reactstrap";
import cate from "../images/24.png";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import topBar from "../css/topBar.css";
import React, { useState, useEffect } from "react";
import Heart from "react-heart";
import { Link } from "react-router-dom";
import PrettyRating from "pretty-rating-react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

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
  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    },
  };
  const colors = {
    star: ["#d9ad26", "#d9ad26", "#434b4d"],
  };
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
    <div className="container test nohover mb-4">
      <h3 className="d-flex justify-content-center mt-4 mb-4">Your Likes</h3>
      <div className="search-st mt-3 mb-4">
        {mylikes?.map((data) => (
          <Row className="videopostedall mb-4" key={data?._id}>
            <Col md="4">
              <div class="product-image8 st-2">
                <Link to="#">
                  <img
                    height={280}
                    src={data?.submitresrcId?.img}
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
                  {data?.submitresrcId?.topics?.map((val) => (
                    <Link style={{ textDecoration: "none" }} to="#">
                      {val}
                    </Link>
                  ))}
                </ul>
                <h3 className="mb-3">{data?.submitresrcId?.resTitle}</h3>
                <h5 className="mb-3">
                  <span>By </span> {data?.submitresrcId?.creatorName}
                </h5>
                <h6 className="mb-3">{data?.submitresrcId?.desc}</h6>
                <div className="">
                  <Row className="review mb-3">
                    <Col lg="4">
                      <PrettyRating
                        // value={value?.rating}
                        value={2.5}
                        icons={icons.star}
                        colors={colors.star}
                      />
                    </Col>
                    <Col className="justify-content-left" lg="4">
                      {2.5} Rating
                    </Col>

                    <Col lg="2">
                      <b>
                        <span style={{ color: "#5F56C6" }}>
                          {data?.submitresrcId?.__v} Reviews
                        </span>
                      </b>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="2">{data?.submitresrcId?.relYear[0].yrName}</Col>
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
