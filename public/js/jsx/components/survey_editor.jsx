
import React from 'react'
import ReactDOM from "react-dom"

class SurveyEditor extends React.Component{

    getInitialState(){
        return {
            dropZoneEnterd : false,
            title          : '',
            introduction   : '',
            questions      : []
        };
    }

    handleFormChange(formData){
        this.setState(formData);
    }

    handleDragOver(ev){
        // handleDropが呼び出されるために必要
        ev.preventDefault();
    }

    handleDragEnter(){
        this.setState({
            dropZoneEnterd: true
        })
    }

    handleDragLeave : function(){
         this.setState({
             dropZoneEnterd: false
         })
    }

    handleDrop(ev){
        var questionType = ev.dataTransfer.getData('questionType');
        var questions   = questions.contact({
            type : questionType
        });

         this.setState({
             questions:questions,
             dropZoneEnterd:false
         })
    }

    render(){

        var questions = this.state.questions;
        var dropZoneEnterd = '';

        if( this.state.dropZoneEnterd ){
            dropZoneEnterd = 'drag-enter';
        }

        return : function(){
            <div className="survey-editor">
                <div className="row">
                    <aside className="sidebar col-md-3">
                        <h2>サーベイの部品</h2>
                        <DraggableQuestions />
                    </aside>

                    <div className="survey-canvas col-md-9">

                        <SurverForm
                            title        = {this.state.title}
                            introduction = {this.state.introduction}
                            onChange     = {this.handleFormChange}
                        >

                        <Divider>質問</Divider>
                        <ReactCssTransisitionGroup transitionName='question'>
                            {questions}
                        </ReactCssTransisitionGroup>

                        <div
                            className   = {'drop-zone well well-drop-zone'}
                            onDragOver  = {this.handleDragOver}
                            onDragEnter = {this.handleDragEnter}
                            onDragLeave = {this.handleDragLeave}
                            onDrop      = {this.handleDrop}
                        >
                        左側の部品をドラッグアンドドロップしてください。
                        </div>
                    </div>
                </div>
            </div>
        };
    }
}
