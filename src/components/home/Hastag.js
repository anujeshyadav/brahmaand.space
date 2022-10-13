import React from "react";
import has1 from "../../images/has1.png";
import business from "../../images/business.png";
import education from "../../images/education.png";
import healthcare from "../../images/healthcare.png";
import Brahmaand from "../../images/Brahmaand.png";
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

import "../../styles/ModulePage.css";

import {
  Container,
  Card,
  Input,
  Row,
  Button,
  Col,
  CardMedia,
} from "reactstrap";
import { InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hastag() {
  return (
    <>
      <section>
        <div className="hastah_main">
          <div className="hastag_heading">
            <Row className="d-flex justify-content-center">
              <p className="Trending">
                <img className="" src={has1} alt="img" width="50px" />
                Trending hastags
              </p>
            </Row>
          </div>

          <div className=" row ">
            <div className="col col-lg-12 col-md-8 col-sm-4 col-xs-3">
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

      <p className="category">Top Categories</p>
      <Container fluid className="mb-5 d-flex justify-content-center">
        <Row className="m-2">
          <Col lg="3" md="6" sm="12" className="">
            <Link to="/productList">
              <img className="imgCol" src={business} alt="img" />
              <div className="content-bt">
                <p>Business</p>
                <Button className="bt">12 Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link to="/productList">
              <img className="imgCol" src={education} alt="img" />
              <div className="content-bt">
                <p>Education</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link to="/productList">
              <img className="imgCol" src={healthcare} alt="img" />
              <div className="content-bt">
                <p>Healthcare</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link to="/productList">
              <img className="imgCol" src={eatfoods} alt="img" />
              <div className="content-bt">
                <p>Eat & Foods</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3" className="">
            <Link to="/productList">
              <img className="imgCol" src={entertainment} alt="img" />
              <div className="content-bt">
                <p>Entertainment</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3">
            <Link to="/productList">
              <img className="imgCol" src={finance} alt="img" />
              <div className="content-bt">
                <p>Finance</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3">
            <Link to="/productList">
              <img className="imgCol" src={technology} alt="img" />
              <div className="content-bt">
                <p>Technology</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
          <Col lg="3">
            <Link to="/productList">
              <img className="imgCol" src={travel} alt="img" />
              <div className="content-bt">
                <p>Travel</p>
                <Button className="bt">Listing</Button>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container className="d-flex justify-content-center">
        <Button className="viewall" size="lg">
          <Link
            to="/ProductList"
            style={{ color: "white", textDecoration: "none" }}
          >
            VIEW All
          </Link>
        </Button>
      </Container>
      <div>
        <p className="category2">Featured content</p>

        <Container fluid className="mb-5 d-flex justify-content-center">
          <Row className="m-2">
            <Col lg="6" md="6" sm="12" className="">
              <img className="imgColF" src={business} alt="img" />
              <div className="content-bt">
                {/* <h4>Business</h4>
                <Button>12 Listing</Button> */}
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <img className="imgColF" src={business} alt="img" />
              <div className="content-bt">
                {/* IoPlayOutline */}
                {/* <h4>Education</h4>
                <Button>Listing</Button> */}
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <img className="imgCol1" src={emoji} alt="img" />
              <div className="content-emoji">
                <p>
                  Content is scattered all over the web and finding quality,
                  best content is a challenge. People waste their time and money
                  consuming irrelevant, unauthentic resources.
                </p>
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <img className="imgCol2" src={emoji2} alt="img" />
              {/* <img className="imgCol2 img com12" src={Brahmaand} alt="img" /> */}

              <div className="text">{/* <p>Brahmaand.space</p> */}</div>

              <div className="content-emoji1">
                <p>
                  Brahmaand.Space brings you the community and expert rated
                  tutorials, courses, articles, blogs, vlogs, tv, movies etc. in
                  all niche
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            {" "}
            <Col lg="12" md="12" sm="12" className="">
              <img className="imgCol3" src={youtubevideo} alt="img" />
              {/* <div lg="8" md="8" sm="12" className="content-text">
                <p>Are you a Youtube content creator and want to </p>
                <p> promote your content and earn money.</p>
                <Button>JOIN US!</Button>
              </div> */}
            </Col>
          </Row>
        </Container>
        {/* <p> ----walk-through----</p> */}
      </div>

      <div>
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
                <Button>Learn more</Button>
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

      <Row>
        <Col lg="6" md="6" sm="12" className="Card-Form">
          <Container>
            <p>Get Our Monthly Newsletter</p>
            <span>
              Select a category that best suits your interest. Use filters to
              customize your search and to find exactly what you want.
            </span>
          </Container>
          {/* <Row> */}
          {/* <div lg="3" md="3" sm="12" className="Card-Form"> */}
          <InputGroup lg="6" md="6" sm="12" className="Card-Form">
            <div className="searchbara col-md-8 ">
              <div className="inputareea">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="searchnew"
                />
              </div>
            </div>
            <Button className="subscribebtn col-md-4">Subscribe</Button>
            {/* <Input
              type="text"
              placholder="Enter email address"
              className="subinput"
            ></Input> */}
            {/* <Button className="subbtn">Subscribe</Button> */}
          </InputGroup>
          {/* </div> */}
        </Col>
        {/* </Row> */}

        <Col lg="6" md="6" sm="12" className="">
          <img className="vI" src={socialnetwork} alt="img" />
        </Col>
      </Row>

      <div>
        <p className="category3">Latest Blogs</p>
        <Row>
          <Col lg="4" md="6" sm="12" className="Card-Blog">
            <Card>
              <Container>
                <img height="140" className="imgBlog" src={edu} alt="img" />
                <h5>30 popular business listings of this pandemic year 2021</h5>
                <p>
                  You’ve probably noticed there are dozens of platforms that
                  offer business listings. Let’s look at a few of the most
                  popular sites and...
                </p>
                <span>24th Dec, 2021 . 5 min read</span>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Blog">
            <Card>
              <Container>
                <img height="140" className="imgBlog" src={rate} alt="img" />
                <h5>Most visited places & top rated shops from our listing</h5>
                <p>
                  You’ve probably noticed there are dozens of platforms that
                  offer business listings. Let’s look at a few of the most
                  popular sites and...
                </p>
                <span>24th Dec, 2021 . 5 min read</span>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Blog">
            <Card>
              <Container>
                <img
                  height="140"
                  className="imgBlog"
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
                <span>24th Dec, 2021 . 5 min read</span>
              </Container>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Hastag;

{
  /* <img className="top_img mx-3 my-3" src={business} alt="img" />
                <img className="top_img mx-3 my-3" src={business} alt="img" />
                <img className="top_img mx-3 my-3" src={business} alt="img" />
                <img className="top_img mx-3 my-3" src={business} alt="img" />
               */
}
