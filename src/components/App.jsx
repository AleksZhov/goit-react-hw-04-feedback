import Sections from './Sections/Sections';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import NoFeedback from './NoFeedback/NoFeedback';
import React, { useState } from 'react';

const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const increment = btn => {
    setOptions(prevState => ({ ...prevState, [btn]: prevState[btn] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const goodPercentage = (options.good * 100) / countTotalFeedback();

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
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Sections>
    </div>
  );
};

export default App;
