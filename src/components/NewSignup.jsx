import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import google from "../images/g1.png";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import logonew from "../images/logonew.png";
import Logo1 from "../images/Logo1.png";
import logo from "../images/logo.png";
import { faChessKing } from "@fortawesome/free-regular-svg-icons";
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
      username.length > 6 &&
      password.length > 5 &&
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
          console.log(response.data.message);
          if (response.data.message === "success") {
            Swal.fire({
              // header: '<a href="">Please verify your email</a>',
              // header: ' <a href="">Please verify your email</a>',

              title: "<span>Please verify your email</span>",
              // footer: '<a href="">Why do I have this issue?</a>',
              // icon: "info",
              html: " <hr /><p>A verification email has been sent to your email inbox. Please click the link in the email to activate your account . If you can't find the email, please check your spam folder or request another one</p><hr />",

              showCloseButton: true,
              // showCancelButton: true,
              // focusConfirm: false,
              // confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
              // confirmButtonAriaLabel: "Thumbs up, great!",
              // cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
              // cancelButtonAriaLabel: "Thumbs down",
              // footer: '<a href="">Why do I have this issue?</a>',
            });
          }

          // navigate("/");
          setUsername("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data.message == "already exists") {
            swal("This Mail/UserName is already Registered");
          }
        });
    }

    setValidated(true);
  };
  const [err, setErr] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [emailcheck, setEmailcheck] = useState("");
  const handleEmail = (e) => {
    setEmailcheck(e.target.value);
    var expression =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regex = new RegExp(expression);

    var res = "";
    if (emailcheck.match(regex)) {
      setErr("This looks like Valid Email");
      res = "Valid Email Id";
      console.log(res);
      setEmail(emailcheck);
    } else {
      // res = "Please Enter correct Email ";
      setErr("Please Enter Valid Email");
    }
  };
  const [usernameset, setUsernameset] = useState("");
  const [errone, setErrone] = useState("");
  const handleUserName = (e) => {
    setUsernameset(e.target.value);
    var expression = /^[A-Za-z]\w{7,14}$/;

    var regex = new RegExp(expression);

    var res = "";
    if (usernameset.match(regex) && usernameset.length >= 6) {
      setErrone("This looks like Valid Username");
      res = "Valid userId";

      setUsername(usernameset);
    } else {
      // res = "Please Enter correct Email ";
      setErrone("Please Enter Alphanumerical Username");
    }
  };

  const id = localStorage.getItem("userId");

  const handleLoginSubmit = () => {
    const Fireuid = localStorage.getItem("Fireuid");
    const FirephotoURL = localStorage.getItem("FirephotoURL");
    const Fireemail = localStorage.getItem("Fireemail");
    const Firename = localStorage.getItem("Firename");
    axios
      .post(`http://3.7.173.138:9000/user/login`, {
        username: Firename,
        email: Fireemail,
        password: Fireuid,
      })
      .then((response) => {
        if (response.data.status === true) {
          localStorage.removeItem("Fireuid");
          localStorage.removeItem("FirephotoURL");
          localStorage.removeItem("Fireemail");
          localStorage.removeItem("Firename");
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
        }
        // else if (error.response.data.msg === "Incorrect Password") {
        //   swal("you Entered Incorrect password ", "try again");
        // }
      });
  };

  const handlegooglelogin = async () => {
    await signInWithGoogle();

    const Fireuid = localStorage.getItem("Fireuid");
    const FirephotoURL = localStorage.getItem("FirephotoURL");
    const Fireemail = localStorage.getItem("Fireemail");
    const Firename = localStorage.getItem("Firename");

    if (Fireemail !== "" && Firename !== "" && Fireuid !== "") {
      axios
        .post(`http://3.7.173.138:9000/user/signup`, {
          username: Firename,
          email: Fireemail,
          password: Fireuid,
        })
        .then((response) => {
          console.log(response.data.message);
          if (response.data.message === "success") {
            handleLoginSubmit();
          } else swal(" Try again! something went wrong");
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data.message == "already exists") {
            swal("Already Registered", " Reset your password Password");
          }
        });
    }
  };

  useEffect(() => {}, [emailcheck, usernameset]);

  return (
    <Container className="mt-4">
      <Row>
        <Col lg="8" md="8" sm="6" className="mb-3">
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundPosition: "left",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "85vh",
              width: "100%",
            }}
          >
            <div className="d-flex justify-content-left">
              <img src={logonew} style={{ height: "95px", width: "175px" }} />
            </div>
            {/* <h3
              className="d-flex justify-content-center"
              style={{ color: "white", textalign: "center" }}
            >
              <b>Brahmaand.Space</b>
            </h3> */}
          </div>
        </Col>
        <Col lg="4" md="4" sm="6">
          <Form>
            <Label
              style={{
                height: "25px",
                width: "200px",
                // marginBottom: "2.5rem",
              }}
            >
              <h4 className="mb-1 py-2">Sign Up</h4>
            </Label>
            <hr className="signuphr" />
            <h6>
              Create an account to rate, comment, submit content and win lots of
              Prizes.
            </h6>
            <Row className="mt-3 mb-1">
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={usernameset}
                  onChange={handleUserName}
                  // onChange={(e) => setUsername(e.target.value)}
                  aria-describedby="inputGroupPrepend"
                  required
                />
                {errone == "This looks like Valid Username" ? (
                  <span
                    className="mx-2 mt-2"
                    style={{ color: "green", fontSize: "13px" }}
                  >
                    {errone}
                  </span>
                ) : (
                  <span
                    className="mx-2 mt-2"
                    style={{ color: "red", fontSize: "13px" }}
                  >
                    {errone}
                  </span>
                )}
              </Form.Group>
            </Row>
            <Row className=" mb-3 emailmargin">
              <Label>Email</Label>
              <input
                type="email"
                className="form-control mx-3"
                placeholder="email"
                value={emailcheck}
                onChange={handleEmail}
                // onChange={(e) => setEmail(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />
              {err == "This looks like Valid Email" ? (
                <span
                  className="mx-2 mt-1"
                  style={{ color: "green", fontSize: "13px" }}
                >
                  {err}
                </span>
              ) : (
                <span
                  className="mx-2 mt-1"
                  style={{ color: "red", fontSize: "13px" }}
                >
                  {err}
                </span>
              )}
            </Row>
            {/* changes here down */}

            <Row className="mb-3">
              <Form.Group as={Col} md="" controlId="validationCustomUsername">
                <Form.Label>
                  Password
                  {/* <span style={{ fontSize: "10px" }}>
                    (must Containe five charactor)
                  </span> */}
                </Form.Label>
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
                    Please choose a Password
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            {/* <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group> */}
            <div style={{ width: "100%" }}>
              <button
                // disabled={!performValidation()}
                style={{ padding: "13px 136px", borderRadius: "11px" }}
                // type="submit"
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

            {/* <Button type="submit">Submit form</Button> */}
          </Form>
          <div className style={{ marginTop: "18px" }}>
            <Row className="signupwithgoogle">
              <button
                onClick={handlegooglelogin}
                className="d-flex justify-content-center signupwithgoogle"
              >
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
    </Container>
  );
}
export default NewSignup;

// render(<FormExample />);
