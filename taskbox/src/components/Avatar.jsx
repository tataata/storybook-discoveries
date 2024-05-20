import React from "react";
import PropTypes from "prop-types";

import "./Avatar.css";

export default function Avatar({
  name = "Gabriela Ponto",
  src = "https://placehold.co/200",
  isRounded = false,
}) {
  return (
    <div className="avatar">
      {/* Use terni 
        Use ternary operator to add 
        https://react.dev/learn/conditional-rendering#conditional-ternary-operator--

        e.g. className={`default ${isActive ? "rounded" : ""}`}
      
      */}
      <img src={src} alt={name} className={`${isRounded ? "rounded" : ""}`} />
      <div className="name">{name}</div>
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isRounded: PropTypes.bool,
};
