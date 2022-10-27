import React, { useState, useEffect } from "react";
import {
  FaEdit,
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
import { BiLogOut } from "react-icons/bi";
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
      .get(`http://43.205.82.226:9000/user/getoneUser/${id}`)
      .then((response) => {
        // console.log("getdata", response.data.data);
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  }, []);

  return (
    <div>
      <div className="dropdown">
        <img
          className="imgloginb"
          src={userdata?.profileImg}
          alt="image"
          style={{ width: "50px", height: "40px", borderRadius: "50%" }}
        />
        <span style={{ color: "white" }}>Welcome, {userdata?.username}</span>
        <div className="dropdown-content">
          <Link className="userboard" to="/topbar">
            <FaEdit
              size={25}
              style={{ fontFamily: "GT Walsheim Pro" }}
              color="black"
              className="mx-3"
            />
            Edit Your Profile
          </Link>
          <Link className="userboard" to="/profilerouter">
            <FaRegHandPointRight size={25} color="black" className="mx-3 " />
            Your likes
          </Link>
          <Link
            className="userboard"
            to="/login"
            onClick={() => localStorage.removeItem("userId")}
          >
            <BiLogOut size={25} color="black" className="mx-3" />
            LogOut
          </Link>
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
