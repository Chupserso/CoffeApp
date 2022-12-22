import { Component } from "react";
import "./coffe-block.css";
import CoffeList from "../coffe-list/coffe-list";

class CoffeBlock extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <section className="coffe__block">
                <CoffeList data={this.props.data} />
            </section>
        );
    }
}

export default CoffeBlock;