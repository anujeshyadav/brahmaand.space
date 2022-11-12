import React, { useState, useEffect } from "react";
import axios from "axios";
import Heart from "react-heart";
import StarsRating from "stars-rating";
import swal from "sweetalert";
import { FiFilter } from "react-icons/fi";
import Slider from "./Slider";
import Pagination from "react-bootstrap/Pagination";
//import ReactDOM from "react-dom";
import Searchfiltermodel from "../../components/filter/Searchfiltermodel";
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
import { Link, useParams } from "react-router-dom";
import "../../styles/Filter.css";
import AutoSearch from "./AutoSearch";
import RangeSlider from "react-bootstrap-range-slider";
import business from "../../images/business.png";
import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";
import FilterList from "./FilterList";
import RecentProductList from "./RecentProductList";
import backimg from "../../assets/images/backimg.png";
import axiosConfig from "../axiosConfig";
import Moment from "react-moment";
import PrettyRating from "pretty-rating-react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { CloudLightning, CornerDownLeft } from "react-feather";

function ProductList(args) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState();
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const [liked, setliked] = useState([]);
  const [activelike, setActivelike] = useState([]);
  const [dislike, setDislike] = useState([]);
  const [dislikeact, setDislikeact] = useState([]);
  let Params = useParams();
  const [Producdetail, setProductdetail] = useState([]);
  const [productdes, setProductdes] = useState("");
  const [text, settText] = useState("");
  const [getonecomment, setGetonecomment] = useState([]);
  const [like, setLike] = useState(liked);
  const onchangehandler = (e) => {
    settText(e.target.value);
  };
  const [rating, setRating] = useState("");
  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log(newRating);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    const selectedId = Producdetail._id;
    console.log(selectedId, userId, text, rating);

    if (selectedId == Producdetail._id && userId !== "") {
      axios
        .post(`http://3.7.173.138:9000/user/add_Comment`, {
          submitresrcId: selectedId,
          userid: userId,
          comment: text,
          rating: rating,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message == "success") {
            swal("your Review Submitted Successfully");
          } else {
            swal("Something went wrong review again ");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      settText("");
      setRating("");
    }
    console.log(text);
  };
  const handleSelection = (_id) => {
    var selectedId = _id;

    if (selectedId === _id) {
      setProductdes(selectedId);
      axios
        .get(`http://3.7.173.138:9000/admin/getone_reslist/${productdes}`)
        .then((res) => {
          console.log(res.data.data._id);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            setProductdetail(res.data.data);
            console.log(res);
            toggle();
          }
        })
        .catch((err) => {
          console.log(err.data.data);
        });
    }

    // setGetonecomment(selectedId);
    axios
      .get(`http://3.7.173.138:9000/user/comment_list/${selectedId}`)
      .then((res) => {
        setGetonecomment(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    allsearchproduct();
  }, [Params]);

  const [categry, setCategry] = useState([]);

  const allsearchproduct = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/listbysubcategory/${Params.id}`)
      .then((response) => {
        setCategry(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      <section className="seachproduct">
        <Container>
          <Row className="searchbarpr">
            <Col className="seachareapr" lg="10">
              <div className="inputareaa searchba">
                <input
                  type="text"
                  placeholder="   Searching best quality content here . . . "
                  className="searchprd inputareaa searchba "
                />
              </div>
            </Col>
            <Col lg="2">
              <Button className="probtn text-center ">
                <p className="searchproduct">SEARCH</p>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <FilterList />

        <div
          className="bg-st"
          style={{
            backgroundImage: `url(${backimg})`,
            width: "100%",
            padding: "130px 0px",
            backgroundSize: "cover",
          }}
        ></div>

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
                        <Row>
                          <Col lg="9">
                            <h5>Review</h5>
                          </Col>
                          <Col className="fifilter " lg="3">
                            <FiFilter size={30} />
                          </Col>
                        </Row>

                        <Row>
                          <input
                            min="0"
                            max="5"
                            step="1"
                            type="range"
                            id="temp"
                            name="temp"
                            list="tickmarks"
                          />
                          <datalist id="tickmarks">
                            <option value="0" label="0"></option>
                            <option value="1" label="1"></option>
                            <option value="2" label="2"></option>
                            <option value="3" label="3"></option>
                            <option value="4" label="4"></option>
                            <option value="5" label="5"></option>
                          </datalist>
                        </Row>
                        <Row>
                          <Col lg="9">
                            <p>Range</p>
                          </Col>
                          <Col className="searhfastarfilter" lg="1">
                            <FaStar color="#f3c60f" size={22} />
                          </Col>
                          <Col className="rangefil" lg="2">
                            1 - 5
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5>Type</h5>
                        <ul>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>Free </span>
                          </li>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>Paid (11)</span>
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
                            <span>Video (74)</span>
                          </li>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>Text (29)</span>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5>Source</h5>
                        <ul>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>Youtube</span>
                          </li>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>Others</span>
                          </li>

                          <br></br>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>
                              <b>Not Older Than a Year</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg="12" className="py-3"></Col>
                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5> Content Language</h5>
                        <ul>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            Arabic (3)
                          </li>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>English (87)</span>
                          </li>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>Hindi (6)</span>
                          </li>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>Russian (3)</span>
                          </li>
                          <li>
                            <input type="checkbox" className="ft-check" />
                            <span>Urdu (1)</span>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5>Sort By</h5>
                        <hr></hr>
                        <ul className="clearfiltertext">
                          <li className="clearfiltertext">
                            <Link>Relevance</Link>
                          </li>
                          <li className="clearfiltertext">
                            <Link>Rating</Link>
                          </li>
                          <li>
                            <Link>Low to High</Link>
                          </li>
                          <li className="clearfiltertext">
                            <Link>High to Low</Link>
                          </li>
                        </ul>
                        <Button color="info">Clear Filter</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg="8" md="8">
                <div className="right-side">
                  <h4>
                    Promotions
                    <span>
                      <Link to="/blog">See All</Link>
                    </span>
                  </h4>

                  <Row>
                    <Col lg="4" md="4" sm="6">
                      <div class="product-grid8">
                        <div class="product-image8">
                          <Link to="#" onClick={toggle}>
                            <img src={business} alt="" />
                            {/* <Modal
                              className="mdlg"
                              isOpen={modal}
                              toggle={toggle}
                              {...args}
                            >
                              <ModalBody>
                                <div className="main-content">
                                  <h2>
                                    Building Industry-Level Apps With
                                    Multi-Module Architecture
                                  </h2>
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
                                          <img
                                            src={icons}
                                            alt=""
                                            width="30px"
                                          />
                                        </span>
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
                                    Link :
                                    <span>
                                      https://pl-coding.com/multi-module-course
                                    </span>
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
                                            <img
                                              src={typeicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={formaticon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={diffculty}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={languageicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={yearicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={rating}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={submiticon}
                                              alt=""
                                              width="35px"
                                            />
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
                                    Build a calorie counter app in Android
                                    Studio using multi-modulearchitecture.
                                  </p>
                                </div>

                                <hr></hr>
                                <div className="rating-box">
                                  <Row>
                                    <Col lg="4">
                                      <div className="rat-left">
                                        <h4>Customer Rating</h4>
                                        <div className="">
                                          <img
                                            src={reviewstar}
                                            alt=""
                                            width="120px"
                                          />
                                          <span>4.7 of 5</span>
                                          <small className="mt-3">
                                            362 customers reviews
                                          </small>
                                          <img
                                            src={ratingstar}
                                            alt=""
                                            width="100%"
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg="8">
                                      <div className="rat-right">
                                        <h4>Write your review</h4>
                                        <div className="">
                                          <img
                                            src={reviewstar}
                                            alt=""
                                            width="120px"
                                          />
                                          <form>
                                            <textarea
                                              className="form-control st-taetarea"
                                              placeholder=""
                                            ></textarea>
                                            <Button className="bt-st">
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
                                        There're so many choices in their menu.
                                        I appreciated that it also showed the
                                        calories. Good to know about that. Then
                                        I chose the one with lower calories
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
                                        There're so many choices in their menu.
                                        I appreciated that it also showed the
                                        calories. Good to know about that. Then
                                        I chose the one with lower calories
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </ModalBody>

                            
                            </Modal> */}
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
                            Introduction to Java + Installing Java JDK and
                            IntelliJ IDEA for Java 19:00 Basic Structure of a
                            Java Program: Understanding our First JavaHello
                            World Program 14:09
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
                                <Link to="#" className="tag">
                                  #Android
                                </Link>
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
                            {/* <Modal
                              className="mdlg"
                              isOpen={modal}
                              toggle={toggle}
                              {...args}
                            >
                              <ModalBody>
                                <div className="main-content">
                                  <h2>
                                    Building Industry-Level Apps With
                                    Multi-Module Architecture
                                  </h2>
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
                                          <img
                                            src={icons}
                                            alt=""
                                            width="30px"
                                          />
                                        </span>
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
                                    Link :{" "}
                                    <span>
                                      https://pl-coding.com/multi-module-course
                                    </span>
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
                                            <img
                                              src={typeicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={formaticon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={diffculty}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={languageicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={yearicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={rating}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={submiticon}
                                              alt=""
                                              width="35px"
                                            />
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
                                    Build a calorie counter app in Android
                                    Studio using multi-modulearchitecture.
                                  </p>
                                </div>

                                <hr></hr>
                                <div className="rating-box">
                                  <Row>
                                    <Col lg="4">
                                      <div className="rat-left">
                                        <h4>Customer Rating</h4>
                                        <div className="">
                                          <img
                                            src={reviewstar}
                                            alt=""
                                            width="120px"
                                          />
                                          <span>4.7 of 5</span>
                                          <small className="mt-3">
                                            362 customers reviews
                                          </small>
                                          <img
                                            src={ratingstar}
                                            alt=""
                                            width="100%"
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg="8">
                                      <div className="rat-right">
                                        <h4>Write your review</h4>
                                        <div className="">
                                          <img
                                            src={reviewstar}
                                            alt=""
                                            width="120px"
                                          />
                                          <form>
                                            <textarea
                                              className="form-control st-taetarea"
                                              placeholder=""
                                            ></textarea>
                                            <Button className="bt-st">
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
                                        There're so many choices in their menu.
                                        I appreciated that it also showed the
                                        calories. Good to know about that. Then
                                        I chose the one with lower calories
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
                                        There're so many choices in their menu.
                                        I appreciated that it also showed the
                                        calories. Good to know about that. Then
                                        I chose the one with lower calories
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </ModalBody>

                              
                            </Modal> */}
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
                            Introduction to Java + Installing Java JDK and
                            IntelliJ IDEA for Java 19:00 Basic Structure of a
                            Java Program: Understanding our First JavaHello
                            World Program 14:09
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
                                <Link to="#" className="tag">
                                  #Android
                                </Link>
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
                            {/* <Modal
                              className="mdlg"
                              isOpen={modal}
                              toggle={toggle}
                              {...args}
                            >
                              <ModalBody>
                                <div className="main-content">
                                  <h2>
                                    Building Industry-Level Apps With
                                    Multi-Module Architecture
                                  </h2>
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
                                          <img
                                            src={icons}
                                            alt=""
                                            width="30px"
                                          />{" "}
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
                                    Link :{" "}
                                    <span>
                                      https://pl-coding.com/multi-module-course
                                    </span>
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
                                            <img
                                              src={typeicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={formaticon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={diffculty}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={languageicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={yearicon}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={rating}
                                              alt=""
                                              width="35px"
                                            />
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
                                            <img
                                              src={submiticon}
                                              alt=""
                                              width="35px"
                                            />
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
                                    Build a calorie counter app in Android
                                    Studio using multi-modulearchitecture.
                                  </p>
                                </div>

                                <hr></hr>
                                <div className="rating-box">
                                  <Row>
                                    <Col lg="4">
                                      <div className="rat-left">
                                        <h4>Customer Rating</h4>
                                        <div className="">
                                          <img
                                            src={reviewstar}
                                            alt=""
                                            width="120px"
                                          />
                                          <span>4.7 of 5</span>
                                          <small className="mt-3">
                                            362 customers reviews
                                          </small>
                                          <img
                                            src={ratingstar}
                                            alt=""
                                            width="100%"
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg="8">
                                      <div className="rat-right">
                                        <h4>Write your review</h4>
                                        <div className="">
                                          <img
                                            src={reviewstar}
                                            alt=""
                                            width="120px"
                                          />
                                          <form>
                                            <textarea
                                              className="form-control st-taetarea"
                                              placeholder=""
                                            ></textarea>
                                            <Button className="bt-st">
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
                                        There're so many choices in their menu.
                                        I appreciated that it also showed the
                                        calories. Good to know about that. Then
                                        I chose the one with lower calories
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
                                        There're so many choices in their menu.
                                        I appreciated that it also showed the
                                        calories. Good to know about that. Then
                                        I chose the one with lower calories
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </ModalBody>
                            </Modal> */}
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
                            Introduction to Java + Installing Java JDK and
                            IntelliJ IDEA for Java 19:00 Basic Structure of a
                            Java Program: Understanding our First JavaHello
                            World Program 14:09
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
                                <Link to="#" className="tag">
                                  #Android
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  {/* for pagination here */}

                  <div className="serach-product">
                    <h4>
                      Searching Product
                      <span>
                        <Col className="fifilters " lg="3">
                          <FiFilter size={40} />
                        </Col>
                      </span>
                    </h4>
                    <Row>
                      <div className="search-st mb-4">
                        {categry?.map((categry) => (
                          <Row className="mb-4" key={categry?._id}>
                            <Col md="4">
                              <div class="product-image8 st-2">
                                <Link
                                  key={categry?._id}
                                  onClick={() => handleSelection(categry?._id)}
                                  // onClick={toggle}
                                >
                                  <img
                                    style={{ borderRadius: "10px" }}
                                    src={categry?.img}
                                    alt="image"
                                    width="100%"
                                    height={220}
                                  />

                                  <Modal
                                    key={Producdetail?._Id}
                                    className="mdlg"
                                    isOpen={modal}
                                    toggle={toggle}
                                    {...args}
                                  >
                                    <ModalBody>
                                      <div className="main-content">
                                        <h2>{Producdetail?.desc}</h2>
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
                                                <img
                                                  src={icons}
                                                  alt=""
                                                  width="30px"
                                                />
                                              </span>
                                              Topic:
                                            </h5>
                                          </div>
                                          <div className=" d-flex tag-2">
                                            {Producdetail?.topics?.map(
                                              (val) => (
                                                <span
                                                  className="d-flex "
                                                  to="#"
                                                >
                                                  {val}{" "}
                                                </span>
                                              )
                                            )}
                                          </div>
                                        </div>

                                        <hr></hr>
                                      </div>

                                      <div className="mid">
                                        <h5 className="mt-3">
                                          Link :
                                          <span>{Producdetail?.link}</span>
                                        </h5>
                                        <div className="mid-content">
                                          <Row>
                                            <Col lg="6" md="6">
                                              <div className="mid-1 mb-3">
                                                <div className="mid-1-a">
                                                  <img
                                                    src={createricon}
                                                    alt=""
                                                  />
                                                </div>
                                                <div className="mid-1-b">
                                                  <p>Creator:</p>
                                                  <h4>
                                                    {Producdetail?.creatorName}
                                                  </h4>
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
                                                  <h4>
                                                    {Producdetail?.creatorName}
                                                  </h4>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col lg="3" md="3">
                                              <div className="mid-1 mb-3 tt-2">
                                                <div className="mid-1-a">
                                                  <img
                                                    src={typeicon}
                                                    alt=""
                                                    width="35px"
                                                  />
                                                </div>
                                                <div className="mid-1-b tt-1">
                                                  <p>Type:</p>
                                                  <Link to="#">
                                                    {Producdetail?.type}
                                                  </Link>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col lg="3" md="3">
                                              <div className="mid-1 mb-3 tt-2">
                                                <div className="mid-1-a">
                                                  <img
                                                    src={formaticon}
                                                    alt=""
                                                    width="35px"
                                                  />
                                                </div>
                                                <div className="mid-1-b tt-1">
                                                  <p>Format:</p>
                                                  <Link to="#">
                                                    {Producdetail?.format}
                                                  </Link>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col lg="3" md="3">
                                              <div className="mid-1 mb-3 tt-2">
                                                <div className="mid-1-a">
                                                  <img
                                                    src={diffculty}
                                                    alt=""
                                                    width="35px"
                                                  />
                                                </div>
                                                <div className="mid-1-b tt-1">
                                                  <p>Category:</p>
                                                  <Link>
                                                    {
                                                      Producdetail?.category
                                                        ?.title
                                                    }
                                                  </Link>
                                                </div>
                                              </div>
                                            </Col>

                                            <Col lg="3" md="3">
                                              <div className="mid-1 mb-3 tt-2">
                                                <div className="mid-1-a">
                                                  <img
                                                    src={yearicon}
                                                    alt=""
                                                    width="35px"
                                                  />
                                                </div>
                                                <div className="mid-1-b tt-1">
                                                  <p>Year:</p>

                                                  {Producdetail?.relYear?.map(
                                                    (year) => (
                                                      <Link>
                                                        {year?.yrName}
                                                      </Link>
                                                    )
                                                  )}
                                                </div>
                                              </div>
                                            </Col>
                                            <Col lg="3" md="3">
                                              <div className="mid-1 mb-3 tt-2">
                                                <div className="mid-1-a">
                                                  <img
                                                    src={rating}
                                                    alt=""
                                                    width="35px"
                                                  />
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
                                                  <img
                                                    src={submiticon}
                                                    alt=""
                                                    width="35px"
                                                  />
                                                </div>
                                                <div className="mid-1-b tt-1">
                                                  <p>Submitted:</p>
                                                  <Link to="#">
                                                    <Moment format="ll">
                                                      {Producdetail?.createdAt}
                                                    </Moment>
                                                  </Link>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col lg="4" md="4">
                                              <div className="mid-1 mb-3 tt-2">
                                                <div className="mid-1-a">
                                                  <img
                                                    src={languageicon}
                                                    alt=""
                                                    width="35px"
                                                  />
                                                </div>
                                                <div className="mid-1-b tt-1">
                                                  <p>Language:</p>
                                                  {Producdetail?.language?.map(
                                                    (lang) => (
                                                      <span>
                                                        {lang?.language}{" "}
                                                      </span>
                                                    )
                                                  )}
                                                </div>
                                              </div>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>

                                      <hr></hr>

                                      <div className="description mt-3 mb-3">
                                        <h4>Description:</h4>
                                        <p>{Producdetail?.desc}</p>
                                      </div>

                                      <hr></hr>
                                      <div className="rating-box">
                                        <Row>
                                          <Col lg="4">
                                            <div className="rat-left mt-3">
                                              <h4>Customer Rating</h4>
                                              <div className="">
                                                <img
                                                  src={reviewstar}
                                                  alt=""
                                                  width="120px"
                                                />
                                                <span>4.7 of 5</span>
                                                <br></br>
                                                <span className="mt-3">
                                                  {getonecomment?.length}-
                                                  Customers Reviews
                                                </span>
                                                <img
                                                  src={ratingstar}
                                                  alt=""
                                                  width="100%"
                                                />
                                              </div>
                                            </div>
                                          </Col>
                                          <Col lg="8" key={Producdetail?._id}>
                                            <div className="rat-right">
                                              <h4 className="mt-3">
                                                Write your Review
                                              </h4>
                                              <div className="">
                                                <StarsRating
                                                  count={5}
                                                  onChange={ratingChanged}
                                                  size={40}
                                                  color2={"#ffd700"}
                                                />

                                                <form key={Producdetail?._id}>
                                                  <textarea
                                                    key={Producdetail?._id}
                                                    // id="textarea"
                                                    value={text}
                                                    name="text"
                                                    onChange={onchangehandler}
                                                    className="form-control st-taetarea"
                                                    placeholder=" Enter your Review if you want"
                                                  ></textarea>
                                                  <Button
                                                    onClick={handleSubmit}
                                                    className="bt-st reviewbutton mb-3"
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
                                      <div className="review-list mt-3  ">
                                        <h4>Reviews:</h4>
                                        {getonecomment?.map((value) => (
                                          <div className="re-list">
                                            <div className="re-listimg">
                                              <img
                                                src={value?.userid.profileImg}
                                                alt="UserImage"
                                              />
                                            </div>
                                            <div className="re-listcont">
                                              <h5>
                                                {value.userid.username}
                                                <span>
                                                  <Moment format="ll">
                                                    {value?.createdAt}
                                                  </Moment>
                                                </span>
                                              </h5>
                                              <div className="star-1">
                                                {/* <StarsRating
                                                  count={5}
                                                  disableFillHover={true}
                                                  onChange={ratingChanged}
                                                  size={25}
                                                  allowHover={true}
                                                  readonly
                                                  color2={"#ffd700"}
                                                /> */}
                                                <PrettyRating
                                                  value={value?.rating}
                                                  icons={icons.star}
                                                  colors={colors.star}
                                                />
                                                {/* <Link to="#">
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
                                                </Link> */}
                                              </div>
                                            </div>
                                            <div className="re-btext mt-3">
                                              <p>{value?.comment}</p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </ModalBody>
                                  </Modal>
                                </Link>
                                <span class="product-discount-label st-1">
                                  {localStorage.getItem("userId") !== "" &&
                                  localStorage.getItem("userId") !== null &&
                                  localStorage.getItem("userId") !==
                                    undefined ? (
                                    <button
                                      key={Producdetail?._Id}
                                      type="button"
                                      className="likebuttonbar"
                                      onClick={() => {
                                        const userId =
                                          localStorage.getItem("userId");

                                        setliked(categry?._id);
                                        console.log(liked);

                                        // setActive(true);
                                        axiosConfig
                                          .post(`/user/add_like`, {
                                            submitresrcId: liked,
                                            userid: userId,
                                            status: "like",
                                          })
                                          .then((response) => {
                                            console.log(response.data.data);
                                            swal("you Liked it");

                                            console.log(
                                              "likeindividual",
                                              response.data.data
                                            );
                                          })
                                          .catch((error) => {
                                            console.log(error.response.data);
                                            if (
                                              error.response.data.message ===
                                              "already exists"
                                            ) {
                                              swal("You Already Liked It ");
                                            }
                                          });
                                      }}
                                      // onClick={async (e) => {
                                      //   like
                                      //     ? await removeLike(Producdetail?._Id)
                                      //     : await addLike(Producdetail?._Id);
                                      //   setLike(!like);
                                      // }}
                                    >
                                      {like ? (
                                        <FaHeart size={28} color="red" />
                                      ) : (
                                        <FaRegHeart size={25} />
                                      )}
                                    </button>
                                  ) : (
                                    <Heart
                                      size={20}
                                      onClick={() => {
                                        const userId =
                                          localStorage.getItem("userId");
                                        if (
                                          userId == "" ||
                                          userId == null ||
                                          userId == undefined
                                        ) {
                                          swal(
                                            "you Need to login or Signup for Like and dislike"
                                          );
                                        } else {
                                        }
                                      }}
                                      className="heartlike faregheart"
                                    />
                                  )}
                                </span>
                              </div>
                            </Col>
                            <Col md="8">
                              <div class="product-content">
                                <ul class="rating">
                                  <li>
                                    <Link to="#" className="btt">
                                      {categry?.topics}
                                    </Link>
                                    <Link to="#" className="btt"></Link>
                                  </li>
                                </ul>
                                <h3>{categry?.resTitle}</h3>
                                <h5>
                                  <span>By</span> {categry?.creatorName}
                                </h5>
                                <p>{categry.desc}</p>
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
                                    <span className="ft-star">
                                      {categry?.__v} Reviews
                                    </span>
                                  </ul>

                                  <ul class="rating">
                                    <li>
                                      <Link to="#" className="tag">
                                        {categry?.relYear[0].yrName}
                                      </Link>
                                      <Link to="#" className="tag">
                                        #Java
                                      </Link>
                                      <Link to="#" className="tag">
                                        #Android
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        ))}
                      </div>

                      <div className="search-st mb-3">
                        {/* <Row>
                          <Col md="4">
                            <div class="product-image8 st-2">
                              <Link to="#">
                                <img src={business} alt="" width="100%" />
                              </Link>
                              <span class="product-discount-label st-1">
                                <FaHeart />
                              </span>
                            </div>
                          </Col>
                          <Col md="8">
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
                                Introduction to Java + Installing Java JDK and
                                IntelliJ IDEA for Java 19:00 Basic Structure of
                                a Java Program: Understanding our First
                                JavaHello World Program 14:09
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
                                    <Link to="#" className="tag">
                                      #Android
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                        </Row> */}
                      </div>
                      <div className="search-st mb-3">
                        <Pagination className="d-flex justify-content-right float-right">
                          <Pagination.First />
                          <Pagination.Prev />
                          <Pagination.Item>{1}</Pagination.Item>
                          <Pagination.Item>{2}</Pagination.Item>
                          <Pagination.Ellipsis />

                          <Pagination.Item active>{12}</Pagination.Item>

                          <Pagination.Ellipsis />

                          <Pagination.Next />
                          <Pagination.Last />
                        </Pagination>
                        {/* <Row>
                          <Col md="4">
                            <div class="product-image8 st-2">
                              <Link to="#">
                                <img src={business} alt="" width="100%" />
                                <Modal
                                  className="mdlg"
                                  isOpen={modal}
                                  toggle={toggle}
                                  {...args}
                                >
                                  <ModalBody>
                                    <div className="main-content">
                                      <h2>
                                        Building Industry-Level Apps With
                                        Multi-Module Architecture
                                      </h2>
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
                                              <img
                                                src={icons}
                                                alt=""
                                                width="30px"
                                              />{" "}
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
                                        Link :{" "}
                                        <span>
                                          https://pl-coding.com/multi-module-course
                                        </span>
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
                                                <img
                                                  src={typeicon}
                                                  alt=""
                                                  width="35px"
                                                />
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
                                                <img
                                                  src={formaticon}
                                                  alt=""
                                                  width="35px"
                                                />
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
                                                <img
                                                  src={diffculty}
                                                  alt=""
                                                  width="35px"
                                                />
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
                                                <img
                                                  src={languageicon}
                                                  alt=""
                                                  width="35px"
                                                />
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
                                                <img
                                                  src={yearicon}
                                                  alt=""
                                                  width="35px"
                                                />
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
                                                <img
                                                  src={rating}
                                                  alt=""
                                                  width="35px"
                                                />
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
                                                <img
                                                  src={submiticon}
                                                  alt=""
                                                  width="35px"
                                                />
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
                                        Build a calorie counter app in Android
                                        Studio using multi-modulearchitecture.
                                      </p>
                                    </div>

                                    <hr></hr>
                                    <div className="rating-box">
                                      <Row>
                                        <Col lg="4">
                                          <div className="rat-left">
                                            <h4>Customer Rating</h4>
                                            <div className="">
                                              <img
                                                src={reviewstar}
                                                alt=""
                                                width="120px"
                                              />
                                              <span>4.7 of 5</span>
                                              <small className="mt-3">
                                                362 customers reviews
                                              </small>
                                              <img
                                                src={ratingstar}
                                                alt=""
                                                width="100%"
                                              />
                                            </div>
                                          </div>
                                        </Col>
                                        <Col lg="8">
                                          <div className="rat-right">
                                            <h4>Write your review</h4>
                                            <div className="">
                                              <img
                                                src={reviewstar}
                                                alt=""
                                                width="120px"
                                              />
                                              <form>
                                                <textarea
                                                  className="form-control st-taetarea"
                                                  placeholder=""
                                                ></textarea>
                                                <Button className="bt-st">
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
                                            There're so many choices in their
                                            menu. I appreciated that it also
                                            showed the calories. Good to know
                                            about that. Then I chose the one
                                            with lower calories
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
                                            There're so many choices in their
                                            menu. I appreciated that it also
                                            showed the calories. Good to know
                                            about that. Then I chose the one
                                            with lower calories
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </ModalBody>
                                </Modal>
                              </Link>
                              <span class="product-discount-label st-1">
                                <FaHeart />
                              </span>
                            </div>
                          </Col>
                          <Col md="8">
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
                                Introduction to Java + Installing Java JDK and
                                IntelliJ IDEA for Java 19:00 Basic Structure of
                                a Java Program: Understanding our First
                                JavaHello World Program 14:09
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
                                    <Link to="#" className="tag">
                                      #Android
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                        </Row> */}
                      </div>
                    </Row>
                  </div>
                  {/* for pagination till here */}
                </div>
              </Col>
            </Row>
          </div>

          {/* div recent product */}
          <div className="sec-bottom">
            <h4>
              Recently Viewed
              <span>
                <Link to="/">See All</Link>
              </span>
            </h4>
            <Row>
              {/* <Col> */}
              <RecentProductList />
              {/* </Col> */}
            </Row>
          </div>
        </Container>
      </section>
      {/* <>
        <Modal className="mdlg" isOpen={modal} toggle={toggle} {...args}>
          <ModalBody>
            <div className="main-content">
              <h2>{Producdetail?.desc}</h2>
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
                <div className="tag-2">
                  {Producdetail?.topics.map((val) => (
                    <Link to="#">{val}</Link>
                  ))}
                </div>
              </div>

              <hr></hr>
            </div>

            <div className="mid">
              <h5>
                Link :<span>{Producdetail?.link}</span>
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
                        <h4>{Producdetail?.creatorName}</h4>
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
                        <h4>{Producdetail?.creatorName}</h4>
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
                        <Link to="#">{Producdetail?.type}</Link>
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
                        <Link to="#">{Producdetail?.format}</Link>
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
                        <Link to="#">{Producdetail?.category.title}</Link>
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
                        <Link to="#">{Producdetail?.relYear[0].yrName}</Link>
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
                        <Link to="#">
                          <Moment format="ll">{Producdetail?.createdAt}</Moment>
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4">
                    <div className="mid-1 mb-3 tt-2">
                      <div className="mid-1-a">
                        <img src={languageicon} alt="" width="35px" />
                      </div>
                      <div className="mid-1-b tt-1">
                        <p>Language:</p>
                        <Link className=" " to="#">
                          {Producdetail?.language?.map((lang) => (
                            <span>{lang?.language},</span>
                          ))}
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <hr></hr>

            <div className="description mt-3">
              <h4>Description:</h4>
              <p>{Producdetail?.desc}</p>
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
                    There're so many choices in their menu. I appreciated that
                    it also showed the calories. Good to know about that. Then I
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
                    There're so many choices in their menu. I appreciated that
                    it also showed the calories. Good to know about that. Then I
                    chose the one with lower calories
                  </p>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </> */}
    </>
  );
}

export default ProductList;
