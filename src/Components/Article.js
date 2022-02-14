import React, { Component } from "react";

class Article extends Component {
    render() {
        const { title, description, numComments, numLikes } =
            this.props.article;
        return (
            <div className="article">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="status">
                    <p>{numComments} comment</p>
                    <p>{numLikes} likes</p>
                </div>
            </div>
        );
    }
}

export default Article;
