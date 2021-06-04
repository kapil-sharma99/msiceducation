import React from "react";
import Nikhil from "../assets/images/nikhil.jpeg";
import Suraj from "../assets/images/suraj.jpeg";
import Rohit from "../assets/images/rohit.jpg";
import Sahil from "../assets/images/sahil.jpg";
import Raghav from "../assets/images/raghav.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="col-12 col-sm-12">
      <div className="bg-dark container_carousel">
        <br />
        <br />
        <div className="home__dash">
          <p className="align-items-center"></p>
        </div>
        <h2 className="carousel_heading text-center">What our Students say</h2>
        <OwlCarousel className="owl-theme" items="1" loop autoplay dots>
          <div className="items text-center">
            <p>
              " Being a student of MSIC, I feel too confident to crack CA Exams.
              The quality of lectures taught in MSIC is fantastic and I also
              want to appreciate the expert faculty members. They have explained
              every single topic in detail and very effectively. Also, regular
              assignments are helping me to get command on the subject."
            </p>
            <img
              className="rounded-circle mx-auto d-block z-depth-2"
              src={Rohit}
              alt="Rohit"
            />
            <h2>CA Rohit Sharma</h2>
            <span>Charted Accountant</span>
          </div>
          <div className="items text-center">
            <p>
              " MSIC is a phenomenal place to study at. Manish Sir simplifies
              the concept to a huge extent so that it becomes a part of your
              life. You are cared for as a part of a large family and apart from
              scoring good in exams ,you also understand how to do well in your
              life."
            </p>
            <img
              className="rounded-circle mx-auto d-block z-depth-2"
              src={Sahil}
              alt="Sahil"
            />
            <h2>CA Sahil Jain</h2>
            <span>Charted Accountant</span>
          </div>
          <div className="items text-center">
            <p>
              " Manish Sharma sir has successfully nutured students for more
              than 15 years now. His simplicit approach to concepts of commerce
              makes it very easy for students to understand and retain the
              course contents. He is always ready to go out of his way to help
              students both academically and in personal development. "
            </p>
            <img
              className="rounded-circle mx-auto d-block z-depth-2"
              src={Nikhil}
              alt="Nikhil"
            />
            <h2>CA Nikhil Chandak</h2>
            <span>Charted Accountant</span>
          </div>
          <div className="items text-center">
            <p>
              " The building block of evey student is very essential to shape
              their career. And I will be ever grateful to Manish Sir for having
              laid such a strong foundation. The best part of his teaching was
              the way he used to clear our doubts. It was hilarous yet very
              effective which made each student feel comfortable to voice out
              there ideas confidently. "
            </p>
            <img
              className="rounded-circle mx-auto d-block z-depth-2"
              src={Suraj}
              alt="Suraj"
            />
            <h2>CA CS Suraj Mundhra</h2>
            <span>Charted Accountant</span>
          </div>
          <div className="items text-center">
            <p>
              " I will forever be indebted to Manish sir, for the way he built
              up my foundation in commerce. Not only were his classes helpful
              for my board exams, but in CA Foundation, and even in CA
              Intermediate. I find it easier to understand the advanced level,
              because of my strong understanding of the basics. He made
              Accountancy extremely easy for me. "
            </p>
            <img
              className="rounded-circle mx-auto d-block z-depth-2"
              src={Raghav}
              alt="Raghav"
            />
            <h2>Raghav Choudhary</h2>
            <span>CA foundation: AIR-18</span>
          </div>
        </OwlCarousel>

        <br />
      </div>
    </div>
  );
};

export default Carousel;
