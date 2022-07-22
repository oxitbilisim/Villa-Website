import React, {Component} from 'react';
import PropTypes from "prop-types";

const VillaLocation = (props) =>{
        return <div>
            <h4 className="title-2">Villa Konumu</h4>
            <div className="property-details-google-map mb-50">
                <iframe
                    src={"//maps.google.com/maps?q="+props.data?.map+"&z=10&output=embed"}
                    width="100%"
                    height="400">
                </iframe>
            </div>

            <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                <ul>
                    <li><label>Havaalanına:</label> <span>{props.data?.hvlUzaklik} KM</span></li>
                    <li><label>Merkeze: </label> <span>{props.data?.mrkUzaklik} KM</span></li>
                    <li><label>Plaja:</label> <span>{props.data?.pljUzaklik} KM</span></li>

                </ul>
                <ul>
                    <li><label>Sağlık Kurumuna:</label> <span>{props.data?.sglUzaklik} KM</span></li>
                    <li><label>Markete:</label> <span>{props.data?.marktUzaklik} KM</span></li>
                    <li><label>Restorana:</label> <span>{props.data?.rstUzaklik} KM</span></li>
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
