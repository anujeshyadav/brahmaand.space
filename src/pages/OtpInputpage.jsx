import { Card, Container, Button, Form } from "react-bootstrap";
import "../styles/Login.css";
import axios from "axios";
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { Col, Row } from "reactstrap";

function OtpInputpage() {
  const [otp, setOtp] = useState("");
  const [sendotp, setSendotp] = useState("");
  const [sendotpcount, setSendotpcount] = useState(0);

  //   const navigate = useNavigate();
  const handleresetotp = () => {
    console.log("object");
    setSendotpcount((c) => c + 1);
    setSendotp(`Otp Send Successfully`);
  };

  const handleChange = (otp) => setOtp(otp);

  useEffect(() => {}, [sendotp]);

  console.log(otp);
  const handleotpverification = async (e) => {
    e.preventDefault();
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
          {"  "}
          {sendotpcount == 0 ? null : sendotpcount}
        </Row>
        <Card.Body className="login-card-body">
          <Form
            className="mt-3 mb-2"
            onSubmit={(e) => handleotpverification(e)}
          >
            <p className="mb-3">Enter your Email OTP</p>

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
            <Row className="mt-2">
              <Col className="d-flex justify-content-center">
                <h6 onClick={handleresetotp}>
                  <a style={{ color: "blue" }}>Resend OTP</a>
                </h6>
              </Col>
              {/* <Col className="d-flex justify-content-center">timer</Col> */}
            </Row>
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

export default OtpInputpage;
