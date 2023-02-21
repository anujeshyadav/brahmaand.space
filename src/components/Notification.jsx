import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import "moment-timezone";
import Notifications from "../css/Notifications.css";
import { ImCancelCircle } from "react-icons/im";

import axios from "axios";

function Notification() {
  const [notification, setNotification] = useState([]);
  const [personal, setPersonal] = useState({});

  useEffect(() => {
    notificationhandler();
    // personalnotification();
  }, []);
  // const personalnotification = () => {
  //   const userId = localStorage.getItem("userId");

  //   axios
  //     .get(
  //       `https://backend.brahmaand.space/admin/getone_notification/636df1996358e0e8419332df`
  //     )
  //     .then((res) => {
  //       setPersonal(res.data.data);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // };

  const deletenotification = (id) => {
    console.log(id);
    axios
      .post(`https://backend.brahmaand.space/admin/dlt_notification/${id}`)
      .then((res) => {
        console.log(res.response.data);
      })
      .catch((err) => console.log(err.response));
  };
  const notificationhandler = () => {
    axios
      .get(`https://backend.brahmaand.space/admin/get_notification`)
      .then((res) => {
        setNotification(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Container className="mb-3 mb-3">
        <h3 className="d-flex justify-content-center mt-5 mb-3">
          Notifications
        </h3>
        <div className="container notificationcard mt-3 mb-4">
          <Row>
            {/* <h2 className="d-flex justify-content-center ">
                Your Notifications here
              </h2> */}
            <div className="container mt-3 notificationsdistance">
              {notification?.map((data) => (
                <Col lg="8" sm="12" md="6" key={data?._id}>
                  <Card className="d-flex justify-content-center mb-3 mt-3">
                    <Card.Header
                      className="notificationheader"
                      style={{ backgroundColor: "#ffa73ec9" }}
                    >
                      <Row
                        key={data?._id}
                        className="d-flex justify-content-right"
                      >
                        <Col lg="11"> Your Notification</Col>
                        {/* <Col lg="1" className="d-flex justify-content-right">
                          <ImCancelCircle
                            onClick={() => deletenotification(data?._id)}
                            size={25}
                          />
                        </Col> */}
                      </Row>
                    </Card.Header>

                    <Card.Body>
                      <Card.Title>{data?.title}</Card.Title>
                      <Card.Text>{data?.desc}</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    <p className="mt-3 postedatnotification">
                      Posted at:
                      <Moment format="lll">{data?.createdAt}</Moment>
                    </p>
                  </Card>
                </Col>
              ))}
            </div>

            {/* <Col lg="6" sm="12" md="6"> */}
            {/* <h2 className="d-flex justify-content-center ">
                Your Personal Notifications here
              </h2> */}
            {/* <div className="container mt-3 notificationcard notificationsdistance">
                <Card className="d-flex justify-content-center mb-3 mt-3">
                  <Card.Header
                    className="notificationheader"
                    style={{ backgroundColor: "#3282f0c2" }}
                  >
                    Your Personel Notification
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{personal?.title}</Card.Title>
                    <Card.Text>{personal?.desc}</Card.Text>
                    <p className="mt-3 postedatnotification">
                      Posted at:
                      <Moment format="lll">{personal?.createdAt}</Moment>
                    </p>
                  </Card.Body>
                </Card>
              </div> */}
            {/* </Col> */}
          </Row>

          <hr />
          <br />
        </div>
      </Container>
    </>
  );
}

export default Notification;
