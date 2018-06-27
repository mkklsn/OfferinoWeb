import React from 'react';
import Offer from './offer.jsx';
import 'whatwg-fetch';
import style from '../styles/feed.scss';

class Feed extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            offers: [] 
        };
    }

    componentDidMount(){
        fetch("main/offers", {headers: new Headers({
            "Accept": "application/json"
        })})
        .then(response => response.json())
        .then(items => this.setState({ offers: items }));

        //add error handling
    }

    render(){
        //add error handling

        let feed = this.state.offers.map((item) => 
            <Offer title={item.Title} owner={item.Owner} />
        );

        return(
            <div className="feed">
                {feed}
            </div>
        );
    }
}

module.exports = Feed;