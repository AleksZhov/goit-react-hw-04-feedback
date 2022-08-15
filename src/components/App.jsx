import Sections from './Sections/Sections';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import NoFeedback from './NoFeedback/NoFeedback';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = btn => {
    this.setState(prevState => ({ [btn]: prevState[btn] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const goodPercentage = (good * 100) / this.countTotalFeedback();

    if (isNaN(goodPercentage)) {
      return 'For the moment there is no statistics';
    }
    return goodPercentage.toFixed(1);
  };

  render() {
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
        <Sections
          title="Please leave feedback"
          sectionClassName="feedbackTitle"
        >
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.increment}
          />
        </Sections>
        <Sections title="Statistics" sectionClassName="statisticsTitle">
          {this.countTotalFeedback() === 0 ? (
            <NoFeedback />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Sections>
      </div>
    );
  }
}

export default App;
