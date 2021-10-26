import PropTypes from 'prop-types';
import React, { Component } from 'react';
import GoRankingButton from '../components/GoRankingButton';
import Header from '../components/Header';
import PlayAgainButton from '../components/PlayAgainButton';

class Feedback extends Component {
  render() {
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    const { history } = this.props;
    const MIN_ASSERTIONS = 3;
    return (
      <div>
        <Header hidden="true" />
        <h2 data-testid="feedback-text">
          { assertions < MIN_ASSERTIONS ? 'Podia ser melhor...' : 'Mandou bem!' }
        </h2>
        <p>
          Você acertou
          {' '}
          <span data-testid="feedback-total-question">{ assertions }</span>
          {' '}
          pergunta(s)!
        </p>
        <p>
          E fez
          {' '}
          <span data-testid="feedback-total-score">{ score }</span>
          {' '}
          pontos!
        </p>
        <PlayAgainButton history={ history } />
        <GoRankingButton history={ history } />
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
