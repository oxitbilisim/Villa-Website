import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import {currencySymbol, dateFormat, pricePeriod, serverDateFormat} from "./Constants";
import moment from "moment";

const CollectionList = (props) => {
    const [list, setList] = useState([]);
    useEffect(() => {
        loadData();
    }, [props.match.params.subUri]);

    const loadData = () => {
        const apiUri = '/VillaFE/GetCollectionVillas?key=' + props.match.params.subUri;
        axios.get(process.env.REACT_APP_API_ENDPOINT + apiUri)
            .then((response) => {
                setList(response.data);
            });
    }

    const discountRateCheck = (val) => {
        return val != null && val != "" && val != 0;
    }

    return <div className="liton__shoping-cart-area mb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping-cart-inner">
                        <div className="shoping-cart-table table-responsive">
                            <table className="table">
                                <tbody>
                                {
                                    list.map((item, index) =>
                                        <tr key={index} style={{display: 'revert'}}>
                                            <td className="cart-product-image" width="200">
                                                <Link target={'_blank'} to={"/villa/" + item?.villa.url}>
                                                    <img
                                                        src={process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaImage?id=" + item?.villa.imageId}
                                                        alt="#"/>
                                                </Link>
                                            </td>
                                            <td className="cart-product-info text-left">
                                                <h4><Link target={'_blank'}
                                                          to={"/villa/" + item?.villa.url}>{item?.villa.ad}</Link></h4>
                                            </td>
                                            <td className="cart-product-price text-center" style={{fontSize:'18px',fontWeight:'600'}}><span>
                                                {item?.villa.fiyat != null ? <>Gecelik Fiyat:&nbsp;
                                                    <span
                                                        style={{textDecoration: discountRateCheck(item?.villa.discountRate) ? 'line-through' : 'initial'}}>
                                                        <CurrencyFormat
                                                            value={item?.villa.fiyat} displayType={'text'}
                                                            thousandSeparator={'.'}
                                                            decimalSeparator={','}
                                                            prefix={currencySymbol(item.villa.paraBirimi)}/>
                                                    </span>
                                                    {item?.villa.indirimliFiyat != item?.villa.fiyat ?
                                                        <span>&nbsp;
                                                            <CurrencyFormat
                                                                value={item?.villa.indirimliFiyat} displayType={'text'}
                                                                thousandSeparator={'.'}
                                                                decimalSeparator={','}
                                                                prefix={currencySymbol(item.villa.paraBirimi)}/>
                                                    </span>
                                                        : null}
                                                    <br/>Toplam Fiyat:&nbsp;

                                                    <span
                                                        style={{textDecoration: discountRateCheck(item?.villa.discountRate) ? 'line-through' : 'initial'}}>
                                                        <CurrencyFormat
                                                            value={item?.villa.toplamFiyat} displayType={'text'}
                                                            thousandSeparator={'.'}
                                                            decimalSeparator={','}
                                                            prefix={currencySymbol(item.villa.paraBirimi)}/>
                                                    </span>
                                                    {item?.villa.indirimliToplamFiyat != item?.villa.toplamFiyat ?
                                                        <span>&nbsp;
                                                            <CurrencyFormat
                                                                value={item?.villa.indirimliToplamFiyat}
                                                                displayType={'text'}
                                                                thousandSeparator={'.'}
                                                                decimalSeparator={','}
                                                                prefix={currencySymbol(item.villa.paraBirimi)}/>
                                                    </span>
                                                        : null}
                                                </> : null}
                                                <br/>
                                                        <label>
                                                    <span className="mini-cart-quantity"
                                                          style={{fontSize: '14px', fontStyle: 'italic'}}>
                                                        {moment(item.startDate, serverDateFormat).format(dateFormat)}
                                                        -
                                                        {moment(item.endDate, serverDateFormat).format(dateFormat)}
                                                    </span></label></span>
                                            </td>
                                        </tr>
                                    )
                                }


                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CollectionList