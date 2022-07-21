import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import {currencySymbol} from "./Constants";

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
    return <div className="liton__shoping-cart-area mb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping-cart-inner">
                        <div className="shoping-cart-table table-responsive">
                            <table className="table">
                                <tbody>
                                {
                                    list.map(item =>
                                        <tr style={{display:'revert'}}>
                                            <td className="cart-product-image" width='100px'>
                                                <Link target={'_blank'} to={"/villa/" + item?.url}>
                                                    <img src={process.env.REACT_APP_API_ENDPOINT+"/VillaFE/GetVillaImage?id="+item?.imageId} alt="#"/>
                                                </Link>
                                            </td>
                                            <td className="cart-product-info text-left">
                                                <h4><Link target={'_blank'} to={"/villa/" + item?.url}>{item?.ad}</Link></h4>
                                            </td>
                                            <td className="cart-product-price text-left"><span><CurrencyFormat value={item?.fiyat} displayType={'text'} thousandSeparator={true} prefix={currencySymbol(item.paraBirimi)} /><label>/{item?.fiyatTuru}</label></span></td>
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