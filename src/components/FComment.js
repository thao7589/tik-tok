import React from "react";

const FComment = props => {
    return (
        <div>
            <div className="ui container comment">
                <a href="" className="avatar">
                    <img src="" alt="avatar" />
                </a>
                <div className="content">
                    <a href="" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">Today</span>
                    </div>
                    <div className="text">Nice blog post</div>
                </div>
            </div>
        </div>
    )
}

export default FComment;