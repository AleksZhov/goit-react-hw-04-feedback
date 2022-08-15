import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Fragment>
      <p className="StatisticsGood">Good:{good}</p>
      <p className="StatisticsNeutral">Neutral: {neutral}</p>
      <p className="StatisticsBad">Bad: {bad}</p>
      <p className="StatisticsTotal">Total: {total}</p>
      <p className="StatisticsPercentageGood">
        Positive feedback: {positivePercentage}%
      </p>
    </Fragment>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Statistics;
