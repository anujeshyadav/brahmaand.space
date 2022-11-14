import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import axios from "axios";

function FAQ() {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    freques();
  }, []);

  const freques = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/faq_list`)
      .then((res) => {
        setFaq(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div>
          <Container>
            <h1
              className="all mx-1 mt-5"
              style={{ textAlign: "center", fontFamily: "GT Walsheim Pro" }}
            >
              Frequently Asked Questions
            </h1>
            <br />
            <h3 className="mt-3 mb-3">
              Questions and their Respective Answers below are suppose to help
              you and Resolve your Queries
            </h3>
            <hr></hr>
            <br />
            <br />
            {faq?.map((qes) => (
              <p>
                <h4>Question : {qes.title}.?</h4>
                <h4>Answers : {qes.desc}</h4>
                <br />
              </p>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
}

export default FAQ;
