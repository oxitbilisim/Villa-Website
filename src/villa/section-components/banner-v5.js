import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import { DatePicker } from 'antd';
import {GlobalContext} from "../global-context";
import {DateRangePicker} from "react-dates/esm";
import moment from "moment";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides_home.css';
import './banner-v5.css';
import $ from "jquery";
import {queryParamToObject} from "../common-lib";

const BannerV5 = () => {
    const {regions, categories} = useContext(GlobalContext);
    const [filterStartDate, setFilterStartDate] = useState();
    const [filterEndDate, setFilterEndDate] = useState();
    const [focusedInput,setFocusedInput] = useState();
    const [filterGuestCount, setFilterGuestCount] = useState();

    const selectRef = useRef();

    useEffect(() => {
        const cachedFilters = localStorage.getItem('searchParams')
        if (cachedFilters != null) {
            const filterObject = queryParamToObject(cachedFilters);
            if (filterObject.startDate != null) {
                setFilterStartDate(moment(filterObject.startDate));
            }
            if (filterObject.endDate != null) {
                setFilterEndDate(moment(filterObject?.endDate));
            }
            if (filterObject.guestCount != null) {
                setFilterGuestCount(filterObject?.guestCount);
            }
            if(filterObject.region?.length>0){
                $(selectRef.current).val(filterObject.region[0]);
            }
        }
    }, [])

    const onChangeGuestCount = (e) => {
        setFilterGuestCount(e.target.value);
    }
    
    const filter = () => {
        let qs = "?";
        let firstFilterAdded = false; 
        const region = $(selectRef.current).val();
        if(region!=null && region?.trim()!=''){
            qs = qs+"region="+encodeURIComponent(region);
            firstFilterAdded = true;
        }
        if(filterGuestCount!=null && filterGuestCount?.trim()!=''){
            qs = qs+(firstFilterAdded?"&":"")+"guestCount="+encodeURIComponent(filterGuestCount);
            firstFilterAdded = true;
        }
        if(filterStartDate!=null){
            qs = qs+(firstFilterAdded?"&":"")+"startDate="+encodeURIComponent(filterStartDate.format("yyyy-MM-DD"));
            firstFilterAdded = true;
        }
        if(filterEndDate!=null){
            qs = qs+(firstFilterAdded?"&":"")+"endDate="+encodeURIComponent(filterEndDate.format("yyyy-MM-DD"));
            
        }
        localStorage.setItem('searchParams',qs)
        window.location.href = '/villa-ara'+qs;
    };
    
    return <div className="banner-v5-custom-style">
        <div
            className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
            {/* ltn__slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60"
                 data-bs-bg={"/assets/img/slider.jpg"}>
                <div className="ltn__slide-item-inner text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-car-dealer-form">
                                    <div className="ltn__car-dealer-form-tab">

                                        <div className="tab-content">
                                            <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                                                <div className="car-dealer-form-inner">
                                                    <form className="ltn__car-dealer-form-box row">
                                                        <div
                                                            className="col-lg-3 col-md-6">
                                                            <select ref={selectRef} className="nice-select">
                                                                <option value={''}>Bölge</option>
                                                                {regions.map(item =>
                                                                    <option value={item.id} key={'region-opt-'+item.id}>{item.ad}</option>
                                                                )}
                                                            </select>
                                                        </div>
                                                        <div
                                                            className="col-lg-3 col-md-6">
                                                            <div className="input-item input-item-name">
                                                                <input onChange={onChangeGuestCount} value={filterGuestCount} onKeyPress={(event) => {
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                }} type="text" className="mb-0" name="ltn__name" placeholder="Misafir Sayısı" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 home-date-range">
                                                            <DateRangePicker
                                                                startDatePlaceholderText="Giriş Tarihi"
                                                                endDatePlaceholderText="Çıkış Tarihi"
                                                                displayFormat={"DD.MM.YYYY"}
                                                                firstDayOfWeek={1}
                                                                startDate={filterStartDate} // momentPropTypes.momentObj or null,
                                                                startDateId="startDate" // PropTypes.string.isRequired,
                                                                endDate={filterEndDate} // momentPropTypes.momentObj or null,
                                                                endDateId="endDate" // PropTypes.string.isRequired,
                                                                onDatesChange={({ startDate, endDate }) => {
                                                                    setFilterStartDate(startDate);
                                                                    setFilterEndDate(endDate);
                                                                }} // PropTypes.func.isRequired,
                                                                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                                                onFocusChange={setFocusedInput} // PropTypes.func.isRequired,
                                                            />       
                                                        </div>


                                                        <div className="col-lg-2">
                                                            {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                                                            <button type="button" onClick={filter} className="btn theme-btn-1 btn-effect-1 text-uppercase">VİLLA ARA</button>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BannerV5
