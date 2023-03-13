import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function WhiteButton(props) {
    return (
        <div>
            <div className="white-button">
                <div className="white-button-text">{props.text}</div>
            </div>
        </div>
    );
}

export default WhiteButton;

WhiteButton.propTypes = {
    text: PropTypes.string
};
