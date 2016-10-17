import React from 'react'
import ReactDOM from "react-dom"

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count : 0 };
    }

    _onClick(){
        var _count = this.state.count +1;
        this.setState({ count : _count});
    }

    render(){
        return (
            <div>
                こんにちは、{this.props.data.name}さん
                <div>
                    {this.state.count}
                    <button onClick={this._onClick.bind(this)}>click</button>
                </div>
            </div>
        );
    }
}

var propsData = { name : 'Mineo Okuda'};

ReactDOM.render(
    <Test data={propsData} />,
    document.getElementById('container')
);
