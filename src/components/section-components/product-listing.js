import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductListingV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return   <div>
				<div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-70">
					<div className="container">
					<div className="row">
						<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Villalar</h6>
							<h1 className="section-title">Popüler Villalar</h1>
						</div>
						</div>
					</div>
					<div className="row ltn__product-slider-item-three-active--- slick-arrow-1">
						<div className="col-xl-4 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
										</div>
										</div>
										<div className="product-info">
									{/*	<div className="product-badge">
											<ul>
											<li className="sale-badg">850 TL</li>
											</ul>
										</div>  */}
										<h2 className="product-title go-top"><Link to="/product-details">Villa Flower Aras</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
											</li>




											</ul>

											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
													<li><i className="flaticon-user" /> 2 Kişilik</li>
													<li><i className="flaticon-bed" /> 1 Yatak Odası</li>
													<li><i className="flaticon-bathtub" /> 1 Duş</li>
												</ul>

										</div>



								{/*		<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div> */}
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>750 TL<label>/Günlük</label></span>
										</div>
										</div>
									</div>
									</div>

						<div className="col-xl-4 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
										</div>
										</div>
										<div className="product-info">
									{/*	<div className="product-badge">
											<ul>
											<li className="sale-badg">850 TL</li>
											</ul>
										</div>  */}
										<h2 className="product-title go-top"><Link to="/product-details">Villa Flower Aras</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
											</li>




											</ul>

											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
													<li><i className="flaticon-user" /> 2 Kişilik</li>
													<li><i className="flaticon-bed" /> 1 Yatak Odası</li>
													<li><i className="flaticon-bathtub" /> 1 Duş</li>
												</ul>

										</div>



								{/*		<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div> */}
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>750 TL<label>/Günlük</label></span>
										</div>
										</div>
									</div>
									</div>

						<div className="col-xl-4 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
										</div>
										</div>
										<div className="product-info">
									{/*	<div className="product-badge">
											<ul>
											<li className="sale-badg">850 TL</li>
											</ul>
										</div>  */}
										<h2 className="product-title go-top"><Link to="/product-details">Villa Flower Aras</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
											</li>




											</ul>

											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
													<li><i className="flaticon-user" /> 2 Kişilik</li>
													<li><i className="flaticon-bed" /> 1 Yatak Odası</li>
													<li><i className="flaticon-bathtub" /> 1 Duş</li>
												</ul>

										</div>



								{/*		<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div> */}
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>750 TL<label>/Günlük</label></span>
										</div>
										</div>
									</div>
									</div>

						<div className="col-xl-4 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
										</div>
										</div>
										<div className="product-info">
									{/*	<div className="product-badge">
											<ul>
											<li className="sale-badg">850 TL</li>
											</ul>
										</div>  */}
										<h2 className="product-title go-top"><Link to="/product-details">Villa Flower Aras</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
											</li>




											</ul>

											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
													<li><i className="flaticon-user" /> 2 Kişilik</li>
													<li><i className="flaticon-bed" /> 1 Yatak Odası</li>
													<li><i className="flaticon-bathtub" /> 1 Duş</li>
												</ul>

										</div>



								{/*		<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div> */}
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>750 TL<label>/Günlük</label></span>
										</div>
										</div>
									</div>
									</div>


						<div className="col-xl-4 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
										</div>
										</div>
										<div className="product-info">
									{/*	<div className="product-badge">
											<ul>
											<li className="sale-badg">850 TL</li>
											</ul>
										</div>  */}
										<h2 className="product-title go-top"><Link to="/product-details">Villa Flower Aras</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
											</li>




											</ul>

											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
													<li><i className="flaticon-user" /> 2 Kişilik</li>
													<li><i className="flaticon-bed" /> 1 Yatak Odası</li>
													<li><i className="flaticon-bathtub" /> 1 Duş</li>
												</ul>

										</div>



								{/*		<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div> */}
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>750 TL<label>/Günlük</label></span>
										</div>
										</div>
									</div>
									</div>


						<div className="col-xl-4 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
										</div>
										</div>
										<div className="product-info">
									{/*	<div className="product-badge">
											<ul>
											<li className="sale-badg">850 TL</li>
											</ul>
										</div>  */}
										<h2 className="product-title go-top"><Link to="/product-details">Villa Flower Aras</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
											</li>




											</ul>

											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
													<li><i className="flaticon-user" /> 2 Kişilik</li>
													<li><i className="flaticon-bed" /> 1 Yatak Odası</li>
													<li><i className="flaticon-bathtub" /> 1 Duş</li>
												</ul>

										</div>



								{/*		<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div> */}
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>750 TL<label>/Günlük</label></span>
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

export default ProductListingV1
