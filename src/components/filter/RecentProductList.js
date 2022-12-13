import React, { useRef, useState } from "react";
// Import Swiper React components
import { Container, Row, Col, Card, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import mdicon1 from "../../assets/icons/mdicon-1.png";
import mdicon2 from "../../assets/icons/mdicon-2.png";
import createricon from "../../assets/icons/createricon.png";
import usericon from "../../assets/icons/usericon.png";
import typeicon from "../../assets/icons/typeicon.png";
import formaticon from "../../assets/icons/formaticon.png";
import diffculty from "../../assets/icons/diffculty.png";
import Allpromotion from "./Allpromotion";
import StarsRating from "stars-rating";
import languageicon from "../../assets/icons/languageicon.png";
import ProgressBar from "@ramonak/react-progress-bar";
import yearicon from "../../assets/icons/yearicon.png";
import submiticon from "../../assets/icons/submiticon.png";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Moment from "react-moment";
import PrettyRating from "pretty-rating-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/Filter.css";
// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import business from "../../images/business.png";

function RecentProductList(args) {
  const [modalsuggestion, setModalsuggestion] = useState(false);

  const togglesuggestion = () => setModalsuggestion(!modalsuggestion);
  const [rating, setRating] = useState("");
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    },
  };
  const colors = {
    star: ["#d9ad26", "#d9ad26", "#434b4d"],
  };
  return (
    <>
      <Container>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            980: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 20,
            },
            820: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 20,
            },
            780: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 28,
            },
            320: {
              slidesPerView: 1,
              direction: "horizontal",
              spaceBetween: 25,
            },
          }}
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="product-grid8">
              <div class="product-image8">
                <Link to="#" onClick={togglesuggestion}>
                  <img src="" alt="" />
                </Link>
              </div>
              <div class="product-content">
                <ul class="rating">
                  <li>
                    <Link to="#" className="btt">
                      #best
                    </Link>
                    <Link to="#" className="btt">
                      #study
                    </Link>
                  </li>
                </ul>
                <h3>Java Tutorials For Beginners In Hindi</h3>
                <h5>
                  <span>By</span> CodeWithHarry
                </h5>
                <p>
                  Introduction to Java + Installing Java JDK and IntelliJ IDEA
                  for Java 19:00 Basic Structure of a Java Program:
                  Understanding our First JavaHello World Program 14:09
                </p>
                <div className="">
                  <ul class="rating">
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <li class="fa fa-star">
                      <FaStar />
                    </li>
                    <span>(4.0)</span>
                    <span className="ft-star">12.2k Reviews</span>
                  </ul>

                  <ul class="rating">
                    <li>
                      <Link to="#" className="tag">
                        2022
                      </Link>
                      <Link to="#" className="tag">
                        #Java
                      </Link>
                      <Link Link to="#" className="tag">
                        #Android
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

export default RecentProductList;
