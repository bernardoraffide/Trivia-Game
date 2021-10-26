import md5 from 'crypto-js/md5';
import React, { Component } from 'react';
import '../pages/GamePage.css';

class Header extends Component {
  render() {
    const { player: { name,
      gravatarEmail, score } } = JSON.parse(localStorage.getItem('state'));
    const emailHash = md5(gravatarEmail).toString();
    const gravatarImage = `https://www.gravatar.com/avatar/${emailHash}`;
    return (
      <header className="header">
        <img
          className="image-header"
          alt="foto de perfil"
          data-testid="header-profile-picture"
          src={ gravatarImage }
        />
        <h2 data-testid="header-player-name" className="name-header">{ name }</h2>
        <h3 className="poits-header">
          Pontos:
          <span data-testid="header-score">{score}</span>
        </h3>
      </header>
    );
  }
}

export default Header;
