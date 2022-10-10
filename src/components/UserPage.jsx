import React, { useState } from "react";
import {
  FaEdit,
  FaRegHandPointRight,
  FaInfinity,
  FaChartBar,
} from "react-icons/fa";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { BiLogOut } from "react-icons/bi";

//   import { Navbar, Nav, Container, Col, Row } from "react-bootstrap"
import avatar2 from "../images/avatar2.png";
import { Link, NavLink } from "react-router-dom";

import "../styles/Navbar.css";

function UserPage({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <div className="d-flex loginboard ">
        <Dropdown
          className="loginboard"
          isOpen={dropdownOpen}
          toggle={toggle}
          direction={direction}
        >
          <DropdownToggle caret>
            <img
              className="imgloginb"
              src={avatar2}
              alt="image"
              style={{ width: "50x", height: "50px" }}
            />
            Mr.abcde
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
      </div>
    </div>
  );
}

export default UserPage;
