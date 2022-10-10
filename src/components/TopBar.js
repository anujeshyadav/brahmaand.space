import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Modal, ModalBody, Label, FormGroup, Input } from "reactstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Glass from "../../src/images/Glass.png";
import axios from "axios";

import profile from "../images/1.png";
import topBar from "../css/topBar.css";
import ProfileRouter from "./ProfileRouter";
// const [modal, setModal] = useState(false);

function TopBar() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // const [username, setUsername] = useState("");
  // const [dname, setDname] = useState("");
  // const [aboutus, setAboutus] = useState("");
  // const [imgupdate, setImgupdate] = useState("");

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email, password);
  //   axios
  //     .post(`http://43.205.82.226:9000/user/login`, {
  //       email: email,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log("dara", response.data);
  //       console.log(response.data.user);
  //       console.log("you logged in");
  //       console.log(response.data.msg);
  //       console.log(response.data.status);
  //       setEmail("");
  //       setPassword("");

  //       if (response.data.status === true) {
  //         alert("you loged in succesfully");
  //       } else if (response.data.status === false) {
  //         console.log(response.data.status);
  //         alert("failed to login");
  //       }

  //       if (
  //         response.data.user._id !== null &&
  //         response.data.user._id !== "" &&
  //         response.data.user._id !== undefined
  //       ) {
  //         localStorage.setItem("userId", response.data.user._id);
  //       }

  //       if (localStorage.getItem("userId")) {
  //         navigate("/topbar");
  //       } else navigate('/login"');
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //       if (error.response.data.msg === "User Doesnot Exist") {
  //         alert("User Does Not exists");
  //       } else if (error.response.data.msg === "Incorrect Password") {
  //         alert("you Entered Incorrect password");
  //       }
  //     });
  // };

  return (
    <section className="mt-200">
      <Container className="mt-100">
        <div
          className="userDiv "
          style={{
            position: "relative",
            backgroundImage: `url(${Glass})`,
            backgroundSize: "cover",
            opacity: 1,
          }}
        >
          <div className=" ">
            <div className="st-1 text-center  ">
              <div className="imagewite ">
                <img src={profile} className="imageone" />
              </div>
            </div>
            <Row className=" m-2 bg-white ">
              <Col lg="4">
                <div className="list-st">
                  <pre>
                    <ul>
                      <li style={{ color: "black" }}>
                        Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>CromSoldier</b>
                      </li>
                      <li style={{ color: "black" }}>
                        Display name: <b>CromSoldier</b>
                      </li>
                      <li style={{ color: "black" }}>
                        User Since: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>jun 26,2022</b>
                      </li>
                      <li style={{ color: "black" }}>
                        Karma: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>3700</b>
                      </li>
                    </ul>
                  </pre>
                </div>
              </Col>

              <Col lg="8">
                <b>About Us:</b>
                <p>
                  Professionnal embedded software engineer in real life,
                  moonlighting with Android dev. From the land of wine and
                  cheese
                </p>
              </Col>
            </Row>
          </div>
          <button className="btn rbutton mobile" type="submit" onClick={toggle}>
            <h4 className="rText">Edit your Profile</h4>
          </button>
          <Container>
            <Modal className="mdlg" isOpen={modal}>
              <div className="p-3 w-100">
                {/* <h6 toggle={toggle}> */}
                <h2 style={{ font: "GT Walsheim Pro", fontSize: "25px" }}>
                  Edit profile
                </h2>
                <hr></hr>

                <ModalBody>
                  <div className="">
                    <Row>
                      <Label>
                        <b>User Name</b>
                      </Label>
                      <h5>
                        <input
                          type="text"
                          style={{ background: "#F1F1F1" }}
                          className="form-control"
                          placeholder="Enter Your User Name here "
                        />
                      </h5>
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <Col>
                        <Label style={{ font: "GT Walsheim Pro" }}>
                          <b>Display Name </b>
                        </Label>
                        <input
                          type="text"
                          style={{ background: "#F1F1F1" }}
                          className="form-control"
                          placeholder="Enter Your Display Name "
                        />
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <Row>
                      <Label style={{ font: "GT Walsheim Pro" }}>
                        <b>Change about Us</b>
                      </Label>
                      <h5>
                        <textarea
                          type="text"
                          style={{ background: "#F1F1F1" }}
                          className="form-control"
                          placeholder="write something about you"
                        />
                      </h5>
                      {/* <h6>
                          Add the topics that is resource covers.Separate
                          multiple topic with commas.
                        </h6> */}
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <Label style={{ font: "GT Walsheim Pro" }}>
                        <b>Upload Your Image</b>
                      </Label>
                      <h5>
                        <input
                          type="file"
                          style={{ background: "#F1F1F1" }}
                          className="form-control imageuserupload"
                          placeholder=" "
                        />
                      </h5>
                    </Row>
                  </div>
                  <div></div>
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
        </div>
      </Container>
      <ProfileRouter />
    </section>
  );
}

export default TopBar;
