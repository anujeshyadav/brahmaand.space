import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Modal, ModalBody, Label, FormGroup, Input, Alert } from "reactstrap";
import axios from "axios";
import "moment-timezone";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function ResetForget() {
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const navigate = useNavigate();
  useEffect(() => {}, [newpass, confirmpass]);

  const handleLoginSubmit = () => {
    if (newpass == "" && confirmpass == "") {
      document.getElementById("message").innerHTML =
        "**Fill the password please!";
      document.getElementById("messages").innerHTML =
        "**Fill the password please!";

      return false;
    }

    if (newpass.length < 8 && confirmpass.length < 8) {
      document.getElementById("message").innerHTML =
        "**Password length must be atleast 8 characters";
      document.getElementById("messages").innerHTML =
        "**Password length must be atleast 8 characters";
      return false;
    }

    //maximum length of password validation
    if (newpass.length > 15 && confirmpass.length > 15) {
      document.getElementById("message").innerHTML =
        "**Password length must not exceed 15 characters";
      document.getElementById("messages").innerHTML =
        "**Password length must not exceed 15 characters";
      return false;
    } else if (newpass !== confirmpass) {
      document.getElementById("message").innerHTML =
        "**Password Does not Match";
      document.getElementById("messages").innerHTML =
        "**Password Does not Match";
    } else if (newpass == confirmpass) {
      const userId = localStorage.getItem("userId");
      if (
        newpass == confirmpass &&
        newpass.length > 8 &&
        confirmpass.length > 8 &&
        newpass.length < 15 &&
        confirmpass.length < 15
      ) {
        const forgetuserid = localStorage.getItem("forgetpassuserId");
        // console.log(forgetuserid);
        // console.log("password matched  so api is goint to hit");
        axios
          .post(`http://3.7.173.138:9000/user/forgetpassword/${forgetuserid}`, {
            password: newpass,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.msg == "success") {
              swal("Password Changed Successfully");
              navigate("/login");
              setNewpass("");
              setconfirmpass("");
            }
          })
          .catch((err) => {
            console.log(err.response.data);
            // if (err.response.data.msg == "Old Password not matched") {
            swal("Something went wrong");
            // }
          });
      }
    } else {
      document.getElementById("messagea").innerHTML = "**Password Matched";
      document.getElementById("messagesa").innerHTML = "**Password Matched";
    }
  };
  return (
    <>
      <Container className="container">
        <Row>
          <Col lg="3" md="2" sm="3"></Col>
          <Col lg="6" md="8" sm="6" className="mb-2">
            <div
              style={{ font: "GT Walsheim Pro", fontSize: "25px" }}
              className="d-flex justify-content-center mt-3"
            >
              <h2>Reset Your Password</h2>
            </div>
            <hr className="mx-3"></hr>
            <div className="p-3 w-100">
              {/* <div className="">
                <Row className="mx-3">
                  <Label className="mb-3">
                    <b> Existing Password</b>
                  </Label>
                  <h5>
                    <input
                      id="password"
                      type="text"
                      style={{ background: "#F1F1F1" }}
                      className="form-control"
                      placeholder="Enter Your User Name here "
                      value={oldpass}
                      onChange={(e) => setOldpass(e.target.value)}
                    />
                    <span
                      id="passdata"
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "200",
                      }}
                    ></span>
                  </h5>
                </Row>
              </div> */}
              <div>
                <Row className="mt-2 mx-3">
                  <Col>
                    <Label style={{ font: "GT Walsheim Pro" }}>
                      <b> Password </b>
                    </Label>
                    <input
                      id="setpass"
                      type="text"
                      style={{ background: "#F1F1F1" }}
                      className="form-control"
                      placeholder="Enter Your Display Name "
                      value={newpass}
                      onChange={(e) => setNewpass(e.target.value)}
                    />
                    <span
                      id="message"
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "200",
                      }}
                    ></span>
                    <span
                      id="messagea"
                      style={{
                        color: "green",
                        fontSize: "14px",
                        fontWeight: "200",
                      }}
                    ></span>
                  </Col>
                </Row>
              </div>

              <div>
                <Row className="mt-3 mb-3 mx-3">
                  <Label style={{ font: "GT Walsheim Pro" }}>
                    <b>Confirm Password</b>
                  </Label>
                  <h5>
                    <input
                      id="setconpass"
                      type="text"
                      style={{ background: "#F1F1F1" }}
                      className="form-control"
                      placeholder="write something about you"
                      value={confirmpass}
                      onChange={(e) => setconfirmpass(e.target.value)}
                    />
                    <span
                      id="messages"
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "200",
                      }}
                    ></span>
                    <span
                      id="messagesa"
                      style={{
                        color: "green",
                        fontSize: "14px",
                        fontWeight: "200",
                      }}
                    ></span>
                  </h5>
                </Row>
              </div>
              {/* <div>
                <Row>
                  <Label style={{ font: "GT Walsheim Pro" }}>
                    <b>Upload Your Image</b>
                  </Label>
                  <h5>
                    <input
                      type="file"
                      style={{ background: "#F1F1F1" }}
                      className="form-control imageuserupload"
                      //   onChange={fileUpload}
                    />
                  </h5>
                </Row>
              </div> */}
              <div></div>
              <div>
                <Row>
                  <Col className="d-flex justify-content-center mt-2">
                    {/* <Button
                      onClick={() => setModal(false)}
                      color="danger"
                      className="m-1"
                    >
                      Discard
                    </Button> */}

                    <Button
                      type="submit"
                      color="success"
                      onClick={handleLoginSubmit}
                      className="m-1"
                    >
                      Update
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg="3" md="2" sm="3"></Col>
        </Row>
      </Container>
    </>
  );
}

export default ResetForget;
