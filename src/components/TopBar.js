import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Modal, ModalBody, Label, FormGroup, Input, Alert } from "reactstrap";
import { Navbar, Nav } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import imageToBase64 from "image-to-base64/browser";
import { Link, NavLink } from "react-router-dom";
import Glass from "../../src/images/Glass.png";
import axios from "axios";
import swal from "sweetalert";
import avatar1 from "../images/avatar1.png";
import profile from "../images/1.png";
import boy from "../images/boy.png";
import topBar from "../css/topBar.css";
import ProfileRouter from "./ProfileRouter";

function TopBar() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [username, setUsernamenew] = useState("");
  const [display_name, setDisplay_name] = useState("");
  const [abt_us, seAbt_us] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  var fileUpload = (e) => {
    const files = e.target.files;
    const file = files[0];
    if (file !== "") {
      imageToBase64(file);
      imageToBase64();
    }
  };
  let base64code = "";
  const onLoad = (fileString) => {
    // console.log("fileString", fileString);
    if (fileString != "") {
      const image64 = fileString.split(",");
      // console.log(image64[1]);
      setSelectedFile(image64[1]);
      base64code = fileString;
    }
  };

  const imageToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  const id = localStorage.getItem("userId");

  const [userdata, setUserdata] = useState({});
  const getUserData = () => {
    axios
      .get(`http://3.7.173.138:9000/user/getoneUser/${id}`)
      .then((res) => {
        setUserdata(res.data.data);
        // setUsernamenew(res.data.data.username);
        // console.log(res.data.data);
        setDisplay_name(res.data.data.display_name);
        seAbt_us(res.data.data.abt_us);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserData();
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(username, display_name, abt_us, id);

    const formData = new FormData();
    if (username !== "") {
      formData.append("username", username);
    }
    formData.append("profileImg", selectedFile);

    formData.append("display_name", display_name);
    formData.append("abt_us", abt_us);
    axios
      .post(`http://3.7.173.138:9000/user/updateProfile/${id}`, formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Username Already Exist") {
          swal("UserName is Already Exist please Try with different Username");
        }
        if (response.data.message === "success") {
          // getUserData();
          swal("Updated Successfully");
        }
      })

      .catch((error) => {
        // console.log(error);
      });
    setModal(false);
  };

  return (
    <section className="mt-200">
      <section
        className="userDiv "
        style={{
          position: "relative",
          backgroundImage: `url(${Glass})`,
          backgroundSize: "cover",
          opacity: 1,
        }}
      >
        <Container className="mt-100">
          <div>
            <div className=" ">
              <div className="st-1 text-center  ">
                <div className="imagewite ">
                  <img
                    src={userdata?.profileImg}
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
                <Col lg="5">
                  <div className="list-st">
                    <pre>
                      <ul>
                        <li style={{ color: "black" }}>
                          {`Username            :   ${userdata?.username}`}
                        </li>
                        <li style={{ color: "black" }}>
                          {`Display name     :    ${userdata?.display_name}`}
                        </li>
                        <li style={{ color: "black" }}>
                          {`User Since           :    `}
                          {/* <Moment format="ll">{`    :       ${userdata?.createdAt}`}</Moment> */}
                          {` ${userdata?.createdAt?.slice(0, 10)}`}
                        </li>
                        <li style={{ color: "black" }}>
                          {`Meteors                :    ${userdata?.meteors}`}
                          {/* Karma: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>3700</b> */}
                        </li>
                      </ul>
                    </pre>
                  </div>
                </Col>

                <Col lg="7">
                  <b>About Us:</b>
                  <p>{userdata?.abt_us}</p>
                </Col>
              </Row>
            </div>
            <button
              className="btn rbutton mobile"
              type="submit"
              onClick={toggle}
            >
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
                            value={username}
                            onChange={(e) => setUsernamenew(e.target.value)}
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
      </section>
      <ProfileRouter />
    </section>
  );
}

export default TopBar;
