import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";
import "moment-timezone";

function Blogdescription() {
  const [blogdescription, setBlogdescription] = useState([]);
  const Param = useParams();
  console.log(Param);
  useEffect(() => {
    axios
      //   .get(`http://3.7.173.138:9000/admin/viewoneBlog/${Param}`)
      .get(`http://3.7.173.138:9000/admin/viewoneBlog/63527f9fdcc77a10979360ec`)

      .then((res) => {
        setBlogdescription(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Param]);

  return (
    <div>
      <div className="color">
        <Container className="mb-0">
          <Row>
            <h2 className="d-flex justify-content-center mt-5 mb-3">
              {blogdescription?.blog_title}
            </h2>
          </Row>
          <Row>
            <h4 className=" descriptionofblog d-flex justify-content-center mt-3 mb-3">
              {blogdescription?.desc}
            </h4>
          </Row>

          {/* <p className="d-flex justify-content-center mt-4 ">
            <h6>
              posted by -
              <img
                className="mx-3"
                src={blogdescription?.posted_by_img}
                style={{
                  width: "70px",
                  height: "65px",
                  borderRadius: "50%",
                }}
              />
              {blogdescription?.posted_by}
            </h6>
          </p> */}
          <p className="d-flex justify-content-center mb-4">
            Updated At:{" "}
            <Moment format="lll">{blogdescription?.updatedAt}</Moment>
          </p>

          <Row className="mt-3">
            <img
              className=" d-flex justify-content-center imgColnew"
              src={blogdescription?.blogImg}
              style={{ height: "500px" }}
              alt="blogimg"
            />
          </Row>
          <Row className="mt-4 ">
            <div className="d-flex justify-content-center mt-3">
              <h3>{ReactHtmlParser(blogdescription?.desc)}</h3>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Blogdescription;
