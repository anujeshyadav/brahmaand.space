import react, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import Logo1 from "../images/Logo1.png";
import { Label } from "reactstrap";
import google from "../images/g1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "../css/Signup.css";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import NewSignup from "./NewSignup";

function Signup() {
  return (
    <>
      <NewSignup />
      {/* <Container className="loginmain mt-4">
        <Row>
          <Col lg="8">
            <div
              style={{
                backgroundImage: `url(${logo})`,
                backgroundPosition: "left",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "82vh",
                width: "100%",
              }}
            >
              <div
                className="d-flex justify-content-center"
                style={{ paddingTop: "150px" }}
              >
                <img src={Logo1} style={{ height: "35vh", width: "28%" }} />
              </div>
              <h3
                className="d-flex justify-content-center"
                style={{ color: "white", textalign: "center" }}
              >
                <b>Brahmaand.Space</b>
              </h3>
            </div>
          </Col>
          <Col lg="4">
            <form>
              <Row className="mb-3">
                <Label
                  style={{
                    height: "25px",
                    width: "200px",
                    // marginBottom: "2.5rem",
                  }}
                >
                  <h4>Sign Up</h4>
                </Label>
                <h6 className="mt-3" style={{ font: "GT Walsheim Pro" }}>
                  Username
                </h6>
                <h5>
                  <input
                    type="text"
                    style={{ background: "#F1F1F1" }}
                    className="form-control"
                    placeholder="Enter Here "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </h5>
              </Row>
              <Row className="mb-3">
                <h6 style={{ font: "GT Walsheim Pro" }}>Email</h6>
                <h5>
                  <input
                    type="email"
                    style={{ background: "#F1F1F1" }}
                    className="form-control"
                    placeholder="Enter Here your mail Id "
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={handleChange}
                  />
                  {error && <h6 style={{ color: "red" }}>{error}</h6>}
                </h5>
              </Row>
              <Row>
                <h6 style={{ font: "GT Walsheim Pro" }}>Password</h6>
                <h5>
                  <input
                    type="password"
                    style={{ background: "#F1F1F1" }}
                    className="form-control"
                    placeholder="Enter Here "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </h5>
                <div className="login-signup-res-pass-div"></div>
              </Row>
              <div>
                <button
                  // disabled={!performValidation()}
                  style={{ padding: "13px 136px", borderRadius: "11px" }}
                  type="button"
                  class="btn btn-primary"
                  onClick={handleSubmit}
                >
                  <b>CREATE ACCOUNT</b>
                </button>
              </div>
              <div className="last">
                Already have an account ?<Link to="/login">Log In</Link>
              </div>
            </form>
            <Row className="d-flex justify-content-center mt-3">OR</Row>
            <div className style={{ marginTop: "18px" }}>
              <Row className="signupwithgoogle">
                <button className="d-flex justify-content-center signupwithgoogle">
                  <img
                    style={{
                      margin: "3px",
                      height: "20px",
                    }}
                    src={google}
                  />
                  <Link
                    // style={{ color: "black" }}
                    className=" signinwithgooglesignup"
                  >
                    Sign in with Google
                  </Link>
                </button>
              </Row>
            </div>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default Signup;
