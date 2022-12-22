import { Component } from "react";
import "./coffe-list.css";
import CoffeListItem from "../coffe-list-item/coffe-list-item";

class CoffeList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const data = this.props.data;
        const items = data.map(item => {
            return  <CoffeListItem title={item.title} weight={item.weight} price={item.price} src={item.src} type={item.type} />
        })
        return (
            <div className="coffe__list">
                {items}
            </div>
        );
    }
}
export default CoffeList;