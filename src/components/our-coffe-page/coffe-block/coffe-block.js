import { Component } from "react";
import "./coffe-block.css";
import CoffeFilter from "../coffe-filter/coffe-filter";
import CoffeList from "../coffe-list/coffe-list";

class CoffeBlock extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: this.props.data,
            term: "",
            filter: ""
        }
    }
    returnData (data) {
        if (this.state.term == "") {
            return data;
        }
        if (this.state.term != "") {
            return data.filter(item => {
                return item.title.indexOf(this.state.term) > -1;
            })
        }
    }
    setFilter = (filter) => {
        this.setState({
            filter: filter
        });
        console.log(filter);
    }
    searchElements = (term) => {
        this.setState({
            term: term
        })
    }
    fliterElements = (data, filter) => {
        if (filter == "") {
            return data;
        } else {
            return data.filter(item => item.type == filter);
        }
    }
    render () {
        const newData = this.fliterElements(this.returnData(this.state.data), this.state.filter);
        return (
            <section className="coffe__block">
                <CoffeFilter setFilter={this.setFilter} searchElements={this.searchElements} data={this.state.data} />
                <CoffeList data={newData} />
            </section>
        );
    }
}

export default CoffeBlock;