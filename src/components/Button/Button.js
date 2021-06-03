import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = (props) => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[0];
  return (
    <NavLink
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      to="/msic"
    >
      {props.children}
    </NavLink>
  );
};
