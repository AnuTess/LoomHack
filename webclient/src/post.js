import React from "react"
import ReactDOM from "react-dom"
import Comment from './comment'

export default class Post extends React.Component {
  async newComment() {
    const comment = prompt("What is the comment ?")
    if (comment && comment.length > 0) {
      this.props.sendComment(this.props.value.postId, comment)
    }
  }

  render() {
    const comments = this.props.value.comments && this.props.value.comments.map((comment, index) => {
      return (
        <li className="list-group-item" key={index} >
          <Comment value={comment} />
        </li>
      )
    })

    return (
      <div>
        <pre>{this.props.value.text}</pre>
        <div>
          <small>
            <span>this makes me feel: </span>
            <span class="emoji-selection" role="img" aria-label="happy">😀</span>
            <span class="emoji-selection" role="img" aria-label="sad">😪</span>
            <span class="emoji-selection" role="img" aria-label="scared">😱</span>
            <span class="emoji-selection" role="img" aria-label="lovely">💖</span>
          </small>
        </div>

        <small>user: {this.props.value.owner}</small>
        <div>
          <button type="button" className="btn btn-primary" onClick={() => this.newComment()} >New Comment</button>
        </div>
        <div style={{marginLeft : '50px', marginTop: '10px'}}>
          <ul className="list-group">
            {comments}
          </ul>
        </div>
      </div>
    )
  }
}
