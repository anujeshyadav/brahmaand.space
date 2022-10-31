import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { Link, NavLink } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import has1 from "../../images/has1.png";
import business from "../../images/business.png";
import newsletter from "../../images/newsletter.png";

import education from "../../images/education.png";
import healthcare from "../../images/healthcare.png";
import eatfoods from "../../images/eatfoods.png";
import entertainment from "../../images/entertainment.png";
import finance from "../../images/finance.png";
import technology from "../../images/technology.png";
import travel from "../../images/travel.png";
import emoji from "../../images/emoji.png";
import emoji2 from "../../images/emoji2.png";
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
  const [categry, setCategry] = useState([]);
  useEffect(() => {
    allcategory();
  }, []);
  const allcategory = () => {
    axios
      .get(`http://43.205.82.226:9000/admin/getallCategory`)
      .then((response) => {
        setCategry(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
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
      .post(`http://43.205.82.226:9000/user/add_news_ltr`, {
        email: email,
        userid: userid,
      })
      .then((response) => {
        console.log(response.data);
        setEmail("");
        swal("Subscribed Successfully");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  function isValidEmail(email) {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  }
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Please Enter correct Email to Subscribe");
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

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
                  Trending hastags
                </p>
              </Row>
            </div>

            <div className=" row mt-3">
              <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-3">
                <button className="btn1">#Brahmaand</button>
                <button className="btn1">#Brahmaand_space</button>
                <button className="btn1">#Go_Brahmaand_space</button>
                <button className="btn1">#follow_me_india </button>
                <button className="btn1">#follow_me_india</button>
                <button className="btn1">#lifestyle</button>
                <button className="btn1">#photoshoot</button>
                <button className="btn1">#funnymemes </button>
                <button className="btn1">#instafashion</button>
                <button className="btn1">#share</button>
                <button className="btn1">#instagram</button>
                <button className="btn1">#instagram</button>
                <button className="btn1">#instafashion</button>
                <button className="btn1">#trend</button>
                <button className="btn1">#instagram</button>
              </div>
            </div>

            <br />
            <br />
          </div>
        </section>
      </Container>
      <Container>
        <p className="category">Top Categories</p>
        <Container fluid className=" d-flex justify-content-center">
          <Row className="m-3 mb-4">
            {categry?.slice(0, 8).map((value) => (
              <Col lg="3" md="6" sm="12" className="" key={value?._id}>
                <Link to={`/subcategory/${value?._id}`}>
                  <img className="imgCol" src={value?.cat_img} alt="img" />
                  <div className="content-bt">
                    <p style={{ color: "black" }}>{value?.title}</p>
                    <Button className="btlisting">12 Listing</Button>
                  </div>
                </Link>
              </Col>
            ))}

            {/* <Col lg="3" md="6" sm="12" className="">
            <Link to="/subcategory">
              <img className="imgCol" src={business} alt="img" />
              <div className="content-bt">
                <p>Business</p>
                <Button className="btlisting">12 Listing</Button>
              </div>
            </Link>
          </Col> */}
            {/* 
          <Col lg="3" md="6" sm="12">
            <Link to="/subcategory">
              <img className="imgCol" src={education} alt="img" />
              <div className="content-bt">
                <p>Education</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link to="/subcategory">
              <img className="imgCol" src={healthcare} alt="img" />
              <div className="content-bt">
                <p>Healthcare</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link to="/subcategory">
              <img className="imgCol" src={eatfoods} alt="img" />
              <div className="content-bt">
                <p>Eat & Foods</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12" className="">
            <Link to="/subcategory">
              <img className="imgCol" src={entertainment} alt="img" />
              <div className="content-bt">
                <p>Entertainment</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link to="/subcategory">
              <img className="imgCol" src={finance} alt="img" />
              <div className="content-bt">
                <p>Finance</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link to="/subcategory">
              <img className="imgCol" src={technology} alt="img" />
              <div className="content-bt">
                <p>Technology</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link to="/subcategory">
              <img className="imgCol" src={travel} alt="img" />
              <div className="content-bt">
                <p>Travel</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col> */}
          </Row>
        </Container>
      </Container>
      <Container className="d-flex justify-content-center ">
        <Button className="viewall" size="lg">
          <Link
            to="/allcategory"
            style={{ color: "white", textDecoration: "none" }}
          >
            VIEW All
          </Link>
        </Button>
      </Container>
      <Container>
        <h2 className="category2 mt-4 mb-3">Featured content</h2>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            820: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 20,
            },
            780: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
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
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={70}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="ty-6">
              <div className="ty-5">
                <Nav.Link as={NavLink} className="navbar-link">
                  <div className="ty-4">
                    <BsPlay
                      className="bsplaybutton"
                      size={75}
                      style={{ backgroundColor: "white" }}
                      type="submit"
                      onClick={() => setOpen(true)}
                    />
                  </div>

                  <ModalVideo
                    style={{ borderRadius: "12px" }}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </Nav.Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ty-6">
              <div className="ty-5">
                <Nav.Link as={NavLink} className="navbar-link">
                  <div className="ty-4">
                    <BsPlay
                      className="bsplaybutton"
                      size={75}
                      style={{ backgroundColor: "white" }}
                      type="submit"
                      onClick={() => setOpen(true)}
                    />
                  </div>

                  <ModalVideo
                    style={{ borderRadius: "12px" }}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </Nav.Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ty-6">
              <div className="ty-5">
                <Nav.Link as={NavLink} className="navbar-link">
                  <div className="ty-4">
                    <BsPlay
                      className="bsplaybutton"
                      size={75}
                      style={{ backgroundColor: "white" }}
                      type="submit"
                      onClick={() => setOpen(true)}
                    />
                  </div>

                  <ModalVideo
                    style={{ borderRadius: "12px" }}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </Nav.Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ty-6">
              <div className="ty-5">
                <Nav.Link as={NavLink} className="navbar-link">
                  <div className="ty-4">
                    <BsPlay
                      className="bsplaybutton"
                      size={75}
                      style={{ backgroundColor: "white" }}
                      type="submit"
                      onClick={() => setOpen(true)}
                    />
                  </div>

                  <ModalVideo
                    style={{ borderRadius: "12px" }}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </Nav.Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ty-6">
              <div className="ty-5">
                <Nav.Link as={NavLink} className="navbar-link">
                  <div className="ty-4">
                    <BsPlay
                      className="bsplaybutton"
                      size={75}
                      style={{ backgroundColor: "white" }}
                      type="submit"
                      onClick={() => setOpen(true)}
                    />
                  </div>

                  <ModalVideo
                    style={{ borderRadius: "12px" }}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </Nav.Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ty-6">
              <div className="ty-5">
                <Nav.Link as={NavLink} className="navbar-link">
                  <div className="ty-4">
                    <BsPlay
                      className="bsplaybutton"
                      size={75}
                      style={{ backgroundColor: "white" }}
                      type="submit"
                      onClick={() => setOpen(true)}
                    />
                  </div>

                  <ModalVideo
                    style={{ borderRadius: "12px" }}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </Nav.Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ty-6">
              <div className="ty-5">
                <Nav.Link as={NavLink} className="navbar-link">
                  <div className="ty-4">
                    <BsPlay
                      className="bsplaybutton"
                      size={75}
                      style={{ backgroundColor: "white" }}
                      type="submit"
                      onClick={() => setOpen(true)}
                    />
                  </div>

                  <ModalVideo
                    style={{ borderRadius: "12px" }}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </Nav.Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
      <div className="container">
        <Container fluid className=" d-flex justify-content-center">
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
              <img className="imgCol2" src={emoji2} alt="img" />

              <div className="content-emoji1">
                <p>
                  <Container>
                    Brahmaand.Space brings you the community and expert rated
                    tutorials, courses, articles, blogs, vlogs, tv, movies etc.
                    in all niche
                  </Container>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
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
                  <Link to="/">JOIN US !</Link>
                </div>
              </div>
              {/* <img className="imgCol3" src={youtubevideo} alt="img" /> */}
            </Col>
          </Row>
        </Container>
        {/* <p> ----walk-through----</p> */}
      </div>

      <div className="container">
        <p className="category3">How does Brahmaand works?</p>
        <Row>
          <Col lg="4" md="6" sm="12" className="Card-Text">
            <Card>
              <Container>
                <img height="140" className="imgCard" src={edu} alt="img" />
                <p>
                  Users submit resources they find relevant in respective
                  category
                </p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <Button className="learnMore">Learn more</Button>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Text">
            <Card>
              <Container>
                <img height="140" className="imgCard" src={rate} alt="img" />
                <p>
                  Community and experts will rate the resources and give their
                  reviews.
                </p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <Button>Learn more</Button>
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
                  Community and experts will rate the resources and give their
                  reviews.
                </p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <Button>Learn more</Button>
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
                <Col className="  Card-Form ">
                  <Container>
                    <p className="d-flex  ">Get Our Monthly Newsletter</p>
                  </Container>
                  <Container>
                    <span className="d-flex  mt-3 newslettertext">
                      Select a category that best suits your interest. Use
                      filters to customize your search and to find exactly what
                      you want.
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

                        {error && <span style={{ color: "red" }}>{error}</span>}
                      </Col>
                      {/* login to subscribe */}

                      {localStorage.getItem("userId") !== "" &&
                      localStorage.getItem("userId") !== null &&
                      localStorage.getItem("userId") !== undefined ? (
                        <Button
                          lg="4"
                          md="4"
                          sm="6"
                          type="submit"
                          disabled={!performValidation()}
                          onClick={handleSubmit}
                          className=" d-flex subscribebtn col-md-4"
                        >
                          Subscribe
                        </Button>
                      ) : (
                        <Button
                          lg="3"
                          md="3"
                          sm="3"
                          type="submit"
                          onClick={() => {
                            swal("Please Login to Subscribe");
                          }}
                          className="d-flex subscribebtn col-md-4"
                        >
                          Subscribe
                        </Button>
                      )}
                    </InputGroup>
                  </Container>
                </Col>
              </Container>
            </Container>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Col className="">
              <div className="ty-3">
                <div className="ty-2">
                  <Nav.Link as={NavLink} className="navbar-link">
                    <div className="ty-1">
                      <BsPlay
                        className="bsplaybutton"
                        size={75}
                        style={{ backgroundColor: "white" }}
                        type="submit"
                        onClick={() => setOpen(true)}
                      />
                    </div>
                    <div className="modalvideo">
                      <ModalVideo
                        style={{ borderRadius: "12px" }}
                        channel="youtube"
                        autoplay
                        isOpen={isOpen}
                        videoId="L61p2uyiMSo"
                        onClose={() => setOpen(false)}
                      />
                    </div>
                  </Nav.Link>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
      {/*  upper section added by anujesh */}
      {/* <Row className="mt-3">
        <Col lg="6" md="6" sm="12" className="Card-Form ">
          <Container>
            <p className="d-flex  ">Get Our Monthly Newsletter</p>
          </Container>
          <Container>
            <span className="d-flex  mt-3 newslettertext">
              Select a category that best suits your interest. Use filters to
              customize your search and to find exactly what you want.
            </span>
          </Container>
         
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

                {error && <span style={{ color: "red" }}>{error}</span>}
              </Col>
              

              {localStorage.getItem("userId") !== "" &&
              localStorage.getItem("userId") !== null &&
              localStorage.getItem("userId") !== undefined ? (
                <Button
                  lg="3"
                  md="3"
                  sm="4"
                  type="submit"
                  disabled={!performValidation()}
                  onClick={handleSubmit}
                  className=" d-flex subscribebtn col-md-4"
                >
                  Subscribe
                </Button>
              ) : (
                <Button
                  lg="3"
                  md="3"
                  sm="3"
                  type="submit"
                  onClick={() => {
                    swal("Please Login to Subscribe");
                  }}
                  className="d-flex subscribebtn col-md-4"
                >
                  Subscribe
                </Button>
              )}
            </InputGroup>
          </Container>
        </Col>

        <Col lg="6" md="6" sm="12" className="">
          <div className="ty-3">
            <div className="ty-2">
              <Nav.Link as={NavLink} className="navbar-link">
                <div className="ty-1">
                  <BsPlay
                    className="bsplaybutton"
                    size={75}
                    style={{ backgroundColor: "white" }}
                    type="submit"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="modalvideo">
                  <ModalVideo
                    style={{ borderRadius: "12px" }}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </Nav.Link>
            </div>
          </div>
        </Col>
      </Row> */}

      <div className="container">
        <p className="category3">Latest Blogs</p>
        <Row>
          <Col lg="4" md="6" sm="12" className="Card-Blog">
            <Card>
              <Container className="imageslastblog ">
                <img
                  style={{ borderRadius: "13px" }}
                  className="imgBloglast"
                  src={edu}
                  alt="img"
                />
                <h5>30 popular business listings of this pandemic year 2021</h5>
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
                <img
                  style={{ borderRadius: "13px" }}
                  className="imgBloglast"
                  src={rate}
                  alt="img"
                />
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
                <img
                  style={{ borderRadius: "13px" }}
                  className="imgBloglast"
                  src={socialnetwork}
                  alt="img"
                />
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
