import PropTypes from 'prop-types';
import React, { Component } from 'react';
import GoRankingButton from '../components/GoRankingButton';
import Header from '../components/Header';
import PlayAgainButton from '../components/PlayAgainButton';
import './FeedbackPage.css';

class Feedback extends Component {
  render() {
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    const { history } = this.props;
    const MIN_ASSERTIONS = 3;
    return (
      <div>
        <Header />
        <section className="feedback-page">
          <p data-testid="feedback-total-score" className="score">
            Pontuação final:
            { score }
          </p>
          <p
            data-testid="feedback-total-question"
            className="assertions"
          >
            Número de acertos:
            { assertions }
          </p>
          <p data-testid="feedback-text" className="feedback-message">
            { assertions < MIN_ASSERTIONS ? 'Podia ser melhor...' : 'Mandou bem!' }
          </p>
          <PlayAgainButton history={ history } />
          <GoRankingButton history={ history } />
        </section>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Feedback;
