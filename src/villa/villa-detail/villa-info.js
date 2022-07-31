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
import {end} from "npm-check/lib/util/cli-emoji";

const VillaInfo = (props) => {
    const [reservations, setReservations] = useState([]);
    const [state, dispatch] = useContext(LikedVillaContext);
    const [focusedInput, setFocusedInput] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [filterGuestCount, setFilterGuestCount] = useState();

    const onChangeGuestCount = (e) => {
        setFilterGuestCount(e.target.value);
    }

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
            if (filterObject.guestCount != null) {
                setFilterGuestCount(filterObject?.guestCount);
            }
        }
    }, [])

    useEffect(() => {
        if (startDate != null &&
            endDate != null &&
            filterGuestCount != null && filterGuestCount != 0) {
            props.data?.villa.id;
            const qs = "?startDate="+encodeURIComponent(startDate.format(serverDateFormat))
                +"&endDate="+encodeURIComponent(endDate.format(serverDateFormat))
                +"&guestCount="+encodeURIComponent(filterGuestCount)
            axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/CostCalculate" + qs)
                .then((response) => {

                });
        }
    }, [startDate, endDate, filterGuestCount])

    const loadReservationData = (id, year) => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaReservations?id=" + id + "&year=" + year)
            .then((response) => {
                setReservations(response.data);
                console.log(response.data);
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
                          <div className="col-lg-5 col-md-12 mt-3" style={{textAlignLast: 'right'}} >


                        <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
                            <li><span>{props.data?.villa.kapasite} <i className="flaticon-user"></i></span>Kapasite</li>
                            <li><span>{props.data?.villa.yatakOdaSayisi} <i className="flaticon-bed"></i> </span>Yatak
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
                            <div
                                className="col-lg-12 mt-2">
                                <div className="input-item input-item-name">
                                    <input onChange={onChangeGuestCount} value={filterGuestCount}
                                           onKeyPress={(event) => {
                                               if (!/[0-9]/.test(event.key)) {
                                                   event.preventDefault();
                                               }
                                           }} type="text" className="mb-0" name="ltn__name"
                                           placeholder="Misafir Sayısı"/>
                                </div>
                            </div>

                        <div className="col-lg-12 col-md-12 mt-3">

                            <p><b>02/10/2022 - 08/10/2022  </b> 6 Gece</p>
                            <p><b>Toplam Tutar: </b> 10.000 TL</p>
                            <p><b>Ön Ödeme: </b> 3.000 TL</p>
                            <p><b>Depozito: </b> 1.000 TL</p>
                            <p><b>Fiyata Dahil Olanlar: </b> Konaklama, Elektrik,Su, Doğalgaz, İnternet, Giriş Temizliği,Havuz Temizliği</p>

                        </div>




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
