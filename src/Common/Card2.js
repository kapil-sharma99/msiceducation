import React from "react";
import "./Card2.css";

const Card2 = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-12 mx-auto">
        <div
          className="cards"
          style={{
            borderRadius: "12px",
          }}
        >
          <img
            className="card2-img-top rounded-circle shadow rounded img_rot"
            src={props.img}
            alt="Card image cap"
          />
          <div className="card-body">
            <h4
              className="card-title text-center cardd-content"
              style={{ height: "4vh", color: "#4ad9e4", fontSize: "1.8rem" }}
            >
              <strong>{props.title}</strong>
            </h4>
            <p className="card-text test_content">{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
