import React from "react";
import "./Header.css"
import Logo from "../../assets/images/Logo.svg"

const Header = () => {
    return <>
        <header className="site-header">
            <div className="container">
                <div className="site-header__inner">
                    <a className="site-header__logo" href="./index.html">
                        <img src={Logo} alt="Site logo"/>
                    </a>
                </div>
            </div>
        </header>
    </>
}

export default Header;