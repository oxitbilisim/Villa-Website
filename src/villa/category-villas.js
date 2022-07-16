import React, {useContext} from 'react';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Navbar from "./global-components/navbar";
import VillaListV1 from "./villa-list/villa-list-v1";
import {GlobalContext} from "./global-context";
import VillaFilters from "./villa-list/villa-filters";

const CategoryVillas = (props) => {
    const {regions, categories} = useContext(GlobalContext);

    const subUri = props.match.params.subUri;
    
    console.log(subUri);
    console.table(categories);
    const currentCategory = categories.find(i => i.url === subUri);
    
    return <div>
        <Navbar />
        <PageHeader headertitle={currentCategory?.ad} />
        <VillaFilters {...props}>
            <VillaListV1 type='CATEGORY' {...props} />
        </VillaFilters>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default CategoryVillas

