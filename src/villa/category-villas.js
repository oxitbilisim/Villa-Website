import React, {useContext, useState} from 'react';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Navbar from "./global-components/navbar";
import VillaListV1 from "./villa-list/villa-list-v1";
import {GlobalContext} from "./global-context";
import VillaFilters from "./villa-list/villa-filters";

const CategoryVillas = (props) => {
    const {regions, categories} = useContext(GlobalContext);
    const [totalCount, setTotalCount] = useState(0);
    const subUri = props.match.params.subUri;
    
    const currentCategory = categories.find(i => i.url === subUri);
    
    return <div>
        <Navbar />
        <PageHeader headertitle={currentCategory?.ad} />
        <VillaFilters categoryPageId={currentCategory?.id} {...props} totalCount={totalCount}>
            <VillaListV1 type='CATEGORY' {...props} setTotalCountParent={setTotalCount} />
        </VillaFilters>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default CategoryVillas

