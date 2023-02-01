import React from "react";
import { Col, Container, Label, Row } from "reactstrap";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import logo from "./logo.svg";

function Loginplan() {
  return (
    <div>
      <Row>
        <Col className="loginleftbar" lg="4">
          <Row className="imageleft">
            <img className="sr-1" width="250px" src={logo} alt="image" />
          </Row>
          {/* <img src={logo} alt="image" /> */}
          <Row>
            <div className="text-center">
              <h2 class="sidebar-title">We’ve just added TikTok!</h2>
            </div>
          </Row>
          <Row>
            <Container>
              <div className="text-center">
                <p className="p-5 text-color-white">
                  You can now create, plan, and collaborate on your TikTok
                  content with Planable. And with 1 billion monthly active
                  users, you should. Connect your accounts to get started.
                </p>
                <h6 className="mt-3">Learn More</h6>
              </div>
            </Container>
          </Row>
          <Row className="learnmore"></Row>
        </Col>
        <Col className="" lg="8">
          <div className="main-box">
            <Row>
              <Col md="12">
                <div className="text-right">
                  <h6 className="donothave">
                    Don't have an account?
                    <span>
                      <button type="button" class="btn btn-light">
                        Sign up
                      </button>
                    </span>
                  </h6>
                </div>
              </Col>
              <Col md="">
                <div className="form-box">
                  <h3 className="signinplanable">Sign in to Planable</h3>
                  <small>Enter your details below</small>
                  <form>
                    <div className="froms">
                      <div className="buttin">
                        <button className="btn btn-primary facebookbtn">
                          <BsFacebook color="blue" size={18} />{" "}
                          <span className="fbtext">Sign in with Facebook</span>
                        </button>
                        <button className="btn btn-primary facebookbtn googlebtn">
                          <FcGoogle className="fcgool" size={18} />{" "}
                          <span className="fbtext"> Signin with Google</span>
                        </button>
                      </div>
                      <div className="bottom-line">
                        <span>or</span>
                      </div>
                      <Col lg="6">
                        <div className="labelarea">
                          <Label className="label">Email</Label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="labelarea">
                          <Label className="label">password</Label>
                          <input type="text" className="form-control" />
                        </div>
                      </Col>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Loginplan;
