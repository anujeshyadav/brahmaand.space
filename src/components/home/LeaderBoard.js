import React, { useState, useEffect } from "react";
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
import itone from "../../images/it-1.png";
import ittwo from "../../images/it-2.png";
import itthree from "../../images/it-3.png";
import mars from "../../images/mars.png";
import jupiter from "../../images/jupiter.png";
import saterns from "../../images/saterns.png";
// import saterns from "../../images/saterns.png";
import uranus from "../../images/uranus.png";
import naptune from "../../images/naptune.png";
import earth from "../../images/earth.png";
import axios from "axios";

import { FaBook, FaThumbsUp, FaInfinity, FaChartBar } from "react-icons/fa";

function LeaderBoard() {
  const [planetposition, setPlanetposition] = useState([]);
  const [currentmonth, setCurrentmonth] = useState([]);
  const [alltime, setAlltime] = useState([]);

  const getcurrentmonthdata = () => {
    axios
      .get(`http://65.1.135.77:9000/user/karma_crrnt_month`)
      .then((res) => {
        console.log(res.data.data);
        setCurrentmonth(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getallmonthdata = () => {
    axios
      .get(`http://65.1.135.77:9000/user/all_time_karma`)
      .then((res) => {
        console.log(res.data.data);
        setAlltime(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getallplanetpostion = () => {
    axios
      .get(`http://65.1.135.77:9000/user/user_planet_position`)
      .then((res) => {
        setPlanetposition(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.data.data);
      });
  };
  useEffect(() => {
    getcurrentmonthdata();
    getallmonthdata();
    getallplanetpostion();
  }, []);

  return (
    <>
      <div className="leaderb  text-center">
        <div
          style={{
            position: "relative",
            backgroundImage: `url(${Glass})`,
            backgroundSize: "cover",

            opacity: 0.8,
          }}
        >
          <Container ClassName="d-flex justify-content-center  ">
            <Container fluid ClassName="d-flex justify-content-center maincon ">
              <Row>
                <h1 className="leadertext mt-5"> Leaderboards</h1>
              </Row>
              <Row>
                <h3 className="Pointtext"> Points Counter</h3>
              </Row>
              <br />
              <Row className="p-2 leaderboardpoints">
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

              {/* rohit section start */}
              <div className="planet-box">
                <h3 class="Pointtext">Planet Position</h3>
                <Row>
                  {planetposition !== ""
                    ? planetposition?.map((value) => (
                        <Col key={value?._id} lg="4" md="4" className="mb-3">
                          <div className="planet-1">
                            <div className="planet-img">
                              <img src={value?.img} alt="" />
                            </div>
                            <div className="planet-text">
                              <h4>
                                {value?.planet_name}
                                <span>${value?.doller_rupees}</span>
                              </h4>
                              <p>{value?.point_range}</p>
                            </div>
                          </div>
                        </Col>
                      ))
                    : null}

                  {/* <Col lg="4" md="4" className="mb-3">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={itthree} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Sun
                          <span>$10</span>
                        </h4>
                        <p>0 -500</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={ittwo} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Mercury
                          <span>$15</span>
                        </h4>
                        <p>500 - 1000</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={itone} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Venus
                          <span>$18</span>
                        </h4>
                        <p>1000- 2000</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4" className="mb-3">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={mars} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Mars
                          <span>$20</span>
                        </h4>
                        <p>2000 - 5000</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={jupiter} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Jupiter
                          <span>$25</span>
                        </h4>
                        <p>5000 - 7500</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={saterns} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Saturn
                          <span>$40</span>
                        </h4>
                        <p>7500 - 10000</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={uranus} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Uranus
                          <span>$50</span>
                        </h4>
                        <p>10000- 20000</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={naptune} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Neptune
                          <span>$100</span>
                        </h4>
                        <p>20000-50000</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4">
                    <div className="planet-1">
                      <div className="planet-img">
                        <img src={earth} alt="" />
                      </div>
                      <div className="planet-text">
                        <h4>
                          Earth
                          <span>$1000</span>
                        </h4>
                        <p>50000+</p>
                      </div>
                    </div>
                  </Col> */}
                </Row>
              </div>
              {/* rohit section start */}

              <Row className="mt-5 mb-4 " style={{ textAlign: "left" }}>
                <h2 ClassName="mb-3 karmacur">Meteors - Current Month</h2>
              </Row>
            </Container>
          </Container>
        </div>
        <Container ClassName="d-flex justify-content-center  ">
          <Row className="  d-flex justify-content-center winnerone" lg="4">
            {currentmonth != null
              ? currentmonth?.map((currentmonth) => (
                  <Col key={currentmonth?._id} className="maincol">
                    <Row>
                      <div className="maindiv">
                        {/* {planet?.map((data) => ( */}
                        <img
                          src={currentmonth?.crntmnth_planetImg} // planet logo
                          alt="img"
                          height={70}
                          width={70}
                        />
                        {/* ))} */}
                      </div>

                      <div className="maindiv1">
                        <h5
                          className="points d-flex"
                          style={{ color: "white" }}
                        >
                          {/* {currentmonth?.userid?.meteors} */}
                          {currentmonth?.crrntMonth}
                        </h5>
                      </div>
                    </Row>

                    <Row className=" d-flex justify-content-center">
                      <div className="justify-content-center imagecenter">
                        <div className="images6 d-flex justify-content-center">
                          <img
                            style={{ borderRadius: "50%", height: "195px" }}
                            src={currentmonth?.userid?.profileImg} // image of winner
                            alt=""
                            className="avatar"
                          />
                        </div>
                        <span>
                          <img
                            src={currentmonth?.crntmnth_winnerImg} //winner tag need to change
                            alt="ist winner"
                            className="first"
                            height={90}
                            width={90}
                          />
                        </span>
                      </div>
                    </Row>

                    <Row className="mt-2">
                      <h3>{currentmonth?.userid?.username}</h3>
                      <h5>
                        {/* {currentmonth?.meteors} */}
                        {currentmonth?.userid?.meteors}
                      </h5>
                    </Row>
                  </Col>
                ))
              : null}

            {/* <Col className="maincol">
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
            </Col> */}
          </Row>

          <Container className="mx-2 d-flex">
            <Row className="mt-5" style={{ textAlign: "left" }}>
              <h2 ClassName="mb-3  karmacur">Meteors - All Time</h2>
            </Row>
          </Container>

          <Row className="  d-flex justify-content-center winnerone" lg="3">
            {alltime !== "" && alltime !== null
              ? alltime?.map((value) => (
                  <Col className="maincol">
                    <Row>
                      <div className="maindiv">
                        <img
                          src={value?.planetImg} //image of planet
                          alt=" planetimg"
                          height={80}
                          width={80}
                        />
                      </div>

                      <div className="maindiv1">
                        <h5
                          className="points d-flex"
                          style={{ color: "white" }}
                        >
                          {/* {value} */}
                          {value?.meteors}
                        </h5>
                      </div>
                    </Row>

                    <Row className=" d-flex justify-content-center">
                      <div className="justify-content-center imagecenter">
                        <div className="images6 d-flex justify-content-center">
                          <img
                            style={{ borderRadius: "50%", height: "190px" }}
                            src={value?.profileImg} // image of winner
                            // src={avatar1} // image of winner
                            alt="User Image "
                            className="avatar"
                          />
                        </div>
                        <span>
                          <img
                            src={value?.winnerImg} // winner one logo
                            alt="winner"
                            style={{ borderRadius: "50%" }}
                            className="first"
                            height={90}
                            width={90}
                          />
                        </span>
                      </div>
                    </Row>

                    <Row className="mt-2">
                      <h3>{value?.username}</h3>
                      <h5>{value?.meteors}</h5>
                      {/* <h5>3752</h5> */}
                    </Row>
                  </Col>
                ))
              : null}
            {/* <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={saterns} alt="img" height={80} width={80} />
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
            </Col> */}

            {/* <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={itthree} alt="img" height={80} width={80} />
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
            </Col> */}

            {/* <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={uranus} alt="img" height={80} width={80} />
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
            </Col> */}

            {/* <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={itone} alt="img" height={70} width={70} />
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
            </Col> */}

            {/* <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={earth} alt="img" height={70} width={70} />
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
            </Col> */}
            {/* 
            <Col className="maincol">
              <Row>
                <div className="maindiv">
                  <img src={jupiter} alt="img" height={70} width={70} />
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
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LeaderBoard;
