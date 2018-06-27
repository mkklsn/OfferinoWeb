import React from 'react';
import styles from '../styles/user-auth.scss';

class UserAuth extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="user-auth">
                <button className="btn-sign-in">Sign in</button>
            </div>
        );
    }
}

module.exports = UserAuth;