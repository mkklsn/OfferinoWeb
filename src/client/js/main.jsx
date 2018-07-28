import React from 'react';
import HeaderStrip from './header.jsx';
import Content from './content.jsx';
import styles from '../styles/main.scss';

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