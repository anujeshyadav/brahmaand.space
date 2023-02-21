import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import Moment from "react-moment";
import "moment-timezone";
import HtmlParser from "react-html-parser";

function Blogdescription() {
  const [blogdescription, setBlogdescription] = useState([]);
  const Param = useParams();
  // console.log(Param);
  useEffect(() => {
    axios

      .get(`https://backend.brahmaand.space/admin/viewoneBlog/${Param.id}`)

      .then((res) => {
        setBlogdescription(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [Param]);

  return (
    <div>
      <div className="color">
        <Container className="mb-0">
          <Row>
            <h2 className=" justify-content-center mt-5 mb-3">
              {blogdescription?.blog_title}
            </h2>
          </Row>

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
            <Row>
              <h4 className=" descriptionofblog  justify-content-center mt-3 mb-3">
                {HtmlParser(blogdescription?.desc)}
              </h4>
            </Row>
          </Row>
          {/* <Row className="mt-4 ">
            <div className=" justify-content-center mt-3">
              <h3>{ReactHtmlParser(blogdescription?.desc)}</h3>
            </div>
          </Row> */}
        </Container>
      </div>
    </div>
  );
}

export default Blogdescription;
