import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../global-components/navbar";
import CallToActionV1 from "../section-components/call-to-action-v1";
import Footer from "../global-components/footer";
import ReservationDetail from "./reservation-detail";
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
