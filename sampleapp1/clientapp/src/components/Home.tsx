import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Home</h1>
        <p>Lorem b ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue est quis sapien facilisis eleifend. Nunc euismod congue mauris. Vivamus maximus id augue eu scelerisque. Morbi tempus neque in nunc aliquam, quis rhoncus nibh facilisis. In in condimentum mauris, eu suscipit ex. Sed ultrices purus interdum quam luctus efficitur. Praesent consectetur, metus vel ornare viverra, mauris odio elementum erat, eget euismod mauris sem sed justo. Duis tempus dignissim eros, ac vestibulum ex placerat et. Fusce nisl ipsum, scelerisque eu hendrerit a, finibus at neque.</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
