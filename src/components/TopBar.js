import React,{useState} from 'react'
import { Container, Row, Col,Button } from 'reactstrap';
import { Modal, ModalBody, Label, FormGroup, Input } from "reactstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import profile from "../images/1.png";
import topBar from "../css/topBar.css"
import ProfileRouter from './ProfileRouter';
// const [modal, setModal] = useState(false);

function TopBar() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


    return (
        <section className='mt-200'>

            <Container className='mt-100' >
                <div className='userDiv bg-white'>
                    <div className='st-1 text-center'>
                        <img src={profile} className='imageone' />
                    </div>
                    <Row className=' m-2 '>
                        <Col lg='4'>
                            <div className='list-st'>
                                <pre>
                                    <ul>
                                        <li style={{ color: 'black' }}>Username:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>CromSoldier</b></li>
                                        <li style={{ color: 'black' }}>Display name: <b>CromSoldier</b></li>
                                        <li style={{ color: 'black' }}>User Since:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>jun 26,2022</b></li>
                                        <li style={{ color: 'black' }}>Karma:        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>3700</b></li>
                                    </ul>
                                </pre>
                            </div>
                        </Col>
                        <Col lg='8'>
                            <b>About Us:</b>
                            <p>Professionnal embedded software engineer in real life, moonlighting with Android dev.
                                From the land of wine and cheese</p>
                        </Col>
                    </Row>
                    
                    {/* <Button className="edituseprofile"  color="success">
                            <p className='editprofiletext'>Edit your Profile</p> 
                    </Button>
                    */}

   
            <button className="btn rbutton mobile"  type="submit" onClick={toggle}>
              <h4 className='rText'>Edit your Profile</h4>
            </button>
            <Container>
              <Modal className="mdlg" isOpen={modal}>
                <div className="p-3 w-100">
                  {/* <h6 toggle={toggle}> */}
                  <h2 style=    {{ font: "GT Walsheim Pro", fontSize: "25px" }}>
                    Edit profile
                  </h2>
                  <hr></hr>
                   
                  {/* <Link to="/leaderboard">
                  <h5 className="mt-2" style={{color:"#5F56C6"}}>Moreover it will help you win cool prizes daily. Checkout Leaderboard.</h5>
                 </Link> */}
                  
                 
                  <ModalBody>
                    <div className="">
                      <Row>
                        <Label>
                          <b>User Name</b>
                        </Label>
                        <h5>
                          <input
                            type="text"
                            style={{ background: "#F1F1F1" }}
                            className="form-control"
                            placeholder="Enter Your User Name here "
                          />
                        </h5>
                      </Row>
                    </div>
                    <div>
                      <Row>

                      <Col>
                          <Label style={{ font: "GT Walsheim Pro" }}>
                            <b>Display Name </b>
                          </Label>
                          <input
                            type="text"
                            style={{ background: "#F1F1F1" }}
                            className="form-control"
                            placeholder="Enter Your Display Name "
                          /> 
                          {/* <select
                            className="form-control"
                            style={{ background: "#F1F1F1" }}
                          >
                            <option>Select Type</option>
                            <option>Astrology</option>
                            <option>Product Comparison</option>
                            <option>Professional Skills</option>
                            <option>Education</option>
                            <option>  Comedy</option>
                            <option>Cinema Gossipsp</option>
                            <option>Movie Trailers</option>
                            <option>TV Showsp</option>
                            <option>Unboxing Videos</option>
                            <option>Sports</option>
                            <option>Music</option>
                            <option>Fashions</option>
                            <option>pranks</option>
                            <option>timelapse</option>
                            <option>Interviews</option>
                            <option>Real Estate Videos</option>
                            <option>Facts</option>

                          </select> */}
                        </Col>

                        {/* <Col>
                          <Label style={{ font: "GT Walsheim Pro" }}>
                            <b>Sub Category</b>
                          </Label>
                          <select
                            className="form-control"
                            style={{ background: "#F1F1F1" }}
                          >
                            <option>Select Type</option>
                            <option>Free</option>
                            <option>Paid</option>
                          </select>
                        </Col> */}

                        {/* <Col>
                          <Label style={{ font: "GT Walsheim Pro" }}>
                            <b>Type</b>
                          </Label>
                          <select
                            className="form-control"
                            style={{ background: "#F1F1F1" }}
                          >
                            <option>Select Type</option>
                            <option>Free</option>
                            <option>Paid</option>
                          </select>
                        </Col> */}
                        


                        {/* <Col>
                          <Label style={{ font: "GT Walsheim Pro" }}>
                            <b>Format</b>
                          </Label>
                          <select
                            className="form-control"
                            style={{ background: "#F1F1F1" }}
                          >
                            <option>Video</option>
                            <option>Text</option>
                            <option>Video & Text</option>
                          </select>
                        </Col> */}
                      </Row>
                    </div>

                    <div>
                      {/* <Row> */}
                        {/* <Col>
                          <Label style={{ font: "GT Walsheim Pro" }}>
                            <b>Level</b>
                          </Label>
                          <select
                            className="form-control"
                            style={{ background: "#F1F1F1" }}
                          >
                            <option>Beginner</option>
                            <option>1</option>
                            <option>2</option>
                          </select>
                        </Col> */}
                      {/* </Row> */}
                    </div>
                    {/* {inputList.map((x, i) => {
                      return (
                        <div>
                          <Row>
                            <Col>
                              <Label style={{ font: "GT Walsheim Pro" }}>
                                <b>Language of Content </b>
                              </Label>
                              <select
                                className="form-control"
                                style={{ background: "#F1F1F1" }}
                                // onChange={(e) => handleinputcahnge(e, i)}
                              >
                                <option>Select Language</option>
                                <option>1</option>
                                <option>2</option>
                                <option>1</option>
                                <option>2</option>
                                <option>1</option>
                                <option>2</option>  
                              </select>
                            </Col>
                          </Row>
                          {inputList.length !== 1 && (
                            <Row>
                              <Col>
                                <button
                                  className="btn btn-danger"
                                //   onClick={() => handleremove(i)}
                                >
                                  -Remove another language
                                </button>
                              </Col>
                            </Row>
                          )}
                          {inputList.length - 1 === i && (
                            <Row>
                              <Col>
                                <button
                                  className="btn btn-success"
                                //   onClick={handleaddclick}
                                >
                                  + Add another language
                                </button>
                              </Col>
                            </Row>
                          )}
                        </div>
                      );
                    })} */}
                    <div>
                      <Row>
                        <Label style={{ font: "GT Walsheim Pro" }}>
                          <b>Change about Us</b>
                        </Label>
                        <h5>
                          <textarea
                            type="text"
                            style={{ background: "#F1F1F1" }}
                            className="form-control"
                            placeholder="write something about you"
                          />
                        </h5>
                        {/* <h6>
                          Add the topics that is resource covers.Separate
                          multiple topic with commas.
                        </h6> */}
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <Label style={{ font: "GT Walsheim Pro" }}>
                          <b>Upload Your Image</b>
                        </Label>
                        <h5>
                          <input
                            type="file"
                            style={{ background: "#F1F1F1" }}
                            className="form-control imageuserupload"
                            placeholder=" "
                          />
                        </h5>
                      </Row>
                    </div>
                    <div>
                      {/* <Row>
                        <Col lg="12">
                          <FormGroup>
                            <Label>
                              <h6>
                                <b>Optional</b>
                              </h6>
                            </Label>
                            <Input type="select">
                              <option>Select.....</option>
                              <option>Select.....</option>
                              <option>Select.....</option>
                              <option>Select.....</option>
                              <option>Select.....</option>
                              <option>Select.....</option>
                            </Input>
                          </FormGroup>
                         {/* <DropdownButton id="dropdown button" title="Optional">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton>  */}
                        {/* </Col> */}
                      {/* </Row> */}
                    </div>
                    <div>
                      <Row>
                        <Col></Col>
                        <Col>
                          <Button 
                          onClick={() => setModal(false)}
                           color="danger" className="m-1">
                            Discard
                          </Button>
                          <Button color="success" className="m-1">
                            SUBMIT
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </ModalBody>
                </div>
              </Modal>
            </Container>
          

          {/* <Nav.Link
            exact
            to="/signup"
            as={NavLink}
            className="navbar-link"
            style={{ marginTop: 25 }}
          >
            <span className="text bSignUp" aria-current="page">
              Sign up
            </span>
          </Nav.Link> */}

          
         

           {/* <div className="d-flex loginboard ">
            
            <Dropdown className="loginboard" isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle caret>
            <img className="imgloginb" src={avatar2} alt="image" style={{width:"50x", height:"50px"}} /> 
            Mr.abcde
            </DropdownToggle>
            <DropdownMenu {...args}>
            
            <DropdownItem >  
            <Link to="/topbar">
            <FaEdit size={25} color="black" />
            Edit Your Profile
            </Link>
            </DropdownItem>

            <DropdownItem >

            <Link to="/profilerouter">
            <FaRegHandPointRight size={25} color="black" />
            
            Your likes
            </Link>
          
            </DropdownItem>
            
            <hr />
            <DropdownItem >
            <Link to="/login">
            
            LogOut
            </Link>
            </DropdownItem>
              
            </DropdownMenu>
          </Dropdown>
           
                    
          </div>  */}
       
      {/* </Container> */}
    


                </div>
            </Container>
            <ProfileRouter />
        </section>

    )
}

export default TopBar;