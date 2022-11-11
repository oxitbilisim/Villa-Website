import React, {Component, useEffect, useState} from 'react';
import Navbar from "../global-components/navbar-v3";
import CallToActionV1 from "../section-components/call-to-action-v1";
import Footer from "../global-components/footer";
import ReservationCompleteDetail from "./reservation-complete-detail";

const VillaReservationComplete = (props) => {

    return <div>
        <Navbar/>
        <ReservationCompleteDetail {...props} />
        <CallToActionV1/>
        <Footer/>
    </div>
}

export default VillaReservationComplete
