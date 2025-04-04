import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import {GlobalContext} from "../global-context";
import './villa-filter.css';
import {DateRangePicker} from "react-dates/esm";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import moment from "moment";
import $ from "jquery";
import {objectToQueryParam, queryParamToObject} from "../common-lib";
import PropTypes from "prop-types";

const VillaFilters = (props) => {

    const [focusedInput, setFocusedInput] = useState();
    const guestCountRef = useRef();
    const windowWidth = useRef(window.innerWidth);
    const [numberOfMonths, setNumberOfMonths] = useState(windowWidth.current<768?1:2);
    const initializeFilterObject = () => {
        const obj = queryParamToObject(props.location.search);
        const initObject = {
            t: obj.t == null ? [] : obj.t, //type
            r: obj.r == null ? [] : obj.r, //region
            c: obj.c == null ? [] : obj.c, //category
            p: obj.p == null ? [] : obj.p, //property
            sp: obj.sp == null ? '' : obj.sp, // startPrice
            ep: obj.ep == null ? '' : obj.ep, // endPrice
            n: obj.n == null ? '' : obj.n, // name
            gc: obj.gc == null ? '2' : obj.gc, //guestCount
            sd: obj.sd == null ? '' : obj.sd, //startDate
            ed: obj.ed == null ? '' : obj.ed //endDate
        };
        return initObject;
    }

    const {regions, categories} = useContext(GlobalContext)
    const [villaProperties, setVillaProperties] = useState([]);
    const [estates, setEstates] = useState([]);
    const [filterObject, setFilterObject] = useState(initializeFilterObject());
    const [filterName, setFilterName] = useState(filterObject?.n);
    const [filterStartPrice, setFilterStartPrice] = useState(filterObject?.sp);
    const [filterEndPrice, setFilterEndPrice] = useState(filterObject?.ep);
    const [filterStartDate, setFilterStartDate] = useState(filterObject?.sd != null && filterObject?.sd != '' ? moment(filterObject?.sd) : null);
    const [filterEndDate, setFilterEndDate] = useState(filterObject?.ed != null && filterObject?.ed != '' ? moment(filterObject?.ed) : null);
    const [filterGuestCount, setFilterGuestCount] = useState(filterObject?.gc);

    useEffect(() => {
        loadVillasProperties();
        loadEstates();
        
        if(props.regionPageId!=null) {
            let filterObject_ = filterObject;
            if(!filterObject_.r.includes(props.regionPageId)) {
                filterObject_.r.push(props.regionPageId);
            }
        }
        if(props.categoryPageId!=null) {
            let filterObject_ = filterObject;
            if(!filterObject_.c.includes(props.categoryPageId)) {
                filterObject_.c.push(props.categoryPageId);
            }
        }
    }, [props.match.params.subUri]);

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
        //localStorage.setItem('searchParams', qs);
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
        //localStorage.setItem('searchParams', qs)
        redirectToSearch(qs);
        setFilterObject(filterObject_);
    }

    const redirectToSearch = (qs) => {
        props.history.push("/villa-ara?" + qs);
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
    }


    const filter = () => {
        if (filterName != null && filterName?.trim() != '') {
            addFilter('n', filterName);
        } else {
            removeFilter('n', null);
        }
        let filterStartPrice_ = filterStartPrice;
        let filterEndPrice_ = filterEndPrice;
        if (filterStartPrice_ != null
            && filterEndPrice_ != null
            && filterStartPrice_.trim() != ""
            && filterEndPrice_.trim() != ""
            && Number(filterStartPrice_) > Number(filterEndPrice_)) {
            const tmp_ = filterStartPrice_;
            filterStartPrice_ = filterEndPrice_;
            filterEndPrice_ = tmp_;

            setFilterStartPrice(filterStartPrice_);
            setFilterEndPrice(filterEndPrice_);
        }

        if (filterStartPrice_ != null && filterStartPrice_?.trim() != '') {
            addFilter('sp', filterStartPrice_);
        } else {
            removeFilter('sp', null);
        }
        if (filterEndPrice_ != null && filterEndPrice_?.trim() != '') {
            addFilter('ep', filterEndPrice_);
        } else {
            removeFilter('ep', null);
        }
        //if (filterGuestCount != null && filterGuestCount?.trim() != '' && filterGuestCount!='0') {
        const guestCount = $(guestCountRef.current).val();
        setFilterGuestCount(guestCount);
        if (guestCount != null && guestCount?.trim() != '' && guestCount != '0') {
            addFilter('gc', guestCount);
        } else {
            removeFilter('gc', null);
        }
        if (filterStartDate != null) {
            addFilter('sd', filterStartDate.format("yyyy-MM-DD"));
        } else {
            removeFilter('sd', null);
        }
        if (filterEndDate != null) {
            addFilter('ed', filterEndDate.format("yyyy-MM-DD"));
        } else {
            removeFilter('ed', null);
        }
        if (props.regionPageId != null) {
            addFilter('r', props.regionPageId);
        }
        if (props.categoryPageId != null) {
            addFilter('c', props.categoryPageId);
        }
        return false;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        filter();
    }
    
    useEffect(()=>{
        const startDateElement = document.getElementById("startDate");
        startDateElement.addEventListener('keydown', function(e) {
            const key = e.key; // const {key} = event; ES6+
            if (key === "Backspace") {
                setFilterStartDate(null);
                return false;
            }
        })
        const endDateElement = document.getElementById("endDate");
        endDateElement.addEventListener('keydown', function(e) {
            const key = e.key; // const {key} = event; ES6+
            if (key === "Backspace") {
                setFilterEndDate(null);
                return false;
            }
        })
    },[])

    return <div>
        <div className="ltn__product-area ltn__product-gutter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-lg-2 mb-100">
                        <div className="ltn__shop-options">
                            <ul className="justify-content-end">
                                {props.totalCount > 0 ?
                                    <li>
                                        <div className="short-by text-center">
                                            Toplam {props.totalCount} villa bulundu
                                        </div>
                                    </li> : null}
                                {/*<li>
                                    <div className="short-by text-center">
                                        <select className="nice-select">
                                            <option>Sırala: En çok ziyaret edilenler</option>
                                            <option>Sırala: Yeni eklenenler</option>
                                            <option>Sırala: Düşük fiyatlılar</option>
                                            <option>Sırala: Yüksek fiyatlılar</option>
                                        </select>
                                    </div>
                                </li>*/}
                            </ul>
                        </div>
                        {props.children}
                    </div>
                    <div className="col-lg-4  mb-10">
                        <aside className="sidebar ltn__shop-sidebar">
                            <h3 className="mb-6">Villa Ara</h3>

                            <div className="ltn__faq-inner ltn__faq-inner-2">
                                <div id="accordion_2">
                                    {/* card */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse"
                                            data-bs-target="#item-0" aria-expanded="false">
                                            Filtreler
                                        </h6>
                                        <div id="item-0" className="collapse" data-bs-parent="#accordion_0">
                                            <div className="card-body widget ltn__menu-widget"
                                                 style={{border: 'initial'}}>
                                                <form onSubmit={onSubmit}>
                                                    <div className="ltn__search-widget mb-30">
                                                        <input type="text" value={filterName} autoComplete={"off"} onChange={onChangeForm} name="name"
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
                                                                <input type="text" name="startPrice" autoComplete={"off"} onKeyPress={(event) => {
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                }} value={filterStartPrice} onChange={onChangeForm}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>En Yüksek</label>
                                                            <div className="input-item input-item-custom">
                                                                <input type="text" autoComplete={"off"} name="endPrice" onKeyPress={(event) => {
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                }} value={filterEndPrice} onChange={onChangeForm}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row pb-4">
                                                        <div className="col-lg-12">
                                                            <h4 className="ltn__widget-title ltn__widget-title-border--- title-filter">Tarih
                                                                Aralığı</h4>
                                                        </div>
                                                        <div className="col-lg-12 filter-data-range">
                                                            <DateRangePicker
                                                                numberOfMonths={numberOfMonths}
                                                                startDatePlaceholderText="Giriş Tarihi"
                                                                endDatePlaceholderText="Çıkış Tarihi"
                                                                displayFormat={"DD.MM.YYYY"}
                                                                firstDayOfWeek={1}
                                                                startDate={filterStartDate} // momentPropTypes.momentObj or null,
                                                                startDateId="startDate" // PropTypes.string.isRequired,
                                                                endDate={filterEndDate} // momentPropTypes.momentObj or null,
                                                                endDateId="endDate" // PropTypes.string.isRequired,
                                                                onDatesChange={({startDate, endDate}) => {
                                                                    setFilterStartDate(startDate);
                                                                    setFilterEndDate(endDate);
                                                                }} // PropTypes.func.isRequired,
                                                                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                                                onFocusChange={focusedInput => {
                                                                    setFocusedInput(focusedInput)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row pb-1">
                                                        <div className="col-lg-6">
                                                            <h4 className="ltn__widget-title ltn__widget-title-border--- title-filter">Misafir
                                                                Sayısı</h4>
                                                            <div className="cart-plus-minus cart-plus-minus-custom">
                                                                <input type="text" autoComplete={"off"} id={"guestInput"} min="1" ref={guestCountRef}
                                                                       value={filterGuestCount} name="guestCount"
                                                                       onChange={onChangeForm} className="cart-plus-minus-box"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-center">
                                                            <div className="btn-wrapper go-top">
                                                                <button onClick={filter} style={{zIndex: 0}}
                                                                        className="theme-btn-1 btn black-btn filter-button-custom">Filtrele
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse"
                                            data-bs-target="#item-1" aria-expanded="false">
                                            Mülk Tipi {filterObject.t.length > 0 ?
                                            <sup>{filterObject.t.length}</sup> : null}
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
                                                                           name={'t'}
                                                                           checked={filterObject?.t.includes('' + item.id)}
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
                                            Bölgeler {filterObject.r.length > 0 ?
                                            <sup>{filterObject.r.length}</sup> : null}
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
                                                                           name={'r'}
                                                                           checked={filterObject?.r.includes('' + item.id)}
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
                                            Kategoriler {filterObject.c.length > 0 ?
                                            <sup>{filterObject.c.length}</sup> : null}
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
                                                                           name={'c'}
                                                                           checked={filterObject?.c.includes('' + item.id)}
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
                                            Villa Özellikleri {filterObject.p.length > 0 ?
                                            <sup>{filterObject.p.length}</sup> : null}
                                        </h6>
                                        <div id="item-4" className="collapse" data-bs-parent="#accordion_2">
                                            <div className="card-body widget ltn__menu-widget"
                                                 style={{border: 'initial'}}>
                                                <ul>
                                                    {villaProperties.map(item =>
                                                        <li key={'filter-properety-' + item.id}>
                                                            <label className="checkbox-item">{item.ad}
                                                                <input type="checkbox"
                                                                       name={'p'}
                                                                       checked={filterObject?.p.includes('' + item.id)}
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

VillaFilters.propTypes = {
    regionPageId: PropTypes.any,
    categoryPageId: PropTypes.any,
    totalCount: PropTypes.any
};

VillaFilters.defaultProps = {};

export default VillaFilters
