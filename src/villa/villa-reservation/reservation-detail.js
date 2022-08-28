import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {objectToQueryParam, queryParamToObject} from "../common-lib";
import moment from "moment";
import './reservation-detail.css';
import {currencySymbol, serverDateFormat} from "../Constants";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

const ReservationDetail = (props) => {
    const [formName, setFormName] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formNote, setFormNote] = useState('');
    const [priceCalc, setPriceCalc] = useState(null);
    const [extraServices, setExtraServices] = useState([]);
    const [selectedExtraServices, setSelectedExtraServices] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const obj = queryParamToObject(props.location.search);

    const onChangeExtraServices = (e) => {
        console.log(e.currentTarget.name);
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.checked);
        const esId = e.currentTarget.value;
        let esList = selectedExtraServices;
        if (e.currentTarget.checked) {
            if (!esList.includes(esId)) {
                esList.push(esId);
            }
        } else {
            if (esList.includes(esId)) {
                esList = esList.filter(i => i != esId);
            }
        }
        setSelectedExtraServices(esList);
    }

    const onChangeForm = (e) => {
        console.log(e.currentTarget.name);
        console.log(e.currentTarget.value);
        if (e.currentTarget.name == 'name') {
            setFormName(e.currentTarget.value);
        } else if (e.currentTarget.name == 'phone') {
            setFormPhone(e.currentTarget.value);
        } else if (e.currentTarget.name == 'email') {
            setFormEmail(e.currentTarget.value);
        } else if (e.currentTarget.name == 'note') {
            setFormNote(e.currentTarget.value);
        }
    }

    const sendReservation = () => {
        setErrorMessage(null);
        
        if(
            formName==null || formName.trim()=="" ||
            formPhone==null || formPhone.trim()=="" ||
            formEmail==null || formEmail.trim()==""
        ){
            setErrorMessage("Kişisel bilgiler alanını boş bırakamazsınız!");
            return;
        }
        
        const data = {
            villaId: props.data?.villa?.id,
            startDate: obj.startDate,
            endDate: obj.endDate,
            name: formName,
            phone: formPhone,
            email: formEmail,
            guestCount: obj.guestCount,
            note: formNote,
            extraServices: selectedExtraServices.map(i => Number(i))
        }

        axios.post(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/SaveReservation", data)
            .then((response) => {
                props.history.push("/rezervasyon-tamamlandi/" + response.data);
            }).catch((e) => {
            setErrorMessage(e.response.data);
        });
    }

    useEffect(() => {
        if (props.data != null) {
            axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/CostCalculate" + props.location.search + "&id=" + props.data?.villa?.id)
                .then((response) => {
                    setPriceCalc(response.data);
                }).catch(() => {
                setPriceCalc(null);
            });
        }
    }, [props.location?.search, props.data])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetAllExtraServices")
            .then((response) => {
                setExtraServices(response.data);
            }).catch(() => {
        });
    }, [])

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
                                {obj.guestCount != null ? obj.guestCount + " Kişi" : null}
                            </div>


                            {priceCalc != null ? <>
                                <div className="col-lg-12 col-md-12 mt-3">
                                    <div className="shoping-cart-total" style={{textAlign: 'initial'}}>
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
                            </> : null
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
                                                <input type="text" name="name" value={formName} onChange={onChangeForm}
                                                       placeholder="Adınız Soyadınız"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" name="email" value={formEmail}
                                                       onChange={onChangeForm} placeholder="E-posta Adresiniz"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-item input-item-phone ltn__custom-icon">
                                                <input type="text" name="phone" value={formPhone}
                                                       onChange={onChangeForm}
                                                       placeholder="Telefon Numaranız"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>Notunuz</h6>
                                    <div className="input-item input-item-textarea ltn__custom-icon">
                                        <textarea name="note" value={formNote} onChange={onChangeForm}
                                                  placeholder=""
                                                  defaultValue={""}/>
                                    </div>
                                    <h6>Ek Hizmetler</h6>
                                    {
                                        extraServices.map(item =>
                                            <div className="form-check">
                                                <input className="form-check-input" onChange={onChangeExtraServices}
                                                       type="checkbox"
                                                       name="flexRadioDefault"
                                                       id={"es-" + item.id} value={item.id}/>
                                                <label className="form-check-label" htmlFor={"es-" + item.id}>
                                                    {item.ad}
                                                </label>
                                            </div>
                                        )
                                    }

                                    <div className="col-md-12" style={{textAlign: 'right'}}>
                                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                onClick={sendReservation}
                                                type="button">Rezervasyon Yap
                                        </button>
                                    </div>
                                    {errorMessage != null ?
                                        <div className="col-md-12 text-center mt-3">
                                            {errorMessage}
                                        </div>
                                        : null}
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