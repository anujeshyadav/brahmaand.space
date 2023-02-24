import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import {
  FaEdit,
  FaBell,
  FaKey,
  FaRegHandPointRight,
  FaInfinity,
  FaChartBar,
} from "react-icons/fa";
import axios from "axios";
import swal from "sweetalert";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { BiLogOut, BiWindowClose } from "react-icons/bi";
import avatar2 from "../images/avatar2.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function UserPage({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [userdata, setUserData] = useState({});
  const id = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`https://backend.brahmaand.space/user/getoneUser/${id}`)
      .then((response) => {
        // console.log("getdata", response.data.data);
        setUserData(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data.data);
      });
  }, []);

  return (
    <div>
      <div className="dropdown">
        <img
          className="imgloginb"
          src={userdata?.profileImg}
          alt="image"
          style={{ width: "50px", height: "42px", borderRadius: "50%" }}
        />
        <span style={{ color: "white" }}>
          Welcome,
          {userdata.display_name === undefined ? (
            <>{userdata?.username}</>
          ) : (
            <>{userdata?.display_name}</>
          )}{" "}
        </span>
        <div className="dropdown-content">
          <Row>
            <Link className="userboard" to="/topbar">
              <FaEdit
                size={25}
                style={{ fontFamily: "GT Walsheim Pro" }}
                color="black"
                className="mx-3"
              />
              Edit Your Profile
            </Link>
          </Row>
          <Row>
            <Link className="userboard" to="/resetpassword">
              <FaKey
                size={25}
                style={{ fontFamily: "GT Walsheim Pro" }}
                color="black"
                className="mx-3"
              />
              Reset Password
            </Link>
          </Row>
          <Row>
            <Link className="userboard" to="/notification">
              <FaBell
                size={25}
                style={{ fontFamily: "GT Walsheim Pro" }}
                color="black"
                className="mx-3"
              />
              Notifications
            </Link>
          </Row>
          <Row>
            <Link className="userboard" to="/Bookmark">
              <FaRegHandPointRight size={25} color="black" className="mx-3 " />
              Your Bookmark's
            </Link>
          </Row>
          <Row>
            <Link
              className="userboard"
              to="/login"
              onClick={() => localStorage.removeItem("userId")}
            >
              <BiLogOut size={25} color="black" className="mx-3" />
              LogOut
            </Link>
          </Row>
        </div>
      </div>
      {/* <div className="d-flex loginboard ">
        <Dropdown
          className="loginboard "
          isOpen={dropdownOpen}
          toggle={toggle}
          direction={direction}
        >
          <DropdownToggle caret>
            <img
              className="imgloginb"
              src={userdata?.profileImg}
              alt="image"
              className=" "
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            Welcome, {userdata?.username}
          </DropdownToggle>
          <DropdownMenu className="dropmenuitems" {...args}>
            <DropdownItem>
              <Link className="userboard" to="/topbar">
                <FaEdit
                  size={25}
                  style={{ fontFamily: "GT Walsheim Pro" }}
                  color="black"
                  className="mx-3"
                />
                Edit Your Profile
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link className="userboard" to="/profilerouter">
                <FaRegHandPointRight
                  size={25}
                  color="black"
                  className="mx-3 "
                />
                Your likes
              </Link>
            </DropdownItem>

            <hr />
            <DropdownItem>
              <Link
                className="userboard"
                to="/login"
                onClick={() => localStorage.removeItem("userId")}
              >
                <BiLogOut size={25} color="black" className="mx-3" />
                LogOut
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div> */}
    </div>
  );
}

export default UserPage;
