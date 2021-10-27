import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../pages/FeedbackPage.css';
import { FaMedal } from 'react-icons/fa';

class GoRankingButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    return (
      <button
        className="button-ranking"
        type="button"
        data-testid="btn-ranking"
        onClick={ this.handleClick }
      >
        Ranking
        <FaMedal className="icon-ranking" />
      </button>
    );
  }
}

GoRankingButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default GoRankingButton;
