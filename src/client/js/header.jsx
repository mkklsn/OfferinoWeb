import React from 'react';
import UserAuth from '../js/user-auth.jsx';
import style from '../styles/header.scss';

class HeaderStrip extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="header-strip">
                <div className="title">Offerino</div>
                <UserAuth />
            </div>
        );
    }
}

module.exports = HeaderStrip;