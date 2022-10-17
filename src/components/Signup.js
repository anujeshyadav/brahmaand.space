import react, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import Logo1 from "../images/Logo1.png";
import { Label } from "reactstrap";
import google from "../images/g1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function performValidation() {
    return username.length > 5 && email.length > 13 && password.length > 5;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(username, email, password);
    axios
      .post(`http://43.205.82.226:9000/user/signup`, {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.data);
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
        swal("Account created Successfully");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  function isValidEmail(email) {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  }
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Please enter correct email to Signup");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <>
      <Container className="loginmain mt-4">
        <Row>
          <Col lg="8">
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
          <Col lg="4">
            <form>
              <Row>
                <Label
                  style={{
                    height: "25px",
                    width: "200px",
                    marginBottom: "2.5rem",
                  }}
                >
                  <h4>Sign Up</h4>
                </Label>
                <h6 style={{ font: "GT Walsheim Pro" }}>Username</h6>
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
              <Row>
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
                <div className="login-signup-res-pass-div">
                  <p className="login-new-account-p">
                    <Link
                      to="/send-reset-password-request"
                      className="login-new-account-link"
                    >
                      Forgot Password?
                    </Link>
                  </p>
                </div>
              </Row>
              <div>
                <button
                  disabled={!performValidation()}
                  style={{ padding: "10px 136px", borderRadius: "11px" }}
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
            <div className style={{ marginTop: "40px" }}>
              <Row>
                <Col lg="12" className="d-flex justify-content-center">
                  <img
                    style={{
                      margin: "3px",
                      height: "17px",
                    }}
                    src={google}
                  />
                  <Link>
                    <a to="https://accounts.google.com/">Sign in with Google</a>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Signup;
