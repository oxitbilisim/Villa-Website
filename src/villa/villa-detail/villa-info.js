import React, {Component, useContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {LikedVillaContext} from "../liked-villa-context";
import './villa-info.css';
import CurrencyFormat from "react-currency-format";
import {currencySymbol, pricePeriod, serverDateFormat} from "../Constants";
import Tabs from "./tabs";
import {DateRangePicker} from "react-dates/esm";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './css/react_dates_overrides.css';
import moment from "moment";
import axios from "axios";
import {objectToQueryParam, queryParamToObject} from "../common-lib";

const VillaInfo = (props) => {
    const [reservations, setReservations] = useState([]);
    const [state, dispatch] = useContext(LikedVillaContext);
    const [focusedInput, setFocusedInput] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [priceCalc, setPriceCalc] = useState(null);

    useEffect(() => {
        if (props.data?.villa?.id != null) {
            loadReservationData(props.data?.villa?.id, moment().year());
        }

    }, [props.data])

    useEffect(() => {
        const cachedFilters = localStorage.getItem('searchParams')
        if (cachedFilters != null) {
            const filterObject = queryParamToObject(cachedFilters);
            if (filterObject.startDate != null) {
                setStartDate(moment(filterObject.startDate));
            }
            if (filterObject.endDate != null) {
                setEndDate(moment(filterObject?.endDate));
            }
        }
    }, [])

    useEffect(() => {
        const qs = localStorage.getItem("searchParams");

        const obj = qs != null ? queryParamToObject(qs) : {};
        let changed = false
        if (startDate != null) {
            obj.startDate = startDate?.format(serverDateFormat);
            changed = true;
        }
        if (endDate != null) {
            obj.endDate = endDate?.format(serverDateFormat);
            changed = true;
        }
        if (changed) {
            console.log(obj);
            localStorage.setItem("searchParams", objectToQueryParam(obj));
        }

        if (startDate != null &&
            endDate != null) {
            props.data?.villa.id;
            const qs = "?id=" + props.data?.villa?.id
                + "&startDate=" + encodeURIComponent(startDate.format(serverDateFormat))
                + "&endDate=" + encodeURIComponent(endDate.format(serverDateFormat))
            axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/CostCalculate" + qs)
                .then((response) => {
                    setPriceCalc(response.data);
                }).catch(() => {
                setPriceCalc(null);
            });
        }else{
            setPriceCalc(null);
        }
    }, [startDate, endDate])

    const loadReservationData = (id, year) => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaReservations?id=" + id + "&year=" + year)
            .then((response) => {
                setReservations(response.data);
            }).finally(() => {
        })
    }

    const toggleLike = (villaId) => {
        if (state.likedVillaIds.includes(villaId)) {
            dispatch({
                type: 'UNLIKE',
                payload: villaId,
            });
        } else {
            dispatch({
                type: 'LIKE',
                payload: villaId,
            });
        }
    }

    const dayBlocker = (day) => {
        const result = reservations.find(r => {
            const start = moment(r.start, serverDateFormat);
            const end = moment(r.end, serverDateFormat);

            if (day.isBetween(start, end, 'days', "()")) {
                return true;
            } else {
                return false;
            }
        })

        return result == null ? false : true;
    }

    const dayHighlighted = (day) => {
        const result = reservations.find(r => {
            const start = moment(r.start, serverDateFormat);
            const end = moment(r.end, serverDateFormat);

            if (day.format(serverDateFormat) == start.format(serverDateFormat) || day.format(serverDateFormat) == end.format(serverDateFormat)) {
                return true;
            } else {
                return false;
            }
        })

        return result == null ? false : true;
    }

    return <div className="ltn__shop-details-area pb-10">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">


                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className={'villa-title mt-2'}>
                                    <h1>{props.data?.villa.ad} </h1>
                                    <a style={{cursor: 'pointer'}}
                                       onClick={() => toggleLike(props.data?.villa.id)} title="Beğen">
                                        {state?.likedVillaIds?.includes(props.data?.villa.id) ?
                                            <i style={{color: 'red'}} className="fa-solid fa-heart"/>
                                            : <i className="flaticon-heart-1"/>
                                        }
                                    </a>
                                    <br/>
                                    <label><span className="ltn__secondary-color ">
							<i className="flaticon-pin"/></span> {props.data?.lokasyon.ilceIlAd},{props.data?.lokasyon.bolgeAd},{props.data?.lokasyon.mevki}
                                    </label>

                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 mt-3" style={{textAlignLast: 'right'}}>


                                <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
                                    <li><span>{props.data?.villa.kapasite} <i className="flaticon-user"></i></span>Kapasite
                                    </li>
                                    <li><span>{props.data?.villa.yatakOdaSayisi} <i
                                        className="flaticon-bed"></i> </span>Yatak
                                        Odası
                                    </li>
                                    <li><span>{props.data?.villa.banyoSayisi} <i className="flaticon-clean"></i></span>Banyo
                                    </li>

                                </ul>
                            </div>
                        </div>


                        <Tabs data={props.data} reservations={reservations}/>

                    </div>
                </div>

                <div className="col-lg-4 go-top">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">

                        <div className="widget ltn__author-widget" style={{padding: '35px 15px 30px 15px'}}>
                            <div className="ltn__author-widget-inner text-center">
                                <h3 style={{color: '#de7f16'}}><CurrencyFormat value={props.data?.villa.fiyat}
                                                                               displayType={'text'}
                                                                               thousandSeparator={'.'}
                                                                               decimalSeparator={','}
                                                                               prefix={currencySymbol(props.data?.villa.paraBirimi)}/><label
                                    style={{fontWeight: 'normal'}}>/{pricePeriod(props.data?.villa.fiyatTuru)}</label>
                                </h3>
                            </div>

                            <div className="col-lg-12 filter-data-range">
                                <DateRangePicker
                                    minimumNights={1}
                                    startDatePlaceholderText="Giriş Tarihi"
                                    endDatePlaceholderText="Çıkış Tarihi"
                                    displayFormat={"DD.MM.YYYY"}
                                    firstDayOfWeek={1}
                                    startDate={startDate} // momentPropTypes.momentObj or null,
                                    startDateId="startDate" // PropTypes.string.isRequired,
                                    endDate={endDate} // momentPropTypes.momentObj or null,
                                    endDateId="endDate" // PropTypes.string.isRequired,
                                    onDatesChange={({startDate, endDate}) => {
                                        setStartDate(startDate);
                                        setEndDate(endDate);
                                    }} // PropTypes.func.isRequired,
                                    focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={setFocusedInput} // PropTypes.func.isRequired,
                                    isDayBlocked={dayBlocker}
                                    isDayHighlighted={dayHighlighted}
                                />
                            </div>

                            {priceCalc != null ?
                                <div className="col-lg-12 col-md-12 mt-3">
                                    <div className="shoping-cart-total">
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <td colSpan={2}><strong>{priceCalc.dateNight}</strong></td>
                                            </tr>
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
                                                                    thousandSeparator={'.'} decimalSeparator={','} decimalScale={0}
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
                                            <tr style={{fontSize:'14px'}}>
                                                <td colSpan={2}><strong>Fiyata Dahil Olanlar</strong></td>
                                            </tr>
                                            <tr style={{fontSize:'14px'}}>
                                                <td colSpan={2}>{priceCalc.incluededInPrice}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style={{clear:'both'}}></div>
                                </div> : null
                            }

                        </div>

                    </aside>
                </div>
            </div>
        </div>
    </div>
}

VillaInfo.propTypes = {
    data: PropTypes.any,
};

VillaInfo.defaultProps = {
    data: null
};

export default VillaInfo
