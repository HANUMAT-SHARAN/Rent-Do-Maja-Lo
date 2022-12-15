import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/carousel.css";

export default function HomePageCarousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div mt={60}
      className="sliderdiv"
      style={{ marginLeft: "80px", marginRight: "80px" }}
    >
      <Slider  {...settings} autoplay={true}>
        <img
          style={{ width: "1000px" }}
          src="https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg"
          alt=""
        />

        <img
          style={{ width: "1000px" }}
          src="https://s.rmjo.in/AirOKWeb%20(1).png"
          alt=""
        />

        <img
          style={{ width: "1000px" }}
          src={"https://s.rmjo.in/AC-Offer-Banner-Web-.jpg"}
          alt=""
        />

        <img
          style={{ width: "1000px" }}
          src={"https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg"}
          alt=""
        />

        <img
          style={{ width: "1000px" }}
          src={"https://s.rmjo.in/WP-Web.png"}
          alt=""
        />
      </Slider>
    </div>
  );
}
