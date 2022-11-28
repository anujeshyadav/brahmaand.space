import React, { useRef, useState } from "react";
// Import Swiper React components
import { Container, Row, Col, Card, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import mdicon1 from "../../assets/icons/mdicon-1.png";
import mdicon2 from "../../assets/icons/mdicon-2.png";
import createricon from "../../assets/icons/createricon.png";
import usericon from "../../assets/icons/usericon.png";
import typeicon from "../../assets/icons/typeicon.png";
import formaticon from "../../assets/icons/formaticon.png";
import diffculty from "../../assets/icons/diffculty.png";
import Allpromotion from "./Allpromotion";
import StarsRating from "stars-rating";
import languageicon from "../../assets/icons/languageicon.png";
import ProgressBar from "@ramonak/react-progress-bar";
import yearicon from "../../assets/icons/yearicon.png";
import submiticon from "../../assets/icons/submiticon.png";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Moment from "react-moment";
import PrettyRating from "pretty-rating-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/Filter.css";
// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import business from "../../images/business.png";

function RecentProductList(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [rating, setRating] = useState("");
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

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
  return (
    <>
      <Container>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            980: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 20,
            },
            820: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 20,
            },
            780: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 28,
            },
            320: {
              slidesPerView: 1,
              direction: "horizontal",
              spaceBetween: 25,
            },
          }}
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="product-grid8">
              <div class="product-image8">
                <Link to="#" onClick={toggle}>
                  <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>

                    <ModalBody
                    // key={promotiondata?._id}
                    >
                      <div className="main-content">
                        <h2>promotiondata?.desc</h2>
                        <div className="top-icon">
                          <Link to="#">
                            <img src={mdicon1} alt="" />
                          </Link>
                          <Link to="#">
                            <img src={mdicon2} alt="" />
                          </Link>
                        </div>
                        <div className="tag-list">
                          <div className="tag-1">
                            <h5>
                              <span>
                                <img src={icons} alt="" width="30px" />
                              </span>
                              Topic:
                            </h5>
                          </div>
                          <div className=" d-flex tag-2">
                            {/* {promotiondata?.topics?.map((val) => ( */}
                            <Link className="d-flex " to="#">
                              val
                            </Link>
                            {/* ))} */}
                          </div>
                        </div>

                        <hr></hr>
                      </div>

                      <div className="mid">
                        <h5>
                          Link :<span>promotiondata?.link</span>
                        </h5>
                        <div className="mid-content">
                          <Row>
                            <Col lg="6" md="6">
                              <div className="mid-1 mb-3">
                                <div className="mid-1-a">
                                  <img src={createricon} alt="" />
                                </div>
                                <div className="mid-1-b">
                                  <p>Creator:</p>
                                  <h4>promotiondata?.creatorName</h4>
                                </div>
                              </div>
                            </Col>
                            <Col lg="6" md="6">
                              <div className="mid-1 mb-3 ">
                                <div className="mid-1-a">
                                  <img src={usericon} alt="" />
                                </div>
                                <div className="mid-1-b">
                                  <p>Submitted by:</p>
                                  <h4>promotiondata?.creatorName</h4>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3" md="3">
                              <div className="mid-1 mb-3 tt-2">
                                <div className="mid-1-a">
                                  <img src={typeicon} alt="" width="35px" />
                                </div>
                                <div className="mid-1-b tt-1">
                                  <p>Type:</p>
                                  <Link to="#">promotiondata?.type</Link>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3" md="3">
                              <div className="mid-1 mb-3 tt-2">
                                <div className="mid-1-a">
                                  <img src={formaticon} alt="" width="35px" />
                                </div>
                                <div className="mid-1-b tt-1">
                                  <p>Format:</p>
                                  <Link to="#">promotiondata?.format</Link>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3" md="3">
                              <div className="mid-1 mb-3 tt-2">
                                <div className="mid-1-a">
                                  <img src={diffculty} alt="" width="35px" />
                                </div>
                                <div className="mid-1-b tt-1">
                                  <p>Category:</p>
                                  <Link to="#">
                                    promotiondata?.category?.title
                                  </Link>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3" md="3">
                              <div className="mid-1 mb-3 tt-2">
                                <div className="mid-1-a">
                                  <img src={languageicon} alt="" width="35px" />
                                </div>
                                <div className="mid-1-b tt-1">
                                  <p>Language:</p>
                                  {/* {promotiondata?.language?.map((lang) => ( */}
                                  <Link to="#">lang?.language</Link>
                                  {/* ))} */}
                                </div>
                              </div>
                            </Col>
                            <Col lg="3" md="3">
                              <div className="mid-1 mb-3 tt-2">
                                <div className="mid-1-a">
                                  <img src={yearicon} alt="" width="35px" />
                                </div>
                                <div className="mid-1-b tt-1">
                                  <p>Year:</p>
                                  {/* {promotiondata?.relYear?.map((year) => ( */}
                                  <Link to="#">year?.yrName</Link>
                                  {/* ))} */}
                                </div>
                              </div>
                            </Col>
                            <Col lg="3" md="3">
                              <div className="mid-1 mb-3 tt-2">
                                <div className="mid-1-a">
                                  <img src={rating} alt="" width="35px" />
                                </div>
                                <div className="mid-1-b tt-1">
                                  <p>Ratings:</p>
                                  <Link to="#">(4.5)</Link>
                                </div>
                              </div>
                            </Col>
                            <Col lg="4" md="4">
                              <div className="mid-1 mb-3 tt-2">
                                <div className="mid-1-a">
                                  <img src={submiticon} alt="" width="35px" />
                                </div>
                                <div className="mid-1-b tt-1">
                                  <p>Submitted:</p>
                                  <Moment format="ll">
                                    Producdetail?.createdAt
                                  </Moment>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>

                      <hr></hr>

                      <div className="description mt-3">
                        <h4>Description:</h4>
                        <p>promotiondata?.desc</p>
                      </div>

                      <hr></hr>
                      <div className="rating-box">
                        <Row>
                          <Col lg="4">
                            <div className="rat-left">
                              <h4>Customer Rating</h4>
                              <div className="">
                                <PrettyRating
                                  // value={value?.rating}
                                  value={2}
                                  icons={icons.star}
                                  colors={colors.star}
                                />

                                <small className="mt-3">
                                  2- customers reviews
                                  {/* {sum / totalrateng.length} */}
                                </small>

                                <Row>
                                  <Col
                                    className="d-flex justify-content-left mt-1"
                                    style={{ color: "blue" }}
                                    lg="4"
                                  >
                                    5 Stars
                                  </Col>
                                  <Col className="mt-1 mb-1 " lg="8">
                                    {" "}
                                    <ProgressBar
                                      bgColor=" #fdb800"
                                      height="13px"
                                      borderRadius="12px"
                                      className="progressbar"
                                      barContainerClassName="containerone"
                                      labelClassName="label"
                                      completed={60}
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col
                                    className="d-flex justify-content-left mt-1 "
                                    style={{ color: "blue" }}
                                    lg="4"
                                  >
                                    4 Stars
                                  </Col>
                                  <Col className="mt-1 mb-1" lg="8">
                                    {" "}
                                    <ProgressBar
                                      bgColor=" #fdb800"
                                      height="13px"
                                      borderRadius="12px"
                                      className="progressbar"
                                      barContainerClassName="containerone"
                                      labelClassName="label"
                                      completed={40}
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col
                                    className="d-flex justify-content-left mt-1 "
                                    style={{ color: "blue" }}
                                    lg="4"
                                  >
                                    3 Stars
                                  </Col>
                                  <Col className="mt-1 mb-1" lg="8">
                                    {" "}
                                    <ProgressBar
                                      bgColor=" #fdb800"
                                      height="13px"
                                      borderRadius="12px"
                                      className="progressbar"
                                      barContainerClassName="containerone"
                                      labelClassName="label"
                                      completed={50}
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col
                                    className="d-flex justify-content-left mt-1 "
                                    style={{ color: "blue" }}
                                    lg="4"
                                  >
                                    2 Stars
                                  </Col>
                                  <Col className="mt-1 mb-1" lg="8">
                                    {" "}
                                    <ProgressBar
                                      bgColor=" #fdb800"
                                      height="13px"
                                      borderRadius="12px"
                                      className="progressbar"
                                      barContainerClassName="containerone"
                                      labelClassName="label"
                                      completed={70}
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col
                                    className="d-flex justify-content-left mt-1 "
                                    style={{ color: "blue" }}
                                    lg="4"
                                  >
                                    1 Stars
                                  </Col>
                                  <Col className="mt-1 mb-1" lg="8">
                                    <ProgressBar
                                      bgColor=" #fdb800"
                                      height="13px"
                                      borderRadius="12px"
                                      className="progressbar"
                                      barContainerClassName="containerone"
                                      labelClassName="label"
                                      completed={40}
                                    />
                                  </Col>
                                  <Col>
                                    {/* {localStorage.getItem(
                                                      "userId"
                                                    ) !== "" &&
                                                    localStorage.getItem(
                                                      "userId"
                                                    ) !== null &&
                                                    localStorage.getItem(
                                                      "userId"
                                                    ) !== undefined ? (
                                                      <button className="likebuttonbar">
                                                        {activelike ==
                                                        "true" ? ( */}
                                    <button
                                      // key={promotion?._id}
                                      className="addbookmark  btn btn-secondary"
                                      color="success"
                                      // onClick={() =>
                                      //   removebookmark(promotion?._id)
                                      // }
                                    >
                                      Remove bookmark
                                    </button>

                                    <button
                                      // key={promotion?._id}
                                      // onClick={() =>
                                      //   addbookmark(promotion?._id)
                                      // }
                                      className="addbookmark  btn btn-secondary"
                                      color="warning "
                                    >
                                      Add Bookmark
                                    </button>
                                    {/* )} */}
                                    {/* </button> */}
                                    {/* ) : null} */}
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Col>
                          <Col lg="8">
                            <div className="rat-right">
                              <h4>Write your review</h4>
                              <div className="">
                                <StarsRating
                                  count={5}
                                  // onChange={ratingChanged}
                                  size={40}
                                  color={"#ffd700"}
                                />

                                <form>
                                  <textarea
                                    value="text"
                                    name="text"
                                    // onChange={onchangehandler}
                                    className="form-control st-taetarea"
                                    placeholder=""
                                  ></textarea>
                                  <Button
                                    // onClick={handleSubmit}
                                    className=" bt-st reviewbutton mb-3 btn btn-primary"
                                  >
                                    Send
                                  </Button>
                                </form>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <hr></hr>
                      <div className="review-list">
                        <h4>Reviews:</h4>

                        {/* {getonecomment?.map((value) => ( */}
                        <div className="re-list">
                          <div className="re-listimg">
                            <img
                              // src=value?.userid?.profileImg
                              alt="UserImage"
                            />
                          </div>
                          <div className="re-listcont">
                            <h5>
                              value?.userid?.username
                              <span>
                                <Moment format="ll">value?.createdAt</Moment>
                              </span>
                            </h5>
                            <div className="star-1">
                              <PrettyRating
                                value={2}
                                icons={icons.star}
                                colors={colors.star}
                              />
                            </div>
                          </div>
                          <div className="re-btext mt-3">
                            <p>value?.comment</p>
                          </div>
                        </div>
                        {/* ))} */}
                      </div>
                    </ModalBody>
                  </Modal>
                  <img src={business} alt="" />
                </Link>
                {/* <span class="product-discount-label">
                  <FaHeart />
                </span> */}
              </div>
              <div class="product-content">
                <ul class="rating">
                  <li>
                    <Link to="#" className="btt">
                      #best
                    </Link>
                    <Link to="#" className="btt">
                      #study
                    </Link>
                  </li>
                </ul>
                <h3>Java Tutorials For Beginners In Hindi</h3>
                <h5>
                  <span>By</span> CodeWithHarry
                </h5>
                <p>
                  Introduction to Java + Installing Java JDK and IntelliJ IDEA
                  for Java 19:00 Basic Structure of a Java Program:
                  Understanding our First JavaHello World Program 14:09
                </p>
                <div className="">
                  <ul class="rating">
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
                      <Link Link to="#" className="tag">
                        #Android
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div class="product-grid8">
              <div class="product-image8">
                <Link to="#">
                  <img src={business} alt="" />
                </Link>
                <span class="product-discount-label">
                  <FaHeart />
                </span>
              </div>
              <div class="product-content">
                <ul class="rating">
                  <li>
                    <Link to="#" className="btt">
                      #best
                    </Link>
                    <Link to="#" className="btt">
                      #study
                    </Link>
                  </li>
                </ul>
                <h3>Java Tutorials For Beginners In Hindi</h3>
                <h5>
                  <span>By</span> CodeWithHarry
                </h5>
                <p>
                  Introduction to Java + Installing Java JDK and IntelliJ IDEA
                  for Java 19:00 Basic Structure of a Java Program:
                  Understanding our First JavaHello World Program 14:09
                </p>
                <div className="">
                  <ul class="rating">
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
                      <Link Link to="#" className="tag">
                        #Android
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="product-grid8">
              <div class="product-image8">
                <Link to="#">
                  <img src={business} alt="" />
                </Link>
                <span class="product-discount-label">
                  <FaHeart />
                </span>
              </div>
              <div class="product-content">
                <ul class="rating">
                  <li>
                    <Link to="#" className="btt">
                      #best
                    </Link>
                    <Link to="#" className="btt">
                      #study
                    </Link>
                  </li>
                </ul>
                <h3>Java Tutorials For Beginners In Hindi</h3>
                <h5>
                  <span>By</span> CodeWithHarry
                </h5>
                <p>
                  Introduction to Java + Installing Java JDK and IntelliJ IDEA
                  for Java 19:00 Basic Structure of a Java Program:
                  Understanding our First JavaHello World Program 14:09
                </p>
                <div className="">
                  <ul class="rating">
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
                      <Link Link to="#" className="tag">
                        #Android
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </Container>
    </>
  );
}

export default RecentProductList;
