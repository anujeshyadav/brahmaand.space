import { Row, Col, Form, Button, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import mdicon1 from "../../assets/icons/mdicon-1.png";
import usericon from "../../assets/icons/usericon.png";
import typeicon from "../../assets/icons/typeicon.png";
import languageicon from "../../assets/icons/languageicon.png";
import ReactHtmlParser from "react-html-parser";
import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";
import Moment from "react-moment";
import axiosConfig from "../../components/axiosConfig.js";
import { MdCancelPresentation } from "react-icons/md";
import PrettyRating from "pretty-rating-react";
import yearicon from "../../assets/icons/yearicon.png";
import formaticon from "../../assets/icons/formaticon.png";
import diffculty from "../../assets/icons/diffculty.png";
import mdicon2 from "../../assets/icons/mdicon-2.png";
import submiticon from "../../assets/icons/submiticon.png";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import reviewstar from "../../assets/icons/reviewstra.png";
import StarsRating from "stars-rating";
import { useNavigate } from "react-router-dom";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import ratingstar from "../../assets/icons/ratingstar.png";
import createricon from "../../assets/icons/createricon.png";
import "../../styles/ModulePage.css";
import ProgressBar from "@ramonak/react-progress-bar";

function Allpromotion(args) {
  const [promotion, setPromotion] = useState([]);
  const [activelike, setActivelike] = useState("");
  const [promotId, setPromotId] = useState("");
  const toggleone = () => setModalone(!modalone);
  const navigate = useNavigate();
  const [averageRating, setAverageRating] = useState("");
  const [productdes, setProductdes] = useState("");
  const [modalone, setModalone] = useState(false);
  const [promotiondata, setPromotiondata] = useState({});
  const [getonecomment, setGetonecomment] = useState([]);
  const [Producdetail, setProductdetail] = useState([]);
  const [text, settText] = useState("");
  const [rating, setRating] = useState("");
  const [myId, setmyId] = useState("");
  const [handlebookmark, setHandlebookmark] = useState("");
  const [liked, setliked] = useState("");

  const secondExample = {
    size: 50,
    count: 5,
    color: "#434b4d47",
    activeColor: "#d9ad26",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    // filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      // console.log(`Example 2: new value is ${newValue}`);
      setRating(newValue);
    },
  };

  const removebookmark = (id) => {
    setliked(id);
    if (myId !== "" && myId !== null) {
      axiosConfig
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "false",
        })
        .then((response) => {
          console.log(response.data.data.status);
          setActivelike(response.data.data.status);
          swal("you Removed your bookmark ");
          hadlestatusbookmark();
        })
        .catch((error) => {
          // console.log(error.response.data);
        });
    } else {
      swal("User Need to Login first ");
      navigate("/login");
    }
  };

  const addbookmark = (id) => {
    // console.log(id);
    setliked(id);

    if (myId !== "" && myId !== null) {
      axiosConfig
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "true",
        })
        .then((response) => {
          console.log(response.data.data.status);
          setActivelike(response.data.data.status);
          swal("you bookmarked it");
          hadlestatusbookmark();

          // console.log("likeindividual", response.data.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
          if (error.response.data.message == "already exists") {
            swal(" Your already bookmarked It");
          }
        });
    } else {
      swal("login first");
      navigate("/login");
    }
  };
  const getUser = async () => {
    const user = await localStorage.getItem("userId");
    if (user !== null && user !== "") {
      setmyId(user);
    } else {
      // console.log("no UserId Found");
    }
  };
  const handlepromotion = (_id) => {
    var promotionId = _id;
    if (promotionId === _id) {
      setPromotId(promotionId);
      axios
        .get(`http://3.7.173.138:9000/admin/getone_reslist/${promotId}`)
        .then((res) => {
          // console.log(res.data.data._id);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            setPromotiondata(res.data.data);
            // console.log(res.data.data);
            toggleone();
          }
        })
        .catch((err) => {
          // console.log(err.data.data);
        });
    }
    axios
      .get(`http://3.7.173.138:9000/user/average_rating/${productdes}`)
      .then((res) => {
        // console.log(res.data);
        setAverageRating(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const selectedId = Producdetail._id;
    console.log(selectedId, myId, text, rating);

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

  const hadlestatusbookmark = () => {
    if (
      myId !== null &&
      myId !== undefined &&
      myId !== "" &&
      liked !== "" &&
      liked !== null &&
      liked !== undefined
    ) {
      axios
        .get(`http://3.7.173.138:9000/user/getone_mylikes/${myId}/${liked}`)
        .then((res) => {
          console.log(res.data.data);
          setHandlebookmark(res.data.data.status);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  const handleclosepromotion = () => {
    setModalone(false);
    setPromotId("");
    setPromotiondata("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    const selectedId = Producdetail._id;
    // console.log(selectedId, userId, text, rating);

    if (selectedId == Producdetail._id && userId !== "") {
      axios
        .post(`http://3.7.173.138:9000/user/add_Comment`, {
          submitresrcId: selectedId,
          userid: userId,
          comment: text,
          rating: rating,
        })
        .then((res) => {
          // console.log(res.data);
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
    // console.log(text);
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
  const onchangehandler = (e) => {
    settText(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  useEffect(() => {
    getUser();
    promotionadmin();
  }, [handlebookmark]);
  const promotionadmin = () => {
    axios
      .get(`http://3.7.173.138:9000/user/Promotions`)
      .then((res) => {
        setPromotion(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-3 mb-3">
        <h3 className="d-flex justify-content-center mt-4 mb-4">
          All Promotions
        </h3>
        <div className="container mb-3">
          <Row className=" mb-2">
            {promotion?.map((promotion) => (
              <Col lg="3" md="4" sm="6" key={promotion?._id}>
                <div class="product-grid8">
                  <div class="product-image8">
                    <Link
                      key={promotion?._id}
                      onClick={() => handlepromotion(promotion?._id)}
                    >
                      <img
                        style={{
                          height: "200px",
                          borderRadius: "10px",
                        }}
                        key={promotion?._id}
                        // height={220}
                        className="promotionimageclass"
                        src={promotion?.img}
                        alt="image"
                      />
                      <Modal
                        key={promotiondata?._id}
                        className="mdlg"
                        isOpen={modalone}
                        toggle={handleclosepromotion}
                        {...args}
                      >
                        <ModalBody key={promotiondata?._id}>
                          <Row>
                            <Col></Col>
                            <Col
                              lg="1"
                              className="d-flex justify-content-right"
                            >
                              <MdCancelPresentation
                                className="cancelbuttondata"
                                onClick={handleclosepromotion}
                                size={30}
                              />
                            </Col>
                          </Row>
                          <div className="main-content">
                            <h2>{ReactHtmlParser(promotiondata?.desc)}</h2>
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
                                {promotiondata?.topics?.map((val) => (
                                  <Link className="d-flex " to="#">
                                    {val}{" "}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <hr></hr>
                          </div>

                          <div className="mid">
                            <h5>
                              Link :
                              <a href={promotiondata?.link}>
                                {promotiondata?.link}
                              </a>
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
                                      <h4>{promotiondata?.creatorName}</h4>
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
                                      <h4>{promotiondata?.creatorName}</h4>
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
                                      <Link to="#">{promotiondata?.type}</Link>
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
                                        {promotiondata?.format}
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
                                      <p to="#">
                                        {promotiondata?.category?.title}
                                      </p>
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
                                      {promotiondata?.language?.map((lang) => (
                                        <span>{lang?.language} </span>
                                      ))}
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
                                      {promotiondata?.relYear?.map((year) => (
                                        <Link to="#">{year?.yrName}</Link>
                                      ))}
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
                                      <Link to="#">
                                        [
                                        {promotiondata?.ava_rating !== "NaN" ? (
                                          <span>
                                            {promotiondata?.ava_rating}
                                          </span>
                                        ) : (
                                          <span>0</span>
                                        )}
                                        ]
                                      </Link>
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
                                      <Moment format="ll">
                                        {Producdetail?.createdAt}
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
                            <p>{ReactHtmlParser(promotiondata?.desc)}</p>
                          </div>

                          <hr></hr>
                          <div className="rating-box">
                            <Row>
                              <Col lg="6">
                                <div className="rat-left">
                                  <h4>Customer Rating</h4>
                                  <div className="">
                                    <PrettyRating
                                      // value={value?.rating}
                                      value={averageRating?.data}
                                      icons={icons.star}
                                      colors={colors.star}
                                    />

                                    <small className="mt-3">
                                      {getonecomment?.length}- customers reviews
                                      {/* {sum / totalrateng.length} */}
                                    </small>

                                    {/* <Row>
                                              <Col
                                                className="d-flex justify-content-left mt-1"
                                                style={{ color: "blue" }}
                                                lg="4"
                                              >
                                                5 Stars
                                              </Col>
                                              <Col
                                                className="mt-1 mb-1 "
                                                lg="8"
                                              >
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
                                            </Row> */}
                                  </div>
                                </div>
                              </Col>
                              <Col lg="6">
                                <h4>Write your review</h4>

                                {/* <StarsRating
                                  count={5}
                                  onChange={ratingChanged}
                                  size={40}
                                  color={"#ffd700"}
                                /> */}
                                <ReactStars {...secondExample} />
                              </Col>
                              <Row lg="12">
                                <div className="rat-right">
                                  {/* <h4>Write your review</h4> */}
                                  <div className="">
                                    {/* <StarsRating
                                              count={5}
                                              onChange={ratingChanged}
                                              size={40}
                                              color={"#ffd700"}
                                            /> */}

                                    <form>
                                      <textarea
                                        value={text}
                                        name="text"
                                        onChange={onchangehandler}
                                        className="form-control st-taetarea"
                                        placeholder=""
                                      ></textarea>
                                      <Button
                                        onClick={handleSubmit}
                                        className=" bt-st reviewbutton mb-3 btn btn-primary"
                                      >
                                        Send
                                      </Button>
                                    </form>
                                  </div>
                                </div>
                              </Row>
                            </Row>
                          </div>
                          <Row key={promotion?._id}>
                            <Col lg="4"></Col>
                            <Col lg="8" key={promotion?._id}>
                              {handlebookmark === "true" ? (
                                <button
                                  key={promotion?._id}
                                  className="addbookmark  btn btn-secondary"
                                  color="success"
                                  onClick={() => removebookmark(promotion?._id)}
                                >
                                  Remove Bookmark
                                </button>
                              ) : (
                                <button
                                  key={promotion?._id}
                                  onClick={() => addbookmark(promotion?._id)}
                                  className="addbookmark  btn btn-secondary"
                                  color="warning "
                                >
                                  Add Bookmark
                                </button>
                              )}
                            </Col>
                          </Row>
                          <hr></hr>
                          <div className="review-list">
                            <h4>Reviews:</h4>

                            {getonecomment?.map((value) => (
                              <div className="re-list">
                                <div className="re-listimg">
                                  <img
                                    src={value?.userid?.profileImg}
                                    alt="UserImage"
                                  />
                                </div>
                                <div className="re-listcont">
                                  <h5>
                                    {value?.userid?.username}
                                    <span>
                                      <Moment format="ll">
                                        {value?.createdAt}
                                      </Moment>
                                    </span>
                                  </h5>
                                  <div className="star-1">
                                    <PrettyRating
                                      value={value?.rating}
                                      icons={icons.star}
                                      colors={colors.star}
                                    />
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
                  </div>

                  <div class="product-content">
                    <ul class="rating">
                      <li>
                        {promotion?.topics?.map((topic) => (
                          <Link className="btt">{topic}</Link>
                        ))}
                      </li>
                    </ul>
                    <h3>{ReactHtmlParser(promotion?.desc?.slice(0, 25))}</h3>
                    <h5>
                      <span>By -</span> {promotion?.creatorName}
                    </h5>
                    <p>{promotion?.res_desc?.slice(0, 50)}</p>
                    <div className="mt-2 mb-2">
                      <Row>
                        <Col lg="6">
                          <PrettyRating
                            // value={value?.rating}
                            value={promotion?.ava_rating}
                            icons={icons.star}
                            colors={colors.star}
                          />
                        </Col>
                        <Col className="justify-content-left" lg="6">
                          {promotion?.ava_rating}- Rating
                        </Col>
                      </Row>

                      <ul class="rating">
                        <li>
                          <Link to="#" className="tag">
                            {promotion?.relYear[0]?.yrName}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Allpromotion;
