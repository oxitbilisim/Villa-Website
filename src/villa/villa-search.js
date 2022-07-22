import React, {useContext} from 'react';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Navbar from "./global-components/navbar";
import VillaListV1 from "./villa-list/villa-list-v1";
import VillaFilters from "./villa-list/villa-filters";

const villaSearch = (props) => {
    return <div>
        <Navbar/>
        <PageHeader headertitle={"Villa Ara"}/>
        <VillaFilters {...props}>
            <VillaListV1 type='SEARCH' {...props} />
        </VillaFilters>

        <CallToActionV1/>
        <Footer/>
    </div>
}

export default villaSearch

