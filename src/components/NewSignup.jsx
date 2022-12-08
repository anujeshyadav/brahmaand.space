import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import google from "../images/g1.png";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Logo1 from "../images/Logo1.png";
import logo from "../images/logo.png";

import axios from "axios";
import { Container, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { signInWithGoogle } from "../Firebase";
function NewSignup() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (
      username.length > 2 &&
      email !== "" &&
      password !== "" &&
      password !== null &&
      password !== undefined
    ) {
      axios
        .post(`http://3.7.173.138:9000/user/signup`, {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          swal(
            "Account created Successfully",
            `Your-Email -${response.data.data.email} 
            username- ${response.data.data.username}`
          );
          navigate("/");

          if (
            response.data.data._id !== null &&
            response.data.data._id !== "" &&
            response.data.data._id !== undefined
          ) {
            localStorage.setItem("userId", response.data.data._id);
          }
          setUsername("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data.message == "already exists") {
            swal(
              "    Mail or Username is already Registered",
              "    Reset your password or try to signup with different Username/Email"
            );
          }
        });
    }

    setValidated(true);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col lg="8">
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundPosition: "left",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "87vh",
              width: "100%",
            }}
          >
            <div
              className="d-flex justify-content-center"
              style={{ paddingTop: "175px" }}
            >
              <img src={Logo1} style={{ height: "160px", width: "160px" }} />
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Label
              style={{
                height: "25px",
                width: "200px",
              }}
            >
              <h4 className="mb-1">Sign Up</h4>
            </Label>
            <hr className="signuphr" />
            <h6>
              Create an account to submit content in various categories and win
              money and help our community to grow
            </h6>
            <Row className="mt-3 mb-3">
              <Form.Group as={Col} md="" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a Email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            {/* changes here down */}

            <Row className="mb-3">
              <Form.Group as={Col} md="" controlId="validationCustomUsername">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a Password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <div>
              <button
                style={{ padding: "13px 136px", borderRadius: "11px" }}
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                <b>CREATE ACCOUNT</b>
              </button>
            </div>
            <div className=" mt-3 last">
              Already have an account ?<Link to="/login">Log In</Link>
            </div>
            <Row className="d-flex justify-content-center mt-3">OR</Row>
            <div className style={{ marginTop: "18px" }}>
              <Row className="signupwithgoogle">
                <button
                  onClick={signInWithGoogle}
                  className="d-flex justify-content-center signupwithgoogle"
                >
                  <img
                    style={{
                      margin: "3px",
                      height: "20px",
                    }}
                    src={google}
                  />
                  <Link className=" signinwithgooglesignup">
                    Sign in with Google
                  </Link>
                </button>
              </Row>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default NewSignup;
