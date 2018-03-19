import React from 'react';

class HeaderStrip extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="header-strip">
                <span>This is the header strip.</span>
            </div>
        );
    }
}

module.exports = HeaderStrip;