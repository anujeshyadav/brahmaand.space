import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { Link, NavLink } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import has1 from "../../images/has1.png";
import axiosConfig from "../axiosConfig";
import ShowMore from "react-show-more";
import newsletter from "../../images/newsletter.png";
import { useNavigate } from "react-router-dom";
import emoji from "../../images/emoji.png";
import emoji2 from "../../images/emoji2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import youtubevideo from "../../images/youtubevideo.jpg";
import edu from "../../images/edu.jpg";
import rate from "../../images/rate.jpg";
import socialnetwork from "../../images/socialnetwork.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import "swiper/css";
import "../../styles/ModulePage.css";
import "../../styles/Hastag.scss";

import { Card, Input, Button, CardMedia } from "reactstrap";
import { InputGroup } from "react-bootstrap";

function Hastag() {
  const [trendingsearch, setTrendingsearch] = useState([]);
  const [categry, setCategry] = useState([]);
  const [newslettervid, setNewslettervid] = useState([]);
  const navigate = useNavigate();

  const gettrendingdata = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/getTrending`)
      .then((res) => {
        // console.log(res.data.data);
        setTrendingsearch(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    gettrendingdata();
    allcategory();
    monthlynewslettervid();
    featuredContent();
  }, []);
  const allcategory = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/getallCategory`)
      .then((response) => {
        setCategry(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {});
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function performValidation() {
    return email.length > 14;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("userid");

    axios
      .post(`http://3.7.173.138:9000/user/add_news_ltr`, {
        email: email,
        userid: userid,
      })
      .then((response) => {
        setEmail("");
        swal("Subscribed Successfully");
      })
      .catch((error) => {});
  };
  function isValidEmail(email) {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  }

  const monthlynewslettervid = () => {
    axiosConfig
      .get(`/user/getVideo`)
      .then((res) => {
        setNewslettervid(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Please Enter correct Email to Subscribe");
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  // featured content api integration
  const [feature, setFeature] = useState([]);
  const featuredContent = () => {
    axiosConfig
      .get(`/user/get_featured_cnt`)
      .then((res) => {
        setFeature(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const landtoproductpage = () => {
    // console.log(homesearch);
    // navigate(`/productList/${homesearch}`);
  };
  localStorage.setItem("hastag", "hastag");
  function handlehastagtopic(hastag) {
    localStorage.setItem("hastag", hastag);
    // if (hastag !== "") {
    //   console.log(hastag);
    //   axios
    //     .get(`http://3.7.173.138:9000/user/filterbyHashTag/${hastag}`)
    //     .then((res) => {
    //       console.log(res.data?.data[0].sub_category?._id);
    //       const hastagdata = res.data?.data[0].sub_category?._id;

    //       if (hastagdata !== "" && hastagdata !== null) {
    //         console.log(hastagdata);
    //         navigate(`/productList/${hastagdata}`);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    if (hastag !== "") {
      axios
        .post(`http://3.7.173.138:9000/user/search_topic_title`, {
          searchinput: hastag,
        })
        .then((res) => {
          if (
            res.data.data[0]?.sub_category === "" ||
            res.data.data[0]?.sub_category == undefined
          ) {
            swal("No data Found!");
          }
          const search = res.data.data[0]?.sub_category;

          // if (search !== "" && search !== undefined) {
          //   navigate(`/productList/${search}`);
          // }
          if (search !== "" && search !== undefined) {
            navigate(`/producthastag/${search}`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const [isOpenone, setOpenone] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Container>
        <section>
          <div className="hastah_main">
            <div className="hastag_heading">
              <Row className="d-flex justify-content-center">
                <p className="Trending">
                  <img className="mb-5" src={has1} alt="img" width="45px" />
                  Trending Searches
                </p>
              </Row>
            </div>

            <div className=" row mt-3">
              <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-3">
                {trendingsearch !== ""
                  ? trendingsearch?.slice(0, 18).map((trendingtopics) => (
                      <button
                        key={trendingtopics._id}
                        onClick={() =>
                          handlehastagtopic(trendingtopics?.topics)
                        }
                        className="btn1"
                      >
                        {trendingtopics?.topics}
                      </button>
                    ))
                  : null}
              </div>
            </div>

            <br />
            <br />
          </div>
        </section>
      </Container>
      <Container>
        <p className="category">Top Categories</p>
        <Container className=" ">
          <Row className="m-3 mb-4">
            {categry?.slice(0, 8).map((value) => (
              <Col lg="3" md="6" sm="12" className="" key={value?._id}>
                <Link to={`/subcategory/${value?._id}`}>
                  <div className="bg-1">
                    <div className="blackimage">
                      <img className="imgCol" src={value?.cat_img} alt="img" />
                    </div>
                    <div className=" d-flex content-bt">
                      <p
                        className="d-flex contenttextcategory"
                        style={{ color: "white" }}
                      >
                        {value?.title}
                      </p>
                    </div>
                    <div className=" d-flex content-bt">
                      <Row className="  mt-2">
                        <Button className="btlisting">
                          {value?.subCount} - Listing
                        </Button>
                      </Row>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Container className="d-flex justify-content-center ">
        <Link
          to="/allcategory"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button to="/allcategory" className="viewall" size="lg">
            VIEW All
          </Button>
        </Link>
      </Container>
      <Container>
        <h2 className="category2 mt-4 mb-4">Featured</h2>
        <Swiper
          breakpoints={{
            1084: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 10,
            },
            980: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 10,
            },
            910: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 10,
            },
            820: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 10,
            },
            820: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 10,
            },
            780: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              direction: "horizontal",
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              direction: "horizontal",
              spaceBetween: 10,
            },
            240: {
              slidesPerView: 1,
              direction: "horizontal",
              spaceBetween: 10,
            },
          }}
          className="sld-1"
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={70}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {feature?.map((features) => (
            <SwiperSlide key={features?._id}>
              {/* <div
                key={features?._id}
                style={{ backgroundImage: `url(${features?.thumbnail_img})` }}
                className="ty-6"
              >
                <div className="ty-5" key={features?._id}>
                  <Nav.Link as={NavLink} className="navbar-link">
                    <div className="ty-4">
                      <BsPlay
                        key={features?._id}
                        className="bsplaybutton"
                        size={75}
                        style={{ backgroundColor: "white" }}
                        type="submit"
                        onClick={() => setOpen(true)}
                      />
                    </div>
                    <ModalVideo
                      key={features?._id}
                      style={{ borderRadius: "12px" }}
                      channel="youtube"
                      autoplay
                      enablejsapi="1"
                      isOpen={isOpen}
                      videoId={features?.video_link}
                      onClose={() => setOpen(false)}
                    />
                  </Nav.Link>
                </div>
              </div> */}
              <div className="ifram">
                <iframe
                  allowfullscreen="true"
                  className="iframesetdata"
                  // width="auto"
                  // height="300px"
                  style={{ borderRadius: "12px" }}
                  src={`https://www.youtube.com/embed/${features?.video_link}`}
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <div className="container">
        <Container fluid className=" d-flex justify-content-center mt-3">
          <Row>
            <Col lg="6" md="6" sm="12">
              <img className="imgCol1" src={emoji} alt="img" />
              <div className="content-emoji">
                <p>
                  <Container>
                    Content is scattered all over the web and finding quality,
                    best content is a challenge. People waste their time and
                    money consuming irrelevant, unauthentic resources.
                  </Container>
                </p>
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <img
                className="imgCol2 d-flex justify-content-center"
                src={emoji2}
                alt="img"
              />

              <div className="content-emoji1">
                <p>
                  <Container>
                    Brahmaand.Space features a selection of top-rated, community
                    and expert-approved content links in all categories
                    including tutorials, courses, articles, blogs, and vlogs.
                  </Container>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div>
        <Container>
          <Row className="mt-5">
            <Col lg="12" md="12" sm="12" className="">
              <div
                className="rs-1"
                style={{
                  backgroundImage: `url(${youtubevideo})`,
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <div className="rs-bg">
                  <h3>
                    Are you a Youtube content creator and want to <br></br>
                    promote your content and earn money.
                  </h3>
                  <Link to="/signup">JOIN US !</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <div className="container">
        <p className="category3">How does Brahmaand works?</p>
        <Row>
          <Col lg="4" md="6" sm="12" className="Card-Text">
            <Card>
              <Container>
                <img height="140" className="imgCard" src={edu} alt="img" />
                <p>Search for the top content on any subject ... (e.g. Java)</p>

                <ShowMore
                  className="showmore"
                  style={{ color: "black" }}
                  lines={3}
                  more="learn More"
                  less="learn less"
                  anchorClass=""
                >
                  Our team of experts at Brahmaand.Space thoroughly evaluates
                  and curates submitted content from across the globe, which are
                  links to YouTube videos, courses, articles, and blogs.
                </ShowMore>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Text">
            <Card>
              <Container>
                <img height="140" className="imgCard" src={rate} alt="img" />
                <p>
                  User community and category experts will give their
                  assessments and feedback for the submitted content.
                </p>
                <ShowMore
                  className="showmore"
                  style={{ color: "black" }}
                  lines={3}
                  more="learn More"
                  less="learn less"
                  anchorClass=""
                >
                  Again, our expert team manually evaluates all ratings and
                  reviews to verify their sources and ensure they provide
                  helpful information.
                </ShowMore>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Text">
            <Card>
              <Container>
                <img
                  height="140"
                  className="imgCard"
                  src={socialnetwork}
                  alt="img"
                />
                <p>
                  Brahmaand.Space showcases the best content that rises to the
                  top for your learning and enjoyment.
                </p>
                <ShowMore
                  className="showmore"
                  style={{ color: "black" }}
                  lines={3}
                  more="learn More"
                  less="learn less"
                  anchorClass=""
                >
                  Our platform rewards users who submitted content in the first
                  step with prizes based on the ratings and reviews from
                  Brahmaand.Space users community.
                </ShowMore>
              </Container>
            </Card>
          </Col>
        </Row>
      </div>
      <br />
      <br />

      <div
        className="fluid newsletters mb-3"
        style={{
          // height: "70vh",
          position: "relative",
          backgroundImage: `url(${newsletter})`,
          backgroundSize: "cover",
          // opacity: 0.8,
          width: "100%",
        }}
      >
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <Row className="mt-3"> */}
            <Container>
              <Container>
                <Container>
                  <Col className="  Card-Form ">
                    <Container>
                      <p className="d-flex  ">Get the Latest Updates.</p>
                    </Container>
                    <Container>
                      <span className="d-flex  mt-3 newslettertext">
                        Sign up for Brahmaand.Space's newsletter to receive
                        updates on new and relevant content.
                      </span>
                    </Container>
                    {/* news letter */}
                    <Container>
                      <InputGroup className="Card-Form mb-4">
                        <Col lg="8" md="8" sm="8" className="searchbara ">
                          <input
                            value={email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter Email Address to Subscribe"
                            className="d-flex searchnew  inputareea"
                          />

                          {error && (
                            <span style={{ color: "red" }}>{error}</span>
                          )}
                        </Col>
                        {/* login to subscribe */}
                        <Button
                          lg="4"
                          md="4"
                          sm="3"
                          type="submit"
                          disabled={!performValidation()}
                          onClick={handleSubmit}
                          className=" d-flex justify-content-center subscribebtn col-md-4"
                        >
                          Subscribe
                        </Button>
                      </InputGroup>
                    </Container>
                  </Col>
                </Container>
              </Container>
            </Container>
          </div>
          <div className=" col-lg-6 col-md-6 col-sm-12">
            {/* api integrate form here */}
            {newslettervid
              ?.map((video) => (
                <Col className="container" key={video?._id}>
                  <div
                    style={{ backgroundImage: `url(${video})` }}
                    className="ty-3"
                  >
                    <div className="ty-2">
                      <Nav.Link as={NavLink} className="navbar-link">
                        <div className="ty-1">
                          <BsPlay
                            className="bsplaybutton"
                            size={75}
                            style={{ backgroundColor: "white" }}
                            type="submit"
                            // onClick={() => setOpenone(true)}
                          />
                        </div>
                        <div className="modalvideo">
                          <ModalVideo
                            style={{ borderRadius: "12px" }}
                            channel="youtube"
                            autoplay
                            isOpen={isOpenone}
                            videoId={video?.videoid}
                            onClose={() => setOpenone(false)}
                          />
                        </div>
                      </Nav.Link>
                    </div>
                  </div>
                </Col>
              ))
              .slice(0, 1)}
          </div>
        </div>
      </div>

      <div className="container">
        <p className="category3">Latest Blogs</p>
        <Row>
          <Col lg="4" md="6" sm="12" className="Card-Blog">
            <Card>
              <Container className="imageslastblog ">
                <Link to={`/blog`}>
                  <img
                    height={250}
                    style={{ borderRadius: "13px" }}
                    className="imgBloglast"
                    src={edu}
                    alt="img"
                  />
                </Link>
                <h5>30 popular business listings of this pandemic year 2021</h5>
                <p>
                  You’ve probably noticed there are dozens of platforms that
                  offer business listings. Let’s look at a few of the most
                </p>
                <p>
                  <span>
                    <b>24th Dec, 2021 . 5 min read</b>
                  </span>
                </p>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Blog">
            <Card>
              <Container className="imageslastblog ">
                <Link to={`/blog`}>
                  <img
                    height={250}
                    style={{ borderRadius: "13px" }}
                    className="imgBloglast"
                    src={rate}
                    alt="img"
                  />
                </Link>
                <h5>Most visited places & top rated shops from our listing</h5>
                <p>
                  You’ve probably noticed there are dozens of platforms that
                  offer business listings. Let’s look at a few of the most
                  popular sites and...
                </p>
                <p>
                  <span>
                    <b>24th Dec, 2021 . 5 min read</b>
                  </span>
                </p>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Blog">
            <Card>
              <Container className="imageslastblog ">
                <Link to={`/blog`}>
                  <img
                    height={250}
                    style={{ borderRadius: "13px" }}
                    className="imgBloglast"
                    src={socialnetwork}
                    alt="img"
                  />
                </Link>
                <h5>
                  Optimize your business page for national/global customers
                </h5>
                <p>
                  You’ve probably noticed there are dozens of platforms that
                  offer business listings. Let’s look at a few of the most
                  popular sites and...
                </p>
                <p>
                  <span>
                    <b>24th Dec, 2021 . 5 min read</b>
                  </span>
                </p>
              </Container>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Hastag;
