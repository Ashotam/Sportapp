import React from 'react';

import {Route, Switch} from "react-router-dom";
import NotFound from "./components/not-found/not-found";

const Router = () => {
    return (
        <div className={"wrapper"}>
            <Switch>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
};

export default Router;