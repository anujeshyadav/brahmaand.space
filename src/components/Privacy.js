import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const Privacy = () => {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    privacypolicy();
  }, []);

  const privacypolicy = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/getPrivcyPolicy`)
      .then((res) => {
        console.log(res.data.data);
        setfirst(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Container>
        <h1
          className="all mx-1 mt-5"
          style={{ textAlign: "center", fontFamily: "GT Walsheim Pro" }}
        >
          Privacy Policy
        </h1>
        <br />
        <h2 className="d-flex justify-content-center"> Our Policies</h2>
        <hr />
        <div>
          {first?.map((first) => (
            <h3 className="mt-3">{ReactHtmlParser(first.desc)}</h3>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Privacy;
