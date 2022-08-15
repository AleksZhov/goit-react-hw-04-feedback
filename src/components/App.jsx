import Sections from './Sections/Sections';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import NoFeedback from './NoFeedback/NoFeedback';
import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = btn => {
    if (btn === 'good') {
      setGood(good + 1);
    }

    if (btn === 'neutral') {
      setNeutral(neutral + 1);
    }

    if (btn === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const goodPercentage = (good * 100) / countTotalFeedback();

    if (isNaN(goodPercentage)) {
      return 'For the moment there is no statistics';
    }
    return goodPercentage.toFixed(1);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Sections title="Please leave feedback" sectionClassName="feedbackTitle">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={increment}
        />
      </Sections>
      <Sections title="Statistics" sectionClassName="statisticsTitle">
        {countTotalFeedback() === 0 ? (
          <NoFeedback />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Sections>
    </div>
  );
};

export default App;
