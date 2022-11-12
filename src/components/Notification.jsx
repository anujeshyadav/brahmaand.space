import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import "moment-timezone";
import Notifications from "../css/Notifications.css";

import axios from "axios";

function Notification() {
  const [notification, setNotification] = useState([]);
  const [personal, setPersonal] = useState({});

  useEffect(() => {
    notificationhandler();
    personalnotification();
  }, []);
  const personalnotification = () => {
    const userId = localStorage.getItem("userId");

    axios
      .get(
        `http://3.7.173.138:9000/admin/getone_notification/636df1996358e0e8419332df`
      )
      .then((res) => {
        setPersonal(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const notificationhandler = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/get_notification`)
      .then((res) => {
        setNotification(res.data.data);
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
            <Col lg="4" sm="12" md="6">
              <div className="container mt-3 notificationsdistance">
                {notification?.map((data) => (
                  <Card className="d-flex justify-content-center mb-3 mt-3">
                    <Card.Header
                      className="notificationheader"
                      style={{ backgroundColor: "#ffa73ec9" }}
                    >
                      Your Notification
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
                ))}
              </div>
            </Col>

            <Col lg="4" sm="12" md="6">
              <div className="container mt-3 notificationcard notificationsdistance">
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
              </div>
            </Col>
          </Row>

          <hr />
          <br />
        </div>
      </Container>
    </>
  );
}

export default Notification;
