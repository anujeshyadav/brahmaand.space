import React, { useState, useEffect } from "react";
import axios from "axios";
import business from "../../images/business.png";
import education from "../../images/education.png";
import healthcare from "../../images/healthcare.png";

import eatfoods from "../../images/eatfoods.png";
import entertainment from "../../images/entertainment.png";
import finance from "../../images/finance.png";
import technology from "../../images/technology.png";
import travel from "../../images/travel.png";

import "../../styles/ModulePage.css";
import { Container, Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Allcategory() {
  const [categry, setCategry] = useState([]);

  useEffect(() => {
    allcategory();
  }, []);

  const allcategory = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/getallCategory`)
      .then((response) => {
        setCategry(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  };

  return (
    <div>
      <p className="category mt-5 mb-2">All Categories</p>
      <Container fluid className=" d-flex justify-content-center">
        <Container>
          <Row className="m-3 ">
            {categry?.map((value) => (
              <Col lg="3" md="6" sm="12" className="" key={value?._id}>
                <Link to={`/subcategory/${value?._id}`}>
                  <div className="blackimage">
                    <img
                      className="imgCol allcategoryback"
                      src={value?.cat_img}
                      alt="img"
                    />
                  </div>
                  <div className=" d-flex content-bt">
                    <p className="d-flex " style={{ color: "white" }}>
                      {value?.title}
                    </p>
                    {/* <Button className="btlisting">12 Listing</Button> */}
                  </div>
                </Link>
                <Row></Row>
              </Col>
            ))}

            {/* <Col lg="3" md="6" sm="12">
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
            <Col lg="3" className="">
              <Link to="/subcategory">
                <img className="imgCol" src={entertainment} alt="img" />
                <div className="content-bt">
                  <p>Entertainment</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/subcategory">
                <img className="imgCol" src={finance} alt="img" />
                <div className="content-bt">
                  <p>Finance</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/subcategory">
                <img className="imgCol" src={technology} alt="img" />
                <div className="content-bt">
                  <p>Technology</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/subcategory">
                <img className="imgCol" src={travel} alt="img" />
                <div className="content-bt">
                  <p>Travel</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="m-3 mb-4">
            <Col lg="3" md="6" sm="12" className="">
              <Link to="/subcategory">
                <img className="imgCol" src={business} alt="img" />
                <div className="content-bt">
                  <p>Business</p>
                  <Button className="btlisting">12 Listing</Button>
                </div>
              </Link>
            </Col>
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
            <Col lg="3" className="">
              <Link to="/subcategory">
                <img className="imgCol" src={entertainment} alt="img" />
                <div className="content-bt">
                  <p>Entertainment</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/subcategory">
                <img className="imgCol" src={finance} alt="img" />
                <div className="content-bt">
                  <p>Finance</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/subcategory">
                <img className="imgCol" src={technology} alt="img" />
                <div className="content-bt">
                  <p>Technology</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
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
    </div>
  );
}

export default Allcategory;
