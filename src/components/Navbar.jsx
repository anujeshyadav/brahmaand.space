import { Button, Modal, ModalBody, Label, FormGroup, Input } from "reactstrap";
import { MultiSelect } from "react-multi-select-component";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import React from "react";

import swal from "sweetalert";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";

import "../styles/Navbar.css";
import Logo from "../assets/logos/logo.png";

import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useContextMenu } from "../context/MenuContext";
import { useAuth } from "../context/AuthContext";

import agreement_download from "../assets/files/Dispatch305-agreement.pdf";
import UserPage from "./UserPage";
const options = [
  { label: "English", value: "English" },
  { label: "urdu", value: "urdu " },
  { label: "Arabia", value: "Arabia" },
  { label: "hindi", value: "hindi" },
  { label: "Russian", value: "Russian" },
  { label: "telgu", value: "telgu" },
];

function CustomNavbar() {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState("1");
  const toggler = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const { current_link, setCurrentLinkHelper } = useContextMenu();
  const { user, login, logout } = useAuth();
  // const [show, setShow] = useState(true);
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const [inputList, setinputList] = useState([{ Languages: "" }]);
  const navigate = useNavigate();

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
          {/*user not login  */}
          {localStorage.getItem("userId") !== "" &&
          localStorage.getItem("userId") !== null &&
          localStorage.getItem("userId") !== undefined ? (
            <Nav.Link as={NavLink} className="navbar-link">
              <button
                className="btn rbutton mobile"
                type="submit"
                onClick={toggle}
              >
                <h4 className="rText">+Submit a Content</h4>
              </button>
              <Container>
                <Modal className="mdlg" isOpen={modal}>
                  <div className="p-3 w-100">
                    <h2 style={{ font: "GT Walsheim Pro", fontSize: "25px" }}>
                      Submit a Content
                    </h2>
                    <hr></hr>
                    <p>
                      Post the content and we will publish it on our website
                      which can be rated and reviewed by users and has potential
                      to become viral. It will also help the content reach a
                      global audience.
                      <p>
                        <b> Moreover it will help you win cool prizes daily.</b>
                      </p>
                    </p>
                    <Link onClick={() => setModal(false)} to="/leaderboard">
                      <h5 className="mt-2" style={{ color: "#5F56C6" }}>
                        Checkout Leaderboard Here.
                      </h5>
                    </Link>

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
                              placeholder="https://www.abdf.com/dfld/dsfld "
                            />
                          </h5>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col>
                            <Label style={{ font: "GT Walsheim Pro" }}>
                              <b className="mt-5">Category </b>
                            </Label>
                            <select
                              className="form-control"
                              style={{ background: "#F1F1F1" }}
                            >
                              <option>Select Type</option>
                              <option>Astrology</option>
                              <option>Product Comparison</option>
                              <option>Professional Skills</option>
                              <option>Education</option>
                              <option> Comedy</option>
                              <option>Cinema Gossipsp</option>
                              <option>Movie Trailers</option>
                              <option>TV Showsp</option>
                              <option>Unboxing Videos</option>
                              <option>Sports</option>
                              <option>Music</option>
                              <option>Fashions</option>
                              <option>pranks</option>
                              <option>timelapse</option>
                              <option>Interviews</option>
                              <option>Real Estate Videos</option>
                              <option>Facts</option>
                              <option> General Knowledge</option>
                              <option>Life Hacks</option>
                              <option>Web3</option>
                              <option>Dance</option>
                              <option>Events</option>
                              <option>Finance</option>
                              <option>Gaming</option>
                              <option>Gym & Workout</option>
                              <option>Motivational Videos</option>
                              <option> Music</option>
                              <option>Finance</option>
                              <option>Photography</option>
                              <option>Pets and Animals</option>
                              <option>Parenting</option>
                              <option> News and Politics </option>
                              <option>Religion</option>
                              <option> Spiritual</option>
                              <option>Startups</option>
                              <option>Memes </option>
                              <option>Podcasts</option>
                            </select>
                          </Col>

                          <Col>
                            <Label style={{ font: "GT Walsheim Pro" }}>
                              <b>Sub Category</b>
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
                        </Row>

                        <Row>
                          <Col>
                            <Label
                              style={{
                                padding: "0.375rem 0.75rem",
                                font: "GT Walsheim Pro",
                              }}
                            >
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
                            <Label
                              className="mt-2"
                              style={{ font: "GT Walsheim Pro" }}
                            >
                              <b>Format</b>
                            </Label>
                            <select
                              className="form-control"
                              style={{ background: "#F1F1F1" }}
                            >
                              <option>Video</option>
                              <option>Text</option>
                              <option>Video & Text</option>
                            </select>
                          </Col>
                        </Row>
                      </div>

                      <Row className="d-flex w-100%">
                        <Label
                          className="mt-3"
                          style={{ font: "GT Walsheim Pro" }}
                        >
                          <b>Language of Content </b>
                        </Label>

                        {/* <ReactMultiSelectCheckboxes options={options} /> */}

                        <pre>{JSON.stringify(selected)}</pre>
                        <MultiSelect
                          style={{
                            width: "100%",
                            height: "18px",
                            color: "black",
                          }}
                          className="multiselctdropdown"
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select language"
                        />

                        {/* <select
                                  className="form-control"
                                  style={{ background: "#F1F1F1" }}
                                  onChange={(e) => handleinputcahnge(e, i)}
                                >
                                  <option>Select Language</option>
                                  <option>Arabic</option>
                                  <option>Russian</option>
                                  <option>Hindi</option>
                                  <option>Urdu</option>
                                  <option>English</option>
                                </select> */}
                      </Row>

                      <div>
                        <Row>
                          <Label
                            className="mt-3"
                            style={{ font: "GT Walsheim Pro" }}
                          >
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
                          <h6>
                            Add the topics that is resource covers.Separate
                            multiple topic with commas.
                          </h6>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Label
                            className="mt-3"
                            style={{ font: "GT Walsheim Pro" }}
                          >
                            <b>Descriptions</b>
                          </Label>
                          <h5>
                            <textarea
                              type="text"
                              style={{ background: "#F1F1F1" }}
                              className="form-control"
                              placeholder=" Enter blog description here"
                            />
                          </h5>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <Label className="mt-3">
                                <h6>
                                  <b>Optional</b>
                                </h6>
                              </Label>

                              <Accordion open={open} toggle={toggler}>
                                <AccordionItem>
                                  <AccordionHeader targetId="1">
                                    Optional Fields
                                  </AccordionHeader>

                                  <AccordionBody accordionId="1">
                                    <div>
                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Title of your Resource</b>
                                        </Label>
                                        <input
                                          type="text"
                                          style={{ background: "#F1F1F1" }}
                                          className="form-control mb-3"
                                          placeholder="Title of the resource?"
                                        />
                                      </Row>

                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Creator Name</b>
                                        </Label>
                                        <input
                                          type="text"
                                          style={{ background: "#F1F1F1" }}
                                          className="form-control mb-3"
                                          placeholder="author of the resource?"
                                        />
                                      </Row>

                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Release year/last Updated</b>
                                        </Label>
                                        <input
                                          type="text"
                                          style={{ background: "#F1F1F1" }}
                                          className="form-control "
                                          placeholder="type year of Release or update content Ex. 2022"
                                        />
                                        <p className=" mb-3">
                                          What year was this resource released
                                          or last updated?
                                        </p>
                                      </Row>

                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Description</b>
                                        </Label>
                                        <h5>
                                          <textarea
                                            type="text"
                                            style={{ background: "#F1F1F1" }}
                                            className="form-control mb-3"
                                            placeholder="describe the resource in a few sentences, topics it covers?"
                                          />
                                        </h5>
                                        {/* <h6>
                                          Add the topics that is resource
                                          covers.Separate multiple topic with
                                          commas.
                                        </h6> */}
                                      </Row>

                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Comments</b>
                                        </Label>
                                        <h5>
                                          <textarea
                                            type="text"
                                            style={{ background: "#F1F1F1" }}
                                            className="form-control "
                                            placeholder="Add anything you want to let us know"
                                          />
                                        </h5>
                                      </Row>
                                      <h6>
                                        Thesefields are optional, but it will
                                        help others find the resource more
                                        easily.
                                      </h6>
                                    </div>
                                  </AccordionBody>
                                </AccordionItem>
                              </Accordion>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col></Col>
                          <Col>
                            <Button
                              onClick={() => setModal(false)}
                              color="danger"
                              className="m-1"
                            >
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
          ) : (
            <Nav.Link as={NavLink} className="navbar-link">
              <button
                className="btn rbutton mobile"
                onClick={() =>
                  swal(
                    "For Submit a content",
                    "Need To login for submit content"
                  )
                }
              >
                <h4 className="rText">+ Submit a Content</h4>
              </button>
            </Nav.Link>
          )}

          {/* signup and login condition */}
          {localStorage.getItem("userId") !== "" &&
          localStorage.getItem("userId") !== null &&
          localStorage.getItem("userId") !== undefined ? (
            <Nav.Link>
              <UserPage />
            </Nav.Link>
          ) : (
            <>
              <Nav.Link
                exact
                to="/signup"
                as={NavLink}
                className="navbar-link"
                style={{ marginTop: 25 }}
              >
                <span className="text bSignUp" aria-current="page">
                  Sign up
                </span>
              </Nav.Link>

              <Nav.Link
                exact
                to="/login"
                as={NavLink}
                className="navbar-link lText"
              >
                <button className="btn rLogin mobile" type="submit">
                  <span className="">LOGIN</span>
                </button>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      {/* <UserPage/> */}
    </Navbar>
  );
}

export default CustomNavbar;
