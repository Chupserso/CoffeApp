import { Component } from "react";
import "./header.css"

class Header extends Component {
    render () {
        return (
            <header className="header-our">
                <div className="menu__wrapper-our">
                    <ul className="menu-our">
                        <div className="menu__beans-our">
                            <img src="./img/header-menu-vector.png" alt="header-menu-vector" />
                        </div>
                        <a href="/" className="menu__item-our"><li>Coffee house</li></a>
                        <a href="/our-coffe" className="menu__item-our"><li>Our coffee</li></a>
                        <a href="/for-your-pleasure" className="menu__item-our"><li>For your pleasure</li></a>
                    </ul>
                </div>
                <h1 className="header__title-our" >Our Coffe</h1>
            </header>
        );
    }
}

export default Header;