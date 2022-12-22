import { Component } from "react";
import AppCoffeHouse from "../coffe-house-page/app/app";
import AppOurCoffePage from "../our-coffe-page/app/app";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppPleasurePage from "../for-your-pleasure-page/app/app";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {title: "Solimo Coffee Beans", weight: 2, type: "Brazil", isBest: false, src: "./img/solimo.png", price: 10.73},
                {title: "Presto Coffee Beans", weight: 1.5, type: "Brazil", isBest: true, src: "./img/presto.png", price: 6.99},
                {title: "AROMISTICO Coffee Beans", weight: 1, type: "Kenya", isBest: false, src: "./img/aromistico.png", price: 7.50},
                {title: "Solimo Coffee Beans", weight: 1.3, type: "Columbia", isBest: false, src: "./img/solimo.png", price: 4.33},
                {title: "Presto Coffee Beans", weight: 2, type: "Kenya", isBest: false, src: "./img/presto.png", price: 10.11},
                {title: "AROMISTICO Coffee Beans", weight: 1.5, type: "Brazil", isBest: true, src: "./img/aromistico.png", price: 8.23},
                {title: "Solimo Coffee Beans", weight: 1.5, type: "Columbia", isBest: true, src: "./img/solimo.png", price: 5.44},
                {title: "AROMISTICO Coffee Beans", weight: 1.8, type: "Brazil", isBest: false, src: "./img/aromistico.png", price: 6.34},
                {title: "Presto Coffee Beans", weight: 0.5, type: "Columbia", isBest: false, src: "./img/presto.png", price: 2.55},
                {title: "Solimo Coffee Beans", weight: 10, type: "Kenya", isBest: false, src: "./img/solimo.png", price: 30.99}
            ]
        }
    }
    render () {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/"><AppCoffeHouse data={this.state.data} /></Route>
                        <Route path="/our-coffe"><AppOurCoffePage data={this.state.data} /></Route>
                        <Route path="/for-your-pleasure"><AppPleasurePage data={this.state.data} /></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;