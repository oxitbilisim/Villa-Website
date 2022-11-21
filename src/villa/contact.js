import React, {useContext} from 'react';
import Navbar from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import Map from './section-components/map';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import {GlobalContext} from "./global-context";

const Contact = () => {    
    return <div>
        <Navbar/>
        <PageHeader headertitle="Bize Ulaşın" subheader="İletişim"/>
        <ContactInfo/>
        <Map/>
        <CallToActionV1/>
        <Footer/>
    </div>
}

export default Contact

