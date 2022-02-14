import React, { Component } from "react";
import Article from "./Article";

class Articles extends Component {
    render() {
        const articleItems = this.props.articles.map((article) => (
            <Article article={article} key={article.title} />
        ));

        return <>{articleItems}</>;
    }
}

export default Articles;
