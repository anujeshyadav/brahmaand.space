import { Card, Container, Button, Form } from "react-bootstrap";
import "../styles/Login.css";
import axios from "axios";
import swal from "sweetalert";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./spinner.css";

const domain = process.env.REACT_APP_API_DOMAIN_NAME;

const SendRequestResetPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailcheck, setEmailcheck] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [email, setEmail] = useState("");

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
  useEffect(() => {}, [emailcheck]);

  const navigate = useNavigate();

  const sendRequestResetPasswordHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`https://15.207.117.200:9000/user/sendotp`, {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        if (res.data.msg === "otp send successfully") {
          localStorage.setItem("forgetpassmail", email);
          swal("OTP Sent Successfully");
          navigate("/forgetpassword");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response);
        // console.log(err.response.data.msg === "user does't exist");
        if (err.response.data.msg === "user does't exist") {
          swal("User doesn't Exist");
        }
      });
    // navigate("/forgetpassword");
    // await send_request_reset_password(email, setMessage, navigate);
    // swal("Password sent to your mail, please check your mail ");
  };

  return (
    <Container className="login-container mt-4 mx-15 resetpasswordotp">
      <Card className="login-card">
        <Card.Header className="login-card-header">
          <h2 className="login-card-header-h2">Forget Password</h2>
        </Card.Header>

        <Card.Body className="login-card-body">
          <Form
            className="login-form"
            onSubmit={(e) => sendRequestResetPasswordHandler(e)}
          >
            <p className="mb-2">
              Enter your mail address and we will send you OTP, to Reset your
              Password.
            </p>
            {/* <Form.Group
              className="mb-3 login-form-group"
              controlId="formBasicLoginEmail"
            >
              <Form.Control
                type="email"
                className="login-form-control"
                placeholder="Enter here your details"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group> */}
            <Row className=" mb-3 emailmargin">
              <Label className="mx-1" style={{ color: "red" }}>
                Enter Email :
              </Label>
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
                  className=" mt-2 mx-1 d-flex justify-content-left"
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

            <div className="login-button-div">
              {!isLoading ? (
                <>
                  <Button
                    variant="primary"
                    // disabled={!performValidation()}
                    className="login-button"
                    type="submit"
                  >
                    Send
                  </Button>
                </>
              ) : (
                <>
                  <div className="spinner-container d-flex justify-content-center">
                    <div className="loading-spinner"></div>
                  </div>
                </>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

const send_request_reset_password = async (email, setMessage, navigate) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
  });

  const info_url = `${domain}/Login/send-request-reset-password`;
  axios
    .post(info_url, body, config)
    .then(async (res) => {
      const result = await res.data;
      navigate("/", { replace: true });
    })
    .catch((error) => {
      setMessage("Error User with that email do not exists");
    });
};

export default SendRequestResetPasswordComponent;
