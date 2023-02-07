import { Card, Container, Button, Form } from "react-bootstrap";
import "../styles/Login.css";
import axios from "axios";
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { Col, Row } from "reactstrap";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Forgetpass() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [sendotp, setSendotp] = useState("");
  const [sendotpcount, setSendotpcount] = useState(0);

  //   const navigate = useNavigate();

  const handleresetotp = () => {
    setSendotpcount((c) => c + 1);
    setSendotp(`Otp Send Successfully`);
  };

  const handleChange = (otp) => {
    setOtp(otp);
    // console.log(otp);
  };

  useEffect(() => {}, [sendotp]);

  const handleotpverification = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("forgetpassmail");
    if (email !== "" && otp !== "") {
      axios
        .post(`https://15.207.117.200:9000/user/verifyotp`, {
          email: email,
          otp: otp,
        })
        .then((res) => {
          //   console.log(res.data._id);

          if (res.data.msg == "Incorrect Otp") {
            swal("Wrong OTP Entered !");
          }
          if (res.data.msg === "verification successful") {
            swal("Your Email id Verified !");
            localStorage.setItem("forgetpassuserId", res.data._id);
            navigate("/resetforget");
            // localStorage.setItem("userId", res.data._id);
            setOtp(" ");
          }
        })
        .then((err) => {
          console.log(err.response.data);
        });
    } else {
      swal("Enter OTP First");
    }
  };
  return (
    <Container className="login-container mt-5 mx-15 otpinputconstainer">
      <Card className="login-card">
        <Card.Header className="login-card-header">
          <h2 className="login-card-header-h2">Verify OTP</h2>
        </Card.Header>
        <Row
          className="d-flex justify-content-center mt-1"
          style={{ color: "red" }}
        >
          {sendotp}

          {sendotpcount == 0 ? null : sendotpcount}
        </Row>
        <Card.Body className="login-card-body">
          <Form
            className="mt-3 mb-2"
            onSubmit={(e) => handleotpverification(e)}
          >
            <p className="mb-3">Enter Your Email-OTP</p>

            <div className="d-flex justify-content-center otpinput">
              <OtpInput
                containerStyle="true inputdata"
                inputStyle="true inputdataone"
                className="otpinputtype mb-2"
                value={otp}
                onChange={handleChange}
                // onChange={handleChange}
                numInputs={4}
                separator={<span className="dashitem"> - </span>}
              />
            </div>
            <Row className="d-flex justify-content-center mt-3">
              <span style={{ color: "red" }}>OTP Valid only For 5 Minute</span>
            </Row>
            {/* <Row className="mt-2">
              <Col className="d-flex justify-content-center">
                <h6 onClick={handleresetotp}>
                  <a style={{ color: "blue" }}>Resend OTP</a>
                </h6>
              </Col>
             </Row> */}
            <div className="login-button-div">
              <Button variant="primary" className="login-button" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Forgetpass;
