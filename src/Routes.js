import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {asyncComponent} from "./components/AsyncComponent";
import { createBrowserHistory} from "history";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncToken = asyncComponent(import("./page/Token"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));

const history = createBrowserHistory();
const subDomain = '';

export const routerPath = {
    HOME: `${subDomain}/`,
    TOKEN: `${subDomain}/token`,
    '404': `${subDomain}/404`
}

export default () => (
    <Router history={history}>
        <Switch>
            <Route
                exact
                component={AsyncHome}
                path={routerPath.HOME}
            />
            <Route
                exact
                component={AsyncToken}
                path={routerPath.TOKEN}
            />
            <Route component={AsyncNotFound}/>
        </Switch>
    </Router>
)
