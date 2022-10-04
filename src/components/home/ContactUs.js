import React from "react";
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

function ContactUs() {
  return (
    <>
      <Row>
         <Col className="mt-3 " lg="5">
           <Row className="mx-2 my-1">
            <img src={woman} alt="image" />
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
                      <Label for="Name">Name</Label>
                      <Input
                        id="Name"
                        name="Name"
                        placeholder="Enter Name here"
                        type="text"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={4}>
                    <FormGroup>
                      <Label for="Email">Email-ID</Label>
                      <Input
                        id="Emailid"
                        name="EmailId"
                        placeholder="Enter Your Mail here"
                        type="Email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="Subject">Mobile No.</Label>
                      <Input
                        id="Subject"
                        name="Subject"
                        placeholder="Enter Your Mobile No."
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Label style={{ font: "GT Walsheim Pro" }}>
                    Type Your Message Here
                  </Label>
                  <h5>
                    <textarea
                      type="text"
                      style={{ background: "white" }}
                      className="form-control"
                      placeholder="Enter your message here"
                    />
                  </h5>
                </Row>
                <div className=" d-flex justify-content-center ">
                  <Button className="mt-3" style={{ justifyContent: "center" }}>
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
