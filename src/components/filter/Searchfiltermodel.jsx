import React, { useState, useEffect } from "react";
import axios from "axios";

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
import { FaHeart, FaStar } from "react-icons/fa";
import Moment from "react-moment";

function Searchfiltermodel(...args) {
  const [Producdetail, setProductdetail] = useState({});

  const [productdes, setProductdes] = useState({});
  let Params = useParams();

  useEffect(() => {
    individualdata();
  }, [Params]);

  const individualdata = () => {
    axios
      .get(`http://43.205.82.226:9000/admin/getone_reslist/${Params.id}`)
      //   .get(
      //     `http://3.7.173.138:9000/admin/getone_reslist/63639ef6bca902a7968d51db`
      //   )

      .then((res) => {
        console.log(res.data.data._id);
        if (
          !res.data.data._id == "" ||
          !res.data.data._id == null ||
          !res.data.data._id == undefined
        ) {
          setProductdetail(res.data.data);
          console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <ModalBody>
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
                There're so many choices in their menu. I appreciated that it
                also showed the calories. Good to know about that. Then I chose
                the one with lower calories
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
                also showed the calories. Good to know about that. Then I chose
                the one with lower calories
              </p>
            </div>
          </div>
        </div>
          </ModalBody> */}

      <div className="container">
        <div className="container">
          <ModalBody className="container mt-5  ">
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
                        <Link to="#">{Producdetail?.category?.title}</Link>
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
                        {/* <Link to="#">{Producdetail.relYear[0]?.yrName}</Link> */}
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
                        <Moment format="ll">{Producdetail?.createdAt}</Moment>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <hr></hr>

            <div className="description mt-3">
              <h4 className="mb-3">Description:</h4>
              <p className="mb-3">
                Build a calorie counter app in Android Studio using
                multi-modulearchitecture.
              </p>
            </div>

            <hr></hr>
            <div className="rating-box">
              <Row>
                <Col lg="4">
                  <div className="rat-left mt-3">
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
                    <h4 className="mt-3">Write your review</h4>
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
        </div>
      </div>
    </>
  );
}

export default Searchfiltermodel;
