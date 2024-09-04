import React from "react";

const Button = ({ title, activeClass, _callback }) => {
  const handleClick = () => {
    console.log(`Button clicked: ${title}`); // Debug log
    _callback(); // Ensure this function is being called
  };

  return (
    <button className={activeClass} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
