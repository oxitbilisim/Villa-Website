import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import {GlobalContext} from "../global-context";
import VillaListSidebar from "./villa-list-sidebar";
import VillaCard from "../global-components/VillaCard";

const VillaListV1 = (props) => {
    const [list, setList] = useState([]);
    const {regions, categories} = useContext(GlobalContext)

    useEffect(() => {
        loadData();
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

    let publicUrl = process.env.PUBLIC_URL + '/'

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
                                            <option>Default Sorting</option>
                                            <option>Sort by popularity</option>
                                            <option>Sort by new arrivals</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="short-by text-center">
                                        <select className="nice-select">
                                            <option>Per Page: 12</option>
                                            <option>Per Page: 20</option>
                                            <option>Per Page: 30</option>
                                            <option>Per Page: 50</option>
                                            <option>Per Page: 100</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="liton_product_grid">
                                <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* Search Widget */}
                                            <div className="ltn__search-widget mb-30">
                                                <form action="#">
                                                    <input type="text" name="search" placeholder="Villa Ara..."/>
                                                    <button type="submit"><i className="fas fa-search"/></button>
                                                </form>
                                            </div>
                                        </div>

                                        {list.map(item => (
                                            <div key={'villa-' + item.id} className="col-xl-6 col-sm-6 col-12">
                                                <VillaCard data={item} />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ltn__pagination-area text-center">
                            <div className="ltn__pagination">
                                <ul>
                                    <li><Link to="#"><i className="fas fa-angle-double-left"/></Link></li>
                                    <li><Link to="#">1</Link></li>
                                    <li className="active"><Link to="#">2</Link></li>
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

VillaListV1.propTypes = {
    type: PropTypes.string,
};

VillaListV1.defaultProps = {
    type: 'REGION'
};

export default VillaListV1
