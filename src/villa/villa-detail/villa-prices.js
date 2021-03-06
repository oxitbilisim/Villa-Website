import React, {Component} from 'react';
import PropTypes from "prop-types";
import {dateFormat, serverDateFormat} from "../Constants";
import moment from "moment";

const VillaPrices = (props) => {
    return <div>
        <h4 className="title-2">Fiyatlar</h4>
        <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
            <div
                className=" d-none ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                <div className="nav">
                    <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_1">TL</a>

                </div>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_tab_3_1">
                    <div className="ltn__product-tab-content-inner">
                        <div className="select-availability-area pb-20">
                            <div className="container">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="ltn__select-availability-table-wrap">
                                            <div
                                                className="ltn__select-availability-table d-none d-md-block">
                                                <ul className="ltn__select-availability-table-head">
                                                    <li><b>Tarih</b></li>
                                                    <li><b>En Az Kiralama</b></li>
                                                    <li><b>Fiyat(Gecelik) </b></li>

                                                </ul>

                                                {props.data?.map(item => (
                                                    <ul key={'price-'+item.id} className="ltn__select-availability-table-row">
                                                        <li>{moment(item.baslangic, serverDateFormat).format(dateFormat) +" - "+ moment(item.bitis, serverDateFormat).format(dateFormat)}</li>
                                                        <li>{item.enAzKiralama} Gece</li>
                                                        <li>{item.fiyat} {item.paraBirimiAd}</li>

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
