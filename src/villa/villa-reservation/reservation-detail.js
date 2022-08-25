import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from "prop-types";
import VillaInfo from "../villa-detail/villa-info";
import {objectToQueryParam, queryParamToObject} from "../common-lib";
import moment from "moment";
import './reservation-detail.css';
import {currencySymbol, serverDateFormat} from "../Constants";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

const ReservationDetail = (props) => {
    const [priceCalc, setPriceCalc] = useState(null);
    const obj = queryParamToObject(props.location.search);

    const paymentMethod = (e) => {
        console.log(e.currentTarget.value);
    }

    useEffect(() => {
        if(props.data!=null) {
            axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/CostCalculate" + props.location.search + "&id=" + props.data?.villa?.id)
                .then((response) => {
                    setPriceCalc(response.data);
                }).catch(() => {
                setPriceCalc(null);
            });
        }
    }, [props.location?.search,props.data])

    return (<div className="ltn__checkout-area mb-105">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-gallery  mt-30">
                        <div className="ltn__blog-gallery-active slick-arrow-1 slick-arrow-1-inner">
                            {
                                props.data?.images.filter(i => i.kapakResmi).map(item =>
                                    <div className="ltn__blog-gallery-item">
                                        <img
                                            src={process.env.REACT_APP_API_ENDPOINT + "/VillaFE/villa-image/" + item.id + ".jpg"}
                                            alt="Image"/>
                                    </div>
                                )
                            }
                        </div>
                        <div className="ltn__blog-brief text-center">
                            <h3 className="ltn__blog-title mb-10">
                                <Link to={"/villa/" + props.data?.villa.url}>{props.data?.villa.ad}</Link>
                            </h3>
                            <label><span className="ltn__secondary-color ">
							<i className="flaticon-pin"/></span> {props.data?.lokasyon.ilceIlAd},{props.data?.lokasyon.bolgeAd},{props.data?.lokasyon.mevki}
                            </label>
                            <div className="ltn__checkout-single-content-info" style={{padding: '10px'}}>
                                <div className="row">
                                    <div className="col-md-5 start-date">
                                        {moment(obj.startDate).format("DD.MM.YYYY")}
                                    </div>
                                    <div className="col-md-2" style={{fontSize: '30px'}}><i
                                        className="fa fa-angle-right" aria-hidden="true"></i></div>
                                    <div className="col-md-5 end-date">
                                        {moment(obj.endDate).format("DD.MM.YYYY")}
                                    </div>
                                </div>
                            </div>
                            <div className="guest-count mt-2">
                                {obj.guestCount != null ?obj.guestCount+" Kişi": null}
                            </div>


                            {priceCalc != null ?<>
                                <div className="col-lg-12 col-md-12 mt-3">
                                    <div className="shoping-cart-total" style={{textAlign:'initial'}}>
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <td>Toplam Tutar</td>
                                                <td><CurrencyFormat value={priceCalc.totalPrice}
                                                                    displayType={'text'}
                                                                    thousandSeparator={'.'}
                                                                    decimalSeparator={','} decimalScale={0}
                                                                    prefix={currencySymbol(priceCalc?.currency)}/></td>
                                            </tr>
                                            <tr>
                                                <td>Ön Ödeme</td>
                                                <td><CurrencyFormat value={priceCalc.downPayment}
                                                                    displayType={'text'} thousandSeparator={'.'}
                                                                    decimalSeparator={','} decimalScale={0}
                                                                    prefix={currencySymbol(priceCalc?.currency)}/></td>
                                            </tr>
                                            <tr>
                                                <td>Depozito</td>
                                                <td><CurrencyFormat value={priceCalc.deposit} displayType={'text'}
                                                                    thousandSeparator={'.'} decimalSeparator={','}
                                                                    decimalScale={0}
                                                                    prefix={currencySymbol(priceCalc?.currency)}/></td>
                                            </tr>
                                            <tr>
                                                <td>Ekstra Temizlik Ücreti</td>
                                                <td><CurrencyFormat value={priceCalc.cleaningFee}
                                                                    displayType={'text'}
                                                                    thousandSeparator={'.'}
                                                                    decimalSeparator={','} decimalScale={0}
                                                                    prefix={currencySymbol(priceCalc?.currency)}/></td>
                                            </tr>
                                            <tr style={{fontSize: '14px'}}>
                                                <td colSpan={2}><strong>Fiyata Dahil Olanlar</strong></td>
                                            </tr>
                                            <tr style={{fontSize: '14px'}}>
                                                <td colSpan={2}>{priceCalc.incluededInPrice}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style={{clear: 'both'}}></div>
                                </div>
                            </>: null
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ltn__checkout-inner">
                        <div className="ltn__checkout-single-content mt-30">
                            <h4 className="title-2">Rezervasyon Bilgileri</h4>
                            <div className="ltn__checkout-single-content-info">
                                <form action="#">
                                    <h6>Kişisel Bilgileriniz</h6>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="name" placeholder="Adınız Soyadınız"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" name="email" placeholder="E-posta Adresiniz"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-item input-item-phone ltn__custom-icon">
                                                <input type="text" name="phone"
                                                       placeholder="Telefon Numaranız"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>Notunuz</h6>
                                    <div className="input-item input-item-textarea ltn__custom-icon">
                                        <textarea name="message"
                                                  placeholder=""
                                                  defaultValue={""}/>
                                    </div>
                                    <h6>Ödeme Yönteminiz</h6>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={paymentMethod} type="radio"
                                               name="flexRadioDefault"
                                               id="flexRadioDefault1" value={'KREDITCARD'}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Kredi Kartı
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={paymentMethod} type="radio"
                                               name="flexRadioDefault"
                                               id="flexRadioDefault2" value={'BANKTRANSFER'}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Banka Havalesi
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={paymentMethod} type="radio"
                                               name="flexRadioDefault"
                                               id="flexRadioDefault3" value={'WESTERNUNION'}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                            Western Union
                                        </label>
                                    </div>
                                    <div className="col-md-12" style={{textAlign: 'right'}}>
                                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                type="submit">Place order
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

ReservationDetail.propTypes = {
    data: PropTypes.any,
    startDate: PropTypes.any,
    endDate: PropTypes.any,
    guestCount: PropTypes.any,
};

ReservationDetail.defaultProps = {
    data: null
};

export default ReservationDetail