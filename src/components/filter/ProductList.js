import React, { useState } from 'react';
//import ReactDOM from "react-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../styles/ModulePage.css";
import mdicon1 from "../../assets/icons/mdicon-1.png";
import mdicon2 from "../../assets/icons/mdicon-2.png";
import createricon from "../../assets/icons/createricon.png";
import usericon from "../../assets/icons/usericon.png";
import typeicon from "../../assets/icons/typeicon.png";
import formaticon from "../../assets/icons/formaticon.png";
import diffculty from "../../assets/icons/diffculty.png";
import icons from "../../assets/icons/icon3.png";
import languageicon from "../../assets/icons/languageicon.png";
import rating from "../../assets/icons/rating.png";
import yearicon from "../../assets/icons/yearicon.png";
import submiticon from "../../assets/icons/submiticon.png";
import reviewstar from "../../assets/icons/reviewstra.png";
import ratingstar from "../../assets/icons/ratingstar.png";
import usermdl from "../../assets/images/usermdl.jpg";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Filter.css";
import AutoSearch from "./AutoSearch";
import RangeSlider from 'react-bootstrap-range-slider';
import business from "../../images/business.png"
import { FaHeart, FaStar } from "react-icons/fa";
import FilterList from './FilterList';
import RecentProductList from './RecentProductList';
import backimg from "../../assets/images/backimg.png";

