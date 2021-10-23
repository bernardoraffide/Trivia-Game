import PropTypes from 'prop-types';
import React, { Component } from 'react';
import GoHomeButton from '../components/GoHomeButton';

class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <GoHomeButton history={ history } />
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Ranking;
