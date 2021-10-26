import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import '../pages/GamePage.css';

class ButtonNext extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        className="btn-next"
        type="button"
        data-testid="btn-next"
        onClick={ handleClick }
      >
        Próxima
        <FaAngleDoubleRight className="icon-btn-next" />
      </button>
    );
  }
}

ButtonNext.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonNext;
