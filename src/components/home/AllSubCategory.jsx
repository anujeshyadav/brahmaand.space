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
import { Link, useParams } from "react-router-dom";

function AllSubCategory() {
  let Params = useParams();

  const [subcatgry, setsubCatgry] = useState([]);

  useEffect(() => {
    console.log("Params", Params);
    allsubcategory();
  }, [Params]);
  const allsubcategory = () => {
    axios

      .get(`http://43.205.82.226:9000/admin/listbycategory/${Params.id}`)

      // .get(`http://43.205.82.226:9000/admin/getallSubCategory/${Params.id}`)
      .then((response) => {
        setsubCatgry(response.data.data);
        console.log(response.data.data);
        // console.log(subcatgry);
        console.log("subcategory", response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <div>
      <p className="category mt-5 mb-2">All Subcategories</p>
      <Container fluid className=" d-flex justify-content-center">
        <Container>
          <Row className="m-3 mb-4">
            {subcatgry?.map((value) => (
              <Col lg="3" md="6" sm="12" className="" key={value?.category._id}>
                <Link to={`/productList/${value?._id}`}>
                  <img className="imgCol" src={value?.Subcat_img} alt="img" />
                  <div className="content-bt">
                    <p>{value?.title}</p>
                    <Button className="btlisting">12 Listing</Button>
                  </div>
                </Link>
              </Col>
            ))}

            {/* <Col lg="3" md="6" sm="12">
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
            </Col> */}
          </Row>
          {/* <Row className="m-3 mb-4">
            <Col lg="3" md="6" sm="12" className="">
              <Link to="/productList">
                <img className="imgCol" src={business} alt="img" />
                <div className="content-bt">
                  <p>Business</p>
                  <Button className="btlisting">12 Listing</Button>
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
          </Row> */}
        </Container>
      </Container>
    </div>
  );
}

export default AllSubCategory;
