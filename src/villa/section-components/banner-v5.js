import React, {Component, useContext} from 'react';
import {Link} from 'react-router-dom';
import { DatePicker } from 'antd';
import {GlobalContext} from "../global-context";
const { RangePicker } = DatePicker;

const BannerV5 = () => {
    const {regions, categories} = useContext(GlobalContext);

    return <div className="ltn__slider-area ltn__slider-4">
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
                                                    <form action="#" className="ltn__car-dealer-form-box row">
                                                        <div
                                                            className="col-lg-3 col-md-6">
                                                            <select className="nice-select">
                                                                <option>Bölge</option>
                                                                {regions.map(item =>
                                                                    <option key={'region-opt-'+item.id}>{item.ad}</option>
                                                                )}
                                                            </select>
                                                        </div>
                                                        <div
                                                            className="col-lg-3 col-md-6">
                                                            <select>
                                                                <option>Kişi Sayısı</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6+</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                                                
                                                        </div>


                                                        <div className="car-price-filter-range   col-lg-3">


                                                            {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                                                            <Link to="/shop-right-sidebar"
                                                                  className="btn theme-btn-1 btn-effect-1 text-uppercase  ">VİLLA
                                                                ARA</Link>

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
