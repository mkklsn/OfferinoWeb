import React from 'react';
import iconSet from './icons.js';
import style from '../styles/loading.scss';

var library;
var FontAwesomeIcon;

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        import(/* webpackChunkName: "fa-svg-core" */ '@fortawesome/fontawesome-svg-core').then(module => {
            library = module.library;
            library.add(iconSet);
        });

        import(/* webpackChunkName: "fa-svg-core" */ '@fortawesome/react-fontawesome').then(module => {
            FontAwesomeIcon = module.FontAwesomeIcon;
            this.setState({loaded: true});
        });
    }

    render() {
        let divClass = this.props.isFullPage && 'loading-page';

        let icon = this.state && this.state.loaded
            ? <FontAwesomeIcon icon="circle-notch" spin />
            : '';

        return (
            <div className={divClass}>
                Loading... { icon }
            </div>
        );
    }
}

module.exports = Loading;