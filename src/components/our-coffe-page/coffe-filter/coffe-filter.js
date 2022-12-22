import { Component } from "react";
import "./coffe-filter.css";

class CoffeFilter extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className="coffe__settings">
                <div className="coffe__search">
                    <span>Lookiing for</span>
                    <input type="text" onChange={(e) => this.props.searchElements(e.target.value)} placeholder="start typing here..." />
                </div>
                <div className="coffe__filter">
                    <span>Or filter</span>
                    <div className="coffe__filters">
                        <button type="button" onClick={(e) => this.props.setFilter("Brazil")}>Brazil</button>
                        <button type="button" onClick={(e) => this.props.setFilter("Kenya")}>Kenya</button>
                        <button type="button" onClick={(e) => this.props.setFilter("Columbia")}>Columbia</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoffeFilter;