import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <div className="ui container comment">
          <a href="" className="avatar">
            <img src="" alt="avatar" />
          </a>
          <div className="content">
            <a href="" className="author">
              {this.props.author || "No name"}
            </a>
            <div className="metadata">
              <span className="date">Today</span>
            </div>
            <div className="text">Nice blog post</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
