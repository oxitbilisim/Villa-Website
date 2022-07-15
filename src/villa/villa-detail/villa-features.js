import React, {Component} from 'react';
import PropTypes from "prop-types";
import {dateFormat, serverDateFormat} from "../Constants";
import moment from "moment";

const VillaFeatures = (props) => {
    return <div>
        <h4 className="title-2 mb-10">Özellikler</h4>
        <div className="property-details-amenities mb-60">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h6 className="title-4 ">Havuz Özellikleri</h6>
                    <p>{props.dataPool?.havuzOzellik}</p>
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <div className="ltn__menu-widget">
                        <div className="ltn__blog-meta-btn">
                            <div className="ltn__blog-meta">
                                <ul>
                                    {props.data?.map(item => (
                                        <li key={'property-'+item.id} className="ltn__blog-date">
                                            <i className="far fa-check-square"></i>{item.ozellikAd}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
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
