import React from 'react'
import CommentList from './CommentList.jsx'
import CommentForm from './CommentForm.jsx'

export default class CommentBox extends React.Component {
  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}
