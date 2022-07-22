import React, {Component, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {dateFormat, serverDateFormat} from "../Constants";
import moment from "moment";

const VillaExplanation = (props) => {
    
    const [villaText, setVillaText] = useState([]);
    useEffect(()=>{
        try {
            const jsontext = props.data?.icerik.replaceAll('\\"','\'');
            setVillaText(JSON.parse(jsontext))
        } catch (err) {

        }

    },[props.data]);
    
    return <div>
        <h4 className="title-2">{props.data?.icerikBasligi}</h4>
        {villaText?.blocks?.map(item =>
            <p key={'text-'+item.key}>{item.text}</p>
        )}
        <p>Giriş Saati : 16:00</p>
        <p>Çıkış Saati : 10.00</p>
    </div>
}

VillaExplanation.propTypes = {
    data: PropTypes.any,
};

VillaExplanation.defaultProps = {
    data: null
};

export default VillaExplanation
