import React, { useRef, useState } from "react";
// Import Swiper React components
import { Container, Row, Col, Card, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

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

function RecentProductList() {
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
                <Link to="#">
                  <img src={business} alt="" />
                </Link>
                <span class="product-discount-label">
                  <FaHeart />
                </span>
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
          <SwiperSlide>
            <div class="product-grid8">
              <div class="product-image8">
                <Link to="#">
                  <img src={business} alt="" />
                </Link>
                <span class="product-discount-label">
                  <FaHeart />
                </span>
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
          <SwiperSlide>
            <div class="product-grid8">
              <div class="product-image8">
                <Link to="#">
                  <img src={business} alt="" />
                </Link>
                <span class="product-discount-label">
                  <FaHeart />
                </span>
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
          {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </Container>
    </>
  );
}

export default RecentProductList;
