import React from 'react';
import ReactDOM from 'react-dom';
import HeaderStrip from './header.jsx';
import Content from './content.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faUtensils, faShoppingCart, faPalette, 
  faDumbbell, faTshirt, faQuestionCircle 
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/main.scss';

library.add(faUtensils, faShoppingCart, faPalette, faDumbbell, faTshirt, faQuestionCircle);

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
  document.getElementById("app")
);
