import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Main from "./components/Main";
import ScrollToTop from "./components/ScrollTop";
import Faq from "./components/Faq";

export default props => (
    <HashRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/faq" component={Faq} />
            </Switch>
        </ScrollToTop>
    </HashRouter>
);
