import React from "react";
//import ReactDOM from "react-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Filter.css";

function FilterList() {
  return (
    <div>
         <Container>
             <Row>
                <Col lg="12" md="12">
                     <div className="cat-list">
                          <ul>
                             <li>
                                 <Link to='#'>Business</Link>
                             </li>
                             <li>
                                 <Link to='#'>Education</Link>
                             </li>
                             <li>
                                 <Link to='#'>Healthcare</Link>
                             </li>
                             <li>
                                 <Link to='#'>Eat & Foods</Link>
                             </li>
                             <li>
                                 <Link to='#'>Entertainment</Link>
                             </li>
                             <li>
                                 <Link to='#'>Finance</Link>
                             </li>
                             <li>
                                 <Link to='#'>Technology</Link>
                             </li>
                             <li>
                                 <Link to='#'>Travel</Link>
                             </li>
                          </ul>
                     </div>
                </Col>
              </Row>
         </Container>
    </div>
    
  );
}

export default FilterList;
