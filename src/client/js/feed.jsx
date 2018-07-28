import React from 'react';
import Offer from './offer.jsx';
import Loading from './loading.jsx';
import GetOffers from './feedQuery.js';
import style from '../styles/feed.scss';

class Feed extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            offers: []
        };
    }

    componentDidMount(){
        if(!this.state.feedObject){
            this.state.feedObject = document.querySelector('.feed');
            this.state.feedObject.addEventListener('scroll', this.scrollHandler);
        }

        this.setState({
            itemCountToSkip: 0,
            offers: this.state.offers,
            feedObject: this.state.feedObject
        });
        
        GetOffers(
            this.state.itemCountToSkip,
            (items) => this.updateState(items)
        );
    }

    render(){
        return(
            <div className="feed">
                {this.processFeedItems()}
            </div>
        );
    }

    processFeedItems = () => {
        if(this.state.offers.length > 1){
            return this.state.offers.map((item, i) => 
                <Offer key={i} title={item.Title} owner={item.Owner} faicon={item.FaIcon} />
            );
        }
        else {
            let feed = [];
            for(let x = 0; x < 7; x++) {
                feed.push(<Offer key={x} title={<Loading />} faicon={['','']} />);
            }
            return feed;
        }
    }

    updateState = (items) => {
        let { offers, itemCountToSkip } = this.state;

        if(items.length < 1){
            this.state.feedObject.removeEventListener('scroll', this.scrollHandler);

            this.setState({
                offers: offers,
                itemCountToSkip: itemCountToSkip
            });
            return;
        }

        offers = offers.concat(items);
        this.setState({
            offers: offers,
            itemCountToSkip: offers.length
        });
    }

    scrollHandler = () => {
        if(!this.state.feedObject){
            return;
        }

        let feed = this.state.feedObject;
        if(feed.scrollTop === (feed.scrollHeight - feed.offsetHeight)){
            GetOffers(
                this.state.itemCountToSkip + 30,
                (items) => this.updateState(items)
            );
        }
    }
}

module.exports = Feed;