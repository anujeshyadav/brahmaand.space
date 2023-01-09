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
    if (
      username.length > 4 &&
      password.length > 4 &&
      email !== "" &&
      password !== "" &&
      password !== null &&
      password !== undefined
    ) {
      console.log("first");
      axios
        .post(`http://3.7.173.138:9000/user/signup`, {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);

          // if (localStorage.getItem("userId")) {
          // navigate("/topbar");
          // } else navigate("/login");
          if (response.data.msg === "otp send successfully") {
            localStorage.setItem("email", response.data.email);
            setUsername("");
            setEmail("");
            setPassword("");
            Swal.fire({
              title: "<span>Account Created Successfully</span>",
              title: "<span>Please verify your email</span>",
              html: " <hr /><p>A verification email has been sent to your email inbox. Please Check OTP in  email to activate your account.If you can't find the email, please check your spam folder or request another one</p>",
              // showCloseButton: true,
            });
            navigate("/otpinputpage");
          }

          // navigate("/");
          // swal("Accout Created Successfully");
        })
        .catch((error) => {
          // console.log(error.response.data);
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
    if (e.target.value.match(regex)) {
      setErr("This looks like Valid Email");
      res = "Valid Email Id";
      setEmail(e.target.value);
    } else {
      setErr("Please Enter Valid Email");
    }
  };
  const [usernameset, setUsernameset] = useState("");
  const [errone, setErrone] = useState("");
  const handleUserName = (e) => {
    setUsernameset(e.target.value);

    var expression = /^[A-Za-z]\w{7,18}$/;

    var regex = new RegExp(expression);

    var res = "";
    if (e.target.value.match(regex) && usernameset.length >= 6) {
      setErrone("This looks like Valid Username");
      setUsername(e.target.value);
    } else {
      // res = "Please Enter correct Email ";
      setErrone("Please Enter Alphanumerical Username");
    }
  };
  const [errtwo, setErrtwo] = useState("");
  const [passwordset, setPasswordset] = useState("");
  const handlepassword = (e) => {
    setPasswordset(e.target.value);

    var expression =
      /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8,100}$/;

    var regex = new RegExp(expression);

    var res = "";
    if (e.target.value.match(regex) && passwordset.length >= 8) {
      setErrtwo("This is Strong password");
      setPassword(e.target.value);
    } else {
      // res = "Please Enter correct Email ";
      setErrtwo(
        "Password must contain alphanumeric/Upper case letter & special Charactor"
      );
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
          // localStorage.removeItem("Fireuid");
          // localStorage.removeItem("FirephotoURL");
          // localStorage.removeItem("Fireemail");
          // localStorage.removeItem("Firename");
        } else if (response.data.status === false) {
          // console.log(response.data.status);
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
        // console.log(error.response.data);
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
        .post(`http://3.7.173.138:9000/user/signinwithgoogle`, {
          username: Firename,
          email: Fireemail,
          password: Fireuid,
        })
        .then((response) => {
          // console.log(response.data.message);
          if (response.data.message === "success") {
            handleLoginSubmit();
          } else swal(" Try again! something went wrong");
        })
        .catch((error) => {
          // console.log(error.response.data);
          if (error.response.data.message == "already exists") {
            swal("Already Registered", " Reset your password Password");
          }
        });
    }
  };

  useEffect(() => {}, [
    emailcheck,
    usernameset,
    passwordset,
    err,
    errone,
    errtwo,
  ]);

  return (
    <Container className="mt-4">
      <Row>
        <Col className="imagesignupalign mb-3 ipad" lg="8" md="8" sm="6">
          <div

          // style={{
          //   backgroundImage: `url(${logo})`,
          //   backgroundPosition: "left",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   height: "100%",
          //   width: "100%",
          // }}
          >
            <img src={logo} className="signupimage" alt="img" />
            <div className="d-flex justify-content-center rtt-1">
              <img src={logonew} style={{ width: "150px" }} />
            </div>
          </div>
        </Col>
        <Col lg="4" md="4" sm="6" className="ipad">
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
              <Label>
                Password
                {/* <span style={{ fontSize: "10px" }}>
                    (must Containe five charactor)
                  </span> */}
              </Label>
              <input
                type="password"
                placeholder="Password"
                className="form-control mx-3"
                value={passwordset}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={handlepassword}
                aria-describedby="inputGroupPrepend"
                required
              />
              {errtwo == "This is Strong password" ? (
                <span
                  className="mx-2 mt-2"
                  style={{ color: "green", fontSize: "13px" }}
                >
                  {errtwo}
                </span>
              ) : (
                <span
                  className="mx-2 mt-2"
                  style={{ color: "red", fontSize: "13px" }}
                >
                  {errtwo}
                </span>
              )}
            </Row>

            <div style={{ width: "100%" }}>
              <button
                // disabled={!performValidation()}
                style={{ padding: "13px 133px", borderRadius: "11px" }}
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
