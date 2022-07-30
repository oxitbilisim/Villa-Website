import React, {Component} from 'react';
import PropTypes from "prop-types";
import {dateFormat, serverDateFormat} from "../Constants";
import moment from "moment";

const VillaFeatures = (props) => {
    return <div>
        <div className="property-details-amenities">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <p>Havuz Özellikleri: {props.dataPool?.havuzOzellik}</p>
                </div>
                {
                    [...Array(Math.ceil(props.data?.length/5)).keys()].map(p =>
                    
                        <div key={'item-'+p} className="col-lg-4 col-md-6">
                            <div className="ltn__menu-widget">
                                <div className="ltn__blog-meta-btn">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            {props.data?.slice(p*5,(p*5)+5).map(item => (
                                                <li style={{display:'flex', alignItems:'center'}} key={'property-'+item.id} className="ltn__blog-date">
                                                    <i className="far fa-check-square"></i>{item.ozellikAd}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                    )
                }
                
            </div>
        </div>
    </div>
}

VillaFeatures.propTypes = {
    data: PropTypes.any,
    dataPool: PropTypes.any,
};

VillaFeatures.defaultProps = {
    data: null,
    dataPool: null
};

export default VillaFeatures
