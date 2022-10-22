import { Button, Modal, ModalBody, Label, FormGroup, Input } from "reactstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Multiselect from "multiselect-react-dropdown";
// import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import React from "react";
import axios from "axios";
import swal from "sweetalert";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import "../styles/Navbar.css";
import Logo from "../assets/logos/logo.png";
import { useEffect, useState, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContextMenu } from "../context/MenuContext";
import { useAuth } from "../context/AuthContext";
import agreement_download from "../assets/files/Dispatch305-agreement.pdf";
import UserPage from "./UserPage";

function CustomNavbar() {
  const [link, setLink] = useState([]);
  const [catgry, setCatgry] = useState({});
  const [subcatry, setSubcatry] = useState({});
  const [type, setType] = useState({});
  const [formate, setformate] = useState({});
  const [topic, setTopic] = useState({});
  const [Desc, setDesc] = useState({});
  const [Optitle, setOptitle] = useState({});
  const [updatedAt, setUpdatedAt] = useState({});
  // const [createdAt, setCreatedAt] = useState({});
  const [first, setfirst] = useState({});
  const [lngage, setLngage] = useState([]);
  const [sellang, setSellang] = useState([]);
  const [relyear, setRelyear] = useState([]);
  const [selectedyear, setSelectedyear] = useState("");
  const [tview, setTview] = useState({});
  const [cat_img, setCat_img] = useState({});
  const [Opcname, setOpcname] = useState({});
  const [Opdes, setOpdes] = useState({});
  const [Opcomm, setOpcomm] = useState({});
  const [userid, setUserid] = useState({});
  const [title, settitle] = useState({});
  const [error, setError] = useState(null);

  var fileUpload = (e) => {
    setCat_img(e.target.files[0]);
  };

  const handleSubmitResource = (e) => {
    if (catgry === "Select Category") {
      swal("Please Select Category");
    }
    function urlPatternValidation(link) {
      const regex = new RegExp(
        "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\www.-]*/?"
      );
      return regex.test(link);
    }

    if (!urlPatternValidation(e.target.value)) {
      setError("Please enter correct URL to Submit Content");
    } else {
      setError(null);
    }
    setUserid(localStorage.getItem("userId"));

    e.preventDefault();
    console.log(
      "all data",
      link,
      userid,
      catgry,
      type,
      subcatry,
      formate,
      sellang,
      topic,
      Desc,
      Optitle,
      Opcname,
      selectedyear,
      Opdes,
      cat_img
    );
    const formData = new FormData();
    formData.append("link", link);
    formData.append("category", catgry);
    formData.append("sub_category", subcatry);
    formData.append("type", type);
    formData.append("format", formate);
    formData.append("language", sellang);
    formData.append("topics", topic);
    formData.append("desc", Desc);
    formData.append("resTitle", Optitle);
    formData.append("creatorName", Opcname);
    formData.append("relYear", selectedyear);
    formData.append("res_desc", Opdes);
    formData.append("comment", Opcomm);
    formData.append("img", cat_img);
    formData.append("userid", userid);
    // formData.append("createdAt", createdAt);

    axios
      .post(`http://43.205.82.226:9000/user/addSub_resrc`, formData)
      .then((res) => {
        console.log(res.data.data);
        // if (response.data.message === "success") {
        //   swal("Resource Submitted Successfully👍");
        // } else {
        //   swal("Something went wrong, Try again");
        // }
      })

      .catch((error) => {
        console.log(error.response);
      });

    setModal(false);
  };

  // all category
  const [allcatego, setAllcatego] = useState([]);
  const allcategory = () => {
    axios
      .get(`http://43.205.82.226:9000/admin/getallCategory`)

      .then((response) => {
        setAllcatego(response.data.data);
        //console.log("submit resorcecat", response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  };

  const [subctgry, setSubctgry] = useState([]);

  // useMemo(() => allsubcategory(), []);
  const allsubcategory = () => {
    axios

      .get(`http://43.205.82.226:9000/admin/listbycategory/${catgry}`)
      .then((response) => {
        console.log(response.data.data);
        setSubctgry(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // all year selection api
  const getYear = () => {
    axios
      .get(`http://43.205.82.226:9000/user/allYear`)
      .then((response) => {
        setRelyear(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getLanguage = () => {
    axios
      .get(`http://43.205.82.226:9000/user/allLang`)
      .then((response) => {
        setLngage(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getYear();
    allcategory();
    allsubcategory();
    getLanguage();
  }, []);

  const [open, setOpen] = useState("1");
  const toggler = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const { current_link, setCurrentLinkHelper } = useContextMenu();

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const [inputList, setinputList] = useState([{ Languages: "" }]);
  const navigate = useNavigate();
  const [selectedList, setSelectedList] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  // useEffect(() => {
  //   // console.log(current_link);
  // }, [current_link]);

  const onSelect = (selectedList, selectedItem) => {
    setSellang(selectedList);

    const [id, language] = sellang;
    console.log(id._id);
    var newId = [];
    for (let i = 0; i < sellang.length; i++) {
      newId = id._id;
      newId = newId.push(newId);
      newId = [...newId];
      debugger;
    }
    id = id.push;

    // const language = selectedList;
  };

  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
  };
  // const onSelectyear = (selectedyear, selectedItem) => {
  //   setSelectedyear(selectedList);
  // };
  // const onSelecat = (e) => {
  //   setCatgry({ [e.target.name]: e.target.value });

  // };
  const onSelesubcat = (selectedsubcat, selectedItem) => {
    // setLngage(selectedList);
  };
  return (
    <Navbar
      bg="light"
      variant="light"
      className="navbar"
      collapseOnSelect
      expand="lg"
    >
      <Navbar.Brand exact to="/" as={NavLink} className="navbar-brand">
        <img
          src={Logo}
          width="100%"
          height="80"
          className="d-inline-block align-top navbar-brand-img"
          alt="React Bootstrap logo"
          onClick={() => setCurrentLinkHelper("Home")}
        />
      </Navbar.Brand>

      <Navbar.Toggle
        className="navbar-toggle"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto navbar-nav">
          {/*user not login  */}
          {localStorage.getItem("userId") !== "" &&
          localStorage.getItem("userId") !== null &&
          localStorage.getItem("userId") !== undefined ? (
            <Nav.Link as={NavLink} className="navbar-link">
              <button
                className="btn rbutton mobile"
                type="submit"
                onClick={toggle}
              >
                <h4 className="rText">+Submit a Content</h4>
              </button>
              <Container>
                <Modal className="mdlg" isOpen={modal}>
                  <div className="p-3 w-100">
                    <h2 style={{ font: "GT Walsheim Pro", fontSize: "25px" }}>
                      Submit a Content
                    </h2>
                    <hr></hr>
                    <p>
                      You know a content of any niche
                      (Education/Politics/General Affairs etc.) Post the content
                      and we will publish it on our website which can be rated
                      and reviewed by users and has potential to become viral.
                      It will also help the content reach a global audience.
                      <p>
                        <b> Moreover it will help you win cool prizes daily.</b>
                      </p>
                    </p>
                    <Link onClick={() => setModal(false)} to="/leaderboard">
                      <h5 className="mt-2" style={{ color: "#5F56C6" }}>
                        Checkout Leaderboard Here.
                      </h5>
                    </Link>

                    <ModalBody>
                      <div className="">
                        <Row>
                          <Label>
                            <b>
                              Link <span style={{ color: "red" }}>*</span>
                            </b>
                          </Label>
                          <h5>
                            <input
                              type="text"
                              value={link}
                              // style={{ background: "#F1F1F1" }}
                              className="form-control"
                              placeholder="https://www. "
                              onChange={(e) => setLink(e.target.value)}
                            />
                          </h5>
                          {error && <h6 style={{ color: "red" }}>{error}</h6>}
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col>
                            <Label style={{ font: "GT Walsheim Pro" }}>
                              <b className="mt-5">
                                Category <span style={{ color: "red" }}>*</span>
                              </b>
                            </Label>
                            <Input
                              type="select"
                              name="catgry"
                              className="form-control"
                              onChange={(e) => setCatgry(e.target.value)}
                            >
                              <option>Select Category</option>
                              {allcatego?.map((allCategory) => {
                                return (
                                  <option
                                    value={allCategory?._id}
                                    key={allCategory?._id}
                                  >
                                    {allCategory?.title}
                                  </option>
                                );
                              })}
                            </Input>
                          </Col>

                          <Col>
                            <Label style={{ font: "GT Walsheim Pro" }}>
                              <b>
                                Sub Category
                                <span style={{ color: "red" }}>*</span>
                              </b>
                            </Label>

                            <select
                              type="select"
                              name="title"
                              className="form-control"
                              onChange={(e) => setSubcatry(e.target.value)}
                            >
                              <option>Select Sub-Category</option>
                              {subctgry?.map((subctgry) => {
                                return (
                                  <option
                                    value={subctgry?._id}
                                    key={subctgry?._id}
                                  >
                                    {subctgry?.title}
                                  </option>
                                );
                              })}
                            </select>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <Label
                              className="mt-3"
                              style={{ font: "GT Walsheim Pro" }}
                            >
                              <b>
                                Type <span style={{ color: "red" }}>*</span>
                              </b>
                            </Label>
                            <select
                              onChange={(e) => setType(e.target.value)}
                              className="form-control"
                            >
                              <option>Select type</option>
                              <option>Free</option>
                              <option>Paid</option>
                            </select>

                            {/* <select
                              onChange={(e) => setType(e.target.value)}
                              className="form-control"
                            >
                              <option></option>
                              <option></option>
                            </select> */}
                          </Col>

                          <Col>
                            <Label
                              className="mt-3"
                              style={{ font: "GT Walsheim Pro" }}
                            >
                              <b>
                                Format <span style={{ color: "red" }}>*</span>
                              </b>
                            </Label>
                            <select
                              onChange={(e) => setformate(e.target.value)}
                              className="form-control"
                            >
                              <option>Select Formate</option>
                              <option>Video</option>
                              <option>Text</option>
                              <option>Video & Text</option>
                            </select>
                          </Col>
                        </Row>
                      </div>

                      <Row className="d-flex w-100%">
                        <Col lg="12">
                          <Label
                            className="mt-3"
                            style={{ font: "GT Walsheim Pro" }}
                          >
                            <b>
                              Language of Content{" "}
                              <span style={{ color: "red" }}>*</span>
                            </b>
                          </Label>
                          <Multiselect
                            style={{ borderRadius: "14px" }}
                            placeholder="Select"
                            className="w-100%"
                            // selectedValues={lngage._id}
                            options={lngage}
                            onSelect={onSelect}
                            onRemove={onRemove}
                            displayValue="language"
                          />
                        </Col>
                      </Row>

                      <div>
                        <Row>
                          <Label
                            className="mt-3"
                            style={{ font: "GT Walsheim Pro" }}
                          >
                            <b>
                              Topic <span style={{ color: "red" }}>*</span>
                            </b>
                          </Label>
                          <h5>
                            <textarea
                              type="text"
                              // style={{ background: "#F1F1F1" }}
                              className="form-control"
                              placeholder="like- #javaScript, #react, #native"
                              onChange={(e) => setTopic(e.target.value)}
                            />
                          </h5>
                          <h6>
                            Add the topics that covers Resource.Separate
                            multiple topic with commas.
                          </h6>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Label
                            className="mt-4"
                            style={{ font: "GT Walsheim Pro" }}
                          >
                            <b>
                              Descriptions
                              <span style={{ color: "red" }}>*</span>
                            </b>
                          </Label>
                          <h5>
                            <textarea
                              type="text"
                              // style={{ background: "#F1F1F1" }}
                              className="form-control"
                              placeholder=" Enter blog description here"
                              onChange={(e) => setDesc(e.target.value)}
                            />
                          </h5>
                        </Row>

                        <Row>
                          <Label
                            className="mt-3"
                            style={{ font: "GT Walsheim Pro" }}
                          >
                            <b>Upload Image of Related Content </b>
                          </Label>
                          <h5>
                            <input
                              type="file"
                              // style={{ background: "#F1F1F1" }}
                              className="form-control imageuserupload"
                              onChange={fileUpload}
                            />
                          </h5>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <Label className="mt-3">
                                <h6>
                                  <b>Optional</b>
                                </h6>
                              </Label>

                              <Accordion open={open} toggle={toggler}>
                                <AccordionItem>
                                  <AccordionHeader targetId="1">
                                    Optional Fields
                                  </AccordionHeader>

                                  <AccordionBody accordionId="1">
                                    <div>
                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Title of your Resource</b>
                                        </Label>
                                        <input
                                          type="text"
                                          // style={{ background: "#F1F1F1" }}
                                          className="form-control mb-3"
                                          placeholder="Title of the resource?"
                                          onChange={(e) =>
                                            setOptitle(e.target.value)
                                          }
                                        />
                                      </Row>

                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Creator Name</b>
                                        </Label>
                                        <input
                                          type="text"
                                          // style={{ background: "#F1F1F1" }}
                                          className="form-control mb-3"
                                          placeholder="author of the resource?"
                                          onChange={(e) =>
                                            setOpcname(e.target.value)
                                          }
                                        />
                                      </Row>

                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Release year/last Updated</b>
                                        </Label>

                                        <Input
                                          type="select"
                                          className="form-control"
                                          name="yrName"
                                          onChange={(e) => {
                                            setSelectedyear(e.target.value);
                                          }}
                                        >
                                          <option>Select Year</option>
                                          {relyear?.map((yr) => {
                                            return (
                                              <option
                                                value={yr?._id}
                                                key={yr?._id}
                                              >
                                                {yr?.yrName}
                                              </option>
                                            );
                                          })}
                                        </Input>

                                        {/* </CustomInput> */}
                                        {/* <input
                                          type="text"
                                          style={{ background: "#F1F1F1" }}
                                          className="form-control "
                                          placeholder="type year of Release or update content Ex. 2022"
                                        /> */}
                                        {/* <Dropdown
                                          type="select"
                                          // name="yrName"
                                          displayValue="yrName"
                                          options={relyear}
                                          onChange={onSelectyear}
                                          placeholder="Select Year of Content"
                                        /> */}

                                        <p className=" mb-3">
                                          What year was this resource released
                                          or last updated?
                                        </p>
                                      </Row>

                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Description</b>
                                        </Label>
                                        <h5>
                                          <textarea
                                            type="text"
                                            // style={{ background: "#F1F1F1" }}
                                            className="form-control mb-3"
                                            placeholder="describe the resource in a few sentences, topics it covers?"
                                            onChange={(e) =>
                                              setOpdes(e.target.value)
                                            }
                                          />
                                        </h5>
                                      </Row>

                                      <Row>
                                        <Label
                                          style={{ font: "GT Walsheim Pro" }}
                                        >
                                          <b>Comments</b>
                                        </Label>
                                        <h5>
                                          <textarea
                                            type="text"
                                            // style={{ background: "#F1F1F1" }}
                                            className="form-control "
                                            placeholder="Add anything you want to let us know"
                                            onChange={(e) =>
                                              setOpcomm(e.target.value)
                                            }
                                          />
                                        </h5>
                                      </Row>

                                      <h6>
                                        Thesefields are optional, but it will
                                        help others find the resource more
                                        easily.
                                      </h6>
                                    </div>
                                  </AccordionBody>
                                </AccordionItem>
                              </Accordion>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col></Col>
                          <Col>
                            <Button
                              onClick={() => setModal(false)}
                              color="danger"
                              className="m-1"
                            >
                              Discard
                            </Button>
                            <Button
                              color="success"
                              className="m-1"
                              onClick={handleSubmitResource}
                            >
                              SUBMIT
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </ModalBody>
                  </div>
                </Modal>
              </Container>
            </Nav.Link>
          ) : (
            <Nav.Link as={NavLink} className="navbar-link">
              <button
                className="btn rbutton mobile"
                onClick={() =>
                  swal(
                    "For Submit a content",
                    "Need To login for Submit Content"
                  )
                }
              >
                <h4 className="rText">+ Submit a Content</h4>
              </button>
            </Nav.Link>
          )}

          {/* signup and login condition */}
          {localStorage.getItem("userId") !== "" &&
          localStorage.getItem("userId") !== null &&
          localStorage.getItem("userId") !== undefined ? (
            <Nav.Link>
              <UserPage />
            </Nav.Link>
          ) : (
            <>
              <Nav.Link
                exact
                to="/signup"
                as={NavLink}
                className="navbar-link"
                style={{ marginTop: 25 }}
              >
                <span className="text bSignUp" aria-current="page">
                  Sign up
                </span>
              </Nav.Link>

              <Nav.Link
                exact
                to="/login"
                as={NavLink}
                className="navbar-link lText"
              >
                <button className="btn rLogin mobile" type="submit">
                  <span className="">LOGIN</span>
                </button>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      {/* <UserPage/> */}
    </Navbar>
  );
}

export default CustomNavbar;
