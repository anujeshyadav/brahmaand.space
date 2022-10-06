import { Row, Col, Container } from "react-bootstrap";

import "../styles/Footer.css";
import facebookIcon from "../assets/icons/facbook-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import { Link } from "react-router-dom";


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useContextMenu } from "../context/MenuContext";
import { useAuth } from "../context/AuthContext";

import agreement_download from "../assets/files/Dispatch305-agreement.pdf";
import Logo from "../assets/logos/logo.png"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {

    const { current_link, setCurrentLinkHelper } = useContextMenu();
    const { user, login, logout } = useAuth();

    useEffect(() => {
        // console.log(current_link);
    }, [current_link])

    return (
        <footer className="footer">

            <Container>
                <Row>

                    <Col lg="3" md="3" sm="6">
                        <div className="foot-1">
                            <Link to="#">
                                <img src={Logo} alt="" width="150px" />
                            </Link>
                            <ul>
                                <li>
                                    <Link to="#">
                                        Phone: <span>55555565656565</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Email: <span>Info@gmail.com</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Address: <span>lorem ipsum 303</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="6">
                        <div className="foot-1">
                            <h4>Popular Categories</h4>
                            <ul>
                                <li>
                                    <Link to="#">
                                        Health care
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Education
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Eat & Food
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/leaderboard">
                                       LeaderBoard
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="6">
                        <div className="foot-1">
                            <h4>Quick Liks</h4>
                            <ul>
                                <li>
                                    <Link to="/work">
                                        How It Works
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Pricing Packages
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        Our Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contactUs">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg="3" md="3" sm="6">
                        <div className="foot-1">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <Link to="/termsConditions">
                                        Terms And Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <div className="footer-bootom">
                        <Row>
                            <Col md="6">
                                <p>© Brahmaand.space 2022. All rights reserved</p>
                            </Col>
                            <Col md="6">
                                <div className="icon">
                                    <Link to="#">
                                        <FaFacebook className="it-i" />
                                    </Link>
                                    <Link to="#">
                                        <FaInstagram className="it-i" />
                                    </Link>
                                    <Link to="#">
                                        <FaYoutube className="it-i" />
                                    </Link>
                                    <Link to="#">
                                        <FaTwitter className="it-i" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
