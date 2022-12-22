import { Component } from "react";
import "./header.css";

class Header extends Component {
    render () {
        return (
            <header className="header">
                <div className="menu__wrapper">
                    <ul className="menu">
                        <div className="menu__beans">
                            <img src="./img/header-menu-vector.png" alt="header-menu-vector" />
                        </div>
                        <a href="/" className="menu__item"><li>Coffee house</li></a>
                        <a href="/our-coffe" className="menu__item"><li>Our coffee</li></a>
                        <a href="/for-your-pleasure" className="menu__item"><li>For your pleasure</li></a>
                    </ul>
                </div>
                <div className="header__content">
                    <div className="header__title"><h1 className="header__title">Everything You Love About Coffee</h1></div>
                    <div className="header__vector"><img src="./img/header-vector.png" alt="header-vector" /></div>
                    <div className="header__descr">We makes every day full of energy and taste<br/>Want to try our beans?</div>
                    <div className="header__button"><button className="btn">More</button></div>
                </div>
            </header>
        )
    }
}

export default Header;