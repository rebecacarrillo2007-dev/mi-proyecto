import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ lang, url, fcolor, scolor }) => {
  return (
    <div
      className="card"
      style={{
        background: `${fcolor}`,
        color: `${scolor}`,
        border: `2px solid ${scolor}`
      }}
    >
      <h2>{lang}</h2>
      <img src={url} alt={lang} />
    </div>
  );
};

// Validación de props
Card.propTypes = {
  lang: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fcolor: PropTypes.string,
  scolor: PropTypes.string
};

export default Card;
