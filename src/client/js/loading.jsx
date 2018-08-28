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
        if(!this.state || !this.state.loaded){
            this.loadModules();
        }
    }

    render() {
        const divClass = this.props.isFullPage && 'loading-page',
            icon = this.state && this.state.loaded
                ? <FontAwesomeIcon icon="circle-notch" spin />
                : '';

        return (
            <div className={divClass}>
                Loading... { icon }
            </div>
        );
    }

    loadModules = async () => {
        const coreModule = await import(/* webpackChunkName: "fa-svg-core" */ '@fortawesome/fontawesome-svg-core');
        library = coreModule.library;
        library.add(iconSet);

        const faIconModule = await import(/* webpackChunkName: "fa-svg-core" */ '@fortawesome/react-fontawesome');
        FontAwesomeIcon = faIconModule.FontAwesomeIcon;
        this.setState({loaded: true});
    }
}

module.exports = Loading;