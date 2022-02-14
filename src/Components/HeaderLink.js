import React, { Component } from "react";

class HeaderLink extends Component {
    render() {
        const linkClass = this.props.active ? "link link-bold" : "link";
        return (
            <a href="#" className={linkClass}>
                {this.props.children}
            </a>
        );
    }
}

export default HeaderLink;
