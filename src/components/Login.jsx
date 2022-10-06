import React from "react";
import { useEffect, useState } from "react";
// import socialnetwork from "../../images/socialnetwork.jpg";
import banner3 from "../assets/images/banner3.jpg";
import "../styles/Login.css";
import { Check } from "react-feather";
import google from "../images/g1.png"
import logo from '../images/logo.png'
import Logo1 from '../images/Logo1.png'
import { Card, Col, Row, Container, Form, Button, FormGroup, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Label } from "reactstrap";

function Login({ loginFunction }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const body = JSON.stringify({
    email,
    password,
  })

  const loginHelper = async (e) => {
    e.preventDefault();
    await loginFunction(body)
  }

  return (
    <Container className="login-container">
      <div className="login">

        <Form className="login-form" onSubmit={(e) => loginHelper(e)}>

          <Row>
            <Col lg="8" md="6" sm="12" >

              <div style={{
                backgroundImage: `url(${logo})`, backgroundPosition: 'left',
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '110vh', width: '100%'
              }} >
                <div className="d-flex justify-content-center" style={{ paddingTop: '150px' }}><img src={Logo1} style={{ height: '35vh', width: '25%' }} /></div>
                <h3 className="d-flex justify-content-center" style={{ color: 'white', textalign: 'center' }}><b >Brahmaand.Space</b></h3>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className="head" >
              <h2>Welcome Back!</h2>
              <FormGroup
                className="mb-3 login-form-group"
                controlId="formBasicLoginEmail"
              >
                <Label className="from-label">Email I’d</Label>
                <Input
                  type="email"
                  className="login-form-control"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup
                className="mb-3 login-form-group"
                controlId="formBasicLoginEmail"
              >
                <Label className="from-label">Password</Label>

                <Input
                  type="password"
                  className="login-form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <div className="login-signup-res-pass-div text-align-left">
                {/* <p className="login-new-account-p "> */}
                  <Link to="/send-reset-password-request" className="login-new-account-link">
                    Forgot Password?
                  </Link>
                {/* </p> */}
              </div>

              <Input className="check"
                type="checkbox"
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                // onChange={this.handleRemember}
                required

              />
              <Label className="label-button">Remember me</Label>


              <div className="login-button-div">

                <Button variant="primary" className="login-button" type="submit">
                  LOGIN
                </Button>
              </div>
              <div className="last"><span>Don't have an account yet ? 
              <Link to="/signup">Sign Up</Link>  </span>
              </div>
              <div className="google">   <Row>
                <Col lg='12' className="d-flex justify-content-center">
                  <img style={{
                    margin: "1px",
                    height: "15px"
                  }} src={google} /><p>Sign in with Google</p>
                </Col>

              </Row></div>
              {/* <Link to="">Sign Up</Link> */}
              {/* <Row> */}

              {/* </Row> */}
            </Col>

          </Row>
        </Form>
      </div>
    </Container>
    // <Container className="login-container">

    //   <div className="login-card">
    //   <Col lg="6" md="6" sm="12" >
    //       <img height="375px;" className="" src={banner3} alt="img" />
    //     </Col>
    //     {/* <Card.Header > */}
    //       <h2>Welcome Back!</h2>
    //     {/* </Card.Header> */}

    //     {/* <Card.Body className="login-card-body"> */}
    //       <Form className="login-form" onSubmit={(e) => loginHelper(e)}>
    //         <Row>

    //     <Col lg="6" md="6" sm="12" >
    //     <FormGroup
    //           className="mb-3 login-form-group"
    //           controlId="formBasicLoginEmail"
    //         >
    //           <Label className="from-label">Email I’d</Label>
    //           <Input
    //             type="email"
    //             className="login-form-control"
    //             placeholder="EMAIL"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />

    //         </FormGroup>
    //         <Label className="from-label">Password</Label>
    //         <FormGroup
    //           className="mb-3 login-form-group"
    //           controlId="formBasicLoginPass"
    //         >
    //           <Input
    //             type="password"
    //             className="login-form-control"
    //             placeholder="CONTRASEÑA"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </FormGroup>
    //         {/* <FormGroup className="d-flex justify-content-between align-items-center">
    //           <Checkbox
    //             color="primary"
    //             icon={<Check className="vx-icon" size={16} />}
    //             label="Remember me"
    //             defaultChecked={false}
    //             onChange={this.handleRemember}
    //             required
    //           />
    //           <div className="float-right">
    //             <Link to="/pages/forgot-password">Forgot Password?</Link>
    //           </div>
    //         </FormGroup> */}
    //         <div className="login-signup-res-pass-div">
    //           <p className="login-new-account-p">
    //             No tienes una cuenta?
    //             <br className="login-br" />{" "}
    //             <Link to="/create-account" className="login-new-account-link">
    //               Crear Cuenta Nueva
    //             </Link>
    //           </p>
    //         </div>

    //         <div className="login-signup-res-pass-div">
    //           <p className="login-new-account-p">
    //             <Link to="/send-reset-password-request" className="login-new-account-link">
    //               Reset Password
    //             </Link>
    //           </p>
    //         </div>

    //         <div className="login-button-div">

    //           <Button variant="primary" className="login-button" type="submit">
    //             LOGIN
    //           </Button>
    //         </div>
    //     </Col>
    //       </Row>
    //       </Form>
    //     {/* </Card.Body> */}
    //   </div>
    // </Container>
  );
}

export default Login;
