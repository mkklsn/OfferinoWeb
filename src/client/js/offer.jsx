import React from 'react';
import style from '../styles/offer.scss';

class Offer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="offer">
                <div className="title word-wrap">{this.props.title}</div>
                <div className="owner word-wrap">{this.props.owner}</div>
            </div>
        );
    }
}

module.exports = Offer;