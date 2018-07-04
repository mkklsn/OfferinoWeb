import React from 'react';
import style from '../styles/header.scss';

class HeaderStrip extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.setComponentState();
    }

    componentWillReceiveProps(){
        this.setComponentState();
    }

    render(){
        return(
            <div className="header-strip">
                <div className="title">Offerino</div>
                <div className="user-profile">
                    {this.getUserAuth()}
                </div>
            </div>
        );
    }

    setComponentState = () => {
        const { userProfile, getProfile, isAuthenticated } = this.props.auth;

        this.setState({ profile: undefined});

        if(!isAuthenticated())
        return;

        if (!userProfile) {
            getProfile((err, profile) => {
              this.setState({ profile });
            });
        } 
        else {
            this.setState({ profile: userProfile });
        }
    }

    login = () => {
        this.props.auth.login();
    }

    getUserAuth = () => {
        return this.state.profile ? 
            <span>{this.state.profile.nickname}</span> :
            <button className="btn-sign-in" onClick={this.login}>
                Sign in
            </button>
    }
}

module.exports = HeaderStrip;