function ProductList(args) {

    const [value, setValue] = useState(0);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (

        <section>

            <FilterList />

            <div className="bg-st"
                style={{
                    backgroundImage: `url(${backimg})`,
                    width: "100%",
                    padding: "130px 0px",
                    backgroundSize: "cover"
                }}

            >

            </div>

            <Container>
                <div className="stt-main">
                    <Row>
                        <Col lg="4" md="4">
                            <div className="left-side">
                                <Row>
                                    <Col lg="12" className="py-3">
                                        <div className="ft-serch">
                                            <AutoSearch />
                                        </div>
                                    </Col>
                                    <Col lg="12" className="py-3">
                                        <div className="ft-slider">
                                            <h5>Review</h5>
                                            <RangeSlider
                                                value={value}
                                                className="ftr-range"
                                                onChange={changeEvent => setValue(changeEvent.target.value)}
                                            />
                                            <p>Range</p>
                                        </div>
                                    </Col>
                                    <Col lg="12" className="py-3">
                                        <div className="ft-type">
                                            <h5>Type</h5>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Free - No registration required (86)
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Free - Registration required (2)
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Paid (11)
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg="12" className="py-3">
                                        <div className="ft-type">
                                            <h5>Format</h5>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Video (74)
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Text (29)
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg="12" className="py-3">
                                        <div className="ft-type">
                                            <h5>Level</h5>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Beginner (81)
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Advanced (18)
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg="12" className="py-3">
                                        <h5>Not older than</h5>
                                        <Form.Select>
                                            <option>Any Year</option>
                                        </Form.Select>
                                    </Col>
                                    <Col lg="12" className="py-3">
                                        <div className="ft-type">
                                            <h5>Language</h5>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Arabic (3)
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        English (87)
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Hindi (6)
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Russian (3)
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="ft-check" />
                                                    <span>
                                                        Urdu (1)
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg="12" className="py-3">
                                        <div className="ft-type">
                                            <h5>Sort By</h5>
                                            <hr></hr>
                                            <ul>
                                                <li>
                                                    Relevance
                                                </li>
                                                <li>
                                                    Rating
                                                </li>
                                                <li>
                                                    Low to High
                                                </li>
                                                <li>
                                                    High to Low
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="8" md="8">
                            <div className="right-side">
                                <h4>Promotions
                                    <span>
                                        <Link to="/">See All</Link>
                                    </span>
                                </h4>

                                <Row>
                                    <Col lg="4" md="4" sm="6">
                                        <div class="product-grid8">
                                            <div class="product-image8">
                                                <Link to="#" onClick={toggle}>
                                                    <img src={business} alt="" />
                                                    <Modal className="mdlg" isOpen={modal} toggle={toggle} {...args}>
                                                        <ModalBody>
                                                            <div className="main-content">
                                                                <h2>Building Industry-Level Apps With Multi-Module Architecture</h2>
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
                                                                            {" "}
                                                                            <span>
                                                                                <img src={icons} alt="" width="30px" />{" "}
                                                                            </span>{" "}
                                                                            Topic:
                                                                        </h5>
                                                                    </div>
                                                                    <div className="tag-2">
                                                                        <Link to="#">Android</Link>
                                                                        <Link to="#">clean architecture</Link>
                                                                        <Link to="#">multi-module</Link>
                                                                        <Link to="#">mvvm</Link>
                                                                        <Link to="#">use cases</Link>
                                                                        <Link to="#">solid</Link>
                                                                        <Link to="#">jetpack compose</Link>
                                                                        <Link to="#">kotlin</Link>
                                                                        <Link to="#">room</Link>
                                                                        <Link to="#">retrofit</Link>
                                                                    </div>
                                                                </div>

                                                                <hr></hr>
                                                            </div>

                                                            <div className="mid">
                                                                <h5>
                                                                    Link : <span>https://pl-coding.com/multi-module-course</span>
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
                                                                                    <h4>Philipp Lackner</h4>
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
                                                                                    <h4>Philipp Lackner</h4>
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
                                                                                    <Link to="#">Paid</Link>
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
                                                                                    <Link to="#">Video</Link>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg="3" md="3">
                                                                            <div className="mid-1 mb-3 tt-2">
                                                                                <div className="mid-1-a">
                                                                                    <img src={diffculty} alt="" width="35px" />
                                                                                </div>
                                                                                <div className="mid-1-b tt-1">
                                                                                    <p>Difficulty:</p>
                                                                                    <Link to="#">Advanced</Link>
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
                                                                                    <Link to="#">English</Link>
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
                                                                                    <Link to="#">2022</Link>
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
                                                                                    <Link to="#">Aug 24, 2022</Link>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </div>

                                                            <hr></hr>

                                                            <div className="description mt-3">
                                                                <h4>Description:</h4>
                                                                <p>
                                                                    Build a calorie counter app in Android Studio using
                                                                    multi-modulearchitecture.
                                                                </p>
                                                            </div>

                                                            <hr></hr>
                                                            <div className="rating-box">
                                                                <Row>
                                                                    <Col lg="4">
                                                                        <div className="rat-left">
                                                                            <h4>Customer Rating</h4>
                                                                            <div className="">
                                                                                <img src={reviewstar} alt="" width="120px" />
                                                                                <span>4.7 of 5</span>
                                                                                <small className="mt-3">362 customers reviews</small>
                                                                                <img src={ratingstar} alt="" width="100%" />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg="8">
                                                                        <div className="rat-right">
                                                                            <h4>Write your review</h4>
                                                                            <div className="">
                                                                                <img src={reviewstar} alt="" width="120px" />
                                                                                <form>
                                                                                    <textarea
                                                                                        className="form-control st-taetarea"
                                                                                        placeholder=""
                                                                                    ></textarea>
                                                                                    <Button className="bt-st">Send</Button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <hr></hr>
                                                            <div className="review-list">
                                                                <h4>Reviews:</h4>
                                                                <div className="re-list">
                                                                    <div className="re-listimg">
                                                                        <img src={usermdl} alt="" />
                                                                    </div>
                                                                    <div className="re-listcont">
                                                                        <h5>
                                                                            Jozef Kondratovich
                                                                            <span>few secs ago</span>
                                                                        </h5>
                                                                        <div className="star-1">
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="re-btext">
                                                                        <p>
                                                                            There're so many choices in their menu. I appreciated that it
                                                                            also showed the calories. Good to know about that. Then I
                                                                            chose the one with lower calories
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="re-list">
                                                                    <div className="re-listimg">
                                                                        <img src={usermdl} alt="" />
                                                                    </div>
                                                                    <div className="re-listcont">
                                                                        <h5>
                                                                            Jozef Kondratovich
                                                                            <span>few secs ago</span>
                                                                        </h5>
                                                                        <div className="star-1">
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="re-btext">
                                                                        <p>
                                                                            There're so many choices in their menu. I appreciated that it
                                                                            also showed the calories. Good to know about that. Then I
                                                                            chose the one with lower calories
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ModalBody>

                                                        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
                                                    </Modal>
                                                </Link>
                                                <span class="product-discount-label"><FaHeart /></span>
                                            </div>
                                            <div class="product-content">
                                                <ul class="rating">
                                                    <li>
                                                        <Link to="#" className='btt'>#best</Link>
                                                        <Link to="#" className='btt'>#study</Link>
                                                    </li>
                                                </ul>
                                                <h3>
                                                    Java Tutorials For Beginners In Hindi
                                                </h3>
                                                <h5>
                                                    <span>By</span> CodeWithHarry
                                                </h5>
                                                <p>
                                                    Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java 19:00 Basic Structure of a Java Program:  Understanding our First JavaHello World Program 14:09
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
                                                            <Link to="#" className='tag'>2022</Link>
                                                            <Link to="#" className='tag'>#Java</Link>
                                                            <Link to="#" className='tag'>#Android</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="6">
                                        <div class="product-grid8">
                                            <div class="product-image8">
                                                <Link to="#" onClick={toggle}>
                                                    <img src={business} alt="" />
                                                    <Modal className="mdlg" isOpen={modal} toggle={toggle} {...args}>
                                                        <ModalBody>
                                                            <div className="main-content">
                                                                <h2>Building Industry-Level Apps With Multi-Module Architecture</h2>
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
                                                                            {" "}
                                                                            <span>
                                                                                <img src={icons} alt="" width="30px" />{" "}
                                                                            </span>{" "}
                                                                            Topic:
                                                                        </h5>
                                                                    </div>
                                                                    <div className="tag-2">
                                                                        <Link to="#">Android</Link>
                                                                        <Link to="#">clean architecture</Link>
                                                                        <Link to="#">multi-module</Link>
                                                                        <Link to="#">mvvm</Link>
                                                                        <Link to="#">use cases</Link>
                                                                        <Link to="#">solid</Link>
                                                                        <Link to="#">jetpack compose</Link>
                                                                        <Link to="#">kotlin</Link>
                                                                        <Link to="#">room</Link>
                                                                        <Link to="#">retrofit</Link>
                                                                    </div>
                                                                </div>

                                                                <hr></hr>
                                                            </div>

                                                            <div className="mid">
                                                                <h5>
                                                                    Link : <span>https://pl-coding.com/multi-module-course</span>
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
                                                                                    <h4>Philipp Lackner</h4>
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
                                                                                    <h4>Philipp Lackner</h4>
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
                                                                                    <Link to="#">Paid</Link>
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
                                                                                    <Link to="#">Video</Link>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg="3" md="3">
                                                                            <div className="mid-1 mb-3 tt-2">
                                                                                <div className="mid-1-a">
                                                                                    <img src={diffculty} alt="" width="35px" />
                                                                                </div>
                                                                                <div className="mid-1-b tt-1">
                                                                                    <p>Difficulty:</p>
                                                                                    <Link to="#">Advanced</Link>
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
                                                                                    <Link to="#">English</Link>
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
                                                                                    <Link to="#">2022</Link>
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
                                                                                    <Link to="#">Aug 24, 2022</Link>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </div>

                                                            <hr></hr>

                                                            <div className="description mt-3">
                                                                <h4>Description:</h4>
                                                                <p>
                                                                    Build a calorie counter app in Android Studio using
                                                                    multi-modulearchitecture.
                                                                </p>
                                                            </div>

                                                            <hr></hr>
                                                            <div className="rating-box">
                                                                <Row>
                                                                    <Col lg="4">
                                                                        <div className="rat-left">
                                                                            <h4>Customer Rating</h4>
                                                                            <div className="">
                                                                                <img src={reviewstar} alt="" width="120px" />
                                                                                <span>4.7 of 5</span>
                                                                                <small className="mt-3">362 customers reviews</small>
                                                                                <img src={ratingstar} alt="" width="100%" />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg="8">
                                                                        <div className="rat-right">
                                                                            <h4>Write your review</h4>
                                                                            <div className="">
                                                                                <img src={reviewstar} alt="" width="120px" />
                                                                                <form>
                                                                                    <textarea
                                                                                        className="form-control st-taetarea"
                                                                                        placeholder=""
                                                                                    ></textarea>
                                                                                    <Button className="bt-st">Send</Button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <hr></hr>
                                                            <div className="review-list">
                                                                <h4>Reviews:</h4>
                                                                <div className="re-list">
                                                                    <div className="re-listimg">
                                                                        <img src={usermdl} alt="" />
                                                                    </div>
                                                                    <div className="re-listcont">
                                                                        <h5>
                                                                            Jozef Kondratovich
                                                                            <span>few secs ago</span>
                                                                        </h5>
                                                                        <div className="star-1">
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="re-btext">
                                                                        <p>
                                                                            There're so many choices in their menu. I appreciated that it
                                                                            also showed the calories. Good to know about that. Then I
                                                                            chose the one with lower calories
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="re-list">
                                                                    <div className="re-listimg">
                                                                        <img src={usermdl} alt="" />
                                                                    </div>
                                                                    <div className="re-listcont">
                                                                        <h5>
                                                                            Jozef Kondratovich
                                                                            <span>few secs ago</span>
                                                                        </h5>
                                                                        <div className="star-1">
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="re-btext">
                                                                        <p>
                                                                            There're so many choices in their menu. I appreciated that it
                                                                            also showed the calories. Good to know about that. Then I
                                                                            chose the one with lower calories
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ModalBody>

                                                        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
                                                    </Modal>
                                                </Link>
                                                <span class="product-discount-label"><FaHeart /></span>
                                            </div>
                                            <div class="product-content">
                                                <ul class="rating">
                                                    <li>
                                                        <Link to="#" className='btt'>#best</Link>
                                                        <Link to="#" className='btt'>#study</Link>
                                                    </li>
                                                </ul>
                                                <h3>
                                                    Java Tutorials For Beginners In Hindi
                                                </h3>
                                                <h5>
                                                    <span>By</span> CodeWithHarry
                                                </h5>
                                                <p>
                                                    Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java 19:00 Basic Structure of a Java Program:  Understanding our First JavaHello World Program 14:09
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
                                                            <Link to="#" className='tag'>2022</Link>
                                                            <Link to="#" className='tag'>#Java</Link>
                                                            <Link to="#" className='tag'>#Android</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="6">
                                        <div class="product-grid8">
                                            <div class="product-image8">
                                                <Link to="#" onClick={toggle}>
                                                    <img src={business} alt="" />
                                                    <Modal className="mdlg" isOpen={modal} toggle={toggle} {...args}>
                                                        <ModalBody>
                                                            <div className="main-content">
                                                                <h2>Building Industry-Level Apps With Multi-Module Architecture</h2>
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
                                                                            {" "}
                                                                            <span>
                                                                                <img src={icons} alt="" width="30px" />{" "}
                                                                            </span>{" "}
                                                                            Topic:
                                                                        </h5>
                                                                    </div>
                                                                    <div className="tag-2">
                                                                        <Link to="#">Android</Link>
                                                                        <Link to="#">clean architecture</Link>
                                                                        <Link to="#">multi-module</Link>
                                                                        <Link to="#">mvvm</Link>
                                                                        <Link to="#">use cases</Link>
                                                                        <Link to="#">solid</Link>
                                                                        <Link to="#">jetpack compose</Link>
                                                                        <Link to="#">kotlin</Link>
                                                                        <Link to="#">room</Link>
                                                                        <Link to="#">retrofit</Link>
                                                                    </div>
                                                                </div>

                                                                <hr></hr>
                                                            </div>

                                                            <div className="mid">
                                                                <h5>
                                                                    Link : <span>https://pl-coding.com/multi-module-course</span>
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
                                                                                    <h4>Philipp Lackner</h4>
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
                                                                                    <h4>Philipp Lackner</h4>
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
                                                                                    <Link to="#">Paid</Link>
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
                                                                                    <Link to="#">Video</Link>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg="3" md="3">
                                                                            <div className="mid-1 mb-3 tt-2">
                                                                                <div className="mid-1-a">
                                                                                    <img src={diffculty} alt="" width="35px" />
                                                                                </div>
                                                                                <div className="mid-1-b tt-1">
                                                                                    <p>Difficulty:</p>
                                                                                    <Link to="#">Advanced</Link>
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
                                                                                    <Link to="#">English</Link>
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
                                                                                    <Link to="#">2022</Link>
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
                                                                                    <Link to="#">Aug 24, 2022</Link>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </div>

                                                            <hr></hr>

                                                            <div className="description mt-3">
                                                                <h4>Description:</h4>
                                                                <p>
                                                                    Build a calorie counter app in Android Studio using
                                                                    multi-modulearchitecture.
                                                                </p>
                                                            </div>

                                                            <hr></hr>
                                                            <div className="rating-box">
                                                                <Row>
                                                                    <Col lg="4">
                                                                        <div className="rat-left">
                                                                            <h4>Customer Rating</h4>
                                                                            <div className="">
                                                                                <img src={reviewstar} alt="" width="120px" />
                                                                                <span>4.7 of 5</span>
                                                                                <small className="mt-3">362 customers reviews</small>
                                                                                <img src={ratingstar} alt="" width="100%" />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg="8">
                                                                        <div className="rat-right">
                                                                            <h4>Write your review</h4>
                                                                            <div className="">
                                                                                <img src={reviewstar} alt="" width="120px" />
                                                                                <form>
                                                                                    <textarea
                                                                                        className="form-control st-taetarea"
                                                                                        placeholder=""
                                                                                    ></textarea>
                                                                                    <Button className="bt-st">Send</Button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <hr></hr>
                                                            <div className="review-list">
                                                                <h4>Reviews:</h4>
                                                                <div className="re-list">
                                                                    <div className="re-listimg">
                                                                        <img src={usermdl} alt="" />
                                                                    </div>
                                                                    <div className="re-listcont">
                                                                        <h5>
                                                                            Jozef Kondratovich
                                                                            <span>few secs ago</span>
                                                                        </h5>
                                                                        <div className="star-1">
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="re-btext">
                                                                        <p>
                                                                            There're so many choices in their menu. I appreciated that it
                                                                            also showed the calories. Good to know about that. Then I
                                                                            chose the one with lower calories
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="re-list">
                                                                    <div className="re-listimg">
                                                                        <img src={usermdl} alt="" />
                                                                    </div>
                                                                    <div className="re-listcont">
                                                                        <h5>
                                                                            Jozef Kondratovich
                                                                            <span>few secs ago</span>
                                                                        </h5>
                                                                        <div className="star-1">
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                            <Link to="#">
                                                                                <FaStar className="star-1" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="re-btext">
                                                                        <p>
                                                                            There're so many choices in their menu. I appreciated that it
                                                                            also showed the calories. Good to know about that. Then I
                                                                            chose the one with lower calories
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ModalBody>

                                                        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
                                                    </Modal>
                                                </Link>
                                                <span class="product-discount-label"><FaHeart /></span>
                                            </div>
                                            <div class="product-content">
                                                <ul class="rating">
                                                    <li>
                                                        <Link to="#" className='btt'>#best</Link>
                                                        <Link to="#" className='btt'>#study</Link>
                                                    </li>
                                                </ul>
                                                <h3>
                                                    Java Tutorials For Beginners In Hindi
                                                </h3>
                                                <h5>
                                                    <span>By</span> CodeWithHarry
                                                </h5>
                                                <p>
                                                    Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java 19:00 Basic Structure of a Java Program:  Understanding our First JavaHello World Program 14:09
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
                                                            <Link to="#" className='tag'>2022</Link>
                                                            <Link to="#" className='tag'>#Java</Link>
                                                            <Link to="#" className='tag'>#Android</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="serach-product">
                                    <h4>Searching Product
                                        <span>
                                            <Link to="/">Filter</Link>
                                        </span>
                                    </h4>
                                    <Row>
                                        <div className="search-st mb-4">
                                            <Row>
                                                <Col md="4">
                                                    <div class="product-image8 st-2">
                                                        <Link to="#">
                                                            <img src={business} alt="" width="100%" />
                                                        </Link>
                                                        <span class="product-discount-label st-1"><FaHeart /></span>
                                                    </div>
                                                </Col>
                                                <Col md="8">
                                                    <div class="product-content">
                                                        <ul class="rating">
                                                            <li>
                                                                <Link to="#" className='btt'>#best</Link>
                                                                <Link to="#" className='btt'>#study</Link>
                                                            </li>
                                                        </ul>
                                                        <h3>
                                                            Java Tutorials For Beginners In Hindi
                                                        </h3>
                                                        <h5>
                                                            <span>By</span> CodeWithHarry
                                                        </h5>
                                                        <p>
                                                            Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java 19:00 Basic Structure of a Java Program:  Understanding our First JavaHello World Program 14:09
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
                                                                    <Link to="#" className='tag'>2022</Link>
                                                                    <Link to="#" className='tag'>#Java</Link>
                                                                    <Link to="#" className='tag'>#Android</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="search-st mb-3">
                                            <Row>
                                                <Col md="4">
                                                    <div class="product-image8 st-2">
                                                        <Link to="#">
                                                            <img src={business} alt="" width="100%" />
                                                        </Link>
                                                        <span class="product-discount-label st-1"><FaHeart /></span>
                                                    </div>
                                                </Col>
                                                <Col md="8">
                                                    <div class="product-content">
                                                        <ul class="rating">
                                                            <li>
                                                                <Link to="#" className='btt'>#best</Link>
                                                                <Link to="#" className='btt'>#study</Link>
                                                            </li>
                                                        </ul>
                                                        <h3>
                                                            Java Tutorials For Beginners In Hindi
                                                        </h3>
                                                        <h5>
                                                            <span>By</span> CodeWithHarry
                                                        </h5>
                                                        <p>
                                                            Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java 19:00 Basic Structure of a Java Program:  Understanding our First JavaHello World Program 14:09
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
                                                                    <Link to="#" className='tag'>2022</Link>
                                                                    <Link to="#" className='tag'>#Java</Link>
                                                                    <Link to="#" className='tag'>#Android</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="search-st mb-3">
                                            <Row>
                                                <Col md="4">
                                                    <div class="product-image8 st-2">
                                                        <Link to="#">
                                                            <img src={business} alt="" width="100%" />
                                                            <Modal className="mdlg" isOpen={modal} toggle={toggle} {...args}>
                                                                <ModalBody>
                                                                    <div className="main-content">
                                                                        <h2>Building Industry-Level Apps With Multi-Module Architecture</h2>
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
                                                                                    {" "}
                                                                                    <span>
                                                                                        <img src={icons} alt="" width="30px" />{" "}
                                                                                    </span>{" "}
                                                                                    Topic:
                                                                                </h5>
                                                                            </div>
                                                                            <div className="tag-2">
                                                                                <Link to="#">Android</Link>
                                                                                <Link to="#">clean architecture</Link>
                                                                                <Link to="#">multi-module</Link>
                                                                                <Link to="#">mvvm</Link>
                                                                                <Link to="#">use cases</Link>
                                                                                <Link to="#">solid</Link>
                                                                                <Link to="#">jetpack compose</Link>
                                                                                <Link to="#">kotlin</Link>
                                                                                <Link to="#">room</Link>
                                                                                <Link to="#">retrofit</Link>
                                                                            </div>
                                                                        </div>

                                                                        <hr></hr>
                                                                    </div>

                                                                    <div className="mid">
                                                                        <h5>
                                                                            Link : <span>https://pl-coding.com/multi-module-course</span>
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
                                                                                            <h4>Philipp Lackner</h4>
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
                                                                                            <h4>Philipp Lackner</h4>
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
                                                                                            <Link to="#">Paid</Link>
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
                                                                                            <Link to="#">Video</Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col lg="3" md="3">
                                                                                    <div className="mid-1 mb-3 tt-2">
                                                                                        <div className="mid-1-a">
                                                                                            <img src={diffculty} alt="" width="35px" />
                                                                                        </div>
                                                                                        <div className="mid-1-b tt-1">
                                                                                            <p>Difficulty:</p>
                                                                                            <Link to="#">Advanced</Link>
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
                                                                                            <Link to="#">English</Link>
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
                                                                                            <Link to="#">2022</Link>
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
                                                                                            <Link to="#">Aug 24, 2022</Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>

                                                                    <div className="description mt-3">
                                                                        <h4>Description:</h4>
                                                                        <p>
                                                                            Build a calorie counter app in Android Studio using
                                                                            multi-modulearchitecture.
                                                                        </p>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <div className="rating-box">
                                                                        <Row>
                                                                            <Col lg="4">
                                                                                <div className="rat-left">
                                                                                    <h4>Customer Rating</h4>
                                                                                    <div className="">
                                                                                        <img src={reviewstar} alt="" width="120px" />
                                                                                        <span>4.7 of 5</span>
                                                                                        <small className="mt-3">362 customers reviews</small>
                                                                                        <img src={ratingstar} alt="" width="100%" />
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg="8">
                                                                                <div className="rat-right">
                                                                                    <h4>Write your review</h4>
                                                                                    <div className="">
                                                                                        <img src={reviewstar} alt="" width="120px" />
                                                                                        <form>
                                                                                            <textarea
                                                                                                className="form-control st-taetarea"
                                                                                                placeholder=""
                                                                                            ></textarea>
                                                                                            <Button className="bt-st">Send</Button>
                                                                                        </form>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                    <hr></hr>
                                                                    <div className="review-list">
                                                                        <h4>Reviews:</h4>
                                                                        <div className="re-list">
                                                                            <div className="re-listimg">
                                                                                <img src={usermdl} alt="" />
                                                                            </div>
                                                                            <div className="re-listcont">
                                                                                <h5>
                                                                                    Jozef Kondratovich
                                                                                    <span>few secs ago</span>
                                                                                </h5>
                                                                                <div className="star-1">
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                            <div className="re-btext">
                                                                                <p>
                                                                                    There're so many choices in their menu. I appreciated that it
                                                                                    also showed the calories. Good to know about that. Then I
                                                                                    chose the one with lower calories
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="re-list">
                                                                            <div className="re-listimg">
                                                                                <img src={usermdl} alt="" />
                                                                            </div>
                                                                            <div className="re-listcont">
                                                                                <h5>
                                                                                    Jozef Kondratovich
                                                                                    <span>few secs ago</span>
                                                                                </h5>
                                                                                <div className="star-1">
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                    <Link to="#">
                                                                                        <FaStar className="star-1" />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                            <div className="re-btext">
                                                                                <p>
                                                                                    There're so many choices in their menu. I appreciated that it
                                                                                    also showed the calories. Good to know about that. Then I
                                                                                    chose the one with lower calories
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ModalBody>

                                                                {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
                                                            </Modal>
                                                        </Link>
                                                        <span class="product-discount-label st-1"><FaHeart /></span>
                                                    </div>
                                                </Col>
                                                <Col md="8">
                                                    <div class="product-content">
                                                        <ul class="rating">
                                                            <li>
                                                                <Link to="#" className='btt'>#best</Link>
                                                                <Link to="#" className='btt'>#study</Link>
                                                            </li>
                                                        </ul>
                                                        <h3>
                                                            Java Tutorials For Beginners In Hindi
                                                        </h3>
                                                        <h5>
                                                            <span>By</span> CodeWithHarry
                                                        </h5>
                                                        <p>
                                                            Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java 19:00 Basic Structure of a Java Program:  Understanding our First JavaHello World Program 14:09
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
                                                                    <Link to="#" className='tag'>2022</Link>
                                                                    <Link to="#" className='tag'>#Java</Link>
                                                                    <Link to="#" className='tag'>#Android</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* div recent product */}
                <div className="sec-bottom">
                    <h4>Recently Viewed
                        <span>
                            <Link to="/">See All</Link>
                        </span>
                    </h4>
                    <Row>
                        <Col>
                            <RecentProductList />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default ProductList;
