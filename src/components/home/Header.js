import React from "react";
import "../../styles/ModulePage.css";

import Head from "../../images/social-media-with-photo-frame-like-button-media-payer-pink-background-illustration 10.png";

import Hastag from "../../../src/components/home/Hastag";
import { Container, Row, Col, Card, Button } from "reactstrap";
import backimg from "../../assets/images/backimg.png";
function Header() {
  return (
    <>
      <div
        className="mainBg"
        style={{
          backgroundImage: `url(${backimg})`,
          width: "100%",
          padding: "0px 0px",
          backgroundSize: "cover",
        }}
      >
        <section className="text_header ">
          <Container>
            <Row>
              <Col md="6">
                <div className="py-20">
                  <h1>Looking for best content across the world?</h1>
                  <h3 className=" mx-30 ">
                    Finding the quality resources is not a hassle anymore
                  </h3>
                </div>
              </Col>
              <Col md="6">
                <div className="hImage col">
                  <img src={Head} className="imghead" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <section>
        <div className="searchbar">
          <div className="inputarea">
            <input
              type="text"
              placeholder="Searching best quality content here . . . "
              className="search"
            />
          </div>
          <div className="text-center mt-3">
            <Button className="btn btn-success">Search</Button>
          </div>
         
        </div>
      </section>
      <br />
      <br />

      <Container>
        <Hastag />
      </Container>

      <Container>
        <br />
        <br />
       
      </Container>
    </>
  );
}

export default Header;
