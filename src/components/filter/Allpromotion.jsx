import { Row, Col, Form, Button, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import mdicon1 from "../../assets/icons/mdicon-1.png";
import usericon from "../../assets/icons/usericon.png";
import typeicon from "../../assets/icons/typeicon.png";
import languageicon from "../../assets/icons/languageicon.png";
import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";
import Moment from "react-moment";
import PrettyRating from "pretty-rating-react";
import yearicon from "../../assets/icons/yearicon.png";
import formaticon from "../../assets/icons/formaticon.png";
import diffculty from "../../assets/icons/diffculty.png";
import mdicon2 from "../../assets/icons/mdicon-2.png";
import submiticon from "../../assets/icons/submiticon.png";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import reviewstar from "../../assets/icons/reviewstra.png";
import StarsRating from "stars-rating";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import ratingstar from "../../assets/icons/ratingstar.png";
import createricon from "../../assets/icons/createricon.png";
import "../../styles/ModulePage.css";

function Allpromotion(args) {
  const [promotion, setPromotion] = useState([]);
  const [promotId, setPromotId] = useState("");
  const toggleone = () => setModalone(!modalone);
  const [modalone, setModalone] = useState(false);
  const [promotiondata, setPromotiondata] = useState({});
  const [getonecomment, setGetonecomment] = useState([]);
  const [Producdetail, setProductdetail] = useState([]);
  const [text, settText] = useState("");
  const [rating, setRating] = useState("");

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
    promotionadmin();
  }, []);
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
          <Row className="mb-2 mt-3">
            {promotion?.map((promotion) => (
              <Col lg="3" md="6" sm="12">
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
                        toggle={toggleone}
                        {...args}
                      >
                        <ModalBody key={promotiondata?._id}>
                          <div className="main-content">
                            <h2>{promotiondata?.desc}</h2>
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
                              Link :<span>{promotiondata?.link}</span>
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
                                      <Link to="#">
                                        {promotiondata?.category?.title}
                                      </Link>
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
                                        <Link to="#">{lang?.language}</Link>
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
                            <p>{promotiondata?.desc}</p>
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
                                      {getonecomment?.length}- customers reviews
                                    </small>
                                    <img src={ratingstar} alt="" width="100%" />
                                  </div>
                                </div>
                              </Col>
                              <Col lg="8">
                                <div className="rat-right">
                                  <h4>Write your review</h4>
                                  <div className="">
                                    <StarsRating
                                      count={5}
                                      onChange={ratingChanged}
                                      size={40}
                                      color={"#ffd700"}
                                    />

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
                                        className="bt-st"
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
                    <span class="product-discount-label">
                      <FaHeart />
                    </span>
                  </div>

                  <div class="product-content">
                    <ul class="rating">
                      <li>
                        {promotion?.topics?.map((topic) => (
                          <Link className="btt">{topic}</Link>
                        ))}
                      </li>
                    </ul>
                    <h3>{promotion?.desc}</h3>
                    <h5>
                      <span>By</span> {promotion?.creatorName}
                    </h5>
                    <p>{promotion?.res_desc}</p>
                    <div className=" mb-2 mt-2">
                      <Row>
                        <Col lg="6">
                          <PrettyRating
                            // value={value?.rating}
                            value={2.5}
                            icons={icons.star}
                            colors={colors.star}
                          />
                        </Col>
                        <Col className="justify-content-left" lg="6">
                          {2.5} Rating
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
