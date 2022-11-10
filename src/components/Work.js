import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import "moment-timezone";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";

function Work() {
  const [howworks, sethowworks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://3.7.173.138:9000/admin/get_howWorks`)
      .then((response) => {
        sethowworks(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(229 120 27 / 0.69)",
          margin: "40px",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}> How it works</h1>
        <Container style={{ color: "white" }}>
          <Row className="mt-2">
            <br />
            <br />
            <h3 className="mt-4"> How we use your information</h3>
            <p>
              We use the information we collect in various ways, including to:
            </p>

            {howworks?.map((value) => (
              <>
                <p>{value.desc}</p>
                <div className="container mt-4 ">
                  <span>UpdatedAt : </span>
                  <Moment format="lll">
                    {ReactHtmlParser(value.updatedAt)}
                  </Moment>
                </div>
              </>
            ))}
            <p>
              {/* <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul> */}
            </p>
            {/* <h3>Log Files</h3> */}
            {/* <p>
              TutHub.io follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p> */}
          </Row>
          {/* <h3>Cookies and Web Beacons</h3> */}
          {/* <p>
            Like any other website, TutHub.io uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p> */}
          {/* <p>
            For more general information on cookies, please read the Cookies
            article on Generate Privacy Policy website.
          </p> */}
        </Container>
      </div>
    </>
  );
}

export default Work;
