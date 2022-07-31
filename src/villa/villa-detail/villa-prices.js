import React, {Component} from 'react';
import PropTypes from "prop-types";
import {dateFormat, serverDateFormat} from "../Constants";
import moment from "moment";

const VillaPrices = (props) => {
    return <div>
        <div className="ltn__apartments-plan-area product-details-apartments-plan">
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
                                    <div className="col-lg-9">
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
                                                        <li><b>{item.fiyat} {item.paraBirimiAd}</b></li>

                                                    </ul>
                                                ))}

                                            </div>

                                        </div>
                                    </div>


                                    <div className="col-lg-3 mt-5">
                                          <div className="widget ltn__author-widget" style={{padding: '10px'}}>
                            <p style={{fontSize:12}}><b>Kiralama Kaporası: </b> 35 %</p>
                            <p style={{fontSize:12}}><b>Hasar Depozitosu: </b> 1250 TL</p>
                            <p style={{fontSize:12}}><b>Ekstra Temizlik Ücreti: </b> 400 TL</p>


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
