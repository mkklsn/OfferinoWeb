import React from 'react';
import HeaderStrip from './header.jsx';
import HeaderStripOut from './header_logged_out.jsx';
import Content from './content.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import icons from './icons.js';
import styles from '../styles/main.scss';

library.add(icons);

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {    
    return (
      <div className="main">
          <HeaderStrip {...this.props} />
          <Content />
      </div>
    );
  }
}

module.exports = Main;