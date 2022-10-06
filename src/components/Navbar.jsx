import React from "react";
import { Button, Modal, ModalBody, Label, FormGroup, Input } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";

import "../styles/Navbar.css";
import Logo from "../assets/logos/logo.png";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useContextMenu } from "../context/MenuContext";
import { useAuth } from "../context/AuthContext";

import agreement_download from "../assets/files/Dispatch305-agreement.pdf";

function CustomNavbar() {
  const { current_link, setCurrentLinkHelper } = useContextMenu();
  const { user, login, logout } = useAuth();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [inputList, setinputList] = useState([{ Languages: "" }]);

  const handleaddclick = () => {
    setinputList([...inputList, { Languages: "" }]);
  };
  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };
  const handleinputcahnge = (e, index) => {
    const { Languages, value } = e.target;
    const list = [...inputList];
    list[index][Languages] = value;
    setinputList(list);
  };
  useEffect(() => {
    // console.log(current_link);
  }, [current_link]);

  return (
    <Navbar
      bg="light"
      variant="light"
      className="navbar"
      collapseOnSelect
      expand="lg"
    >
      {/* <Container className="navbar-div"> */}
      <Navbar.Brand exact to="/" as={NavLink} className="navbar-brand">
        <img
          src={Logo}
          width="100%"
          height="80"
          className="d-inline-block align-top navbar-brand-img"
          alt="React Bootstrap logo"
          onClick={() => setCurrentLinkHelper("Home")}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggle"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto navbar-nav">
          {/* <Nav.Link
              exact to="/"
              as={NavLink}
              className="navbar-link"
            >
              <span onClick={()=>setCurrentLinkHelper("Home")} className="secondary-color-span">Home</span>
            </Nav.Link> */}

          <Nav.Link exact to="/" as={NavLink} className="navbar-link">
            <button
              className="btn rbutton mobile"
              type="submit"
              onClick={toggle}
            >
              <span className="rText">+ Submit a resource</span>
            </button>
            <Container>
              <Modal className="mdlg" isOpen={modal}>
                <div className="p-3 w-100">
                  {/* <h6 toggle={toggle}> */}
                  <h2 style={{ font: "GT Walsheim Pro", fontSize: "25px" }}>
                    Submit a Resource
                  </h2>
                  <hr></hr>
                  <p>
                    Found a cool tutorial or course that will help your fellow
                    programmers? Send it to us and we will add it to the
                    database!
                  </p>
                  {/* </h6> */}
                  <ModalBody>
                    <div className="">
                      <Row>
                        <Label>
                          <b>Link:</b>
                        </Label>
                        <h5>
                          <input
                            type="text"
                            style={{ background: "#F1F1F1" }}
                            className="form-control"
                            placeholder="https://... "
                          />
                        </h5>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Col>
                          <Label style={{ font: "GT Walsheim Pro" }}>
                            <b>Type</b>
                          </Label>
                          <select
                            className="form-control"
                            style={{ background: "#F1F1F1" }}
                          >
                            <option>Select Type</option>
                            <option>Free</option>
                            <option>Paid</option>
                          </select>
                        </Col>
                        <Col>
                          <Label style={{ font: "GT Walsheim Pro" }}>
                            <b>Format</b>
                          </Label>
                          <select
                            className="form-control"
                            style={{ background: "#F1F1F1" }}
                          >
                            <option>Video</option>
                            <option>1</option>
                            <option>2</option>
                          </select>
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <Row>
                        <Col>
                          <Label style={{ font: "GT Walsheim Pro" }}>
                            <b>Level</b>
                          </Label>
                          <select
                            className="form-control"
                            style={{ background: "#F1F1F1" }}
                          >
                            <option>Beginner</option>
                            <option>1</option>
                            <option>2</option>
                          </select>
                        </Col>
                      </Row>
                    </div>
                    {inputList.map((x, i) => {
                      return (
                        <div>
                          <Row>
                            <Col>
                              <Label style={{ font: "GT Walsheim Pro" }}>
                                <b>Language</b>
                              </Label>
                              <select
                                className="form-control"
                                style={{ background: "#F1F1F1" }}
                                onChange={(e) => handleinputcahnge(e, i)}
                              >
                                <option>select Language</option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                            </Col>
                          </Row>
                          {inputList.length !== 1 && (
                            <Row>
                              <Col>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleremove(i)}
                                >
                                  -Remove another language
                                </button>
                              </Col>
                            </Row>
                          )}
                          {inputList.length - 1 === i && (
                            <Row>
                              <Col>
                                <button
                                  className="btn btn-success"
                                  onClick={handleaddclick}
                                >
                                  + Add another language
                                </button>
                              </Col>
                            </Row>
                          )}
                        </div>
                      );
                    })}
                    <div>
                      <Row>
                        <Label style={{ font: "GT Walsheim Pro" }}>
                          <b>Topic</b>
                        </Label>
                        <h5>
                          <textarea
                            type="text"
                            style={{ background: "#F1F1F1" }}
                            className="form-control"
                            placeholder="e.g.javaScript,react native"
                          />
                        </h5>
                        <p>
                          Add the topics that is resource covers.Separate
                          multiple topic with commas.
                        </p>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Label style={{ font: "GT Walsheim Pro" }}>
                          <b>Descriptions</b>
                        </Label>
                        <h5>
                          <input
                            type="text"
                            style={{ background: "#F1F1F1" }}
                            className="form-control"
                            placeholder=""
                          />
                        </h5>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <Label>
                              <h6>
                                <b>Optional</b>
                              </h6>
                            </Label>
                            <Input type="select">
                              <option>Select.....</option>
                              <option>Select.....</option>
                              <option>Select.....</option>
                              <option>Select.....</option>
                              <option>Select.....</option>
                              <option>Select.....</option>
                            </Input>
                          </FormGroup>
                          {/* <DropdownButton id="dropdown button" title="Optional">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton> */}
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Col></Col>
                        <Col>
                          <Button color="danger" className="m-1">
                            Discard
                          </Button>
                          <Button color="success" className="m-1">
                            SUBMIT
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </ModalBody>
                </div>
              </Modal>
            </Container>
          </Nav.Link>

          <Nav.Link
            exact
            to="/signup"
            as={NavLink}
            className="navbar-link"
            style={{ marginTop: 25 }}
          >
            <span className="text bSignUp" aria-current="page">
              SignUp
            </span>
          </Nav.Link>

          <Nav.Link href="/user-account" className="navbar-link lText">
            <button className="btn rLogin mobile" type="submit">
              <span className="">LOGIN</span>
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default CustomNavbar;
