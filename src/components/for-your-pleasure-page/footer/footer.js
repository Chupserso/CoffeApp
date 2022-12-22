import { Component } from "react";
import "./footer.css";

class Footer extends Component {
    render () {
        return (
            <footer className="footer our__footer">
                <div className="footer__wrapper">
                    <div className="footer__menu__wrapper">
                        <ul className="footer__menu">
                            <div className="menu__beans">
                                <img src="./img/coffe-dark-beans.png" />
                            </div>
                            <a href="/" className="footer__coffe__menu__item"><li>Coffee house</li></a>
                            <a href="/our-coffe" className="footer__coffe__menu__item"><li>Our coffee</li></a>
                            <a href="/for-your-pleasure" className="footer__coffe__menu__item"><li>For your pleasure</li></a>
                        </ul>
                    </div>
                    <div className="footer__vector">
                        <img src="./img/about-vector.png" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;