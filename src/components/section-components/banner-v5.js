import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__slider-area ltn__slider-4">
				<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
				{/* ltn__slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl+"assets/img/slider.jpg"}>
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
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Konum</option>
											<option>Kalkan</option>
											<option>Fethiye</option>
											<option>Kaş</option>
											<option>Göcek</option>
										</select>
										</div>
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Kişi Sayısı</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
											<option>6+</option>
										</select>
										</div>
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Tarih</option>

										</select>
										</div>



										<div   className="car-price-filter-range   col-lg-3">


											{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
											<Link  to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase  ">VİLLA ARA</Link>

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
}

export default BannerV5
