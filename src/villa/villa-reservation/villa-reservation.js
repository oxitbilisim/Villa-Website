import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../global-components/navbar";
import CallToActionV1 from "../section-components/call-to-action-v1";
import Footer from "../global-components/footer";
import ReservationDetail from "./reservation-detail";

const VillaDetail = (props) => {
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        const subUri = props.match.params.subUri;
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaByURL?url=" + subUri)
            .then((response) => {
                setData(response.data);
            }).finally(() => {
            setLoaded(true);
        })
    }

    return <div>
        <Navbar/>
        <ReservationDetail data={data} {...props} />
        <CallToActionV1/>
        <Footer/>
    </div>
}

export default VillaDetail
