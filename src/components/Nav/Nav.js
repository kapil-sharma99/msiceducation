import React, { Component } from "react";
import logo from "../../assets/images/manish_logo.jpg";
import "./Nav.css";
import { MenuItems } from "../Button/MenuItems";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems d-flex align-items-center sticky-top">
        <h1 className="Navbar-logo">
          <img src={logo} /> MSIC
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "Nav-menu active" : "Nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li className="nav_li" key={index}>
                <NavLink
                  className={item.cName}
                  onClick={this.handleClick}
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
