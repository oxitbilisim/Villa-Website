import React, {useContext} from 'react';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Navbar from './global-components/navbar-v3';
import CollectionList from "./collection-list";

const Collection = (props) => {

    return <div>
        <Navbar/>
        <PageHeader headertitle={"Seçilen Villalar"}/>
        <CollectionList {...props}></CollectionList>
        <CallToActionV1/>
        <Footer/>
    </div>
}

export default Collection

