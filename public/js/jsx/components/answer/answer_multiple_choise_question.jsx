
import React from 'react'
import ReactDOM from "react-dom"

class AnswerMultipleChoiceQuestions extends React.Component{

    constructor(props) {
        super(props);
        this.id    = uniqueId('multiple-choice-');
        this.value = this.props.value;
    }

    renderChoices(){
        return this.props.choices.map( function( choice , i ){
            return
                <AnswerRadioInput
                    key={"choice-" + i}
                    name={this.state.id}
                    label={choice}
                    value={choice}
                    checked={this.state.value === choice }
                />
        }.bind(this));
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor={this.state.id} className="survey-item-label">
                    {this.props.label}
                </label>
                <div className="survey-item-content">
                    <this.renderChoices />
                </div>
            </div>
        );
    }

}

AnswerMultipleChoiceQuestions.propTypes = {
    value : React.PropTypes.string,
    choices : React.PropTypes.array.isRequired,
    onCompleted : React.PropTypes.func.isRequired
}
