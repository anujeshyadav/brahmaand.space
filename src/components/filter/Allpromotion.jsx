import { Row, Col, Form, Button, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { AiFillEdit } from "react-icons/ai";

import { BsFillBookmarkCheckFill, BsBookmark } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter, Label } from "reactstrap";
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
  const [editmodal, setEditmodal] = useState(false);
  const toggleedit = () => {
    setEditmodal(!editmodal);
  };

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

  const [upcom, setUpcom] = useState("");

  const editcomment = (id, dataid, oldrating) => {
    console.log(oldrating);
    if (rating == "") {
      setRating(oldrating);
    }
    console.log(rating);
    const user = localStorage.getItem("userId");
    if (rating !== "" && upcom !== "") {
      axios
        .post(`http://3.7.173.138:9000/user/editCommentbyUser/${id}`, {
          submitresrcId: dataid,
          userid: user,
          comment: upcom,
          rating: rating,
        })
        .then((res) => {
          console.log(res.data.data);
          swal("Submitted Successfully");
          toggleedit();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  const [editnew, seteditnew] = useState({});

  const handleeditcomment = (id) => {
    axios
      .get(`http://3.7.173.138:9000/admin/getone_coment_list/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setUpcom(res.data.data?.comment);
        toggleedit();
      })
      .catch((err) => {
        console.log(err);
      });
    const user = localStorage.getItem("userId");
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
    setliked(_id);
    var promotionId = _id;
    if (promotionId === _id) {
      setPromotId(promotionId);
      axios
        .get(`http://3.7.173.138:9000/admin/getone_reslist/${promotionId}`)
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
      .get(`http://3.7.173.138:9000/user/average_rating/${promotionId}`)
      .then((res) => {
        // console.log(res.data);
        setAverageRating(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
    // const selectedId = promotiondata._id;
    // console.log(selectedId, myId, text, rating);

    axios
      .get(`http://3.7.173.138:9000/user/comment_list/${promotionId}`)
      .then((res) => {
        setGetonecomment(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const hadlestatusbookmark = () => {
    axios
      .get(`http://3.7.173.138:9000/user/getone_mylikes/${myId}/${liked}`)
      .then((res) => {
        // console.log(res.data.data);
        setHandlebookmark(res.data.data.status);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
    if (
      myId !== null &&
      myId !== undefined &&
      myId !== "" &&
      liked !== "" &&
      liked !== null &&
      liked !== undefined
    ) {
    }
  };
  const handleclosepromotion = () => {
    setModalone(false);
    setPromotId("");
    setPromotiondata("");
  };
  const handleSubmit = (e, id) => {
    e.preventDefault();

    if (myId == "") {
      swal("Login First");
      navigate("/login");
    }
    if (myId !== null && myId !== undefined && myId !== "") {
      const selectedId = Producdetail._id;

      axios
        .post(`http://3.7.173.138:9000/user/add_Comment`, {
          submitresrcId: id,
          userid: myId,
          comment: text,
          rating: rating,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message == "success") {
            swal("Your Review Submitted Successfully!");
          } else if (res.data.msg == "not able to comment") {
            swal("User can't Review own Resource");
          }

          if (res.data.msg == "waiting for admin approvel") {
            swal("Already commented On it wait for aprroval");
          }
        })
        .catch((err) => {
          // console.log(err.response.data.message == "already exists");
          if (err.response.data.message == "already exists") {
            swal("You already Commented On It");
          }
        });
      settText("");
      setRating("");
      // }
      // else {
      //   swal(" Please Enter review and Rating");
      // }
    }
    // else {
    //   swal("you need to Login first");
    // }
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
    hadlestatusbookmark();
    getUser();
    promotionadmin();
  }, [handlebookmark, activelike, Producdetail, promotiondata]);
  const promotionadmin = () => {
    axios
      .get(`http://3.7.173.138:9000/user/Promotions`)
      .then((res) => {
        setPromotion(res.data.data);
        console.log(res.data.data);
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
                      {promotion?.link.match(
                        /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
                      ) ? (
                        <>
                          {promotion?.link ? (
                            <>
                              <h2 style={{ color: "green" }}>{promotion[1]}</h2>
                              <iframe
                                allowfullscreen="true"
                                width="100%"
                                height="auto"
                                style={{
                                  borderRadius: "12px",
                                }}
                                src={`https://www.youtube.com/embed/${
                                  promotion?.link?.split("=")[1]
                                }`}
                              ></iframe>
                            </>
                          ) : null}
                        </>
                      ) : (
                        <img
                          style={{ borderRadius: "10px" }}
                          src={promotion?.img}
                          alt="image"
                          width="100%"
                          height={160}
                        />
                      )}
                      {/* <img
                        style={{
                          height: "200px",
                          borderRadius: "10px",
                        }}
                        key={promotion?._id}
                        // height={220}
                        className="promotionimageclass"
                        src={promotion?.img}
                        alt="image"
                      /> */}
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
                            <h2>
                              {ReactHtmlParser(
                                promotiondata?.resTitle?.slice(0, 80)
                              )}
                            </h2>
                            <Row className="top-icon">
                              <Col lg="10">
                                {" "}
                                <Link to="#">
                                  <img src={mdicon1} alt="" />
                                </Link>
                                <Link to="#">
                                  <img src={mdicon2} alt="" />
                                </Link>
                              </Col>
                              <Col
                                style={{ textAlign: "right" }}
                                lg="2"
                                key={promotiondata?._id}
                              >
                                {handlebookmark === "true" ? (
                                  <BsFillBookmarkCheckFill
                                    size={35}
                                    key={promotiondata?._id}
                                    className="addbookmark  "
                                    color="#5f56c6"
                                    onClick={() =>
                                      removebookmark(promotiondata?._id)
                                    }
                                  />
                                ) : (
                                  <BsBookmark
                                    size={35}
                                    key={promotiondata?._id}
                                    onClick={() =>
                                      addbookmark(promotiondata?._id)
                                    }
                                    className="addbookmark "
                                    color="warning "
                                  />
                                )}
                              </Col>
                            </Row>
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
                                      value={promotiondata?.ava_rating}
                                      icons={icons.star}
                                      colors={colors.star}
                                    />
                                  </div>
                                  <div className="starratinginno">
                                    {promotiondata?.ava_rating != 0 ? (
                                      <>
                                        [{promotiondata?.ava_rating}] of 5 Stars
                                      </>
                                    ) : null}
                                  </div>
                                  <div className="mt-3">
                                    {getonecomment?.length}- customers reviews
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
                                        key={promotiondata?._id}
                                        value={text}
                                        name="text"
                                        onChange={onchangehandler}
                                        className="form-control st-taetarea"
                                        placeholder=""
                                      ></textarea>
                                      <Button
                                        onClick={(e) =>
                                          handleSubmit(e, promotiondata._id)
                                        }
                                        // onClick={handleSubmit}
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
                          <Row key={promotiondata?._id}>
                            <Col lg="4"></Col>
                            {/* <Col lg="8" key={promotiondata?._id}>
                              {handlebookmark === "true" ? (
                                <button
                                  key={promotiondata?._id}
                                  className="addbookmark  btn btn-secondary"
                                  color="success"
                                  onClick={() =>
                                    removebookmark(promotiondata?._id)
                                  }
                                >
                                  Remove Bookmark
                                </button>
                              ) : (
                                <button
                                  key={promotiondata?._id}
                                  onClick={() =>
                                    addbookmark(promotiondata?._id)
                                  }
                                  className="addbookmark  btn btn-secondary"
                                  color="warning "
                                >
                                  Add Bookmark
                                </button>
                              )}
                            </Col> */}
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
                                  <Row>
                                    <Col lg="10"> {value?.comment}</Col>
                                    <Col lg="2">
                                      {value?.userid?._id ==
                                      localStorage.getItem("userId") ? (
                                        <>
                                          <h6>
                                            <AiFillEdit
                                              onClick={() =>
                                                handleeditcomment(value?._id)
                                              }
                                              // onClick={
                                              //
                                              // }
                                              size="25px"
                                            />
                                          </h6>
                                          <Modal
                                            isOpen={editmodal}
                                            toggle={toggleedit}
                                            {...args}
                                          >
                                            <ModalHeader toggle={toggleedit}>
                                              Edit Your Comment
                                            </ModalHeader>
                                            <ModalBody>
                                              <Row>
                                                <Col>
                                                  <Label>Edit Review</Label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder={value?.comment}
                                                    value={upcom}
                                                    onChange={(e) =>
                                                      setUpcom(e.target.value)
                                                    }
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                  />
                                                </Col>
                                                <Col>
                                                  <ReactStars
                                                    style={{
                                                      size: "25px",
                                                    }}
                                                    {...secondExample}
                                                  />
                                                </Col>
                                              </Row>

                                              <Col className="d-flex justify-content-center">
                                                <button
                                                  style={{
                                                    color: "white",
                                                  }}
                                                  onClick={() => {
                                                    editcomment(
                                                      value?._id,
                                                      promotiondata?._id,
                                                      value?.rating
                                                    );
                                                  }}
                                                  class="btn success"
                                                >
                                                  Edit your comment
                                                </button>
                                              </Col>
                                            </ModalBody>
                                            {/* <ModalFooter>
                                                              <Button
                                                                color="primary"
                                                                onClick={
                                                                  toggleedit
                                                                }
                                                              >
                                                                Do Something
                                                              </Button>{" "}
                                                              <Button
                                                                color="secondary"
                                                                onClick={
                                                                  toggleedit
                                                                }
                                                              >
                                                                Cancel
                                                              </Button>
                                                            </ModalFooter> */}
                                          </Modal>
                                        </>
                                      ) : null}
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ModalBody>
                      </Modal>
                    </Link>
                  </div>

                  <div
                    onClick={() => handlepromotion(promotion?._id)}
                    class="product-content"
                  >
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
                          {promotion?.ava_rating == 0 ? null : (
                            <>{promotion?.ava_rating}- Rating</>
                          )}
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
