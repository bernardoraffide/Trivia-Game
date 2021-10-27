import PropTypes from 'prop-types';
import React, { Component } from 'react';
import GoRankingButton from '../components/GoRankingButton';
import PlayAgainButton from '../components/PlayAgainButton';
import Header from '../components/Header';
import './FeedbackPage.css';

class Feedback extends Component {
  render() {
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    const { history } = this.props;
    const MIN_ASSERTIONS = 3;
    return (
      <div>
        <Header hidden="true" />
        <section className="feedback-page">
          <h2 className="title-feedback">Resultado</h2>
          <h2 data-testid="feedback-text" className="feedback-message">
            { assertions < MIN_ASSERTIONS ? 'Podia ser melhor...' : 'Mandou bem!' }
          </h2>
          <p className="assertions">
            Você acertou
            {' '}
            <span data-testid="feedback-total-question">{ assertions }</span>
            {' '}
            pergunta(s)!
          </p>
          <p className="score">
            E fez
            {' '}
            <span data-testid="feedback-total-score">{ score }</span>
            {' '}
            pontos!
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
