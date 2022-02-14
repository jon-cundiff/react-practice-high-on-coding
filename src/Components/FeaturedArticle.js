import React, { Component } from "react";

class FeaturedArticle extends Component {
    render() {
        const { title, description } = this.props.article;
        return (
            <div className="article featured-article">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        );
    }
}

export default FeaturedArticle;
