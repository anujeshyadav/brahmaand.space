import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Modal, ModalBody, Label, FormGroup, Input, Alert } from "reactstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Glass from "../../src/images/Glass.png";
import axios from "axios";
import swal from "sweetalert";

import profile from "../images/1.png";
import boy from "../images/boy.png";
import topBar from "../css/topBar.css";
import ProfileRouter from "./ProfileRouter";

function TopBar() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [username, setUsername] = useState("");
  const [display_name, setDisplay_name] = useState("");
  const [abt_us, seAbt_us] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [profileImg, setroProfileImg] = useState();

  var fileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  // console.log("imageupload", selectedFile);

  useEffect(() => {
    axios
      .get(
        `http://43.205.82.226:9000/user/getoneUser/634117a7f105488a6b1088c6`,
        {
          username: username,
          display_name: display_name,
          abt_us: abt_us,
          profileImg: profileImg,
          createdAt: createdAt,
        }
      )
      .then((response) => {
        console.log("getdata", response);
        console.log("getdata", response.data);
        console.log("aboutGet", response.data.data.abt_us);

        setUsername(response.data.data.username);
        seAbt_us(response.data.data.abt_us);
        setDisplay_name(response.data.data.display_name);
        setCreatedAt(response.data.data.createdAt.slice(0, 10));
        setroProfileImg(response.data.data.profileImg);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  }, []);

  const handleLoginSubmit = async (e) => {
    console.log(username, display_name, abt_us, selectedFile);
    const formData = new FormData();
    formData.append("profileImg", selectedFile);
    formData.append("username", username);
    formData.append("display_name", display_name);
    formData.append("abt_us", abt_us);

    axios
      .post(
        `http://43.205.82.226:9000/user/updateProfile/634117a7f105488a6b1088c6`,
        formData,
        {
          header: { userId: await localStorage.getItem("userId") },
        }
      )
      .then((response) => {
        if (response.data.message === "success") {
          swal("Updated Successfully👍");
        } else {
          swal("Something went wrong try again");
        }
        setroProfileImg(response.data.data.profileImg[0]);
      })

      .catch((error) => {
        console.log(error);
      });
    setModal(false);
  };

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
                <img
                  src={profileImg}
                  className="imageone"
                  style={{
                    height: "263px",
                    width: "263px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <Row className=" m-2 bg-white ">
              <Col lg="4">
                <div className="list-st">
                  <pre>
                    <ul>
                      <li style={{ color: "black" }}>
                        Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>{username}</b>
                      </li>
                      <li style={{ color: "black" }}>
                        Display name: <b>{display_name}</b>
                      </li>
                      <li style={{ color: "black" }}>
                        User Since: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>{createdAt}</b>
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
                <p>{abt_us}</p>
              </Col>
            </Row>
          </div>
          <button className="btn rbutton mobile" type="submit" onClick={toggle}>
            <h4 className="rText">Edit your Profile</h4>
          </button>
          <Container>
            <Modal
              className="mdlg"
              isOpen={modal}
              // onSubmit={handleLoginSubmit}
            >
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
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
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
                          value={display_name}
                          onChange={(e) => setDisplay_name(e.target.value)}
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
                          value={abt_us}
                          onChange={(e) => seAbt_us(e.target.value)}
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
                          onChange={fileUpload}
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

                        <Button
                          type="submit"
                          color="success"
                          onClick={handleLoginSubmit}
                          className="m-1"
                        >
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
