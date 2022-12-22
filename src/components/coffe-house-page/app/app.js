import { Component } from "react";
import "./app.css";
import Header from "../header/header";
import About from "../about/about";
import BestCoffe from "../best-coffe/best-coffe";
import Footer from "../footer/footer";

class AppCoffeHouse extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="wrapper">
                <Header />
                <About />
                <BestCoffe data={this.props.data} />
                <Footer />
            </div>
        )
    }
}

export default AppCoffeHouse;