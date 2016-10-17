
import React from 'react'
import ReactDOM from "react-dom"

class AnswerRadioInput extends React.Component{

    constructor(props) {
        super(props);
        this.checked = !!this.props.checked;
        this.id = this.props.id ? this.props.id : uniqueId('radio-');
    }

    render(){
        return(
            <div className="radio">
                <label htmlFor={this.state.id}>
                    <input
                        type="radio"
                        name={this.props.name}
                        id={this.props.id}
                        value={this.props.value}
                        checked={this.state.checked}
                    />
                    ラベルの文字列
                </label>
            </div>
        );
    }

}

AnswerRadioInput.propTypes = {
    id      : React.PropTypes.string,
    name    : React.PropTypes.isRequired,
    label   : React.PropTypes.string.isRequired,
    checked : React.PropTypes.bool
}

AnswerRadioInput.defaultProps = {
    id      : null,
    checked : false
}
