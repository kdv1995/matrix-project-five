import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/UI/Button/Button.module.scss';

function Submit({ title, onClick }) {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      {title}
    </button>
  );
}

Submit.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Submit.defaultProps = {
  onClick: PropTypes.func,
};
export default Submit;
