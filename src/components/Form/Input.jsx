import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Form/Input.module.scss';

function Input({ title, value, onChange }) {
  return (
    <div className={styles.InputContainer}>
      <div>{title}</div>
      <input className={styles.Input} type="number" value={value} onChange={onChange} />
    </div>
  );
}
Input.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  title: PropTypes.string,
  onChange: PropTypes.func,
};
export default Input;
