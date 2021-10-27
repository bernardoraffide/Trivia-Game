import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../pages/FeedbackPage.css';
import { FaRedoAlt } from 'react-icons/fa';

class PlayAgainButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div>
        <button
          className="button-play-again"
          type="button"
          data-testid="btn-play-again"
          onClick={ this.handleClick }
        >
          Jogar novamente
          <FaRedoAlt className="return" />
        </button>
      </div>
    );
  }
}

PlayAgainButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PlayAgainButton;
