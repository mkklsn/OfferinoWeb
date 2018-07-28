import React from 'react';
import iconSet from './icons.js';

var library;
var FontAwesomeIcon;

class OfferIconStrip extends React.Component {
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
}

module.exports = OfferIconStrip;