import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../styles/loading.scss';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let divClass = this.props.isFullPage && 'loading-page';
        return (
            <div className={divClass}>
                Loading... <FontAwesomeIcon icon="circle-notch" spin />
            </div>
        );
    }
}

module.exports = Loading;