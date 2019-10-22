import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {asyncComponent} from "./components/AsyncComponent";
import { createBrowserHistory} from "history";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncToken = asyncComponent(import("./page/Token"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));

const history = createBrowserHistory();


export default () =>
    <Router history={history}>
        <Switch>
            <Route
                exact
                component={AsyncHome}
                path='/'
            />
            <Route
                exact
                component={AsyncToken}
                path='/token'
            />
            <Route component={AsyncNotFound}/>
        </Switch>
    </Router>
