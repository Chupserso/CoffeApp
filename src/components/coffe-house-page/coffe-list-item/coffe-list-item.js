import { Component } from "react";
import "./coffe-list-item.css";

class CoffeListItem extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="coffe__list__item">
                <div className="coffe__list__wrapper">
                    <div className="coffe__logo">
                        <img src={this.props.url} />
                    </div>
                    <div className="coffe__name">{this.props.name}</div>
                    <div className="coffe__price">{this.props.price}</div>
                </div>
            </div>
        );
    }
}

export default CoffeListItem;