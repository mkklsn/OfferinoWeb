import React from 'react';
import style from '../styles/header.scss';

class HeaderStrip extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="header-strip">
                <div className="title">Offerino</div>
            </div>
        );
    }
}

module.exports = HeaderStrip;