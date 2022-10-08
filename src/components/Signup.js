import react from "react";
import { Col, Row, Container } from "react-bootstrap";
import logo from '../images/logo.png'
import Logo1 from '../images/Logo1.png'
import { Label } from "reactstrap";
import google from "../images/g1.png"
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Container className="loginmain mt-4">
        <Row>
          <Col lg='8'>

            <div style={{
              backgroundImage: `url(${logo})`, backgroundPosition: 'left',
              backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '110vh', width: '100%'
            }} >
              <div className="d-flex justify-content-center" style={{ paddingTop: '150px' }}><img src={Logo1} style={{ height: '35vh', width: '25%' }} /></div>
              <h3 className="d-flex justify-content-center" style={{ color: 'white', textalign: 'center' }}><b >Brahmaand.Space</b></h3>
            </div>
          </Col>
          <Col lg='4'>
            <form>
              <Row>
                <Label style={{ height: '25px', width: '200px', marginBottom: "2.5rem" }}><h4>Sign Up</h4></Label>
                <h6 style={{ font: 'GT Walsheim Pro' }}>Username</h6>
                <h5 ><input type='Username' style={{ background: '#F1F1F1' }} className='form-control' placeholder="Enter Here " /></h5>
              </Row>
              <Row>
                <h6 style={{ font: 'GT Walsheim Pro' }}>Email</h6>
                <h5 ><input type='email' style={{ background: '#F1F1F1' }} className='form-control' placeholder="Enter Here " /></h5>
              </Row>
              <Row>
                <h6 style={{ font: 'GT Walsheim Pro' }}>Password</h6>
                <h5 ><input type='email' style={{ background: '#F1F1F1' }} className='form-control' placeholder="Enter Here " /></h5>
                <div className="login-signup-res-pass-div">
                  <p className="login-new-account-p">
                    <Link to="/send-reset-password-request" className="login-new-account-link">
                      Forgot Password?
                    </Link>
                  </p>
                </div>
              </Row>
              <div>
                <button style={{ padding: "10px 136px",
                 borderRadius: "11px"}}
                  type="button" class="btn btn-primary"><b>CREATE ACCOUNT</b></button>
              </div>
              <div className="last">Already have an account ?<Link to="/login">Log In</Link> </div>
            </form>
            <div className style={{ marginTop: "40px" }}>
              <Row>
                <Col lg='12' className="d-flex justify-content-center">
                  <img style={{
                    margin: "5px",
                    height: "15px"
                  }} src={google} /><p>Sign in with Google</p>
                </Col>

              </Row>
            </div>
          </Col>
        </Row>

      </Container>


    </>

  )
}
export default Signup;