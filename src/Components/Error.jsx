import React from 'react';
import propTypes from 'prop-types';

const Error = ({ mensaje }) => {
     return (

          <p className="red darken-4 error">{mensaje}</p>

     );
}

Error.propTypes = {
     mensaje: propTypes.string.isRequired
}

export default Error;