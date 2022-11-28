import React, { useState, useEffect } from "react";
import axios from "axios";
import Heart from "react-heart";
import ReactPaginate from "react-paginate";
import StarsRating from "stars-rating";
import swal from "sweetalert";
import "../../components/pagination.css";
import { FiFilter } from "react-icons/fi";
import Slider from "./Slider";
import Pagination from "react-bootstrap/Pagination";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../styles/ModulePage.css";
import mdicon1 from "../../assets/icons/mdicon-1.png";
import mdicon2 from "../../assets/icons/mdicon-2.png";
import createricon from "../../assets/icons/createricon.png";
import usericon from "../../assets/icons/usericon.png";
import typeicon from "../../assets/icons/typeicon.png";
import formaticon from "../../assets/icons/formaticon.png";
import diffculty from "../../assets/icons/diffculty.png";
import Allpromotion from "./Allpromotion";
import languageicon from "../../assets/icons/languageicon.png";

import yearicon from "../../assets/icons/yearicon.png";
import submiticon from "../../assets/icons/submiticon.png";

import {
  Row,
  Col,
  Form,
  Button,
  Container,
  ToggleButton,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../../styles/Filter.css";
import AutoSearch from "./AutoSearch";
import RangeSlider from "react-bootstrap-range-slider";

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
import ProgressBar from "@ramonak/react-progress-bar";

function ProductList(args) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState();
  const toggle = () => setModal(!modal);
  const toggleone = () => setModalone(!modalone);
  const [modal, setModal] = useState(false);
  const [modalone, setModalone] = useState(false);
  const [liked, setliked] = useState("");
  const [activelike, setActivelike] = useState("");
  const [unlike, setUnlike] = useState("");
  const [againlikeact, setAgainlikeact] = useState("");
  const [Producdetail, setProductdetail] = useState([]);
  const [productdes, setProductdes] = useState("");
  const [text, settText] = useState("");
  const [getonecomment, setGetonecomment] = useState([]);
  // const [like, setLike] = useState(liked);
  const [categry, setCategry] = useState([]);
  const [promotion, setPromotion] = useState([]);
  const [promotId, setPromotId] = useState("");
  const [promotiondata, setPromotiondata] = useState({});
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [source, setSource] = useState("");
  const [searchrating, setSearchrating] = useState("");
  const [handlebookmark, setHandlebookmark] = useState();

  const removebookmark = (id) => {
    console.log(id);
    setliked(id);

    const userId = localStorage.getItem("userId");

    axiosConfig
      .post(`/user/add_like`, {
        submitresrcId: liked,
        userid: userId,
        status: "false",
      })
      .then((response) => {
        // console.log(response.data.data);
        setActivelike(response.data.data.status);
        swal("you Removed your bookmark ");

        console.log("removeindividual", response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const addbookmark = (id) => {
    console.log(id);
    setliked(id);
    const userId = localStorage.getItem("userId");

    axiosConfig
      .post(`/user/add_like`, {
        submitresrcId: liked,
        userid: userId,
        status: "true",
      })
      .then((response) => {
        // console.log(response.data.data);
        setActivelike(response.data.data.status);
        swal("you bookmarked it");

        console.log("likeindividual", response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        if (error.response.data.message == "already exists") {
          swal(" Your already bookmarked It");
        }
      });
  };

  const hadlestatusbookmark = () => {
    // console.log(liked);
    const userId = localStorage.getItem("userId");
    axios
      .get(`http://3.7.173.138:9000/user/getone_mylikes/${userId}/${liked}`)
      .then((res) => {
        // console.log(res.data.data);
        setHandlebookmark(res.data.data);
      })
      .catch();
  };
  const handlepromotion = (_id) => {
    var promotionId = _id;
    if (promotionId === _id) {
      setPromotId(promotionId);
      axios
        .get(`http://3.7.173.138:9000/admin/getone_reslist/${promotId}`)
        .then((res) => {
          console.log(res.data.data._id);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            setPromotiondata(res.data.data);
            console.log(res.data.data);
            toggleone();
          }
        })
        .catch((err) => {
          console.log(err.data.data);
        });
    }
  };
  const promotionadmin = () => {
    axios
      .get(`http://3.7.173.138:9000/user/Promotions`)
      .then((res) => {
        setPromotion(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let Params = useParams();

  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 3;
  const currentItems = categry?.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(categry?.length / 3);
  const onchangehandler = (e) => {
    settText(e.target.value);
  };
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
  const clearfilter = () => {
    setType("");
    setFormat("");
    allsearchproduct();
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
        console.log(selectedId, userId, text, rating);

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
      } else {
        swal(" Please Enter review and Rating");
      }
    } else {
      swal("you need to Login first");
    }

    console.log(text);
  };
  const handleSelection = (_id) => {
    // console.log(_id);
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
            toggle();
          }
        })
        .catch((err) => {
          console.log(err.data.data);
        });
    }

    axios
      .get(`http://3.7.173.138:9000/user/comment_list/${selectedId}`)
      .then((res) => {
        setGetonecomment(res.data.data);
        // console.log(res.data.data);
        // const totalRating = [];
        // var sum = 0;

        // for (let i = 0; i <= getonecomment.length; i++) {
        //   if (getonecomment[i].rating == undefined) {
        //   } else {
        //     sum += getonecomment[i].rating;
        //     totalRating.push(getonecomment[i].rating);
        //   }
        // }
        // debugger;
        // const sumall = (total, value) => {
        //   return total + value;
        // };
        // console.log(sumall);
        // setAll(sum);

        // setTotalrateng(totalRating);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    promotionadmin();
    if (type === "" && format === "" && searchrating == "") {
      allsearchproduct();
    }
    if (type !== "") {
      gettypefilter();
    }
    if (format !== "") {
      getformatfilter();
    }
    if (searchrating !== "") {
      getsearchbyratingfilter();
    }
    hadlestatusbookmark();
  }, [Params, type, format, searchrating]);
  const [typelength, setTypelength] = useState([]);
  const gettypefilter = () => {
    axios
      .get(`http://3.7.173.138:9000/user/filter_type/${type}`)
      .then((res) => {
        console.log(res.data.data);
        setCategry(res.data.data);
        setTypelength(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getformatfilter = () => {
    axios
      .get(`http://3.7.173.138:9000/user/filterbyFormat/${format}`)
      .then((res) => {
        console.log(res.data.data);
        setCategry(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getsearchbyratingfilter = () => {
    axios
      .get(`http://3.7.173.138:9000/user/filterByRating/${searchrating}`)
      .then((res) => {
        console.log(res.data.data);
        // setCategry(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const allsearchproduct = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/listbysubcategory/${Params.id}`)
      .then((response) => {
        setCategry(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setLoading(false);
      });
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % categry?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
              <Button className=" d-flex probtn text-center ">
                <p className="searchproduct d-flex">SEARCH</p>
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
                            onChange={(e) => {
                              setSearchrating(e.target.value);
                            }}
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
                        <h5 className="mb-3">Type</h5>
                        <Row className="mt-3 mx-2">
                          <input
                            id="Free"
                            className="ft-check"
                            type="radio"
                            name="type"
                            value="Free"
                            onClick={() => setType("Free")}
                          />
                          Free
                          {/* {typelength?.length == 0
                            ? null
                            : [typelength?.length]} */}
                        </Row>
                        <Row className="mt-3  mx-2">
                          <input
                            id="Paid"
                            className="ft-check"
                            type="radio"
                            name="type"
                            value="Paid"
                            onClick={() => setType("Paid")}
                          />
                          Paid
                        </Row>
                      </div>
                    </Col>
                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5 className="mb-3">Format</h5>
                        <Row className="mt-3 mb-3 mx-2">
                          <input
                            id="Video"
                            className="ft-check"
                            type="radio"
                            name="format"
                            value="Video"
                            onClick={() => setFormat("Video")}
                          />
                          Video (74)
                        </Row>
                        <Row className=" mb-3 mx-2">
                          <input
                            id="Text"
                            className="ft-check"
                            type="radio"
                            name="format"
                            value="Text"
                            onClick={() => setFormat("Text")}
                          />
                          Text (29)
                        </Row>
                        {/* <ul>
                          <li>
                            <input
                              id="video"
                              type="checkbox"
                              className="ft-check"
                              onClick={typeChecking}
                            />
                            <span>Video (74)</span>
                          </li>
                          <li>
                            <input
                              id="Text"
                              type="checkbox"
                              className="ft-check"
                              onClick={typeChecking}
                            />
                            <span>Text (29)</span>
                          </li>
                        </ul> */}
                      </div>
                    </Col>
                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5 className="mb-1">Source</h5>
                        <Row className="mt-3 mb-3 mx-2">
                          <input
                            id="Youtube"
                            className="ft-check"
                            type="radio"
                            name="source"
                            value="Youtube"
                            onClick={() => {
                              setSource("Youtube");
                            }}
                          />
                          Youtube
                        </Row>
                        <Row className=" mb-3 mx-2">
                          <input
                            id="Others"
                            className="ft-check"
                            type="radio"
                            name="source"
                            value="Others"
                            onClick={() => {
                              setSource("Others");
                            }}
                          />
                          Others
                        </Row>
                        <Row className=" mb-3 mx-2">
                          <input
                            id="older"
                            className="ft-check"
                            type="radio"
                            name="source"
                            value="older"
                            onClick={() => {
                              setSource("Older");
                            }}
                          />
                          Not Older Than a Year
                        </Row>
                        {/* <ul>
                          <li>
                            <input
                              id="youtube"
                              type="checkbox"
                              className="ft-check"
                            />
                            <span>Youtube</span>
                          </li>
                          <li>
                            <input
                              id="others"
                              type="checkbox"
                              className="ft-check"
                            />
                            <span>Others</span>
                          </li>

                          <br></br>
                          <li>
                            <input
                              id="not older than year"
                              type="checkbox"
                              className="ft-check"
                            />
                            <span>
                              <b>Not Older Than a Year</b>
                            </span>
                          </li>
                        </ul> */}
                      </div>
                    </Col>

                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5 className="mb-1"> Content Language</h5>
                        <ul className="mx-2 mb-3 mt-3">
                          <li>
                            <input
                              id="Arabic"
                              type="radio"
                              name="language"
                              className="ft-check"
                            />
                            Arabic (3)
                          </li>
                          <li>
                            <input
                              id="English"
                              type="radio"
                              name="language"
                              className="ft-check"
                            />
                            <span>English (87)</span>
                          </li>
                          <li>
                            <input
                              id="hindi"
                              name="language"
                              type="radio"
                              className="ft-check"
                            />
                            <span>Hindi (6)</span>
                          </li>
                          <li>
                            <input
                              id="Russion"
                              name="language"
                              type="radio"
                              className="ft-check"
                            />
                            <span>Russian (3)</span>
                          </li>
                          <li>
                            <input
                              id="Urdu"
                              name="language"
                              type="radio"
                              className="ft-check"
                            />
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
                            <Link style={{ color: "blue" }}>Relevance</Link>
                          </li>
                          <li className="clearfiltertext">
                            <Link style={{ color: "blue" }}>Rating</Link>
                          </li>
                          <li>
                            <Link style={{ color: "blue" }}>Low to High</Link>
                          </li>
                          <li className="clearfiltertext">
                            <Link style={{ color: "blue" }}>High to Low</Link>
                          </li>
                        </ul>
                        <Button onClick={clearfilter} color="info">
                          Clear Filter
                        </Button>
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
                      <Link to="/allpromotion">See All</Link>
                    </span>
                  </h4>

                  <Row>
                    {promotion?.map((promotion) => (
                      <Col lg="4" md="4" sm="6" key={promotion?._id}>
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
                                              <h4>
                                                {promotiondata?.creatorName}
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
                                                {promotiondata?.creatorName}
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
                                                {promotiondata?.type}
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
                                              {promotiondata?.language?.map(
                                                (lang) => (
                                                  <Link to="#">
                                                    {lang?.language}
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
                                                src={yearicon}
                                                alt=""
                                                width="35px"
                                              />
                                            </div>
                                            <div className="mid-1-b tt-1">
                                              <p>Year:</p>
                                              {promotiondata?.relYear?.map(
                                                (year) => (
                                                  <Link to="#">
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
                                              {getonecomment?.length}- customers
                                              reviews
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
                                                  key={promotion?._id}
                                                  className="addbookmark  btn btn-secondary"
                                                  color="success"
                                                  onClick={() =>
                                                    removebookmark(
                                                      promotion?._id
                                                    )
                                                  }
                                                >
                                                  Remove bookmark
                                                </button>

                                                <button
                                                  key={promotion?._id}
                                                  onClick={() =>
                                                    addbookmark(promotion?._id)
                                                  }
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
                            <div className="mt-2 mb-2">
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
                        {currentItems?.map((categry) => (
                          <Row className="mb-4" key={categry?._id}>
                            <Col md="4">
                              <div class="product-image8 st-2">
                                <Link
                                  key={categry?._id}
                                  onClick={() => handleSelection(categry?._id)}
                                >
                                  <img
                                    style={{ borderRadius: "10px" }}
                                    src={categry?.img}
                                    alt="image"
                                    width="100%"
                                    height={220}
                                  />

                                  <Modal
                                    key={Producdetail?._id}
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
                                                <Link
                                                  className="d-flex "
                                                  to="#"
                                                >
                                                  {val}{" "}
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        </div>

                                        <hr></hr>
                                      </div>

                                      <div className="mid">
                                        <h5 className="mt-3">
                                          Link :
                                          <Link>{Producdetail?.link}</Link>
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
                                                <PrettyRating
                                                  value={2.5}
                                                  icons={icons.star}
                                                  colors={colors.star}
                                                />
                                                <span className="starratinginno">
                                                  2.7 of 5 Stars
                                                </span>
                                                <br></br>
                                                <span className="mt-3">
                                                  {getonecomment?.length}-
                                                  Customers Reviews
                                                </span>

                                                <Row>
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
                                                  <Col
                                                    className="mt-1 mb-1"
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
                                                  <Col
                                                    className="mt-1 mb-1"
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
                                                  <Col
                                                    className="mt-1 mb-1"
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
                                                  <Col
                                                    className="mt-1 mb-1"
                                                    lg="8"
                                                  >
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
                                              </div>
                                            </div>
                                          </Col>
                                          <Col lg="8" key={Producdetail?._id}>
                                            <div className="rat-right">
                                              <Row>
                                                <Col lg="6">
                                                  <h4 className="mt-3">
                                                    Write your Review
                                                  </h4>
                                                  <StarsRating
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={40}
                                                    color2={"#ffd700"}
                                                  />
                                                </Col>
                                              </Row>

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
                                          </Col>
                                        </Row>
                                      </div>
                                      <Row>
                                        <Col lg="4"></Col>
                                        <Col lg="8" key={categry?._id}>
                                          {handlebookmark?.status == "true" ? (
                                            <button
                                              key={categry?._id}
                                              className="addbookmark  btn btn-secondary"
                                              color="success"
                                              onClick={() =>
                                                removebookmark(categry?._id)
                                              }
                                            >
                                              Remove bookmark
                                            </button>
                                          ) : (
                                            <button
                                              key={categry?._id}
                                              onClick={() =>
                                                addbookmark(categry?._id)
                                              }
                                              className="addbookmark  btn btn-secondary"
                                              color="warning "
                                            >
                                              Add Bookmark
                                            </button>
                                          )}
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
                                {/* <span class="product-discount-label st-1"> */}
                                {/* {localStorage.getItem("userId") !== "" &&
                                  localStorage.getItem("userId") !== null &&
                                  localStorage.getItem("userId") !==
                                    undefined ? (
                                    <button
                                      key={Producdetail?._Id}
                                      type="button"
                                      color={
                                        activelike === "true" ? "red" : "blue"
                                      }
                                      className="likebuttonbar"
                                      onClick={() => {
                                        const userId =
                                          localStorage.getItem("userId");
                                        setliked(categry?._id);
                                        axiosConfig
                                          .post(`/user/add_like`, {
                                            submitresrcId: categry?._id,
                                            userid: userId,
                                            status: "true",
                                          })
                                          .then((response) => {
                                            setActivelike(
                                              response.data.data.status
                                            );
                                            swal("you bookmarked it");

                                            console.log(
                                              "likeindividual",
                                              response.data.data
                                            );
                                          })
                                          .catch((error) => {
                                            console.log(error.response.data);
                                          });
                                      }}
                                    >
                                      {liked ? (
                                        <FaHeart
                                          size={28}
                                          color={
                                            activelike === "false"
                                              ? "blue"
                                              : "red"
                                          }
                                          onClick={() => {
                                            const userId =
                                              localStorage.getItem("userId");
                                            setUnlike(categry?._id);
                                            axiosConfig
                                              .post(`/user/add_like`, {
                                                submitresrcId: categry?._id,
                                                userid: userId,
                                                status: "false",
                                              })
                                              .then((response) => {
                                                console.log(response.data.data);
                                                setActivelike(
                                                  response.data.data.status
                                                );
                                                swal(
                                                  "you Removed your bookmark"
                                                );

                                                console.log(
                                                  "Unbookmark",
                                                  response.data.data
                                                );
                                              })
                                              .catch((error) => {
                                                console.log(
                                                  error.response.data
                                                );
                                              });
                                          }}
                                        />
                                      ) : (
                                        <FaRegHeart
                                          size={25}
                                          color={
                                            againlikeact === "true"
                                              ? "red"
                                              : "blue"
                                          }
                                          onClick={() => {
                                            const userId =
                                              localStorage.getItem("userId");
                                            setAgainlikeact(categry?._id);
                                            console.log(liked);

                                            axiosConfig
                                              .post(`/user/add_like`, {
                                                submitresrcId: categry?._id,
                                                userid: userId,
                                                status: "true",
                                              })
                                              .then((response) => {
                                                console.log(response.data.data);
                                                swal("you bookmarked it");
                                                setAgainlikeact(
                                                  response.data.data.status
                                                );
                                                console.log(
                                                  "likeindividual",
                                                  response.data.data
                                                );
                                              })
                                              .catch((error) => {
                                                console.log(
                                                  error.response.data
                                                );
                                              });
                                          }}
                                        />
                                      )}
                                    </button>
                                  ) : (
                                    <Heart
                                      size={20}
                                      onClick={() => {
                                        const userId =
                                          localStorage.getItem("userId");
                                        if (
                                          userId === "" ||
                                          userId === null ||
                                          userId === undefined
                                        ) {
                                          swal(
                                            "you Need to login or Signup for Like and dislike"
                                          );
                                        } else {
                                        }
                                      }}
                                      className="heartlike faregheart"
                                    />
                                  )} */}
                                {/* </span> */}
                              </div>
                            </Col>
                            <Col md="8">
                              <div class="product-content">
                                <div className="d-flex topicsdataapi">
                                  <Link>{categry?.topics}</Link>
                                </div>

                                <h3>{categry?.resTitle}</h3>
                                <h5>
                                  <span>By</span> {categry?.creatorName}
                                </h5>
                                <p>{categry?.desc}</p>
                                <div className="">
                                  <Row>
                                    <Col lg="3">
                                      <PrettyRating
                                        value={2.5}
                                        icons={icons.star}
                                        colors={colors.star}
                                      />
                                    </Col>
                                    <Col
                                      className="justify-content-left"
                                      lg="9"
                                    >
                                      {2.5} Rating
                                    </Col>
                                  </Row>

                                  <ul class="rating mt-2">
                                    <li>
                                      <Link to="#" className="tag">
                                        {categry?.relYear[0]?.yrName}
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        ))}
                      </div>
                    </Row>

                    <div className="container paginatediv d-flex">
                      <ReactPaginate
                        itemsPerPage={3}
                        activeClassName="activeclassofpagination"
                        pageClassName="pageclassforpage"
                        className=" paginationsclass"
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="sec-bottom">
            <h4>
              Recently Viewed
              <span>
                <Link to="/">See All</Link>
              </span>
            </h4>
            <Row>
              <RecentProductList />
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProductList;
