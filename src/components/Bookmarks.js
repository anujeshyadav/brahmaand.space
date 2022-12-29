import { Container, Row, Col, Button } from "reactstrap";

import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaStar } from "react-icons/fa";
import mdicon1 from "../assets/icons/mdicon-1.png";
import mdicon2 from "../assets/icons/mdicon-2.png";
import createricon from "../assets/icons/createricon.png";
import usericon from "../assets/icons/usericon.png";
import typeicon from "../assets/icons/typeicon.png";
import formaticon from "../assets/icons/formaticon.png";
import diffculty from "../assets/icons/diffculty.png";
import yearicon from "../assets/icons/yearicon.png";
import submiticon from "../assets/icons/submiticon.png";
import reviewstar from "../assets/icons/reviewstra.png";
import ratingstar from "../assets/icons/ratingstar.png";
import { useNavigate } from "react-router-dom";
import languageicon from "../assets/icons/languageicon.png";
import topBar from "../css/topBar.css";
import React, { useState, useEffect } from "react";
import Heart from "react-heart";
import axiosConfig from "../components/axiosConfig";
import Moment from "react-moment";
import StarsRating from "stars-rating";
import swal from "sweetalert";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import PrettyRating from "pretty-rating-react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { Modal, ModalBody } from "reactstrap";

