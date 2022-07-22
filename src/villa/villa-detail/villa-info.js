import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import VillaLocation from "./villa-location";
import VillaPrices from "./villa-prices";
import VillaFeatures from "./villa-features";
import VillaExplanation from "./villa-explanation";
import SimilarVillas from "../section-components/similar-villas";
import {LikedVillaContext} from "../liked-villa-context";
import './villa-info.css';
import VillaCalendar from "./villa-calendar";
import CurrencyFormat from "react-currency-format";
import {currencySymbol, pricePeriod} from "../Constants";

const VillaInfo = (props) => {
    const [state, dispatch] = useContext(LikedVillaContext);
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
    return <div className="ltn__shop-details-area pb-10">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                        <div className={'villa-title mt-4'}>
                        <h1>{props.data?.villa.ad} </h1>
                        <a style={{cursor: 'pointer'}}
                           onClick={() => toggleLike(props.data?.villa.id)} title="Beğen">
                            {state?.likedVillaIds?.includes(props.data?.villa.id) ?
                                <i style={{color: 'red'}} className="fa-solid fa-heart"/>
                                : <i className="flaticon-heart-1"/>
                            }
                        </a>
                        </div>
                        <label><span className="ltn__secondary-color">
							<i className="flaticon-pin"/></span> {props.data?.lokasyon.ilceIlAd},{props.data?.lokasyon.bolgeAd},{props.data?.lokasyon.mevki}
                        </label>

                        <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
                            <li><span>{props.data?.villa.kapasite} <i className="flaticon-user"></i></span>Kapasite</li>
                            <li><span>{props.data?.villa.yatakOdaSayisi} <i className="flaticon-bed"></i> </span>Yatak
                                Odası
                            </li>
                            <li><span>{props.data?.villa.banyoSayisi} <i className="flaticon-clean"></i></span>Banyo
                            </li>

                        </ul>
                        <VillaCalendar />
                        <VillaExplanation data={props.data?.icerik}/>
                        <VillaFeatures data={props.data?.ozellik} dataPool={props.data?.gorunum}/>
                        <VillaLocation data={props.data?.lokasyon}/>
                        <VillaPrices data={props.data?.periyodikFiyat}/>
                        <SimilarVillas limit={2}/>
                    </div>
                </div>

                <div className="col-lg-4 go-top">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">

                        <div className="widget ltn__author-widget" style={{padding:'35px 30px 30px 35px'}}>
                            <div className="ltn__author-widget-inner text-center">
                                <h3 style={{color:'#de7f16'}}><CurrencyFormat value={props.data?.villa.fiyat} displayType={'text'} thousandSeparator={true} prefix={currencySymbol(props.data?.villa.paraBirimi)} /><label style={{fontWeight:'normal'}}>/{pricePeriod(props.data?.villa.fiyatTuru)}</label></h3>
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
