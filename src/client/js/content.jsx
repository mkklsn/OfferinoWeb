import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="content">
                <span>This is the content.</span>
            </div>  
        );
    }
}

module.exports = Content;