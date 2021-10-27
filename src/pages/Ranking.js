import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { FaTrophy } from 'react-icons/fa';
import GoHomeButton from '../components/GoHomeButton';
import './RankingPage.css';

class Ranking extends Component {
  render() {
    const { players } = JSON.parse(localStorage.getItem('ranking'));
    const playersSorted = players.sort((a, b) => b.score - a.score);
    const { history } = this.props;
    return (
      <div>
        <h3 data-testid="ranking-title" className="title-rank">Ranking</h3>
        <div className="div-rank">
          <FaTrophy className="trophy" />
          <ol className="list-rank">
            { playersSorted.map(({ gravatarEmail, name, score }, index) => {
              const emailHash = md5(gravatarEmail).toString();
              const gravatarImage = `https://www.gravatar.com/avatar/${emailHash}`;
              return (
                <li key={ index } className="item-list-rank">
                  <img src={ gravatarImage } alt="Foto do jogador" />
                  <span data-testid={ `player-name-${index}` }>{ name }</span>
                  <span data-testid={ `player-score-${index}` }>{ score }</span>
                </li>
              );
            })}
          </ol>
        </div>
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
