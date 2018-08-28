import React from 'react';
import iconSet from './icons.js';

var library;
var FontAwesomeIcon;

class OfferIconStrip extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!this.state || !this.state.loaded){
            this.loadModules();
        }
    }

    render(){
        let strip = this.state && this.state.loaded 
            ? <FontAwesomeIcon icon={this.props.icon} />
            : <span>Loading...</span>;

        return(
            <div className="icons">
                { strip }
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

module.exports = OfferIconStrip;