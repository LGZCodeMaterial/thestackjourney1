import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Main from "./components/Main";
import ScrollToTop from "./components/ScrollTop";
import Faq from "./components/Faq";
import Notebook from "./components/Notebook";
import QuoteOnline from "./components/QuoteOnline";
import About from "./components/About";
import Contact from "./components/Contact";

const relocateToAdmin = () => {
    console.log("reroute")
    window.location = 'longadminpanel';
    return null;
}

export default props => (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/notebook" component={Notebook} />
                <Route exact path="/quotes" component={QuoteOnline} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/admin" component={relocateToAdmin} />
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);
