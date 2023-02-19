import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {LikedVillaContext} from "../liked-villa-context";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import {currencySymbol, dateFormat, pricePeriod, serverDateFormat} from "../Constants";
import { v4 as uuid } from 'uuid';
import moment from "moment";

const LikedVillas = (props) => {
    const [state, dispatch] = useContext(LikedVillaContext);
    const [list, setList] = useState([]);
    const [collectionGuid, setCollectionGuid] = useState(null);

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaByIds", state?.likedVillaIds)
            .then((response) => {
                setList(response.data);
            });
        setCollectionGuid(null);
    }, [state])

    const unlike = (villaId, startDate, endDate) => {
        dispatch({
            type: 'UNLIKE',
            payload: villaId,
            startDate: startDate,
            endDate: endDate
        });
    }
    const unlikeAll = () => {
        dispatch({
            type: 'UNLIKEALL',
            payload: 0,
        });
    }

    const createCollection = () => {
        axios.post(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/CreateCollection", state?.likedVillaIds)
            .then((response) => {
                setCollectionGuid(window.location.origin + '/collection/' + response.data);
            });
    }

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(collectionGuid).then(r => {
        });
    }

    return <div>
        <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
            <div className="ltn__utilize-menu-inner ltn__scrollbar">
                <div className="ltn__utilize-menu-head">
                    <span className="ltn__utilize-menu-title">Beğenilen Villalar</span>
                    <button className="ltn__utilize-close liked-villa-card-close">×</button>
                </div>
                <div className="mini-cart-product-area ltn__scrollbar">
                    {list.length > 0 ?
                        <div key={'liked-villa-' + 0} className="mini-cart-item p-1 mb-0 clearfix">
                        <span onClick={unlikeAll} style={{position: 'initial', float: 'right'}}
                              className="mini-cart-item-delete"><i
                            className="icon-cancel"/></span>
                        </div> : null}
                    {
                        list.map(item =>
                            <div key={uuid()} className="mini-cart-item clearfix">
                                <div className="mini-cart-img go-top">
                                    <Link to={"/villa/" + item?.villa.url} target={"_blank"}><img
                                        src={process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaImage?id=" + item.villa.imageId}
                                        alt="Image"/></Link>
                                    <span onClick={() => unlike(item.villa.id, item.startDate, item.endDate)}
                                          className="mini-cart-item-delete"><i
                                        className="icon-cancel"/></span>
                                </div>
                                <div className="mini-cart-info go-top" style={{lineHeight:'20px'}}>
                                    <h6><Link to={"/villa/" + item?.villa.url} target={"_blank"}>{item.villa.ad}</Link>
                                    </h6>
                                    <span className="mini-cart-quantity">
                                        {item?.villa.toplamFiyat != null ?
                                            <span style={{textDecoration:item?.villa.toplamFiyat != item?.villa.indirimliToplamFiyat ?'line-through':'initial'}}>
                                                <CurrencyFormat value={item?.villa.toplamFiyat} displayType={'text'}
                                                                thousandSeparator={'.'} decimalSeparator={','}
                                                                decimalScale={0}
                                                                prefix={currencySymbol(item?.villa.paraBirimi)}/>

                                            </span>
                                            : null}
                                        {item?.villa.indirimliToplamFiyat != null ?
                                            <>
                                                &nbsp; <CurrencyFormat value={item?.villa.indirimliToplamFiyat} displayType={'text'}
                                                                thousandSeparator={'.'} decimalSeparator={','}
                                                                decimalScale={0}
                                                                prefix={currencySymbol(item?.villa.paraBirimi)}/>

                                            </>
                                            : null}</span>
                                     <br /> 
                                    <span className="mini-cart-quantity" style={{fontSize:'12px', fontStyle:'italic'}}>
                                        {moment(item.startDate, serverDateFormat).format(dateFormat)} 
                                        -
                                        {moment(item.endDate, serverDateFormat).format(dateFormat)}
                                    </span>
                                </div>
                            </div>
                        )
                    }

                </div>
                {state?.likedVillaIds?.length > 0 ?
                    <div className="mini-cart-footer mt-0">
                        <div className="btn-wrapper go-top">
                            <button onClick={createCollection} className="theme-btn-2 btn btn-effect-2">Link Paylaş
                            </button>
                        </div>
                    </div> : null}
                {collectionGuid != null ?
                    <div className="footer-newsletter">
                        <form style={{height: '65px'}}>
                            <input type="text" name="link" value={collectionGuid} placeholder=""/>
                            <div className="btn-wrapper">
                                <button onClick={copyToClipboard} className="theme-btn-1 btn" type="button"><i
                                    className="fa-solid fa-copy"/></button>
                            </div>
                        </form>
                    </div> : null}
            </div>
        </div>
    </div>
}

LikedVillas.propTypes = {};

LikedVillas.defaultProps = {};

export default LikedVillas
