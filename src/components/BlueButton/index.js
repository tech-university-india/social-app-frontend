import React from "react";
import PropTypes from 'prop-types'
import "./index.css";

function BlueButton(props) {
  return (
    <div>
      <div className="follow-button">
        <div className="follow-button-text">{props.text}</div>
      </div>
    </div>
  );
}

export default BlueButton;

BlueButton.propTypes = {
    text: PropTypes.string
}
