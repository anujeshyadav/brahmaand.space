import React from "react";
import { useEffect, useState } from "react";
import "../styles/Login.css";
import { Check } from "react-feather";
import google from "../images/g1.png";
import logo from "../images/logo.png";
import Logo1 from "../images/Logo1.png";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Label } from "reactstrap";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function performValidation() {
    return email.length > 0 && password.length > 0;
  }

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post(`http://43.205.82.226:9000/user/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("dara", response.data);
        console.log(response.data.user);
        console.log("you logged in");
        console.log(response.data.msg);
        console.log(response.data.status);
        setEmail("");
        setPassword("");

        if (response.data.status === true) {
          alert("you loged in succesfully");
        } else if (response.data.status === false) {
          console.log(response.data.status);
          alert("failed to login");
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
        } else navigate('/login"');
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.msg === "User Doesnot Exist") {
          alert("User Does Not exists");
        } else if (error.response.data.msg === "Incorrect Password") {
          alert("you Entered Incorrect password");
        }
      });
  };

  return (
    <Container className="login-container">
      <div className="login">
        <Form onSubmit={handleLoginSubmit} className="login-form">
          <Row>
            <Col lg="8" md="6" sm="12">
              <div
                style={{
                  backgroundImage: `url(${logo})`,
                  backgroundPosition: "left",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "110vh",
                  width: "100%",
                }}
              >
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: "150px" }}
                >
                  <img src={Logo1} style={{ height: "35vh", width: "25%" }} />
                </div>
                <h3
                  className="d-flex justify-content-center"
                  style={{ color: "white", textalign: "center" }}
                >
                  <b>Brahmaand.Space</b>
                </h3>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className="head">
              <h2>Welcome Back!</h2>
              <FormGroup
                className="mb-3 login-form-group"
                controlId="formBasicLoginEmail"
              >
                <Label className="from-label">Email Id</Label>
                <Input
                  required="true"
                  for="exampleEmail"
                  type="email"
                  className="login-form-control"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup
                className="mb-3 login-form-group"
                controlId="formBasicLoginEmail"
              >
                <Label className="from-label">Password</Label>

                <Input
                  type="password"
                  required="required"
                  className="login-form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <div className="login-signup-res-pass-div text-align-left">
                <Link
                  to="/send-reset-password-request"
                  className="login-new-account-link"
                >
                  Forgot Password?
                </Link>
              </div>

              <Input
                className="check"
                type="checkbox"
                color="primary"
                icon={<Check className="vx-icon" size={12} />}
                label="Remember me"
                defaultChecked={false}
                required
              />
              <Label className="label-button">Remember me</Label>

              <div className="login-button-div">
                <Button
                  disabled={!performValidation()}
                  variant="primary"
                  className="login-button"
                  type="submit"
                  onClick={handleLoginSubmit}
                >
                  LOGIN
                </Button>
              </div>
              <div className="last">
                <span>
                  Don't have an account yet ?<Link to="/signup">Sign Up</Link>
                </span>
              </div>

              <Row className="google">
                <Col lg="12" className="d-flex justify-content-center">
                  <img
                    style={{
                      margin: "1px",
                      height: "15px",
                    }}
                    src={google}
                  />
                  <p>Sign in with Google</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
