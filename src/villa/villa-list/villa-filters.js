import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import {GlobalContext} from "../global-context";
import {initializedState} from "react-slick/lib/utils/innerSliderUtils";

const VillaFilters = (props) => {

    const queryParamToObject = () => {
        let qs = props.location.search;
        qs = qs.replaceAll('?', '');

        let obj = {};
        qs.split('&').forEach(i => {
            const tmp = i.split('=');
            const key = tmp[0];
            let value = tmp[1];
            console.log("key:"+key);
            console.log("value:"+value);
            if (value.includes(',')) {
                value = value.split(',').reduce((prev, curr) =>{
                    if(prev==null){
                        prev = [];
                    }
                    prev.push(curr);
                    return prev;
                }, [])
                console.log("=>"+value);
            }
            obj[key] = value;
        })

        return obj;
    }
    
    const initializeFilterObject = () => {
        const obj = queryParamToObject();
        return {
            type: obj.type == null ? [] : obj,
            region: obj.region == null ? [] : obj,
            category: obj.category == null ? [] : obj,
            property: obj.property == null ? [] : obj,
            startPrice: obj.startPrice, endPrice: obj.endPrice
        };
    }

    const {regions, categories} = useContext(GlobalContext)

    const [villaProperties, setVillaProperties] = useState([]);
    const [filterObject, setFilterObject] = useState(initializeFilterObject());

    useEffect(() => {
        console.log("filterObject");
        console.table(filterObject);
        loadData();
    }, [props.match.params.subUri]);

    const loadData = () => {
        loadVillasProperties();
    }

    const addFilter = (key, value) => {
        const filterObject_ = filterObject;

        if (Array.isArray(filterObject_[key])) {
            if (!filterObject_[key].includes(value)) {
                filterObject_[key].push(value);
            }
        } else {
            filterObject_[key] = value;
        }
        const qs = objectToQueryParam(filterObject_);
        console.log(qs);
        redirectToSearch(qs);
        setFilterObject(filterObject_);
    }

    const removeFilter = (key, value) => {
        let filterObject_ = filterObject;

        if (Array.isArray(filterObject_[key])) {
            if (filterObject_[key].includes(value)) {
                filterObject_[key] = filterObject_[key].filter(i => i != value);
            }
        } else {
            filterObject_[key] = null;
        }

        const qs = objectToQueryParam(filterObject_);
        console.log(qs);
        redirectToSearch(qs);
        setFilterObject(filterObject_);
    }

    const redirectToSearch = (qs) => {
        props.history.push("/villa-ara?" + qs);
    }

    const objectToQueryParam = (obj) => {
        var queryString = Object.keys(obj).reduce((prev, key) => {
            let item = '';
            if (Array.isArray(obj[key])) {
                const arrstr = reduceFilterArray(obj[key])
                if (arrstr != null) {
                    item = key + '=' + arrstr;
                }
            } else {
                if (obj[key] != null) {
                    item = key + '=' + obj[key];
                }
            }
            return prev + (prev != '' && item != '' ? '&' : '') + item;
        }, '');

        return queryString;
    }


    const reduceFilterArray = (arr) => {
        if (arr.length > 0) {
            return arr.reduce(
                (prev, curr) => prev + (prev != '' ? ',' : '') + curr, ''
            )
        }
        return null;
    }

    const loadVillasProperties = () => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetProperties")
            .then((response) => {
                setVillaProperties(response.data);
            });
    }

    const checkboxChange = (e) => {
        if (e.target.checked) {
            addFilter(e.target.name, e.target.value);
        } else {
            removeFilter(e.target.name, e.target.value);
        }
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
                    <div className="col-lg-4  mb-100">
                        <aside className="sidebar ltn__shop-sidebar">
                            <h3 className="mb-10">Villa Ara</h3>

                            {/* Advance Information widget */}
                            <div className="widget ltn__menu-widget">
                                <h4 className="ltn__widget-title">Mülk Tipi</h4>
                                <ul>
                                    <li>
                                        <label className="checkbox-item">Villa
                                            <input type="checkbox" name={'type'} onChange={checkboxChange}
                                                   value={'villa'}/>
                                            <span className="checkmark"/>
                                        </label>
                                        <span className="categorey-no"></span>
                                    </li>
                                    <li>
                                        <label className="checkbox-item">Apart
                                            <input type="checkbox" name={'type'} onChange={checkboxChange}
                                                   value={'apart'}/>
                                            <span className="checkmark"/>
                                        </label>
                                        <span className="categorey-no"></span>
                                    </li>
                                    <li>
                                        <label className="checkbox-item">Ev
                                            <input type="checkbox" name={'type'} onChange={checkboxChange}
                                                   value={'ev'}/>
                                            <span className="checkmark"/>
                                        </label>
                                        <span className="categorey-no"></span>
                                    </li>
                                    <li>
                                        <label className="checkbox-item">Bungalov
                                            <input type="checkbox" name={'type'} onChange={checkboxChange}
                                                   value={'bungalov'}/>
                                            <span className="checkmark"/>
                                        </label>
                                        <span className="categorey-no"></span>
                                    </li>

                                </ul>
                                <hr/>
                                <h4 className="ltn__widget-title">Bölgeler</h4>
                                <ul>
                                    {
                                        regions.map(item =>
                                            <li key={'filter-region-' + item.id}>
                                                <label className="checkbox-item">{item.ad}
                                                    <input type="checkbox" name={'region'} onChange={checkboxChange}
                                                           value={item.id}/>
                                                    <span className="checkmark"/>
                                                </label>
                                                <span className="categorey-no"></span>
                                            </li>
                                        )
                                    }

                                </ul>
                                <hr/>
                                <h4 className="ltn__widget-title">Kategoriler</h4>
                                <ul>
                                    {
                                        categories.map(item =>
                                            <li key={'filter-region-' + item.id}>
                                                <label className="checkbox-item">{item.ad}
                                                    <input type="checkbox" name={'category'} onChange={checkboxChange}
                                                           value={item.id}/>
                                                    <span className="checkmark"/>
                                                </label>
                                                <span className="categorey-no"></span>
                                            </li>
                                        )
                                    }
                                </ul>

                                <hr/>
                                {/* Price Filter Widget */}
                                <div className="widget--- ltn__price-filter-widget">
                                    <h4 className="ltn__widget-title ltn__widget-title-border---">Fiyat Aralığı</h4>
                                    <div className="price_filter">
                                        <div className="price_slider_amount">
                                            <input type="submit" value={'Filtrele'} defaultValue={""}/>
                                            <input type="text" className="amount" name="price"
                                                   placeholder="Add Your Price"/>
                                        </div>
                                        <div className="slider-range"/>
                                    </div>
                                </div>
                                <hr/>
                                <h4 className="ltn__widget-title">Villa Özellikleri</h4>
                                <ul>
                                    {villaProperties.map(item =>
                                        <li key={'filter-properety-' + item.id}>
                                            <label className="checkbox-item">{item.ad}
                                                <input type="checkbox" name={'property'} onChange={checkboxChange}
                                                       value={item.id}/>
                                                <span className="checkmark"/>
                                            </label>
                                            <span className="categorey-no"></span>
                                        </li>
                                    )
                                    }
                                </ul>

                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

VillaFilters.propTypes = {};

VillaFilters.defaultProps = {};

export default VillaFilters
