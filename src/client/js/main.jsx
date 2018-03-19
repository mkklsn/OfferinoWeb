import React from 'react';
import ReactDOM from 'react-dom';
import HeaderStrip from './header.jsx';
import Content from './content.jsx';
import styles from '../styles/main.scss'

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="main">
        <HeaderStrip />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("main")
);
