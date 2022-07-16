import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import {GlobalContext} from "../global-context";
import VillaListSidebar from "./villa-list-sidebar";
import VillaCard from "../global-components/VillaCard";

const VillaFilters = (props) => {
   
    const {regions, categories} = useContext(GlobalContext)

    useEffect(() => {
        //loadData();
    }, [props.match.params.subUri]);

    const loadData = () => {
        let apiUri = '';
        let parentId = null;
        const subUri = props.match.params.subUri;
        if (props.type === 'REGION') {
            parentId = regions.find(i => i.url === subUri)?.id;
            const queryParams = (parentId != null ? '?bolgeId=' + parentId : '')
            apiUri = '/VillaFE/GetBolgeVillas' + queryParams;

        } else if (props.type === 'CATEGORY') {
            parentId = regions.find(i => i.url === subUri)?.id;
            const queryParams = (parentId != null ? '?kategoriId=' + parentId : '')
            apiUri = '/VillaFE/GetKategoriVillas';
        }

        axios.get(process.env.REACT_APP_API_ENDPOINT + apiUri)
            .then((response) => {
                setList(response.data);
            });
    }

    return <div>
        <div className="ltn__product-area ltn__product-gutter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-lg-2 mb-100">
                        <div className="ltn__shop-options">
                            <ul className="justify-content-start">
                                <li>
                                    <div className="ltn__grid-list-tab-menu ">
                                        <div className="nav">
                                            <a className="active show" data-bs-toggle="tab"
                                               href="#liton_product_grid"><i className="fas fa-th-large"/></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-none">
                                    <div className="showing-product-number text-right">
                                        <span>Showing 1–12 of 18 results</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="short-by text-center">
                                        <select className="nice-select">
                                            <option>Sırala: En çok ziyaret edilenler</option>
                                            <option>Sırala: Yeni eklenenler</option>
                                            <option>Sırala: Düşük fiyatlılar</option>
                                            <option>Sırala: Yüksek fiyatlılar</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="short-by text-center">
                                        <select className="nice-select">
                                            <option>12 Kayıt listele</option>
                                            <option>20 Kayıt listele</option>
                                            <option>30 Kayıt listele</option>
                                            <option>50 Kayıt listele</option>
                                            <option>100 Kayıt listele</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {props.children}
                        <div className="ltn__pagination-area text-center">
                            <div className="ltn__pagination">
                                <ul>
                                    <li><Link to="#"><i className="fas fa-angle-double-left"/></Link></li>
                                    <li className="active"><Link to="#">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#">3</Link></li>
                                    <li><Link to="#">...</Link></li>
                                    <li><Link to="#">10</Link></li>
                                    <li><Link to="#"><i className="fas fa-angle-double-right"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <VillaListSidebar/>
                </div>
            </div>
        </div>
    </div>
}

VillaFilters.propTypes = {
    
};

VillaFilters.defaultProps = {
    
};

export default VillaFilters
