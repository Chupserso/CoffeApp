import { Component } from "react";
import "./coffe-list-item.css";

class CoffeListItem extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="coffe__list__item-our">
                <div className="coffe__list__item-our__img">
                    <img src={this.props.src} />
                </div>
                <div className="coffe__list__item-our__wrapper">
                    <div className="coffe__list__item-our__name">{this.props.title + " " + this.props.weight + "kg"}</div>
                    <div className="coffe__list__item-our__type">{this.props.type}</div>
                    <div className="coffe__list__item-our__price">{this.props.price + "$"}</div>
                </div>
            </div>
        );
    }
}

export default CoffeListItem;