function Bookmarks(args) {
  const [modalone, setModalone] = useState(false);
  const [liked, setliked] = useState("");
  const [activelike, setActivelike] = useState("");
  const [text, settText] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [categry, setCategry] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [active, setActive] = useState(false);
  const [getonecomment, setGetonecomment] = useState([]);
  const [mylikes, setMylikes] = useState([]);
  const [Producdetail, setProductdetail] = useState([]);
  const [productdes, setProductdes] = useState("");
  const [totalrateng, setTotalrateng] = useState("");
  const [all, setAll] = useState("");
  const [rating, setRating] = useState("");
  const [myId, setmyId] = useState("");
  const [handlebookmark, setHandlebookmark] = useState("");
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

  const navigate = useNavigate();
  const getUser = async () => {
    const user = await localStorage.getItem("userId");
    if (user !== null && user !== "") {
      setmyId(user);
    } else {
      // console.log("no UserId Found");
    }
  };
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (userId !== null && userId !== undefined && userId !== "") {
      if (
        text !== null &&
        text !== undefined &&
        text !== "" &&
        rating !== null &&
        rating !== undefined &&
        rating !== ""
      ) {
        const selectedId = Producdetail._id;
        // console.log(selectedId, userId, text, rating);

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
              swal("Your Review Submitted Successfully!");
            } else if (res.data.msg == "not able to comment") {
              swal("User can't Review own Resource");
            }
          })
          .catch((err) => {
            // console.log(err);
            if (err.response.data.message == "already exists") {
              swal("You already Commented On It");
            }
          });
        settText("");
        setRating("");
      } else {
        swal(" Please Enter review and Rating");
      }
    } else {
      swal("you need to Login first");
    }

    // console.log(text);
  };

  const onchangehandler = (e) => {
    settText(e.target.value);
  };
  const removebookmark = (id) => {
    // console.log(id);
    setliked(id);
    if (myId !== "" && myId !== null) {
      axiosConfig
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "false",
        })
        .then((response) => {
          // console.log(response.data.data.status);
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
          // console.log(response.data.data.status);
          setActivelike(response.data.data.status);
          swal("you bookmarked it");
          hadlestatusbookmark();

          // console.log("likeindividual", response.data.data);
        })
        .catch((error) => {
          // console.log(error.response.data.message);
          if (error.response.data.message == "already exists") {
            swal(" Your already bookmarked It");
          }
        });
    } else {
      swal("login first");
      navigate("/login");
    }
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
          // console.log(res.data.data);
          setHandlebookmark(res.data.data.status);
        })
        .catch((err) => {
          // console.log(err.response.data);
        });
    }
  };
  const handleSelection = (_id) => {
    // console.log(_id);
    var selectedId = _id;

    if (selectedId === _id) {
      setProductdes(selectedId);
      axios
        .get(`http://3.7.173.138:9000/admin/getone_reslist/${productdes}`)
        .then((res) => {
          console.log(res.data.data);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            setProductdetail(res.data.data);
            // console.log(res.data.data);
            toggle();
          }
        })
        .catch((err) => {
          // console.log(err.data.data);
        });
      axios
        .get(`http://3.7.173.138:9000/user/average_rating/${productdes}`)
        .then((res) => {
          console.log(res.data);
          setAverageRating(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    axios
      .get(`http://3.7.173.138:9000/user/comment_list/${selectedId}`)
      .then((res) => {
        setGetonecomment(res.data.data);
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const clicked = () => {
    setActive(!active);
    // console.log("you clicked it");
  };

  useEffect(() => {
    getUser();
    hadlestatusbookmark();
    mylikehandler();
  }, [myId, handlebookmark, activelike]);
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
    // console.log(myId);
    if (myId !== null) {
      axios
        .get(`http://3.7.173.138:9000/user/my_likes/${myId}`)
        .then((res) => {
          setMylikes(res.data.data);
          console.log(res.data.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  };
  const handleclosemodal = () => {
    setModal(false);
    setProductdetail("");
    setProductdes("");
  };

  return (
    <div className="container test nohover mb-4">
      <h3 className="d-flex justify-content-center mt-4 mb-4">
        Your Bookmark's here
      </h3>
      <div className="search-st mt-4 mb-4">
        {mylikes !== ""
          ? mylikes?.map((data) => (
              <Row className="videopostedall mb-4" key={data?._id}>
                <Col md="4">
                  <div className="product-image8 st-2">
                    <Link
                      key={data?.submitresrcId?._id}
                      onClick={() => handleSelection(data?.submitresrcId?._id)}
                    >
                      <img
                        height={280}
                        src={data?.submitresrcId?.img}
                        alt="image"
                        style={{ borderRadius: "10px" }}
                        width="90%"
                      />
                      <Modal
                        key={Producdetail?._Id}
                        className="mdlg"
                        isOpen={modal}
                        toggle={handleclosemodal}
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
                                    <img src={icons} alt="" width="30px" />
                                  </span>
                                  Topic:
                                </h5>
                              </div>
                              <div className=" d-flex tag-2">
                                {Producdetail?.topics?.map((val) => (
                                  <Link className="d-flex " to="#">
                                    {val}{" "}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <hr></hr>
                          </div>

                          <div className="mid">
                            <h5 className="mt-3">
                              Link :<Link>{Producdetail?.link}</Link>
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
                                      <img
                                        src={formaticon}
                                        alt=""
                                        width="35px"
                                      />
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
                                      <img
                                        src={diffculty}
                                        alt=""
                                        width="35px"
                                      />
                                    </div>
                                    <div className="mid-1-b tt-1">
                                      <p>Category:</p>
                                      <Link>
                                        {Producdetail?.category?.title}
                                      </Link>
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

                                      {Producdetail?.relYear?.map((year) => (
                                        <Link>{year?.yrName}</Link>
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
                                        [{averageRating?.data}]
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
                                      {Producdetail?.language?.map((lang) => (
                                        <span>{lang?.language} </span>
                                      ))}
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
                              <Col lg="6">
                                <div className="rat-left mt-3">
                                  <h4>Customer Rating</h4>
                                  <div className="">
                                    <PrettyRating
                                      value={averageRating?.data}
                                      icons={icons.star}
                                      colors={colors.star}
                                    />
                                    <span className="starratinginno">
                                      {averageRating?.data} of 5 Stars
                                    </span>
                                    <br></br>
                                    <span className="mt-3">
                                      {getonecomment?.length}- Customers Reviews
                                    </span>

                                    {/* <Row>
                                      <Col
                                        className="d-flex justify-content-left "
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
                                        className="d-flex justify-content-left "
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
                                        className="d-flex justify-content-left "
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
                                        className="d-flex justify-content-left "
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
                                        className="d-flex justify-content-left "
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
                                <h4 className="mt-3">Write your Review</h4>
                                {/* <StarsRating
                                  count={5}
                                  onChange={ratingChanged}
                                  size={40}
                                  color2={"#ffd700"}
                                /> */}
                                <ReactStars {...secondExample} />
                              </Col>
                            </Row>
                            <Row lg="12" key={Producdetail?._id}>
                              <div className="rat-right">
                                {/* <Row>
                                  <Col lg="6"></Col>
                                </Row> */}

                                <div className="">
                                  <form key={Producdetail?._id}>
                                    <textarea
                                      key={Producdetail?._id}
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
                                      Submit
                                    </Button>
                                  </form>
                                </div>
                              </div>
                            </Row>
                          </div>
                          <Row key={data?.submitresrcId?._id}>
                            <Col lg="4"></Col>
                            <Col lg="8" key={data?.submitresrcId?._id}>
                              <button
                                key={data?.submitresrcId?._id}
                                className="addbookmark  btn btn-secondary"
                                color="success"
                                onClick={() =>
                                  removebookmark(data?.submitresrcId?._id)
                                }
                              >
                                Remove bookmark
                              </button>
                            </Col>
                          </Row>
                          <hr></hr>
                          <div className="review-list mt-3  ">
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
                    <span className="product-discount-label st-1"></span>
                  </div>
                </Col>
                <Col md="8">
                  <div className="product-content">
                    <ul className="rating mb-3 topicslike">
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
                            value={data?.submitresrcId?.ava_rating}
                            icons={icons.star}
                            colors={colors.star}
                          />
                        </Col>
                        <Col className="justify-content-left" lg="4">
                          {data?.submitresrcId?.ava_rating}- Rating
                        </Col>

                        {/* <Col lg="2">
                          <b>
                            <span style={{ color: "#5F56C6" }}>
                              {data?.submitresrcId?.__v} Reviews
                            </span>
                          </b>
                        </Col> */}
                      </Row>
                      <Row>
                        <Col lg="2">
                          {data?.submitresrcId?.relYear[0]?.yrName}
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            ))
          : null}
      </div>
    </div>
  );
}

export default Bookmarks;
