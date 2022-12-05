import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";

function Points() {
  const [getyourpoint, setGetyourpoint] = useState({});
  useEffect(() => {
    earnpoints();
  }, []);

  const earnpoints = () => {
    const userId = localStorage.getItem("userId");

    axios
      .get(`http://3.7.173.138:9000/user/my_content_meteros/${userId}`)
      .then((res) => {
        setGetyourpoint(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  return (
    <>
      <h3 className="d-flex justify-content-center mt-3">
        Your Earning's here
      </h3>
      <Row className="mt-5">
        <Col lg="2">
          <h5 className="d-flex justify-content-left">Earned Points : </h5>
        </Col>
        <Col lg="4">
          <h5>{getyourpoint?.meteors} Points</h5>
        </Col>
        <Col lg="6">
          <Row>
            <Col>
              <h4>Total dollar value</h4>
            </Col>
            <Col className="d-flex justify-content-center">$10</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Points;
