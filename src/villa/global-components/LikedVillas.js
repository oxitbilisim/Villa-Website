import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {LikedVillaContext} from "../liked-villa-context";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import {currencySymbol, pricePeriod} from "../Constants";

const LikedVillas = (props) => {
    const [state, dispatch] = useContext(LikedVillaContext);
    const [list, setList] = useState([]);
    const [collectionGuid, setCollectionGuid] = useState(null);

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaByIds", {ids: state?.likedVillaIds})
            .then((response) => {
                setList(response.data);
            });
        setCollectionGuid(null);
    }, [state])

    const unlike = (villaId) => {
        dispatch({
            type: 'UNLIKE',
            payload: villaId,
        });
    }

    const createCollection = () => {
        axios.post(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/CreateCollection", {ids: state?.likedVillaIds})
            .then((response) => {
                setCollectionGuid(window.location.origin + '/collection/' + response.data);
            });
    }
    
    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(collectionGuid).then(r => {});
    }

    return <div>
        <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
            <div className="ltn__utilize-menu-inner ltn__scrollbar">
                <div className="ltn__utilize-menu-head">
                    <span className="ltn__utilize-menu-title">Beğenilen Villalar</span>
                    <button className="ltn__utilize-close">×</button>
                </div>
                <div className="mini-cart-product-area ltn__scrollbar">
                    {
                        list.map(item =>
                            <div key={'liked-villa-' + item.id} className="mini-cart-item clearfix">
                                <div className="mini-cart-img go-top">
                                    <Link to="/product-details"><img
                                        src={process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaImage?id=" + item.imageId}
                                        alt="Image"/></Link>
                                    <span onClick={() => unlike(item.id)} className="mini-cart-item-delete"><i
                                        className="icon-cancel"/></span>
                                </div>
                                <div className="mini-cart-info go-top">
                                    <h6><Link to="/product-details">{item.ad}</Link></h6>
                                    <span className="mini-cart-quantity">
                                        {item?.fiyat != null ? 
                                            <>
                                            <CurrencyFormat value={item?.fiyat} displayType={'text'}
                                                                               thousandSeparator={true}
                                                                               prefix={currencySymbol(item?.paraBirimi)}/>
                                            /{pricePeriod(item?.fiyatTuru)}
                                            </>
                                            : null}</span>
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
                                <button onClick={copyToClipboard} className="theme-btn-1 btn" type="button"><i className="fa-solid fa-copy"/></button>
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
