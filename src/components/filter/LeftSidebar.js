import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Filter.css";
import AutoSearch from "./AutoSearch";
import RangeSlider from "react-bootstrap-range-slider";

function LeftSidebar() {
  const [value, setValue] = useState(0);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="4" md="4">
            <div className="left-side">
              <Row>
                <Col lg="12" className="py-3">
                  <div className="ft-serch">
                    <AutoSearch />
                  </div>
                </Col>
                <Col lg="12" className="py-3">
                  <div className=" col-lg-8 ft-slider">
                    <h5>Review</h5>
                    <RangeSlider
                      value={value}
                      className="ftr-range"
                      //   onChange={changevalue}
                      onChange={(changeEvent) =>
                        setValue(changeEvent.target.value)
                      }
                    />
                    <p>Range</p>
                  </div>
                  <div className="col-lg-4">
                    <FaStar />
                  </div>
                </Col>
                <Col lg="12" className="py-3">
                  <div className="ft-type">
                    <h5>Type</h5>
                    <ul>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Free - No registration required (86)</span>
                      </li>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Free - Registration required (2)</span>
                      </li>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Paid (11)</span>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="12" className="py-3">
                  <div className="ft-type">
                    <h5>Format</h5>
                    <ul>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Video (74)</span>
                      </li>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Text (29)</span>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="12" className="py-3">
                  <div className="ft-type">
                    <h5>Level</h5>
                    <ul>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Beginner (81)</span>
                      </li>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Advanced (18)</span>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="12" className="py-3">
                  <h5>Not older than</h5>
                  <Form.Select>
                    <option>Any Year</option>
                  </Form.Select>
                </Col>
                <Col lg="12" className="py-3">
                  <div className="ft-type">
                    <h5>Language</h5>
                    <ul>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Arabic (3)</span>
                      </li>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>English (87)</span>
                      </li>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Hindi (6)</span>
                      </li>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Russian (3)</span>
                      </li>
                      <li>
                        <input type="checkbox" className="ft-check" />
                        <span>Urdu (1)</span>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="12" className="py-3">
                  <div className="ft-type">
                    <h5>Sort By</h5>
                    <hr></hr>
                    <ul>
                      <li>Relevance</li>
                      <li>Rating</li>
                      <li>Low to High</li>
                      <li>High to Low</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="8" md="8">
            <div className="right-side"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LeftSidebar;
