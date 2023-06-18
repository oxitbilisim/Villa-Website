import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {LikedVillaContext} from "../liked-villa-context";
import CurrencyFormat from 'react-currency-format';
import {currencySymbol, pricePeriod, serverDateFormat} from "../Constants";
import {queryParamToObject} from "../common-lib";
import moment from "moment";

const VillaCard = (props) => {
    const [state, dispatch] = useContext(LikedVillaContext);

    const getDates = () => {
        const qs = props.location.search; //localStorage.getItem('searchParams');
        const searchObject = queryParamToObject(qs);
        if (searchObject.startDate == null) {
            searchObject.startDate = moment().format(serverDateFormat)
        }
        if (searchObject.endDate == null) {
            searchObject.endDate = moment().add(1, 'days').format(serverDateFormat)
        }

        return [searchObject.startDate, searchObject.endDate];
    }

    const toggleLike = (villaId) => {
        if (state.likedVillaIds.filter(i => i.villaId == props.data?.id && i.startDate == getDates()[0] && i.endDate == getDates()[1]).length > 0) {
            dispatch({
                type: 'UNLIKE',
                payload: villaId,
                startDate: getDates()[0],
                endDate: getDates()[1]
            });
        } else {
            dispatch({
                type: 'LIKE',
                payload: villaId,
            });
        }
    }
    
    const qs = () => {
        if(props?.location?.search!=null){
            return props?.location?.search;
        }
        return "";
    }

    const discountRateCheck = (val) => {
        return val != null && val != "" && val != 0;
    }

    return <>
        <div
            className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
            <div className="product-img go-top" style={{
                height: '250px', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Link
                    to={"/villa/" + props.data?.url+qs()} style={{textAlign: 'center'}}>
                    <img src={process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaImage?id=" + props.data?.imageId}
                         style={{maxHeight: '281px'}}/>
                </Link>
                { discountRateCheck(props.data?.discountRate)?
                <div className="real-estate-agent">
                    <div className="agent-img">
                        <div style={{ 
                            borderRadius:'100%', 
                            width: '60px', 
                            height: '60px', 
                            border: '3px solid', 
                            color: '#FFF',
                            borderColor: 'var(--border-color-1)',
                            textAlign: 'center',
                            lineHeight: '53px',
                            fontWeight: '900',
                            fontSize: '20px',
                            background: 'var(--ltn__secondary-color)' 
                        }}>
                            {props.data?.discountRate}%
                        </div>
                    </div>
                </div>
                :null }
            </div>
            <div className="product-info">
                <h2 className="product-title go-top">
                    <Link to={"/villa/" + props.data?.url+qs()}>{props.data?.ad}</Link></h2>
                <div className="product-img-location go-top mb-2">
                    <ul>
                        <li>
                            <Link
                                to={"/villa/" + props.data?.url+qs()}
                                title={props.data?.il + ', ' + props.data?.bolge + ', ' + props.data?.mevki}
                                style={{
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden'
                                }}>
                                <i className="flaticon-pin"/> {props.data?.il + ', ' + props.data?.bolge + ', ' + props.data?.mevki}
                            </Link>
                        </li>

                    </ul>

                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><i
                            className="flaticon-user"/> {props.data?.kapasite} Kişilik
                        </li>
                        <li><i
                            className="flaticon-bed"/> {props.data?.yatakOdaSayisi} Yatak
                            Odası
                        </li>
                        <li><i
                            className="flaticon-bathtub"/> {props.data?.banyoSayisi} Duş
                        </li>
                    </ul>

                </div>
                <div className="product-hover-action mb-2 text-center">
                    <ul>
                        <li style={{backgroundColor: 'initial', color: 'initial'}}>
                            <a style={{cursor: 'pointer'}} onClick={() => toggleLike(props.data?.id)} title="Beğen">
                                {state?.likedVillaIds?.filter(i => i.villaId == props.data?.id && i.startDate == getDates()[0] && i.endDate == getDates()[1]).length > 0 ?
                                    <i style={{color: 'red'}} className="fa-solid fa-heart"/>
                                    : <i className="flaticon-heart-1"/>
                                }
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product-info-bottom" style={{display: 'block'}}>
                <div className="product-price" style={{width: '100%', textAlign: 'center'}}>
                    {props.data?.fiyat != null ?
                        <>
                        <span
                            style={{textDecoration: discountRateCheck(props.data?.discountRate) ? 'line-through' : 'initial'}}>
                            <CurrencyFormat value={props.data?.fiyat} displayType={'text'} thousandSeparator={'.'}
                                            decimalScale={0} decimalSeparator={','}
                                            prefix={currencySymbol(props.data?.paraBirimi)}/>
                            </span>
                            {discountRateCheck(props.data?.discountRate) && props.data?.indirimliFiyat != props.data?.fiyat ?
                                <><span>&nbsp;&nbsp;<CurrencyFormat value={props.data?.indirimliFiyat}
                                                                    displayType={'text'}
                                                                    thousandSeparator={'.'} decimalScale={0}
                                                                    decimalSeparator={','}
                                                                    prefix={currencySymbol(props.data?.paraBirimi)}/></span></> :
                                <span>&nbsp;</span>}
                            <label>/{pricePeriod(props.data?.fiyatTuru)}</label>
                        </> : <span>&nbsp;</span>}

                </div>
                <div className="product-price" style={{width: '100%', textAlign: 'center'}}>
                    {props.data?.toplamFiyat != null && props.data?.toplamFiyat != 0 && props.data?.toplamFiyat != props.data?.fiyat ?
                        <>
                        <span
                            style={{textDecoration: discountRateCheck(props.data?.discountRate) ? 'line-through' : 'initial'}}><CurrencyFormat
                            value={props.data?.toplamFiyat} displayType={'text'} thousandSeparator={'.'}
                            decimalScale={0} decimalSeparator={','}
                            prefix={currencySymbol(props.data?.paraBirimi)}/></span>

                            {props.data?.indirimliToplamFiyat != null &&
                            props.data?.indirimliToplamFiyat != 0 &&
                            props.data?.indirimliToplamFiyat != props.data?.indirimliFiyat &&
                            props.data?.indirimliToplamFiyat != props.data?.toplamFiyat
                                ?
                                <span>&nbsp;&nbsp;<CurrencyFormat value={props.data?.indirimliToplamFiyat}
                                                                  displayType={'text'}
                                                                  thousandSeparator={'.'} decimalScale={0}
                                                                  decimalSeparator={','}
                                                                  prefix={currencySymbol(props.data?.paraBirimi)}/></span> :
                                <span>&nbsp;</span>}
                            <label>/Toplam</label>
                        </>
                        :
                        <span>&nbsp;</span>}

                </div>
            </div>
        </div>
    </>
}

VillaCard.propTypes = {
    data: PropTypes.any,
};

VillaCard.defaultProps = {
    data: null
};

export default VillaCard
