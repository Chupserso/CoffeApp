import { Component } from "react";
import "./coffe-list.css";
import CoffeListItem from "../coffe-list-item/coffe-list-item";

class CoffeList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const data = this.props.data;
        const filterData = data.filter(item => item.isBest == true);
        const items = filterData.map(item => {
            return <CoffeListItem url={item.src} name={item.title + " " + item.weight + "kg"} price={item.price + "$"} />
        })

        return (
            <div className="coffe__list mlist">
                {items}
            </div>
        );
    }
}

export default CoffeList;