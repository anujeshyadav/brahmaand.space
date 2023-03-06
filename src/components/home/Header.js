import React, { useState, useEffect } from "react";
import "../../styles/ModulePage.css";
import axios from "axios";
import Head from "../../images/social-media-with-photo-frame-like-button-media-payer-pink-background-illustration 10.png";
import { useNavigate } from "react-router-dom";
import Hastag from "../../../src/components/home/Hastag";
import { Container, Row, Col, Card, Button } from "reactstrap";
import backimg from "../../assets/images/backimg.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import swal from "sweetalert";

function Header() {
  const [searchbytopics, setSearchbytopics] = useState("");
  const [searchdata, setSearchdata] = useState("");

  const navigate = useNavigate();
  const [homesearch, setHomesearch] = useState("");

  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = result => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = item => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = item => {
    console.log(newitem);
    return (
      <>
        <>
          {/* <span style={{ display: "block", textAlign: "left" }}>
            id: {item.id}
          </span> */}
          <span style={{ display: "block", textAlign: "left" }}>
            {item?.name}
          </span>
        </>
      </>
    );
  };

  const handlesearchtopics = () => {
    // console.log(searchdata);
    localStorage.setItem("searchdata", searchdata);
    if (searchdata !== "") {
      axios
        .post(`https://backend.brahmaand.space/user/search_topic_title`, {
          searchinput: searchdata,
        })
        .then(res => {
          if (res.data.data.length == "0") {
            swal("No product found");
          } else {
            const search = res.data.data[0]?.sub_category;
            if (search !== "" && search !== undefined) {
              navigate(`/productsearch/${search}`);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

    // const data = "#learning , #media , #study,  #songs, #learning ";
    // const onedata = data.split(",");
  };

  const handleEnter = event => {
    if (event.key === "Enter") {
      handlesearchtopics();
    }
  };
  const [newitem, setNewitem] = useState([]);
  useEffect(() => {
    handlesearchtopics();
    axios
      .get(`https://backend.brahmaand.space/admin/getallCategory`)
      .then(res => {
        // console.log(res.data.data);
        setNewitem(res.data.data);
      })
      .then(err => {
        // console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className="mainBg"
        style={{
          backgroundImage: `url(${backimg})`,
          width: "100%",
          padding: "0px 0px",
          backgroundSize: "cover",
        }}
      >
        <section className="text_header ">
          <Container>
            <Row>
              <Col md="6">
                <div className="py-20">
                  <h1>Struggling to Find Relevant Content?</h1>
                  <h5 className=" mx-30 ">
                    Find the best quality content across the universe with our
                    community-driven database and AI-based search engine.
                  </h5>
                </div>
              </Col>
              <Col md="6">
                <div className="hImage col">
                  <img src={Head} className="imghead" />
                </div>
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </section>
      </div>
      <section>
        <div className="searchbar">
          <div className="inputarea">
            {/* <Row
              className=" align-item-center justify-content-center"
              style={{ width: "100%" }}
            >
              <Col lg="1"></Col>
              <Col className="mt-3 mb-2" lg="10">
                <ReactSearchAutocomplete
                  items={items}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  formatResult={formatResult}
                />
              </Col>
              <Col lg="1"></Col>
            </Row> */}

            <input
              type="text"
              placeholder="Search for the top resources on any subject ... (e.g. Java) "
              className="search"
              onKeyDown={handleEnter}
              value={searchdata}
              onChange={e => {
                setSearchdata(e.target.value);
              }}
            />
          </div>
          <div className="text-center mt-3">
            <Button onClick={handlesearchtopics} className="btn btn-success">
              Search
            </Button>
          </div>
        </div>
      </section>
      <br />
      <br />
      <Hastag />

      <br />
      <br />
    </>
  );
}

export default Header;
