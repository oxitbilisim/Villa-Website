import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ReservationInfo from "./section-components/reservation_info";

const ReservationInformation = (props) => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Rezervasyon Bilgilendirme" />
        <ReservationInfo {...props} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ReservationInformation

