import md5 from 'crypto-js/md5';
import React, { Component } from 'react';
import '../pages/GamePage.css';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { hidden } = this.props;
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
        <h1 data-testid="header-player-name" className="name-header">{ name }</h1>
        <p hidden={ hidden } className="poits-header">
          Pontos:
          {' '}
          <span data-testid="header-score">{ score }</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  hidden: PropTypes.bool,
};

Header.defaultProps = {
  hidden: false,
};

export default Header;
