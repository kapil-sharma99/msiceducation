import React from "react";
import logo from "../../assets/images/manish_logo.jpg";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container container_footer p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.youtube.com/channel/UCF9uoH4gE-Lls5cAiHoxhYw"
              role="button"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/msic2414"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/ManishS26465261"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/msiceducation"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/manish-sharma-0a4b0b212"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </section>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="row">
                <h1>
                  <img className="img__footer" src={logo} />{" "}
                  <strong style={{ borderTop: "3vh" }}>MSIC</strong>
                </h1>
              </div>
              <section className="mb-6">
                <p>
                  <strong>MSIC</strong> : One place for students to excel in
                  Commerce, Provide quality learning. Encourages Spirit and
                  Makes dreams come true
                </p>
              </section>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="row footer_nav">
                <h3>
                  <strong>Menu</strong>
                </h3>
                <NavLink className="footer_nav_item" to="/home">
                  Home
                </NavLink>
                <NavLink className="footer_nav_item" to="/about">
                  About Us
                </NavLink>
                <NavLink className="footer_nav_item" to="/courses">
                  Courses
                </NavLink>
                <NavLink className="footer_nav_item" to="tutorial">
                  Tutorial Video
                </NavLink>
                <NavLink className="footer_nav_item" to="/msic">
                  MSIC App
                </NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer_contact row">
                <h3>
                  <strong>Contact</strong>
                </h3>
                <div>
                  <i className="footer_contact_item fas fa-phone"></i>
                  <span className="footer_contact_text">: +91 9937383428</span>
                </div>
                <div>
                  <i className="footer_contact_item fas fa-search-location"></i>
                  <span className="footer_contact_text">
                    : Balu Bazar, Palit Para lane, Cuttack
                  </span>
                </div>
                <div>
                  <i className="footer_contact_item fas fa-envelope"></i>
                  <span className="footer_contact_text">
                    : manish_5989@yahoo.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Copyright © 2020 India:
          <a className="text-white" href="https://msiceducation.in/">
            MSIC
          </a>
          . All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
