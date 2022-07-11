import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CategoryV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__banner-area pt-120 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Bölgeler</h6>
						<h1 className="section-title">Tatil Bölgeleri</h1>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/kalkan.jpg"} >
						<div className="ltn__banner-info">
						<h3><Link to="/shop-left-sidebar"> Kalkan </Link></h3>
						<mark> 454 Villa</mark>
						</div>
					</div>
					</div>

					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/kalkan.jpg"} >
						<div className="ltn__banner-info">
						<h3><Link to="/shop-left-sidebar"> Kalkan </Link></h3>
						<mark> 454 Villa</mark>
						</div>
					</div>
					</div>


					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/kalkan.jpg"} >
						<div className="ltn__banner-info">
						<h3><Link to="/shop-left-sidebar"> Kalkan </Link></h3>
						<mark> 454 Villa</mark>
						</div>
					</div>
					</div>


					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/kalkan.jpg"} >
						<div className="ltn__banner-info">
						<h3><Link to="/shop-left-sidebar"> Kalkan </Link></h3>
						<mark> 454 Villa</mark>
						</div>
					</div>
					</div>


					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/kalkan.jpg"} >
						<div className="ltn__banner-info">
						<h3><Link to="/shop-left-sidebar"> Kalkan </Link></h3>
						<mark> 454 Villa</mark>
						</div>
					</div>
					</div>


					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/kalkan.jpg"} >
						<div className="ltn__banner-info">
						<h3><Link to="/shop-left-sidebar"> Kalkan </Link></h3>
						<mark> 454 Villa</mark>
						</div>
					</div>
					</div>




				</div>
				</div>
			</div>

        }
}

export default CategoryV3
