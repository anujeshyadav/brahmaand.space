import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../css/LeaderBoard.css";
import avatar1 from "../../images/avatar1.png";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import five from "../../images/five.png";
import six from "../../images/six.png";
import Glass from "../../images/Glass.png";
import winnerone from "../../images/winnerone.png";
import wintwo from "../../images/wintwo.png";
import winthree from "../../images/winthree.png";
import winfour from "../../images/winfour.png";
import winfive from "../../images/winfive.png";
import winsix from "../../images/winsix.png";

import { FaBook, FaThumbsUp, FaInfinity, FaChartBar } from "react-icons/fa";

function LeaderBoard() {
  return (
    <>
      <div className="leaderb mt-4 text-center">
        <Container ClassName="d-flex justify-content-center ">
          <Container
            fluid
            ClassName="d-flex justify-content-center maincon "
            style={{
              position: "relative",
              backgroundImage: `url(${Glass})`,
              backgroundSize: "cover",

              opacity: 0.8,
            }}
          >
            <Row>
              <h1 className="leadertext"> Leaderboards</h1>
            </Row>
            <Row>
              <h3 className="Pointtext"> Points Counter</h3>
            </Row>
            <br />
            <Row
              className="p-2"
              style={{ shadow: "10px", backgroundColor: "white" }}
            >
              <Col lg="3" md="" sm="">
                <Row>
                  <Col
                    lg="4"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{
                        backgroundColor: "#FC9357",
                        padding: "25px",
                        borderRadius: "50%",
                      }}
                    >
                      <FaBook size={34} color="white" />
                    </div>
                  </Col>
                  <Col lg="8">
                    <h4>Submit a content </h4>
                    <h3 style={{ color: "#FC9357" }}> 10 meteors</h3>
                  </Col>
                </Row>
              </Col>

              <Col lg="3" md="" sm="">
                <Row>
                  <Col
                    lg="4"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{
                        backgroundColor: "#5F56C6",
                        padding: "25px",
                        borderRadius: "50%",
                      }}
                    >
                      <FaThumbsUp size={34} color="white" />
                    </div>
                  </Col>
                  <Col lg="8">
                    <h4> Rating </h4>
                    <h3 style={{ color: "#5F56C6" }}> 2 meteors</h3>
                  </Col>
                </Row>
              </Col>

              <Col lg="3" md="" sm="">
                <Row>
                  <Col
                    lg="4"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{
                        backgroundColor: "#F35F5F",
                        padding: "25px",
                        borderRadius: "50%",
                      }}
                    >
                      <FaInfinity size={34} color="white" />
                    </div>
                  </Col>
                  <Col lg="8">
                    <h4> Review </h4>
                    <h3 style={{ color: "#F35F5F" }}>5 meteors</h3>
                  </Col>
                </Row>
              </Col>

              <Col lg="3" md="" sm="">
                <Row>
                  <Col
                    lg="4"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{
                        backgroundColor: "#1BCBF2",
                        padding: "25px",
                        borderRadius: "50%",
                      }}
                    >
                      <FaChartBar size={34} color="white" />
                    </div>
                  </Col>
                  <Col lg="8">
                    <h4>Reaching a level </h4>
                    <h3 style={{ color: "#1BCBF2" }}>50 meteors</h3>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mt-5 mb-4 " style={{ textAlign: "left" }}>
              <h2 ClassName="mb-3 karmacur">Karma - Current Month</h2>
            </Row>
          </Container>

          <Row className="  d-flex justify-content-center winnerone" lg="4">
            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={one} alt="img" height={70} width={70} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    1102
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="justify-content-center imagecenter">
                  <div className="images6 d-flex justify-content-center">
                    <img src={avatar1} alt="" className="avatar" />
                  </div>
                  <span>
                    <img
                      src={winnerone}
                      alt="ist winner"
                      className="first"
                      height={90}
                      width={90}
                    />
                  </span>
                </div>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={two} alt="img" height={70} width={70} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    1102
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={wintwo}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={three} alt="img" height={70} width={70} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    1102
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={winthree}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={four} alt="img" height={80} width={80} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    150
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={winfour}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={five} alt="img" height={80} width={80} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    101
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={winfive}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={six} alt="img" height={80} width={80} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    100
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center sixwinner">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={winsix}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>
          </Row>

          <Container className="mx-5 d-flex">
            <Row className="mt-5" style={{ textAlign: "left" }}>
              <h2 ClassName="mb-3  karmacur">Karma - All Time</h2>
            </Row>
          </Container>

          <Row className="  d-flex justify-content-center winnerone" lg="3">
            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={one} alt="img" height={70} width={70} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    1102
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="justify-content-center imagecenter">
                  <div className="images6 d-flex justify-content-center">
                    <img src={avatar1} alt="" className="avatar" />
                  </div>
                  <span>
                    <img
                      src={winnerone}
                      alt="ist winner"
                      className="first"
                      height={90}
                      width={90}
                    />
                  </span>
                </div>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={two} alt="img" height={70} width={70} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    1102
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={wintwo}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={three} alt="img" height={70} width={70} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    1102
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={winthree}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={four} alt="img" height={80} width={80} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    150
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={winfour}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={five} alt="img" height={80} width={80} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    101
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={winfive}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>

            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={six} alt="img" height={80} width={80} />
                </div>

                <div className="maindiv1">
                  <h5 className="points d-flex" style={{ color: "white" }}>
                    100
                  </h5>
                </div>
              </Row>

              <Row className=" d-flex justify-content-center">
                <div className="images6 d-flex justify-content-center sixwinner">
                  <img src={avatar1} alt="" className="avatar" />
                </div>
                <span>
                  <img
                    src={winsix}
                    alt="ist winner"
                    className="first"
                    height={90}
                    width={90}
                  />
                </span>
              </Row>

              <Row>
                <h3>CromSoldier</h3>
                <h5>3752</h5>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LeaderBoard;
