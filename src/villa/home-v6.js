import React from 'react';
import Navbar from './global-components/navbar-v3';
import BannerV5 from './section-components/banner-v5';

import CallToActionV1 from './section-components/call-to-action-v1';
import RegionItems from "./section-components/region-items";
import CategoryItems from "./section-components/category-items";
import PopularVillas from "./section-components/popular-villas";
import Footer from "./global-components/footer";

const Home_V5 = () => {
    return <div>
        <Navbar CustomClass="ltn__header-transparent gradient-color-2"/>
        <BannerV5/>
        <PopularVillas limit={20}/>
        <RegionItems/>
        <CategoryItems/>
        <CallToActionV1/>
        <Footer/>
    </div>
}

export default Home_V5

