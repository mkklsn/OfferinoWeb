import React from 'react';
import OfferIconStrip from './offerIconStrip.jsx';
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
                {this.props.faicon && <OfferIconStrip icon={[this.props.faicon[0],this.props.faicon[1]]} />}
            </div>
        );
    }
}

module.exports = Offer;