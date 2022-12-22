import { Component } from "react";
import "./app.css";
import Header from "../header/header";
import About from "../about/about";
import CoffeBlock from "../coffe-block/coffe-block";
import Footer from "../footer/footer";

class AppPleasurePage extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="wrapper">
                <Header />
                <About />
                <CoffeBlock data={this.props.data} />
                <Footer />
            </div>
        );
    }
}

export default AppPleasurePage;