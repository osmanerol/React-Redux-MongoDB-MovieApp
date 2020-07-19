import React from 'react';
import PropTypes from 'prop-types';

const InlineError = props => {
    return (
        <div>
            <h5 style={{color:'#f44336'}}> {props.message }</h5>
        </div>
    );
};

InlineError.propTypes = {
    message:PropTypes.string.isRequired
};

export default InlineError;