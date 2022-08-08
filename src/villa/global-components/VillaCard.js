import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {LikedVillaContext} from "../liked-villa-context";
import CurrencyFormat from 'react-currency-format';
import {currencySymbol, pricePeriod} from "../Constants";

const VillaCard = (props) => {
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

    return <div>
        <div
            className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
            <div className="product-img go-top">
                <Link
                    to={"/villa/" + props.data?.url} style={{textAlign: 'center'}}>
                    <img src={process.env.REACT_APP_API_ENDPOINT+"/VillaFE/GetVillaImage?id="+props.data?.imageId}
                         style={{maxHeight: '281px'}}/>
                </Link>
            </div>
            <div className="product-info">
                <h2 className="product-title go-top">
                    <Link to={"/villa/" + props.data?.url}>{props.data?.ad}</Link></h2>
                <div className="product-img-location go-top mb-2">
                    <ul>
                        <li>
                            <Link
                                to={"/villa/" + props.data?.url}
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
                        <li style={{backgroundColor: 'initial', color:'initial'}}>
                            <a style={{cursor: 'pointer'}} onClick={() => toggleLike(props.data?.id)} title="Beğen">
                                {state?.likedVillaIds?.includes(props.data?.id)?
                                    <i style={{color: 'red'}} className="fa-solid fa-heart"/>
                                    :<i className="flaticon-heart-1"/>
                                }
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product-info-bottom">
                <div className="product-price">
                    {props.data?.fiyat != null ?
                        <span><CurrencyFormat value={props.data?.fiyat} displayType={'text'} thousandSeparator={'.'} decimalScale={0} decimalSeparator={','} prefix={currencySymbol(props.data?.paraBirimi)} /><label>/{pricePeriod(props.data?.fiyatTuru)}</label></span> :
                        <span>&nbsp;</span>}
                </div>
            </div>
        </div>
    </div>
}

VillaCard.propTypes = {
    data: PropTypes.any,
};

VillaCard.defaultProps = {
    data: null
};

export default VillaCard
