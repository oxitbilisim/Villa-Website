import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {objectToQueryParam, queryParamToObject} from "../common-lib";
import moment from "moment";
import './reservation-detail.css';
import {currencySymbol, serverDateFormat} from "../Constants";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

const ReservationCompleteDetail = (props) => {

    const subUri = props.match.params.subUri;
    
    return (<div className="ltn__checkout-area mb-105">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-gallery  mt-30">

                        <div className="ltn__blog-brief text-center">
                            <h3 className="ltn__blog-title mb-10">
                                Rezervasyon Talebiniz Alınmıştır
                            </h3>
                            
                            <div className="guest-count mt-2" style={{fontWeight:'initial'}}>
                                Rezervasyon Numaranız : villalarim-{subUri}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

ReservationCompleteDetail.propTypes = {
    data: PropTypes.any,
};

ReservationCompleteDetail.defaultProps = {
    data: null
};

export default ReservationCompleteDetail