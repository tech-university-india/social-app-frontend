import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function BlueBorderButton(props) {
    return (
        <div>
            <div className="blue-border-button">
                <div className="blue-border-button-text">{props.text}</div>
            </div>
        </div>
    );
}

export default BlueBorderButton;

BlueBorderButton.propTypes = {
    text: PropTypes.string
};
