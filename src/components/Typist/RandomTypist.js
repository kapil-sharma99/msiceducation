import React from "react";
import Typist from "react-typist";
import "./RandomTypist.css";

const RandomTypist = () => {
  return (
    <>
      <div className="container">
        <div className="row typist">
          <div className="col">
            <Typist
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={40}
              stdTypingDelay={30}
            >
              <span className="typist-heading">
                Manish Sharma's Institute of Commerce
              </span>
              <br />
              <Typist.Delay ms={500} />
              <span className="typist-description">Excel in Commerce</span>
              <Typist.Backspace count={17} delay={500} />
              <span className="typist-description">
                Upgrade your education.
              </span>
              <Typist.Backspace count={23} delay={500} />
              <span className="typist-description">
                Get your education Today!!
              </span>
              <Typist.Backspace count={26} delay={500} />
              <span className="typist-description">Join us now!</span>
            </Typist>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default RandomTypist;
