import React from 'react';
import Offer from './offer.jsx';
import style from '../styles/feed.scss';

class Feed extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        this.props.feed = [];
        this.props.offers.map((item) => {
            this.props.feed.push(<Offer title={item.title} owner={item.owner} />);
        });

        return(
            <div className="feed">
                {this.props.feed}
            </div>
        );
    }
}

module.exports = Feed;