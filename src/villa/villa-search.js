import React, {useContext, useEffect, useState} from 'react';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Navbar from "./global-components/navbar-v3";
import VillaListV1 from "./villa-list/villa-list-v1";
import VillaFilters from "./villa-list/villa-filters";

const villaSearch = (props) => {
    const [totalCount, setTotalCount] = useState(0);
    return <div>
        <Navbar/>
        <PageHeader headertitle={"Villa Ara"}/>
        <VillaFilters {...props} totalCount={totalCount}>
            <VillaListV1 type='SEARCH' {...props} setTotalCountParent={setTotalCount} />
        </VillaFilters>

        <CallToActionV1/>
        <Footer/>
    </div>
}

export default villaSearch

