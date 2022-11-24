import React from "react";
import { useEffect, useState } from "react";
import "../styles/Login.css";
import { Check } from "react-feather";
import google from "../images/g1.png";
import newlogin from "../images/newlogin.png";
import Logo1 from "../images/Logo1.png";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Label } from "reactstrap";
import swal from "sweetalert";
import axios from "axios";

import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
    setPassword(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [error, setError] = useState(null);
  const eye = <FontAwesomeIcon icon={faEye} />;

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function performValidation() {
    return email.length > 5 && password.length > 5;
  }

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    if (!isValidEmail(e.target.value)) {
      // swal("Email is invalid");
    } else {
      setError(null);
    }

    e.preventDefault();
    // console.log(email, password);
    axios
      .post(`http://3.7.173.138:9000/user/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("data", response.data);
        console.log(response.data.user);
        console.log("you logged in");
        console.log(response.data.msg);
        console.log(response.data.status);

        if (response.data.status === true) {
          swal("Good job!", "Successfully login");
        } else if (response.data.status === false) {
          console.log(response.data.status);
          swal("Failed to login try again ");
        }

        if (
          response.data.user._id !== null &&
          response.data.user._id !== "" &&
          response.data.user._id !== undefined
        ) {
          localStorage.setItem("userId", response.data.user._id);
        }

        if (localStorage.getItem("userId")) {
          navigate("/topbar");
        } else navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.msg === "User Doesnot Exist") {
          swal("User Does Not exists");
        } else if (error.response.data.msg === "Incorrect Password") {
          swal("you Entered Incorrect password ", "try again");
        }
      });
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Container className="login-container">
        <div className="login">
          <Form onSubmit={handleLoginSubmit} className="login-form">
            <Row>
              <Col lg="8" md="6" sm="12">
                <div
                  style={{
                    backgroundImage: `url(${newlogin})`,
                    backgroundPosition: "left",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "78vh",
                    width: "100%",
                  }}
                >
                  <div
                    className="d-flex justify-content-center"
                    style={{ paddingTop: "150px" }}
                  >
                    <img src={Logo1} style={{ height: "33vh", width: "27%" }} />
                  </div>
                  <h3
                    className="d-flex justify-content-center"
                    style={{ color: "white", textalign: "center" }}
                  >
                    <b className="logologintext">Brahmaand.Space</b>
                  </h3>
                </div>
              </Col>
              <Col lg="4" md="6" sm="12" className="head">
                <h2>Welcome Back!</h2>
                <FormGroup
                  className="mb-3 mt-3 login-form-group"
                  controlId="formBasicLoginEmail"
                >
                  <Label className="from-label">Email Id</Label>
                  <Input
                    required="true"
                    for="exampleEmail"
                    type="email"
                    className="login form-control mt-2 emailoflogin"
                    placeholder="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup
                  className="mb-4 login-form-group"
                  controlId="formBasicLoginEmail"
                >
                  <Label className="from-label">Password</Label>
                  <div className="loginpassword">
                    <Input
                      type={passwordType}
                      required="required"
                      className="login form-control passwordloginforbutton"
                      placeholder="Password"
                      value={passwordInput}
                      onChange={handlePasswordChange}
                    />

                    <span
                      className="d-flex eyeiconhideshow"
                      onClick={togglePassword}
                    >
                      {passwordType === "password" ? (
                        <FaRegEyeSlash size={28} />
                      ) : (
                        <AiOutlineEye size={28} />
                      )}
                    </span>
                  </div>
                </FormGroup>
                <Row>
                  <Col lg="7"></Col>
                  <Col lg="5">
                    <Link
                      to="/send-reset-password-request"
                      className="login-new-account-link"
                    >
                      Forgot Password ?
                    </Link>
                  </Col>
                </Row>
                {/* <div className="login-signup-res-pass-div text-align-left"></div> */}
                <Row className="d-flex ">
                  <Col lg="2">
                    <Input
                      className="check"
                      type="checkbox"
                      color="primary"
                      icon={<Check className="vx-icon" size={10} />}
                      label="Remember me"
                      defaultChecked={false}
                      required
                    />
                  </Col>
                  <Col>
                    <Label className="label-button  d-flex">Remember me</Label>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                  <button
                    disabled={!performValidation()}
                    style={{ padding: "13px 162px", borderRadius: "11px" }}
                    type="button"
                    class="btn btn-primary"
                    onClick={handleLoginSubmit}
                  >
                    <b>LOGIN</b>
                  </button>
                </div>

                <div className="last"></div>
                <span className="mx-4">
                  Don't have an account yet ?<Link to="/signup">Sign Up</Link>
                </span>
                <Row className="d-flex justify-content-center mt-3">OR</Row>
                <div className="mt-4">
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
                  {/* <Row className="mt-3">
                    <button className="signupwithgoogle">
                      <Col
                        lg="12"
                        className="d-flex justify-content-center mt-2"
                      >
                        <img
                          style={{
                            margin: "3px",
                            height: "20px",
                          }}
                          src={google}
                        />
                        <Link className="signinwithgooglesignup">
                          Sign in with Google
                        </Link>
                      </Col>
                    </button>
                  </Row> */}
                </div>
                {/* <Row className=" d-flex justify-content-center mt-3">OR</Row> */}
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Login;
