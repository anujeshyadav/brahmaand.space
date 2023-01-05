import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import ReactPaginate from "react-paginate";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import StarsRating from "stars-rating";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import swal from "sweetalert";

import "../../components/pagination.css";
import { FiFilter } from "react-icons/fi";
import Slider from "./Slider";
import Pagination from "react-bootstrap/Pagination";
import { Modal, ModalHeader, ModalBody, ModalFooter, Label } from "reactstrap";
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
  InputGroup,
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

import { FaHeart, FaStar, FaRegHeart, FaSearch } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
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
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/Filter.css";
import { number } from "prop-types";

function ProductHastag(args) {
  const [modalsuggestion, setModalsuggestion] = useState(false);
  const togglesuggestion = () => setModalsuggestion(!modalsuggestion);
  const toggle = () => setModal(!modal);
  const toggleone = () => setModalone(!modalone);
  const [modal, setModal] = useState(false);
  const [modalone, setModalone] = useState(false);
  const [liked, setliked] = useState("");
  const [activelike, setActivelike] = useState("");
  const [Producdetail, setProductdetail] = useState([]);
  const [productdes, setProductdes] = useState("");
  const [text, settText] = useState("");
  const [getonecomment, setGetonecomment] = useState([]);
  const [categry, setCategry] = useState([]);
  const [promotion, setPromotion] = useState([]);
  const [promotId, setPromotId] = useState("");
  const [promotiondata, setPromotiondata] = useState({});
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [searchrating, setSearchrating] = useState("");
  const [handlebookmark, setHandlebookmark] = useState("");
  const [myId, setmyId] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [searchitem, setSearchitem] = useState("");
  const [lngage, setLngage] = useState([]);
  const [relyear, setRelyear] = useState([]);
  const [contentyear, setContentyear] = useState("");
  const [language, setLanguage] = useState("");
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
      setRating(newValue);
    },
  };

  const navigate = useNavigate();

  const handlesearchbylanguage = () => {
    if (language !== "" && language !== undefined) {
      axios
        .get(
          `http://3.7.173.138:9000/user/filterbyLanguage/${Params.id}/${language}`
        )
        .then((res) => {
          setCategry(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const hastagdata = localStorage.getItem("hastag");
  const gethastagdata = () => {
    const hastagdata = localStorage.getItem("hastag");

    if (hastagdata !== "hastag")
      axios
        .post(`http://3.7.173.138:9000/user/search_topic_title`, {
          searchinput: hastagdata,
        })
        .then((res) => {
          // console.log(res.data.data);
          if (res.data.data !== "" && res.data.data !== null) {
            setCategry(res.data.data);
            // localStorage.removeItem("searchdata");
            // localStorage.setItem("hastag", "hastag");
          }
        })
        .catch((err) => {
          // console.log(err);
        });
  };

  const getYear = () => {
    axios
      .get(`http://3.7.173.138:9000/user/allYear`)
      .then((response) => {
        setRelyear(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  };
  const handleclosemodal = () => {
    setModal(false);
    setProductdetail("");
    setProductdes("");
  };
  const handleclosesuggestionmodal = () => {
    setModalsuggestion(false);
    setProductdetail("");
    setProductdes("");
  };

  const handleclosepromotion = () => {
    setModalone(false);
    setPromotId("");
    setPromotiondata("");
  };

  const getolderyeardata = () => {
    if (contentyear !== "") {
      axios
        .get(
          `http://3.7.173.138:9000/user/filterbyyear/${Params.id}/${contentyear}`
        )
        .then((res) => {
          setCategry(res.data.data);
          // console.log(res.data.data);
          // setContentyear("");
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  };

  const searchdata = localStorage.getItem("searchdata");
  const handleSearchHomePage = () => {
    const searchdata = localStorage.getItem("searchdata");
    // console.log(searchdata);
    if (searchdata !== "" && searchdata !== null)
      axios
        .post(`http://3.7.173.138:9000/user/search_topic_title`, {
          searchinput: searchdata,
        })
        .then((res) => {
          // console.log(res.data.data);
          if (res.data.data !== "" && res.data.data !== null) {
            // setCategry(res.data.data);
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    // console.log("you are searching");
  };

  const handlesearchdescription = () => {
    localStorage.setItem("searchdata", searchitem);
    axios
      .post(`http://3.7.173.138:9000/user/search_topic_title`, {
        searchinput: searchitem,
      })
      .then((res) => {
        console.log(res.data.data);
        const search = res.data.data[0]?.sub_category;
        if (search !== "" && search !== undefined) {
          navigate(`/productsearch/${search}`);
        }
        // setCategry(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("you are searching");
  };

  const getLanguage = () => {
    axios
      .get(`http://3.7.173.138:9000/user/allLang`)
      .then((response) => {
        setLngage(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  };
  const getUser = () => {
    const user = localStorage.getItem("userId");
    if (user !== null && user !== "") {
      setmyId(user);
    } else {
      // console.log("no UserId Found");
    }
  };

  const removebookmark = (id) => {
    console.log(id);
    setliked(id);
    if (myId !== "" && myId !== null) {
      axiosConfig
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "false",
        })
        .then((response) => {
          console.log(response.data.data);
          setActivelike(response.data.data.status);
          swal("you Removed your bookmark ");
          hadlestatusbookmark();
        })
        .catch((error) => {});
    } else {
      swal("User Need to Login first ");
      navigate("/login");
    }
  };

  const addbookmark = (id) => {
    console.log(id);
    setliked(id);

    if (myId !== "" && myId !== null) {
      axiosConfig
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "true",
        })
        .then((response) => {
          console.log(response.data.data);
          setActivelike(response.data.data.status);
          swal("You Bookmark it");
          hadlestatusbookmark();
          // console.log("likeindividual", response.data.data);
        })
        .catch((error) => {
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
    axios
      .get(`http://3.7.173.138:9000/user/getone_mylikes/${myId}/${liked}`)
      .then((res) => {
        // console.log(res.data.data);
        setHandlebookmark(res.data.data.status);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
    // if (
    //   myId !== null &&
    //   myId !== undefined &&
    //   myId !== "" &&
    //   liked !== "" &&
    //   liked !== null &&
    //   liked !== undefined
    // ) {
    // }
  };
  const handlepromotion = (_id) => {
    setPromotiondata("");
    setliked(_id);
    hadlestatusbookmark();
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
      axios
        .get(`http://3.7.173.138:9000/user/average_rating/${promotionId}`)
        .then((res) => {
          // console.log(res.data);
          setAverageRating(res.data);
        })
        .catch((err) => {
          // console.log(err);
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
        // console.log(err);
      });
  };

  let Params = useParams();

  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 10;
  const currentItems = categry?.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(categry?.length / 10);
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
    setSearchrating("");
    setLanguage("");
    setContentyear("");
    setSearchitem("");
    setTypelength("");
    setFormatelength("");
    allsearchproduct();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(myId);
    if (myId == "") {
      swal("Login First");
      navigate("/login");
    }
    if (myId !== null && myId !== undefined && myId !== "") {
      const selectedId = Producdetail._id;

      axios
        .post(`http://3.7.173.138:9000/user/add_Comment`, {
          submitresrcId: selectedId,
          userid: myId,
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

  const handleSelection = (_id) => {
    setProductdetail("");

    setliked(_id);
    hadlestatusbookmark();
    var selectedId = _id;

    if (selectedId === _id) {
      setProductdes(selectedId);
      axios
        // .get(`http://3.7.173.138:9000/admin/getone_reslist/${productdes}`)
        .get(`http://3.7.173.138:9000/admin/getone_reslist/${selectedId}`)
        .then((res) => {
          // console.log(res.data.data._id);
          // console.log(res);
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
          // console.log(err.data.data);
        });

      axios
        .get(`http://3.7.173.138:9000/user/average_rating/${productdes}`)
        .then((res) => {
          // console.log(res.data);
          setAverageRating(res.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    }

    axios
      .get(`http://3.7.173.138:9000/user/comment_list/${selectedId}`)
      .then((res) => {
        setGetonecomment(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const handlesuggSelection = (_id) => {
    setliked(_id);
    hadlestatusbookmark();
    setProductdetail("");

    var selectedId = _id;

    if (selectedId === _id) {
      setProductdes(selectedId);
      axios
        .get(`http://3.7.173.138:9000/admin/getone_reslist/${productdes}`)
        .then((res) => {
          // console.log(res.data.data._id);
          // console.log(res.data.data);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            togglesuggestion();

            setProductdetail(res.data.data);
          }
        })
        .catch((err) => {
          // console.log(err.data.data);
        });

      axios
        .get(`http://3.7.173.138:9000/user/average_rating/${productdes}`)
        .then((res) => {
          // console.log(res.data);
          setAverageRating(res.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    }

    axios
      .get(`http://3.7.173.138:9000/user/comment_list/${selectedId}`)
      .then((res) => {
        setGetonecomment(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  useEffect(() => {
    hadlestatusbookmark();
    getUser();
  }, [
    liked,
    Producdetail,
    myId,
    promotiondata,
    // handlebookmark,
    activelike,
  ]);

  useEffect(() => {
    allsuggestedproduct();
    getYear();
    getLanguage();
    getUser();
    // hadlestatusbookmark();
    promotionadmin();

    if (
      type === "" &&
      format === "" &&
      searchrating === "" &&
      contentyear == "" &&
      language === "" &&
      searchitem === "" &&
      hastagdata === "hastag" &&
      searchdata === ""
    ) {
      allsearchproduct();
    }
    if (type !== "") {
      gettypefilter();
    }
    if (hastagdata !== "hastag") {
      gethastagdata();
    }
    if (searchdata !== "" && searchdata !== null) {
      handleSearchHomePage();
    }

    if (contentyear !== "") {
      getolderyeardata();
    }
    if (format !== "") {
      getformatfilter();
    }
    if (searchrating !== "") {
      getsearchbyratingfilter();
    }
    if (searchitem !== "") {
      handlesearchdescription();
    }
    if (language !== "") {
      handlesearchbylanguage();
    }
  }, [
    Params,
    type,
    format,
    // Producdetail,
    // myId,
    // promotiondata,
    // handlebookmark,
    // activelike,
    // searchitem,
    language,
    contentyear,
    hastagdata,
    searchdata,
  ]);

  const [typelength, setTypelength] = useState([]);
  const gettypefilter = () => {
    axios
      .get(`http://3.7.173.138:9000/user/filter_type/${Params.id}/${type}`)
      .then((res) => {
        // console.log(res.data.data);
        setCategry(res.data.data);
        setTypelength(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const [formatelength, setFormatelength] = useState([]);
  const getformatfilter = () => {
    axios
      .get(`http://3.7.173.138:9000/user/filterbyFormat/${Params.id}/${format}`)
      .then((res) => {
        // console.log(res.data.data);
        setCategry(res.data.data);
        setFormatelength(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const getsearchbyratingfilter = () => {
    // console.log(searchrating);
    axios
      .get(`http://3.7.173.138:9000/user/filterByRating/${searchrating}`)
      .then((res) => {
        // console.log(res.data.data);
        // setCategry(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const allsearchproduct = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/listbysubcategory/${Params.id}`)
      .then((response) => {
        // setCategry(response.data.data);
        // console.log(response.data.data);
        // const data = response.data.data;
        // const datanew = data.filter((data) => {
        //   return data.format == "Text" && data.type == "Paid";
        // });
      })
      .catch((error) => {
        // console.log(error.response.data);
        setLoading(false);
      });
  };
  const [suggested, setSuggested] = useState([]);
  const allsuggestedproduct = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/listbysubcategory/${Params.id}`)
      .then((response) => {
        setSuggested(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
        setLoading(false);
      });
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % categry?.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
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
                  value={searchitem}
                  type="text"
                  placeholder=" Search for the top resources on any subject ... (e.g. Java) "
                  className="searchprd inputareaa searchba "
                  onChange={(e) => {
                    setSearchitem(e.target.value);
                  }}
                />
              </div>
            </Col>
            <Col onClick={handlesearchdescription} lg="2">
              <Button className=" d-flex probtn text-center ">
                <p
                  onClick={handlesearchdescription}
                  className="searchproduct d-flex"
                >
                  SEARCH
                </p>
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
                      <div className="ft-slider">
                        <Row>
                          <h3>Filters</h3>
                        </Row>
                        {/* <Row>
                          <Col lg="9">
                            <h5>Review</h5>
                          </Col>
                          <Col className="fifilter " lg="3">
                            <FiFilter size={30} />
                          </Col>
                        </Row> */}

                        {/* <Row>
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
                        </Row> */}
                        {/* <Row>
                          <Col lg="9">
                            <p>Range</p>
                          </Col>
                          <Col className="searhfastarfilter" lg="1">
                            <FaStar color="#f3c60f" size={22} />
                          </Col>
                          <Col className="rangefil" lg="2">
                            1 - 5
                          </Col>
                        </Row> */}
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
                            checked={"Free" === type}
                            name="type"
                            value="Free"
                            onClick={() => setType("Free")}
                          />
                          Free &nbsp;
                          {typelength[0]?.type == "Free"
                            ? typelength.length
                            : null}
                        </Row>
                        <Row className="mt-3  mx-2">
                          <input
                            id="Paid"
                            className="ft-check"
                            type="radio"
                            checked={"Paid" === type}
                            name="type"
                            value="Paid"
                            onClick={() => setType("Paid")}
                          />
                          Paid &nbsp;
                          {typelength[0]?.type == "Paid"
                            ? typelength.length
                            : null}
                        </Row>
                      </div>
                    </Col>
                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5 className="mb-3">Format</h5>
                        <Row className="mt-3 mb-3 mx-2">
                          <input
                            id="Video"
                            checked={"Video" === format}
                            className="ft-check"
                            type="radio"
                            name="format"
                            value="Video"
                            onClick={() => setFormat("Video")}
                          />
                          Video &nbsp;
                          {formatelength[0]?.format == "Video"
                            ? formatelength.length
                            : null}
                        </Row>
                        <Row className=" mb-3 mx-2">
                          <input
                            id="Text"
                            className="ft-check"
                            checked={"Text" === format}
                            type="radio"
                            name="format"
                            value="Text"
                            onClick={() => setFormat("Text")}
                          />
                          Text &nbsp;
                          {formatelength[0]?.format == "Text"
                            ? formatelength.length
                            : null}
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
                    <Col lg="12" className="">
                      <div className="ft-type">
                        {/* <h5 className="mb-1">Source</h5> */}
                        {/* <Row className="mt-3 mb-3 mx-2">
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
                        </Row> */}
                        {/* <Row className=" mb-3 mx-2">
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
                        </Row> */}
                        <Row className=" mb-3 mx-2">
                          {/* <input
                            id="older"
                            className="ft-check"
                            type="radio"
                            name="source"
                            value="older"
                            onClick={getolderyeardata}
                          /> */}
                          {/* <Label
                            className="mt-3"
                            style={{ font: "GT Walsheim Pro" }}
                          >
                            <h4>Content Year</h4>
                          </Label>
                          <select
                            required
                            // onChange={(e) => setformate(e.target.value)}
                            className="form-control"
                          >
                            <option>Select Year</option>
                            {relyear?.map((yr) => {
                              return (
                                <option value={yr?._id} key={yr?._id}>
                                  {yr?.yrName}
                                </option>
                              );
                            })}
                          </select> */}
                        </Row>
                        <Row>
                          <Container>
                            <Label
                              className="mt-3"
                              style={{ font: "GT Walsheim Pro" }}
                            >
                              <b style={{ fontSize: "19px" }}>Content Year</b>
                            </Label>
                            <select
                              defaultValue="Select Year"
                              value={contentyear}
                              // checked={"Select Year" === contentyear}
                              onChange={(e) => setContentyear(e.target.value)}
                              className="form-control"
                            >
                              <option>Select Year</option>
                              {relyear?.map((yr) => {
                                return (
                                  <option value={yr?._id} key={yr?._id}>
                                    {yr?.yrName}
                                  </option>
                                );
                              })}
                            </select>
                            <Label
                              className="mt-3"
                              style={{ font: "GT Walsheim Pro" }}
                            >
                              <b style={{ fontSize: "19px" }}>
                                Content Language
                              </b>
                            </Label>
                            <select
                              defaultValue="Select Language"
                              value={language}
                              onChange={(e) => setLanguage(e.target.value)}
                              className="form-control"
                            >
                              <option>Select Language</option>
                              {lngage?.map((language) => {
                                return (
                                  <option
                                    key={language?._id}
                                    value={language?._id}
                                  >
                                    {language?.language}
                                  </option>
                                );
                              })}
                            </select>
                          </Container>
                          {/* <Label
                            className="mt-3"
                            style={{ font: "GT Walsheim Pro" }}
                          >
                            <b style={{ fontSize: "19px" }}>Content Year</b>
                          </Label>
                          <select
                            required
                            // onChange={(e) => setformate(e.target.value)}
                            className="form-control"
                          >
                            <option>Select Year</option>
                            {relyear?.map((yr) => {
                              return (
                                <option value={yr?._id} key={yr?._id}>
                                  {yr?.yrName}
                                </option>
                              );
                            })}
                          </select>
                          <Label
                            className="mt-3"
                            style={{ font: "GT Walsheim Pro" }}
                          >
                            <b style={{ fontSize: "19px" }}>Content Language</b>
                          </Label>
                          <select
                            required
                            // onChange={(e) => setformate(e.target.value)}
                            className="form-control"
                          >
                            <option>Select Language</option>
                            {lngage?.map((language) => (
                              <option key={language?._id}>
                                {language?.language}
                              </option>
                            ))}
                          </select> */}
                        </Row>
                      </div>
                    </Col>

                    {/* <Col lg="12" className="py-3"> */}
                    {/* <div className="ft-type"> */}
                    {/* <h5 className="mb-1"> Content Language</h5> */}

                    {/* <div class="ex1">
                          <h6>Choose language</h6>
                          {lngage?.map((val) => (
                            <ul>
                              <li key={val?._id}>
                                <input
                                  onClick={handlesearchbylanguage}
                                  id="Arabic"
                                  type="radio"
                                  name="language"
                                  className="ft-check"
                                  value={val?._id}
                                />
                                {val?.language}
                              </li>
                            </ul>
                          ))}
                        </div> */}
                    {/* </div> */}
                    {/* </Col> */}
                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        {/* <h5>Sort By</h5> */}
                        {/* <hr></hr> */}
                        {/* <ul className="clearfiltertext">
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
                        </ul> */}
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

                  <Row className=" mb-2">
                    <Swiper
                      breakpoints={{
                        980: {
                          slidesPerView: 3,
                          direction: "horizontal",
                          spaceBetween: 20,
                        },
                        820: {
                          slidesPerView: 3,
                          direction: "horizontal",
                          spaceBetween: 20,
                        },
                        780: {
                          slidesPerView: 3,
                          direction: "horizontal",
                          spaceBetween: 20,
                        },

                        768: {
                          slidesPerView: 3,
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
                      spaceBetween={50}
                      // slidesPerView={3}
                      centeredSlides={true}
                      loop={true}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      scrollbar={{ draggable: true }}
                      className="mx-3"
                    >
                      {promotion?.map((promotion) => (
                        <SwiperSlide>
                          <Col key={promotion?._id}>
                            <div class="product-grid8">
                              <div class="product-image8">
                                <Link
                                  key={promotion?._id}
                                  onClick={() =>
                                    handlepromotion(promotion?._id)
                                  }
                                >
                                  {promotion?.link.match(
                                    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
                                  ) ? (
                                    <>
                                      {promotion?.link ? (
                                        <>
                                          <h2 style={{ color: "green" }}>
                                            {promotion[1]}
                                          </h2>
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
                                    className="promotionimageclass"
                                    src={promotion?.img}
                                    alt="image"
                                  /> */}
                                  <Modal
                                    key={promotiondata?._id}
                                    className="mdlg"
                                    isOpen={modalone}
                                    // toggle={handleclosepromotion}
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
                                          {ReactHtmlParser(promotiondata?.desc)}
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
                                          <div className=" d-flex tag-2">
                                            {promotiondata?.topics?.map(
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
                                                  <img
                                                    src={createricon}
                                                    alt=""
                                                  />
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
                                                  <p to="#">
                                                    {
                                                      promotiondata?.category
                                                        ?.title
                                                    }
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
                                                  {promotiondata?.language?.map(
                                                    (lang) => (
                                                      <span>
                                                        {lang?.language}{" "}
                                                      </span>
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
                                                  <Link to="#">
                                                    [
                                                    {promotiondata?.ava_rating !==
                                                    "NaN" ? (
                                                      <span>
                                                        {
                                                          promotiondata?.ava_rating
                                                        }
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
                                                    {promotiondata?.createdAt}
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
                                        <h2>
                                          {ReactHtmlParser(promotiondata?.desc)}
                                        </h2>
                                      </div>

                                      <hr></hr>
                                      <div className="rating-box">
                                        <Row>
                                          <Col lg="6">
                                            <div className="rat-left">
                                              <h4>Customer Rating</h4>
                                              <div className="">
                                                <PrettyRating
                                                  value={averageRating?.data}
                                                  icons={icons.star}
                                                  colors={colors.star}
                                                />

                                                <small className="mt-3">
                                                  {getonecomment?.length}-
                                                  customers reviews
                                                </small>
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
                                            <div
                                              key={promotiondata?._id}
                                              className="rat-right"
                                            >
                                              <div className="">
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
                                      <Row key={promotiondata?._id}>
                                        <Col lg="4"></Col>
                                        <Col lg="8" key={promotiondata?._id}>
                                          {handlebookmark === "true" ? (
                                            <button
                                              key={promotiondata?._id}
                                              className="addbookmark  btn btn-secondary"
                                              color="success"
                                              onClick={() =>
                                                removebookmark(
                                                  promotiondata?._id
                                                )
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

                              <div
                                key={promotion?._id}
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
                                <h3>
                                  {ReactHtmlParser(
                                    promotion?.desc?.slice(0, 25)
                                  )}
                                </h3>
                                blogdescription
                                <h5>
                                  <span>By -</span> {promotion?.creatorName}
                                </h5>
                                {/* <p>{promotion?.res_desc?.slice(0, 50)}</p> */}
                                <h3>
                                  {ReactHtmlParser(
                                    promotion?.res_desc?.slice(0, 50)
                                  )}
                                </h3>
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
                                    <Col
                                      className="justify-content-left"
                                      lg="6"
                                    >
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
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Row>

                  <div className="serach-product">
                    <h4 className="mt-3 ">
                      Searching Product
                      <span>
                        <Col className="fifilters " lg="3">
                          <FiFilter size={40} />
                        </Col>
                      </span>
                    </h4>
                    <Row>
                      <div className="search-st mb-4">
                        {currentItems !== ""
                          ? currentItems?.map((categry) => (
                              <Row className="mb-4" key={categry?._id}>
                                <Col md="3" className="alldescriptionimagpage">
                                  <div class="product-image8 st-2">
                                    <Link
                                      key={categry?._id}
                                      onClick={() =>
                                        handleSelection(categry?._id)
                                      }
                                    >
                                      {categry?.link.match(
                                        /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
                                      ) ? (
                                        <>
                                          {categry?.link ? (
                                            <>
                                              <h2 style={{ color: "green" }}>
                                                {categry[1]}
                                              </h2>
                                              <iframe
                                                allowfullscreen="true"
                                                width="100%"
                                                height="auto"
                                                style={{
                                                  borderRadius: "12px",
                                                }}
                                                src={`https://www.youtube.com/embed/${
                                                  categry?.link?.split("=")[1]
                                                }`}
                                              ></iframe>
                                            </>
                                          ) : null}
                                        </>
                                      ) : (
                                        <img
                                          style={{ borderRadius: "10px" }}
                                          src={categry?.img}
                                          alt="image"
                                          width="100%"
                                          height={160}
                                        />
                                      )}
                                      {/* <img
                                        style={{ borderRadius: "10px" }}
                                        src={categry?.img}
                                        alt="image"
                                        width="100%"
                                        height={160}
                                      /> */}

                                      <Modal
                                        key={Producdetail?._id}
                                        className="mdlg"
                                        isOpen={modal}
                                        // toggle={handleclosemodal}
                                        {...args}
                                      >
                                        <ModalBody>
                                          <Row>
                                            <Col></Col>
                                            <Col
                                              lg="1"
                                              className="d-flex justify-content-right"
                                            >
                                              <MdCancelPresentation
                                                className="cancelbuttondata"
                                                onClick={handleclosemodal}
                                                size={30}
                                              />
                                            </Col>
                                          </Row>
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
                                                      {val} &nbsp;
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
                                              {/* <a href={Producdetail?.link}>
                                                {Producdetail?.link}
                                            </a> */}
                                              <a href={Producdetail?.link}>
                                                {" "}
                                                {Producdetail?.link}
                                              </a>
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
                                                        {
                                                          Producdetail?.creatorName
                                                        }
                                                      </h4>
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="6" md="6">
                                                  <div className="mid-1 mb-3 ">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={usericon}
                                                        alt=""
                                                      />
                                                    </div>
                                                    <div className="mid-1-b">
                                                      <p>Submitted by:</p>
                                                      <h4>
                                                        {
                                                          Producdetail?.creatorName
                                                        }
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
                                                          {
                                                            Producdetail?.createdAt
                                                          }
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
                                              <Col lg="6">
                                                <div className="rat-left mt-3">
                                                  <h4>Customer Rating</h4>
                                                  <div className="">
                                                    <PrettyRating
                                                      value={
                                                        averageRating?.data
                                                      }
                                                      icons={icons.star}
                                                      colors={colors.star}
                                                    />
                                                    <span className="starratinginno">
                                                      [ {averageRating?.data}]
                                                      of 5 Stars
                                                    </span>
                                                    <br></br>
                                                    <span className="mt-3">
                                                      {getonecomment?.length}-
                                                      Customers Reviews
                                                    </span>

                                                    {/* <Row>
                                                      <Col
                                                        className="d-flex justify-content-left mt-1"
                                                        style={{
                                                          color: "blue",
                                                        }}
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
                                                        style={{
                                                          color: "blue",
                                                        }}
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
                                                        style={{
                                                          color: "blue",
                                                        }}
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
                                                        style={{
                                                          color: "blue",
                                                        }}
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
                                                        style={{
                                                          color: "blue",
                                                        }}
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
                                                    </Row> */}
                                                  </div>
                                                </div>
                                              </Col>
                                              <Col lg="6">
                                                {" "}
                                                <h4 className="mt-3">
                                                  Write your Review
                                                </h4>
                                                {/* <StarsRating
                                                  count={5}
                                                  onChange={ratingChanged}
                                                  size={40}
                                                  color2={"#ffd700"}
                                                  activeColor="#ffd700"
                                                /> */}
                                                <ReactStars
                                                  {...secondExample}
                                                />
                                              </Col>
                                            </Row>
                                            <Row>
                                              <Col
                                                lg="12"
                                                key={Producdetail?._id}
                                              >
                                                <div className="rat-right">
                                                  <Row>
                                                    {/* <Col lg="6"> */}
                                                    {/* <h4 className="mt-3">
                                                        Write your Review
                                                      </h4>
                                                      <StarsRating
                                                        count={5}
                                                        onChange={ratingChanged}
                                                        size={40}
                                                        color2={"#ffd700"}
                                                      /> */}
                                                    {/* </Col> */}
                                                  </Row>

                                                  <Row lg="12">
                                                    <form
                                                      key={Producdetail?._id}
                                                    >
                                                      <textarea
                                                        key={Producdetail?._id}
                                                        value={text}
                                                        name="text"
                                                        onChange={
                                                          onchangehandler
                                                        }
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
                                                  </Row>
                                                </div>
                                              </Col>
                                            </Row>
                                          </div>
                                          <Row key={Producdetail?._id}>
                                            <Col lg="4"></Col>
                                            <Col lg="8" key={Producdetail?._id}>
                                              {handlebookmark === "true" ? (
                                                <button
                                                  key={Producdetail?._id}
                                                  className="addbookmark  btn btn-secondary"
                                                  color="success"
                                                  onClick={() =>
                                                    removebookmark(
                                                      Producdetail?._id
                                                    )
                                                  }
                                                >
                                                  Remove Bookmark
                                                </button>
                                              ) : (
                                                <button
                                                  key={Producdetail?._id}
                                                  onClick={() =>
                                                    addbookmark(
                                                      Producdetail?._id
                                                    )
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
                                                    src={
                                                      value?.userid?.profileImg
                                                    }
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
                                </Col>
                                <Col
                                  md="9"
                                  key={categry?._id}
                                  onClick={() => handleSelection(categry?._id)}
                                >
                                  <div class="product-content">
                                    <div className="d-flex topicsdataapi">
                                      {categry?.topics.map((topic) => (
                                        <h6 style={{ color: "blue" }}>
                                          {topic} &nbsp;
                                        </h6>
                                      ))}
                                    </div>

                                    <h3>{categry?.resTitle}</h3>
                                    <h5>
                                      <span>By -</span> {categry?.creatorName}
                                    </h5>
                                    <p>{categry?.desc?.slice(0, 70)}</p>
                                    <div className="">
                                      <Row>
                                        <Col lg="7">
                                          <PrettyRating
                                            value={categry?.ava_rating}
                                            icons={icons.star}
                                            colors={colors.star}
                                          />
                                        </Col>
                                        <Col
                                          className="justify-content-left"
                                          lg="5"
                                        >
                                          {categry?.ava_rating}- Rating
                                        </Col>
                                      </Row>

                                      <ul class="rating mt-2">
                                        <li>
                                          {categry?.relYear[0] !== ""
                                            ? categry?.relYear?.map((data) => (
                                                <Link to="#" className="tag">
                                                  {data.yrName}
                                                </Link>
                                              ))
                                            : null}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            ))
                          : null}
                      </div>
                    </Row>

                    <div className="container paginatediv d-flex">
                      <ReactPaginate
                        itemsPerPage={10}
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
              Suggested Item
              {/* <span>
                <Link to="/">See All</Link>
              </span> */}
            </h4>
            <Row>
              <Swiper
                breakpoints={{
                  980: {
                    slidesPerView: 4,
                    direction: "horizontal",
                    spaceBetween: 20,
                  },
                  820: {
                    slidesPerView: 3,
                    direction: "horizontal",
                    spaceBetween: 20,
                  },
                  780: {
                    slidesPerView: 3,
                    direction: "horizontal",
                    spaceBetween: 20,
                  },

                  768: {
                    slidesPerView: 3,
                    direction: "horizontal",
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 3,
                    direction: "horizontal",
                    spaceBetween: 28,
                  },
                  320: {
                    slidesPerView: 1,
                    direction: "horizontal",
                    spaceBetween: 25,
                  },
                }}
                spaceBetween={50}
                // slidesPerView={3}
                centeredSlides={true}
                loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                scrollbar={{ draggable: true }}
                className="mySwipersuggestion"
              >
                {suggested !== ""
                  ? suggested?.map((categry) => (
                      <SwiperSlide>
                        <div class="product-grid8" key={categry._id}>
                          <div class="product-image8">
                            <Link
                              key={categry._id}
                              onClick={() => handlesuggSelection(categry?._id)}
                              // onClick={togglesuggestion}
                            >
                              <Modal
                                key={Producdetail?._id}
                                className="mdlg"
                                isOpen={modalsuggestion}
                                // toggle={handleclosesuggestionmodal}
                                {...args}
                              >
                                <ModalBody>
                                  <Row>
                                    <Col></Col>
                                    <Col
                                      lg="1"
                                      className="d-flex justify-content-right"
                                    >
                                      <MdCancelPresentation
                                        className="cancelbuttondata"
                                        onClick={handleclosesuggestionmodal}
                                        size={30}
                                      />
                                    </Col>
                                  </Row>
                                  <div className="main-content">
                                    <h2>
                                      {ReactHtmlParser(Producdetail?.desc)}
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
                                      <div className=" d-flex tag-2">
                                        {Producdetail?.topics?.map((val) => (
                                          <Link className="d-flex " to="#">
                                            {val} &nbsp;
                                          </Link>
                                        ))}
                                      </div>
                                    </div>

                                    <hr></hr>
                                  </div>

                                  <div className="mid">
                                    <h5 className="mt-3">
                                      Link :
                                      {/* <Link>{Producdetail?.link}</Link> */}
                                      <a href={Producdetail?.link}>
                                        {" "}
                                        {Producdetail?.link}
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
                                                {Producdetail?.category?.title}
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
                                                  <Link>{year?.yrName}</Link>
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
                                              {Producdetail?.language?.map(
                                                (lang) => (
                                                  <span>{lang?.language} </span>
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
                                              [ {averageRating?.data}] of 5
                                              Stars
                                            </span>
                                            <br></br>
                                            <span className="mt-3">
                                              {getonecomment?.length}- Customers
                                              Reviews
                                            </span>

                                            {/* <Row>
                                              <Col
                                                className="d-flex justify-content-left mt-1"
                                                style={{
                                                  color: "blue",
                                                }}
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
                                                style={{
                                                  color: "blue",
                                                }}
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
                                                style={{
                                                  color: "blue",
                                                }}
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
                                                style={{
                                                  color: "blue",
                                                }}
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
                                                style={{
                                                  color: "blue",
                                                }}
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
                                        <h4 className="mt-3">
                                          Write your Review
                                        </h4>
                                        {/* <StarsRating
                                          count={5}
                                          onChange={ratingChanged}
                                          size={40}
                                          color2={"#ffd700"}
                                        /> */}
                                        <ReactStars {...secondExample} />
                                      </Col>
                                      <Row lg="12" key={Producdetail?._id}>
                                        <div className="rat-right">
                                          <Row>
                                            <Col lg="6">
                                              {/* <h4 className="mt-3">
                                                Write your Review
                                              </h4>
                                              <StarsRating
                                                count={5}
                                                onChange={ratingChanged}
                                                size={40}
                                                color2={"#ffd700"}
                                              /> */}
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
                                      </Row>
                                    </Row>
                                  </div>
                                  <Row>
                                    <Col lg="4"></Col>
                                    <Col lg="8" key={Producdetail?._id}>
                                      {handlebookmark === "true" ? (
                                        <button
                                          key={Producdetail?._id}
                                          className="addbookmark  btn btn-secondary"
                                          color="success"
                                          onClick={() =>
                                            removebookmark(Producdetail?._id)
                                          }
                                        >
                                          Remove Bookmark
                                        </button>
                                      ) : (
                                        <button
                                          key={Producdetail?._id}
                                          onClick={() =>
                                            addbookmark(Producdetail?._id)
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
                              {categry?.link.match(
                                /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
                              ) ? (
                                <>
                                  {categry?.link ? (
                                    <>
                                      <h2 style={{ color: "green" }}>
                                        {categry[1]}
                                      </h2>
                                      <iframe
                                        allowfullscreen="true"
                                        width="100%"
                                        height="auto"
                                        style={{
                                          borderRadius: "12px",
                                        }}
                                        src={`https://www.youtube.com/embed/${
                                          categry?.link?.split("=")[1]
                                        }`}
                                      ></iframe>
                                    </>
                                  ) : null}
                                </>
                              ) : (
                                <img
                                  style={{ borderRadius: "10px" }}
                                  src={categry?.img}
                                  alt="image"
                                  width="100%"
                                  height={160}
                                />
                              )}
                              {/* <img
                                style={{ borderRadius: "12px" }}
                                width="100%"
                                height="260px"
                                src={categry?.img}
                                alt="image "
                              /> */}
                            </Link>
                          </div>
                          <div
                            key={categry._id}
                            onClick={() => handlesuggSelection(categry?._id)}
                            class="product-content"
                          >
                            <div className=" d-flex topicdatas">
                              {" "}
                              {categry?.topics.map((topic) => (
                                <span
                                  className="d-flex display-inline topicsdata"
                                  style={{ color: "blue" }}
                                >
                                  {topic} &nbsp;
                                </span>
                              ))}
                            </div>

                            <h3>{categry?.resTitle}</h3>
                            <h5>
                              <span>By</span> {categry?.creatorName}
                            </h5>
                            <p>{categry?.desc?.slice(0, 40)}</p>
                            <div className="">
                              <Row>
                                <Col lg="7">
                                  <PrettyRating
                                    value={categry?.ava_rating}
                                    icons={icons.star}
                                    colors={colors.star}
                                  />
                                </Col>
                                <Col className="justify-content-left" lg="5">
                                  {categry?.ava_rating}- Rating
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
                        </div>
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProductHastag;
