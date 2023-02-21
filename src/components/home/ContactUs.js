import React, { useState } from "react";
import axios from "axios";

import {
  //Alert,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { FaSearchLocation, FaBlogger } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../../css/Contact.css";
import woman from "../../images/woman.png";
import swal from "sweetalert";

function ContactUs() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [mesg, setMesg] = useState("");
  const [error, setError] = useState(null);

  const userid = localStorage.getItem("userId");

  const contactsubmit = (e) => {
    e.preventDefault();

    const userid = localStorage.getItem("userId");

    if (
      name == "" ||
      name.length < 4 ||
      mobile == "" ||
      mobile.length < 10 ||
      email == "" ||
      email.length < 12 ||
      mesg == "" ||
      mesg.length < 10
    ) {
      swal("Please Enter details Correctly");
    } else {
      axios
        .post(`https://backend.brahmaand.space/user/add_contactus`, {
          name: name,
          mobile: mobile,
          email: email,
          msg: mesg,
          userid: userid,
        })
        .then((response) => {
          if (response.data.message === "success");
          {
            swal("Your Details are Submitted Successfully");
          }
          setEmail("");
          setMesg("");
          setName("");
          setMobile("");
        })
        .catch((error) => {});
    }
  };

  return (
    <>
      <Row>
        <Col className="mt-3 " lg="5">
          <Row className="mx-2 my-1">
            <img
              src={woman}
              alt="image"
              height={440}
              style={{ borderRadius: "10px" }}
            />
          </Row>
        </Col>

        <Col lg="7">
          <Container>
            <Row className="mb-5 mt-5">
              <h2 className="lmessage ">
                <b> Leave a Message</b>
              </h2>
            </Row>
            <Row>
              <br /> <br />
              <Form>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="Name">
                        Name <span style={{ color: "red" }}>*</span>
                      </Label>
                      <Input
                        id="Name"
                        name="Name"
                        value={name}
                        placeholder="Enter Name here"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />
                      {error && <h6 style={{ color: "red" }}>{error}</h6>}
                    </FormGroup>
                  </Col>

                  <Col md={4}>
                    <FormGroup>
                      <Label for="Email">
                        Email-ID <span style={{ color: "red" }}>*</span>
                      </Label>
                      <Input
                        id="Emailid"
                        name="EmailId"
                        value={email}
                        placeholder="Enter Your Mail here"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {error && <h6 style={{ color: "red" }}>{error}</h6>}
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="Subject">
                        Mobile No. <span style={{ color: "red" }}>*</span>
                      </Label>
                      <Input
                        id="Subject"
                        name="Subject"
                        value={mobile}
                        placeholder="Enter Your Mobile No."
                        type="text"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Label style={{ font: "GT Walsheim Pro" }}>
                    Type Your Message Here{" "}
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <h5>
                    <textarea
                      type="text"
                      style={{ background: "white" }}
                      className="form-control"
                      value={mesg}
                      placeholder="Enter your message here"
                      onChange={(e) => setMesg(e.target.value)}
                    />
                    {error && <h6 style={{ color: "red" }}>{error}</h6>}
                  </h5>
                </Row>
                <div className=" d-flex justify-content-center ">
                  <Button
                    onClick={contactsubmit}
                    className="mt-3"
                    style={{ justifyContent: "center" }}
                  >
                    <b>Leave a message</b>
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        </Col>
      </Row>

      <Container>
        <Row className="mt-5">
          <Col className="searchtwo ">
            <div className="searchone">
              <FaSearchLocation
                className="lacation d-flex justify-content-center mb-2"
                size={55}
                color="#FC9358"
              />
              <h5>OUR LOCATION</h5>
              <p>PO Box 97845 Baker st. 567,</p>
              <p>Madhya Pradesh,india </p>
            </div>
          </Col>

          <Col className="searchtwo ">
            <div className="searchone">
              <FaBlogger
                className="lacation d-flex justify-content-center mb-2"
                size={55}
                color="#FC9358"
              />
              <h5>WRITE SOMETHING</h5>
              <p>WRITE something below,</p>
              <p>................ </p>
            </div>
          </Col>

          <Col className="searchtwo st">
            <div className="searchone">
              <BsFillTelephoneFill
                className="lacation d-flex justify-content-center"
                size={55}
                color="#FC9358"
              />

              <h5>CONTACT US</h5>
              <p>Mobile: (+91) 700 444 999</p>
              <p>(+91) 700 888 222</p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </>
  );
}

export default ContactUs;
