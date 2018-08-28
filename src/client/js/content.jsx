import React from 'react';
import Feed from './feed.jsx';
import style from '../styles/content.scss';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="content">
                <Feed />
            </div>  
        );
    }
}

module.exports = Content;