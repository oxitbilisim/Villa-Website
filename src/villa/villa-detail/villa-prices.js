import React, {Component} from 'react';
import PropTypes from "prop-types";
import {currencySymbol, dateFormat, serverDateFormat} from "../Constants";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

const VillaPrices = (props) => {

    let currencyList = props.data?.reduce((previous, currentObj, index) => {
            if (!previous.includes(currentObj.paraBirimiAd)) {
                previous.push(currentObj.paraBirimiAd);
            }
            return previous;
        },
        []);

    const discountRateCheck = (val) => {
        return val != null && val != "" && val != 0;
    }

    return <div>
        <div className="ltn__apartments-plan-area product-details-apartments-plan">
            <div
                className="ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                <div className="nav">
                    {currencyList.map((item,index) =>
                        <a key={'t-'+index} className={index == 0?"active show":""} data-bs-toggle="tab" href={"#liton_tab_1_"+index}>{item}</a>
                    )}

                </div>
            </div>
            <div className="tab-content">
                {currencyList.map((currency,index) =>
                <div key={'t-'+index} className={"tab-pane fade"+(index == 0?" active show":"")} id={"liton_tab_1_"+index}>
                    <div className="ltn__product-tab-content-inner">
                        <div className="select-availability-area pb-20">
                            <div className="container">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="ltn__select-availability-table-wrap">
                                            <div
                                                className="ltn__select-availability-table d-md-block">
                                                <ul className="ltn__select-availability-table-head">
                                                    <li><b>Tarih</b></li>
                                                    <li><b>En Az Kiralama</b></li>
                                                    <li><b>Fiyat(Gecelik) </b></li>

                                                </ul>

                                                {props.data?.filter(i => i.paraBirimiAd==currency).map(item => (
                                                    <ul key={'price-' + item.id}
                                                        className="ltn__select-availability-table-row">
                                                        <li>{moment(item.baslangic, serverDateFormat).format(dateFormat) + " - " + moment(item.bitis, serverDateFormat).format(dateFormat)}</li>
                                                        <li>{item.enAzKiralama} Gece</li>
                                                        <li>
                                                            <b>
                                                                <span style={{textDecoration: discountRateCheck(item.indirim) ? 'line-through' : 'initial'}}><CurrencyFormat value={item.fiyat} displayType={'text'} decimalScale={0} thousandSeparator={'.'} decimalSeparator={','} prefix={currencySymbol(item.paraBirimiAd)} /></span>
                                                                { discountRateCheck(item.indirim) ? <span>&nbsp;&nbsp;<CurrencyFormat value={item.fiyat*(100-item.indirim)/100} displayType={'text'} decimalScale={0} thousandSeparator={'.'} decimalSeparator={','} prefix={currencySymbol(item.paraBirimiAd)} /></span> : null}
                                                            </b>
                                                        </li>

                                                    </ul>
                                                ))}

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                
            </div>
        </div>
    </div>
}

VillaPrices.propTypes = {
    data: PropTypes.any,
};

VillaPrices.defaultProps = {
    data: null
};

export default VillaPrices
