import React from "react";

import { Link } from "react-router-dom";

const Button = ({ link, text }) => {
  return (
    <button className="btn">
      <Link to={link}> {text}</Link>
    </button>
  );
};

export default Button;
