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
import villaSearch from "./villa/villa-search";
import LikedVillaContextProvider from "./villa/liked-villa-context";
import Collection from "./villa/collection";
import VillaReservation from "./villa/villa-reservation/villa-reservation";
import Page from "./villa/page";
import VillaReservationComplete from "./villa/villa-reservation/villa-reservation-complete";

const Root = () => {
    return (
        <BrowserRouter basename="/">
            <GlobalContextProvider>
                <LikedVillaContextProvider>
                    <Switch>
                        <Route exact path="/" component={HomeV6}/>
                        <Route exact path="/bolge/:subUri" component={RegionVillas}/>
                        <Route exact path="/kategori/:subUri" component={CategoryVillas}/>
                        <Route exact path="/villa/:subUri" component={VillaDetail}/>
                        <Route exact path="/collection/:subUri" component={Collection}/>
                        <Route exact path="/blog" component={BlogGrid}/>
                        <Route exact path="/blog/:subUri" component={BlogDetails}/>
                        <Route exact path="/villa-ara" component={villaSearch}/>
                        <Route exact path="/iletisim" component={Contact}/>
                        <Route exact path="/rezervasyon/:subUri" component={VillaReservation}/>
                        <Route exact path="/rezervasyon-tamamlandi/:subUri" component={VillaReservationComplete}/>
                        <Route exact path="/sayfa/:subUri" component={Page}/>
                    </Switch>
                </LikedVillaContextProvider>
            </GlobalContextProvider>
        </BrowserRouter>
    )
}

export default Root;

ReactDOM.render(<Root/>, document.getElementById('quarter'));
