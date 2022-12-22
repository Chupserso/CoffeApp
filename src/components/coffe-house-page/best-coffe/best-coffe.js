import { Component } from "react";
import "./best-coffe.css";
import CoffeList from "../coffe-list/coffe-list";

class BestCoffe extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <section className="coffe">
                <div className="coffe__wrapper">
                    <div className="coffe__title">
                        <h2>Our best</h2>
                    </div>
                    <CoffeList data={this.props.data} />
                </div>
            </section>
        );
    }
}
export default BestCoffe;