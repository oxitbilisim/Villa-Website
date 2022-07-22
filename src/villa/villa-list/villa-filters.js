import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import {GlobalContext} from "../global-context";
import './villa-filter.css';

const VillaFilters = (props) => {

    const arrayKeys = ['type', 'region', 'category', 'property'];

    const queryParamToObject = () => {
        let qs = props.location.search;
        qs = qs.replaceAll('?', '');

        let obj = {};
        qs.split('&').forEach(i => {
            if (i == null || i == '') {
                return;
            }
            const tmp = i.split('=');
            const key = tmp[0];
            let value = decodeURIComponent(tmp[1]);
            if (arrayKeys.includes(key)) {
                value = value.split(',').reduce((prev, curr) => {
                    if (prev == null) {
                        prev = [];
                    }
                    prev.push(decodeURIComponent(curr));
                    return prev;
                }, [])
            }
            obj[key] = value;
        })
        return obj;
    }

    const initializeFilterObject = () => {
        const obj = queryParamToObject();
        console.log("initializeFilterObject");
        console.table(obj);
        const initObject = {
            type: obj.type == null ? [] : obj.type,
            region: obj.region == null ? [] : obj.region,
            category: obj.category == null ? [] : obj.category,
            property: obj.property == null ? [] : obj.property,
            startPrice: obj.startPrice == null ? '' : obj.startPrice,
            endPrice: obj.endPrice == null ? '' : obj.endPrice,
            name: obj.name == null ? '' : obj.name,
            guestCount: obj.guestCount == null ? '2' : obj.guestCount,
        };
        return initObject;
    }

    const {regions, categories} = useContext(GlobalContext)
    const [villaProperties, setVillaProperties] = useState([]);
    const [estates, setEstates] = useState([]);
    const [filterObject, setFilterObject] = useState(initializeFilterObject());
    const [filterName, setFilterName] = useState(filterObject?.name);
    const [filterStartPrice, setFilterStartPrice] = useState(filterObject?.startPrice);
    const [filterEndPrice, setFilterEndPrice] = useState(filterObject?.endPrice);
    const [filterGuestCount, setFilterGuestCount] = useState(filterObject?.guestCount);

    useEffect(() => {
        loadVillasProperties();
        loadEstates();
    }, [props.match.params.subUri]);

    const loadData = () => {
        const qs = objectToQueryParam(filterObject);
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/SearchVilla" + props.location.search)
            .then((response) => {

            });
    }
    

    useEffect(() => {
        loadData();
    }, [props.location.search]);
    useEffect(() => {
        console.table(filterObject)
    }, []);

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
                if (obj[key] != null && obj[key].trim() != '') {
                    item = key + '=' + encodeURIComponent(obj[key]);
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

    const loadEstates = () => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetEstates")
            .then((response) => {
                setEstates(response.data);
            });
    }

    const checkboxChange = (e) => {
        if (e.target.checked) {
            addFilter(e.target.name, e.target.value);
        } else {
            removeFilter(e.target.name, e.target.value);
        }
    }

    const format = amount => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    const formatCurrency = e => {
        /*if(e.target.name=="min"){
            setMinPrice(format(e.target.value));
        }else if(e.target.name=="max"){
            setMaxPrice(format(e.target.value));
        }*/
    }

    const onChangeForm = (e) => {
        if (e.target.name == 'name') {
            setFilterName(e.target.value);
        } else if (e.target.name == 'startPrice') {
            setFilterStartPrice(e.target.value);
        } else if (e.target.name == 'endPrice') {
            setFilterEndPrice(e.target.value);
        } else if (e.target.name == 'guestCount') {
            setFilterGuestCount(e.target.value);
        }
        console.log(e.target.name);
        console.log(e.target.value);
    }
    const filter = () => {
        if (filterName != null && filterName?.trim() != '') {
            addFilter('name', filterName);
        }else{
            removeFilter('name',null);
        }
        if (filterStartPrice != null && filterStartPrice?.trim() != '') {
            addFilter('startPrice', filterStartPrice);
        }else{
            removeFilter('startPrice',null);
        }
        if (filterEndPrice != null && filterEndPrice?.trim() != '') {
            addFilter('endPrice', filterEndPrice);
        }else{
            removeFilter('endPrice',null);
        }
        if (filterGuestCount != null && filterGuestCount?.trim() != '' && filterGuestCount!='0') {
            addFilter('guestCount', filterGuestCount);
        }else{
            removeFilter('guestCount',null);
        }
        return false;
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        filter();
    }

    const _handleKeyDown = (e) =>{
        if (e.key === 'Enter') {
            filter();
        }
    }

    return <div>
        <div className="ltn__product-area ltn__product-gutter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-lg-2 mb-100">
                        <div className="ltn__shop-options">
                            <ul className="justify-content-end">
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
                            </ul>
                        </div>
                        {props.children}
                    </div>
                    <div className="col-lg-4  mb-100">
                        <aside className="sidebar ltn__shop-sidebar">
                            <h3 className="mb-6">Villa Ara</h3>

                            {/* Advance Information widget */}
                            <div className="widget ltn__menu-widget">
                                <form onSubmit={onSubmit}>
                                <div className="ltn__search-widget mb-30">
                                        <input type="text" value={filterName} onChange={onChangeForm} name="name"
                                               placeholder="Villa Ara..."/>
                                </div>
                                <div className="row pb-4">
                                    <div className="col-lg-12">
                                        <h4 className="ltn__widget-title ltn__widget-title-border--- title-filter">Fiyat
                                            Aralığı</h4>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>En Düşük</label>
                                        <div className="input-item input-item-custom">
                                            <input type="text" name="startPrice" value={filterStartPrice} onChange={onChangeForm}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>En Yüksek</label>
                                        <div className="input-item input-item-custom">
                                            <input type="text" name="endPrice" value={filterEndPrice} onChange={onChangeForm}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pb-4">
                                    <div className="col-lg-12">
                                        <h4 className="ltn__widget-title ltn__widget-title-border--- title-filter">Tarih
                                            Aralığı</h4>
                                    </div>
                                    <div className="col-lg-12">
                                        
                                    </div>
                                </div>

                                <div className="row pb-1">
                                    <div className="col-lg-6">
                                        <h4 className="ltn__widget-title ltn__widget-title-border--- title-filter">Misafir
                                            Sayısı</h4>
                                        <div className="cart-plus-minus cart-plus-minus-custom">
                                            <input type="text" min="1" value={filterGuestCount} name="guestCount"
                                                   onChange={onChangeForm} className="cart-plus-minus-box"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                        <div className="btn-wrapper go-top">
                                            <button onClick={filter}
                                                    className="theme-btn-1 btn black-btn filter-button-custom">Filtrele
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </form>
                            </div>

                            <div className="ltn__faq-inner ltn__faq-inner-2">
                                <div id="accordion_2">
                                    {/* card */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse"
                                            data-bs-target="#item-1" aria-expanded="false">
                                            Mülk Tipi {filterObject.type.length > 0 ?
                                            <sup>{filterObject.type.length}</sup> : null}
                                        </h6>
                                        <div id="item-1" className="collapse" data-bs-parent="#accordion_1">
                                            <div className="card-body widget ltn__menu-widget"
                                                 style={{border: 'initial'}}>
                                                <ul>
                                                    {
                                                        estates.map(item =>
                                                            <li key={'filter-region-' + item.id}>
                                                                <label className="checkbox-item">{item.ad}
                                                                    <input type="checkbox"
                                                                           name={'type'}
                                                                           checked={filterObject?.type.includes('' + item.id)}
                                                                           onChange={checkboxChange}
                                                                           value={item.id}/>
                                                                    <span className="checkmark"/>
                                                                </label>
                                                                <span className="categorey-no"></span>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse"
                                            data-bs-target="#item-2" aria-expanded="false">
                                            Bölgeler {filterObject.region.length > 0 ?
                                            <sup>{filterObject.region.length}</sup> : null}
                                        </h6>
                                        <div id="item-2" className="collapse" data-bs-parent="#accordion_2">
                                            <div className="card-body widget ltn__menu-widget"
                                                 style={{border: 'initial'}}>
                                                <ul>
                                                    {
                                                        regions.map(item =>
                                                            <li key={'filter-region-' + item.id}>
                                                                <label className="checkbox-item">{item.ad}
                                                                    <input type="checkbox"
                                                                           name={'region'}
                                                                           checked={filterObject?.region.includes('' + item.id)}
                                                                           onChange={checkboxChange}
                                                                           value={item.id}/>
                                                                    <span className="checkmark"/>
                                                                </label>
                                                                <span className="categorey-no"></span>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse"
                                            data-bs-target="#item-3" aria-expanded="false">
                                            Kategoriler {filterObject.category.length > 0 ?
                                            <sup>{filterObject.category.length}</sup> : null}
                                        </h6>
                                        <div id="item-3" className="collapse" data-bs-parent="#accordion_2">
                                            <div className="card-body widget ltn__menu-widget"
                                                 style={{border: 'initial'}}>
                                                <ul>
                                                    {
                                                        categories.map(item =>
                                                            <li key={'filter-region-' + item.id}>
                                                                <label className="checkbox-item">{item.ad}
                                                                    <input type="checkbox"
                                                                           name={'category'}
                                                                           checked={filterObject?.category.includes('' + item.id)}
                                                                           onChange={checkboxChange}
                                                                           value={item.id}/>
                                                                    <span className="checkmark"/>
                                                                </label>
                                                                <span className="categorey-no"></span>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse"
                                            data-bs-target="#item-4" aria-expanded="false">
                                            Villa Özellikleri {filterObject.property.length > 0 ?
                                            <sup>{filterObject.property.length}</sup> : null}
                                        </h6>
                                        <div id="item-4" className="collapse" data-bs-parent="#accordion_2">
                                            <div className="card-body widget ltn__menu-widget"
                                                 style={{border: 'initial'}}>
                                                <ul>
                                                    {villaProperties.map(item =>
                                                        <li key={'filter-properety-' + item.id}>
                                                            <label className="checkbox-item">{item.ad}
                                                                <input type="checkbox"
                                                                       name={'property'}
                                                                       checked={filterObject?.property.includes('' + item.id)}
                                                                       onChange={checkboxChange}
                                                                       value={item.id}/>
                                                                <span className="checkmark"/>
                                                            </label>
                                                            <span className="categorey-no"></span>
                                                        </li>
                                                    )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
