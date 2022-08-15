import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Fragment>
      {options.map(item => (
        <button
          key={item}
          className={styles[item]}
          type="button"
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </Fragment>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
