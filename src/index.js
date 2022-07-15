import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {GlobalContextProvider} from "./villa/global-context";
import HomeV6 from "./villa/home-v6";
import RegionVillas from "./villa/region-villas";
import CategoryVillas from "./villa/category-villas";
import VillaDetail from "./villa/villa-detail/villa-detail";

const Root = () => {
    return (
        <BrowserRouter basename="/">
            <GlobalContextProvider>
                <Switch>
                    <Route exact path="/" component={HomeV6}/>
                    <Route exact path="/bolge/:subUri" component={RegionVillas}/>
                    <Route exact path="/kategori/:subUri" component={CategoryVillas}/>
                    <Route exact path="/villa/:subUri" component={VillaDetail}/>
                    
                </Switch>
            </GlobalContextProvider>
        </BrowserRouter>
    )
}

export default Root;

ReactDOM.render(<Root/>, document.getElementById('quarter'));
