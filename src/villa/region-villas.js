import React, {useContext} from 'react';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Navbar from "./global-components/navbar";
import VillaListV1 from "./villa-list/villa-list-v1";
import {GlobalContext} from "./global-context";
import VillaFilters from "./villa-list/villa-filters";

const RegionVillas = (props) => {
    const {regions, categories} = useContext(GlobalContext);

    const subUri = props.match.params.subUri;
    const currentRegion = regions.find(i => i.url === subUri);
console.log("currentRegion")
console.log(currentRegion)
    return <div>
        <Navbar/>
        <PageHeader headertitle={currentRegion?.ad}/>
        <VillaFilters regionPageId={currentRegion?.id} {...props}>
            <VillaListV1 type='REGION' {...props} />
        </VillaFilters>

        <CallToActionV1/>
        <Footer/>
    </div>
}

export default RegionVillas

