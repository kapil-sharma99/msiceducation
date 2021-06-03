import React from "react";
import Background1 from "../assets/images/manish_back.jpg";
import Background2 from "../assets/images/manish_back2.jpg";
import Background3 from "../assets/images/manish_back3.jpg";
import Background4 from "../assets/images/manish_back4.jpg";
import Background5 from "../assets/images/manish_back5.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./Carousel2.css";

const options = {
  items: 1,
  loop: true,
  autoplay: true,
  dots: false,
  nav: false,
};

const Carousel2 = () => {
  return (
    <div className="col-12 col-sm-10 col-md-10 col-lg-6 col-xs-10">
      <div className="bg-transparent container_carousel2">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="items2 text-center">
            <img className="carousel2__img" src={Background3} alt="Photo 1" />
          </div>
          <div className="items2 text-center">
            <img className="carousel2__img" src={Background2} alt="photo 2" />
          </div>
          <div className="items2 text-center">
            <img className="carousel2__img" src={Background1} alt="photo 3" />
          </div>
          <div className="items2 text-center">
            <img className="carousel2__img" src={Background4} alt="photo 3" />
          </div>
        </OwlCarousel>
      </div>
      <br />
    </div>
  );
};

export default Carousel2;
