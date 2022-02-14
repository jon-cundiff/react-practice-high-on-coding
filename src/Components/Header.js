import React, { Component } from "react";
import HeaderLink from "./HeaderLink";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <h1>HighOnCoding</h1>
                </div>
                <HeaderLink active>Home</HeaderLink>
                <HeaderLink>Categories</HeaderLink>
            </header>
        );
    }
}

export default Header;
