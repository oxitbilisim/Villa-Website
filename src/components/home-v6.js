import React from 'react';
import Navbar from './global-components/navbar-v3';
import BannerV5 from './section-components/banner-v5';
import ProductListing from './section-components/product-listing';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
import Category from './section-components/category-v1';
import Category2 from './section-components/category-v3';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Home_V5 = () => {
    return <div>
        <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
        <BannerV5 />
        <Category2/>
         <Category />
        <ProductListing />
        <BlogSlider customClass="section-subtitle-2"/>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V5

