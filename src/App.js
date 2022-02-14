import React, { Component } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import FeaturedArticle from "./Components/FeaturedArticle";
import Header from "./Components/Header";

class App extends Component {
    render() {
        const featuredArticle = {
            title: "Curse of the Current Reviews",
            description:
                "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely, avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews.",
        };

        const articles = [
            {
                title: "Hello WatchKit",
                description:
                    "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.",
                numComments: 12,
                numLikes: 124,
            },
            {
                title: "Introduction to Swift",
                description:
                    "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.",
                numComments: 15,
                numLikes: 45,
            },
        ];
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <FeaturedArticle article={featuredArticle} />
                    <Articles articles={articles} />
                </div>
            </div>
        );
    }
}

export default App;
