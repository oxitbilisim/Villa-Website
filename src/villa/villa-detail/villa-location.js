import React, {Component} from 'react';
import PropTypes from "prop-types";

const VillaLocation = (props) => {

    const printDistance = (distance) => {
        if(distance==null || distance?.trim()==""){
            return "";
        }
        if(Number(distance)<1){
            return (Number(distance)*1000) + " M"; 
        }else{
            return distance + " KM";
        }
    }
    return <div>
        <div className="property-details-google-map mb-50">
            <iframe
                src={"//maps.google.com/maps?q=" + props.data?.map + "&z=10&output=embed"}
                width="100%"
                height="400">
            </iframe>
        </div>

        <div className="property-detail-info-list section-bg-1 clearfix">
            <ul>
                <li><label>Havaalanına:</label> <span>{printDistance(props.data?.hvlUzaklik)}</span></li>
                <li><label>Merkeze: </label> <span>{printDistance(props.data?.mrkUzaklik)}</span></li>
                <li><label>Plaja:</label> <span>{printDistance(props.data?.pljUzaklik)}</span></li>

            </ul>
            <ul>
                <li><label>Sağlık Kurumuna:</label> <span>{printDistance(props.data?.sglUzaklik)}</span></li>
                <li><label>Markete:</label> <span>{printDistance(props.data?.marktUzaklik)}</span></li>
                <li><label>Restorana:</label> <span>{printDistance(props.data?.rstUzaklik)}</span></li>
            </ul>
        </div>
    </div>
}

VillaLocation.propTypes = {
    data: PropTypes.any,
};

VillaLocation.defaultProps = {
    data: null
};

export default VillaLocation
