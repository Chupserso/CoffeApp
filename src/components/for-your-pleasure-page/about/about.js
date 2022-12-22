import { Component } from "react";
import "./about.css"

class About extends Component {
    render() {
        return (
            <section className="about-our">
                <div className="about-our__wrapper">
                    <div className="about-our__img">
                        <img src="./img/about-pleasure-img.png" />
                    </div>
                    <div className="about-our__content">
                        <div className="about-our__title"><h2>About our goods</h2></div>
                        <div className="about-our__vector">
                            <img src="./img/about-vector.png" />
                        </div>
                        <div className="about-our__descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        </div>
                    </div>
                </div>
                <div className="about-our__line"><hr /></div>
            </section>
        );
    }
}

export default About;