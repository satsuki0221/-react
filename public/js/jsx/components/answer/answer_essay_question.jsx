
import React from 'react'
import ReactDOM from "react-dom"

class AnswerEssayQuestion extends React.Component{

    handleComplete : function(event){
        this.callMethodOnProps('onCompleted',event.target.value);
    },

    render(){
        return(
            <div className="form-group">
                <label className="survey-item-label"></label>
                <div className="survey-item-content">
                    <textarea onBlur={this.handleComplete} rows="3" className="form-control"></textarea>
                </div>
            </div>
        );
    }

}
