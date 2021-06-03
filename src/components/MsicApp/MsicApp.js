import React from "react";
import Card4 from "../../Common/Card4";
import "./MsicApp.css";

const MsicApp = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center course">
          <strong className="highlighted">Mobile App Features</strong>
        </h1>
        <div
          className="container container_app_btn"
          style={{ marginTop: "3vh" }}
        >
          <a
            class="app-btn_app blu_app flex_app vert"
            href="https://play.google.com/store/apps/details?id=co.varys.idhpp"
          >
            <i class="fab fa-google-play btn_i"></i>
            <p>
              Get it on <br /> <span class="big-txt">Google Play</span>
            </p>
          </a>
        </div>
      </div>
      <Card4 />
    </>
  );
};

export default MsicApp;
