import React from 'react'
import ReactDOM from "react-dom"

var Divider = React.createClass({
    render : function(){
        return(
            <div className="divider">
                <h2>{this.props.children}</h2>
            </div>
        )
    }
});

ReactDOM.render(
    <Divider>質問</Divider>,
    document.getElementById('container')
);
