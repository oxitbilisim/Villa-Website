import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {GlobalContextProvider} from "./villa/global-context";
import HomeV6 from "./villa/home-v6";
import RegionVillas from "./villa/region-villas";
import CategoryVillas from "./villa/category-villas";
import VillaDetail from "./villa/villa-detail/villa-detail";
import Contact from "./villa/contact";
import BlogGrid from "./villa/blog-grid";
import BlogDetails from "./villa/blog-details";

const Root = () => {
    return (
        <BrowserRouter basename="/">
            <GlobalContextProvider>
                <Switch>
                    <Route exact path="/" component={HomeV6}/>
                    <Route exact path="/bolge/:subUri" component={RegionVillas}/>
                    <Route exact path="/kategori/:subUri" component={CategoryVillas}/>
                    <Route exact path="/villa/:subUri" component={VillaDetail}/>
                    <Route exact path="/blog" component={BlogGrid}/>
                    <Route exact path="/blog-details" component={BlogDetails}/>
                    <Route exact path="/iletisim" component={Contact}/>
                    
                </Switch>
            </GlobalContextProvider>
        </BrowserRouter>
    )
}

export default Root;

ReactDOM.render(<Root/>, document.getElementById('quarter'));
