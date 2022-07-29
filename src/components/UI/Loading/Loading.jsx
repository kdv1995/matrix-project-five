import React from 'react';
import PropTypes from 'prop-types';

function Loading({ title }) {
  return <h3 style={{ textAlign: 'center', color: 'yellow' }}>{title}</h3>;
}

Loading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Loading;
