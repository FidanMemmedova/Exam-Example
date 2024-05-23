import React from "react";
import style from "./Button.module.scss";
const Button = ({ onclick, buttonText }) => {
  return <button onClick={onclick}>{buttonText}</button>;
};

export default Button;
