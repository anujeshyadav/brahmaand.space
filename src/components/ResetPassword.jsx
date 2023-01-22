import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Modal, ModalBody, Label, FormGroup, Input, Alert } from "reactstrap";
import axios from "axios";
import "moment-timezone";
import swal from "sweetalert";

function ResetPassword() {
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setconfirmpass] = useState("");

  useEffect(() => {}, [newpass, confirmpass, oldpass]);

  const [passwordset, setPasswordset] = useState("");
  const handlepassword = (e) => {
    setPasswordset(e.target.value);
    var expression =
      /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8,100}$/;

    var regex = new RegExp(expression);
    var res = "";
    if (e.target.value.match(regex) && passwordset.length >= 8) {
      console.log("object");
    }
  };

  const handleLoginSubmit = () => {
    const pw = document.getElementById("password").value;
    var pwold = document.getElementById("setpass").value;
    var pwnew = document.getElementById("setconpass").value;

    if (oldpass == "" && newpass == "" && confirmpass == "") {
      document.getElementById("message").innerHTML =
        "**Fill the password please!";
      document.getElementById("messages").innerHTML =
        "**Fill the password please!";
      document.getElementById("passdata").innerHTML =
        "**Fill the password please!";
      return false;
    }
    if (newpass == oldpass || oldpass == confirmpass) {
      swal("New Password Must be different from Existing");
    }
    if (oldpass !== "") {
      document.getElementById("passdata").innerHTML = " ";
    }
    if (oldpass == "") {
      document.getElementById("passdata").innerHTML =
        "**Fill the password please!";
    }

    //minimum password length validation
    if (newpass.length < 8 && confirmpass.length < 8) {
      document.getElementById("message").innerHTML =
        "**Password length must be atleast 8 characters";
      document.getElementById("messages").innerHTML =
        "**Password length must be atleast 8 characters";
      return false;
    }

    //maximum length of password validation
    if (newpass.length >= 15 && confirmpass.length >= 15) {
      document.getElementById("message").innerHTML =
        "**Password length must not exceed 15 characters";
      document.getElementById("messages").innerHTML =
        "**Password length must not exceed 15 characters";
      document.getElementById("messagea").innerHTML = " ";
      document.getElementById("messagesa").innerHTML = " ";
      return false;
    }
    if (newpass !== confirmpass) {
      document.getElementById("message").innerHTML =
        "**Password Does not Match**";
      document.getElementById("messages").innerHTML =
        "**Password Does not Match**";
    }
    if (newpass == confirmpass) {
      var expression =
        /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8,100}$/;

      var regex = new RegExp(expression);
      if (
        newpass.match(regex) &&
        newpass.length >= 8 &&
        newpass.length < 15 &&
        confirmpass.length < 15
      ) {
        document.getElementById("message").innerHTML = "";
        document.getElementById("messages").innerHTML = "";
      }

      // document.getElementById("messagea").innerHTML = "**Strong Password** ";
      // document.getElementById("messagesa").innerHTML = "**Strong Password** ";
      if (oldpass == "") {
        document.getElementById("passdata").innerHTML =
          "**Fill the password please!";
      } else if (
        oldpass !== "" &&
        newpass == confirmpass &&
        newpass !== oldpass
      ) {
        const userId = localStorage.getItem("userId");

        var expression =
          /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8,100}$/;

        var regex = new RegExp(expression);

        var res = "";
        if (
          newpass.match(regex) &&
          confirmpass.match(regex) &&
          newpass.length >= 8 &&
          newpass.length < 15 &&
          confirmpass.length < 15
        ) {
          document.getElementById("message").innerHTML = " ";
          document.getElementById("messages").innerHTML = " ";
          document.getElementById("messagea").innerHTML =
            "**Strong Password** ";
          document.getElementById("messagesa").innerHTML =
            "**Strong Password** ";

          axios
            .post(`http://3.7.173.138:9000/user/resetPassword/${userId}`, {
              oldpassword: oldpass,
              password: newpass,
              cnfrmPassword: confirmpass,
            })
            .then((res) => {
              // console.log(res.data);
              debugger;
              if (res.data.msg == "success") {
                swal("Password Changed Successfully");
                setOldpass("");
                setNewpass("");
                setconfirmpass("");
              }
            })
            .catch((err) => {
              // console.log(err.response.data);
              if (err.response.data.msg == "Old Password not matched") {
                swal("Enter Existing Password Correctly");
              }
            });
        }

        // axios
        //   .post(`http://3.7.173.138:9000/user/resetPassword/${userId}`, {
        //     oldpassword: oldpass,
        //     password: newpass,
        //     cnfrmPassword: confirmpass,
        //   })
        //   .then((res) => {
        //     // console.log(res.data);
        //     debugger;
        //     if (res.data.msg == "success") {
        //       swal("Password Changed Successfully");
        //       setOldpass("");
        //       setNewpass("");
        //       setconfirmpass("");
        //     }
        //   })
        //   .catch((err) => {
        //     // console.log(err.response.data);
        //     if (err.response.data.msg == "Old Password not matched") {
        //       swal("Enter Existing Password Correctly");
        //     }
        //   });
      }
    } else {
      // document.getElementById("messagea").innerHTML = "**Password Matched";
      // document.getElementById("messagesa").innerHTML = "**Password Matched";
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
              <div className="">
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
              </div>
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
                      // value={passwordset}
                      onChange={(e) => setNewpass(e.target.value)}
                      // onChange={handlepassword}
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

export default ResetPassword;
