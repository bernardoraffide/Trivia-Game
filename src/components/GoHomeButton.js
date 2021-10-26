import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaRedoAlt } from 'react-icons/fa';
import '../pages/RankingPage.css';

class GoHomeButton extends Component {
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
          className="btn-play-again"
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleClick }
        >
          Jogar novamente
          <FaRedoAlt className="return" />
        </button>
      </div>
    );
  }
}

GoHomeButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default GoHomeButton;
