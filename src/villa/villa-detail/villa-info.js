import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import VillaLocation from "./villa-location";
import VillaPrices from "./villa-prices";
import VillaFeatures from "./villa-features";
import VillaExplanation from "./villa-explanation";
import SimilarVillas from "../section-components/similar-villas";

const VillaInfo = (props) => {

    return <div className="ltn__shop-details-area pb-10">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">

                        <h1>{props.data?.villa.ad}</h1>
                        <label><span className="ltn__secondary-color">
							<i className="flaticon-pin"/></span> {props.data?.lokasyon.bolgeId},{props.data?.lokasyon.ilceAd},{props.data?.lokasyon.mevki}
                        </label>

                        <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
                            <li><span>{props.data?.villa.kapasite} <i className="flaticon-user"></i></span>Kapasite</li>
                            <li><span>{props.data?.villa.yatakOdaSayisi} <i className="flaticon-bed"></i> </span>Yatak
                                Odası
                            </li>
                            <li><span>{props.data?.villa.banyoSayisi} <i className="flaticon-clean"></i></span>Banyo
                            </li>

                        </ul>

                        <VillaExplanation data={props.data?.icerik} />
                        <VillaFeatures data={props.data?.ozellik} dataPool={props.data?.gorunum} />
                        <VillaLocation data={props.data?.lokasyon} />
                        <VillaPrices data={props.data?.periyodikFiyat} />
                        <SimilarVillas limit={2} />
                    </div>
                </div>

                <div className="col-lg-4 go-top">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">

                        <div className="widget ltn__author-widget">
                            <div className="ltn__author-widget-inner text-center">
                                <img src={"/assets/img/team/4.jpg"} alt="Image"/>
                                <h5>Rosalina D. Willaimson</h5>
                                <small>Traveller/Photographer</small>
                                <div className="product-ratting">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-star"/></a></li>
                                        <li><a href="#"><i className="fas fa-star"/></a></li>
                                        <li><a href="#"><i className="fas fa-star"/></a></li>
                                        <li><a href="#"><i className="fas fa-star-half-alt"/></a></li>
                                        <li><a href="#"><i className="far fa-star"/></a></li>
                                        <li className="review-total"><a href="#"> ( 1 Reviews )</a></li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio,
                                    eligendi suscipit reprehenderit atque.</p>
                                <div className="ltn__social-media">
                                    <ul>
                                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"/></a></li>
                                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"/></a></li>
                                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"/></a></li>
                                        <li><a href="#" title="Youtube"><i className="fab fa-youtube"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="widget ltn__top-rated-product-widget go-top">
                            <h4 className="ltn__widget-title ltn__widget-title-border-2">En Popüler Villalar</h4>
                            <ul>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <Link to="/product-details"><img
                                                src={"/assets/img/img-slide/32.jpg"} alt="#"/></Link>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                </ul>
                                            </div>
                                            <h6><Link to="/shop">Villa Flower Aras </Link></h6>
                                            <div className="product-price">
                                                <span>750 TL</span>
                                                <del>1000 TL</del>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <Link to="/product-details"><img
                                                src={"/assets/img/img-slide/32.jpg"} alt="#"/></Link>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                </ul>
                                            </div>
                                            <h6><Link to="/shop">Villa Flower Aras </Link></h6>
                                            <div className="product-price">
                                                <span>750 TL</span>
                                                <del>1000 TL</del>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <Link to="/product-details"><img
                                                src={"/assets/img/img-slide/32.jpg"} alt="#"/></Link>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                    <li><a href="#"><i className="fas fa-star"/></a></li>
                                                </ul>
                                            </div>
                                            <h6><Link to="/shop">Villa Flower Aras </Link></h6>
                                            <div className="product-price">
                                                <span>750 TL</span>
                                                <del>1000 TL</del>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                            </ul>
                        </div>
                        {/* Menu Widget (Category) */}
                        <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                            <h4 className="ltn__widget-title ltn__widget-title-border-2">Tatil Bölgeleri</h4>
                            <ul className="go-top">
                                <li><Link to="/blog-grid">Kalkan <span>(26)</span></Link></li>
                                <li><Link to="/blog-grid">Fethiye <span>(30)</span></Link></li>
                                <li><Link to="/blog-grid">Kaş <span>(71)</span></Link></li>
                                <li><Link to="/blog-grid">İslamlar <span>(56)</span></Link></li>
                                <li><Link to="/blog-grid">Dalyan <span>(60)</span></Link></li>
                                <li><Link to="/blog-grid">Göcek <span>(60)</span></Link></li>
                            </ul>
                        </div>

                        {/* Menu Widget (Category) */}
                        <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                            <h4 className="ltn__widget-title ltn__widget-title-border-2">Villa Kategorileri</h4>
                            <ul className="go-top">
                                <li><Link to="/blog-grid">Denize Yakın Villalar <span>(26)</span></Link></li>
                                <li><Link to="/blog-grid">Muhafazakar Villalar <span>(30)</span></Link></li>
                                <li><Link to="/blog-grid">Balayı Villaları <span>(71)</span></Link></li>
                                <li><Link to="/blog-grid">Evcil Hayvan İzni <span>(56)</span></Link></li>
                                <li><Link to="/blog-grid">Çocuk Havuzlu Villalar <span>(60)</span></Link></li>

                            </ul>
                        </div>


                        {/* Popular Product Widget */}
                        <div className="widget ltn__popular-product-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border-2">Önerilen Villalar</h4>
                            <div className="row ltn__popular-product-widget-active slick-arrow-1">

                                <div className="col-12">
                                    <div
                                        className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                        <div className="product-img go-top">
                                            <Link to="/shop"><img src={"/assets/img/img-slide/32.jpg"}
                                                                  alt="#"/></Link>
                                            <div className="real-estate-agent">
                                                <div className="agent-img">
                                                    <Link to="/team-details"><img
                                                        src={"/assets/img/blog/author.jpg"} alt="#"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-price">
                                                <span>750 TL<label>/Günlük</label></span>
                                            </div>
                                            <h2 className="product-title"><Link to="/shop">Villa Flower Aras</Link></h2>
                                            <div className="product-img-location">
                                                <ul>
                                                    <li>
                                                        <Link to="/shop"><i
                                                            className="flaticon-pin"/> Antalya,Kalkan,Patara</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                <li><span>3 </span>
                                                    Yatak Odası
                                                </li>
                                                <li><span>2 </span>
                                                    Banyo
                                                </li>
                                                <li><span>60 </span>
                                                    m2
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div
                                        className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                        <div className="product-img go-top">
                                            <Link to="/shop"><img src={"/assets/img/img-slide/32.jpg"}
                                                                  alt="#"/></Link>
                                            <div className="real-estate-agent">
                                                <div className="agent-img">
                                                    <Link to="/team-details"><img
                                                        src={"/assets/img/blog/author.jpg"} alt="#"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-price">
                                                <span>750 TL<label>/Günlük</label></span>
                                            </div>
                                            <h2 className="product-title"><Link to="/shop">Villa Flower Aras</Link></h2>
                                            <div className="product-img-location">
                                                <ul>
                                                    <li>
                                                        <Link to="/shop"><i
                                                            className="flaticon-pin"/> Antalya,Kalkan,Patara</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                <li><span>3 </span>
                                                    Yatak Odası
                                                </li>
                                                <li><span>2 </span>
                                                    Banyo
                                                </li>
                                                <li><span>60 </span>
                                                    m2
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <div
                                        className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                        <div className="product-img go-top">
                                            <Link to="/shop"><img src={"/assets/img/img-slide/32.jpg"}
                                                                  alt="#"/></Link>
                                            <div className="real-estate-agent">
                                                <div className="agent-img">
                                                    <Link to="/team-details"><img
                                                        src={"/assets/img/blog/author.jpg"} alt="#"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-price">
                                                <span>750 TL<label>/Günlük</label></span>
                                            </div>
                                            <h2 className="product-title"><Link to="/shop">Villa Flower Aras</Link></h2>
                                            <div className="product-img-location">
                                                <ul>
                                                    <li>
                                                        <Link to="/shop"><i
                                                            className="flaticon-pin"/> Antalya,Kalkan,Patara</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                <li><span>3 </span>
                                                    Yatak Odası
                                                </li>
                                                <li><span>2 </span>
                                                    Banyo
                                                </li>
                                                <li><span>60 </span>
                                                    m2
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Popular Post Widget */}
                        <div className="widget ltn__popular-post-widget go-top">
                            <h4 className="ltn__widget-title ltn__widget-title-border-2">Son Bloglar</h4>
                            <ul>
                                <li>
                                    <div className="popular-post-widget-item clearfix">
                                        <div className="popular-post-widget-img">
                                            <Link to="/blog-details"><img
                                                src={"/assets/img/img-slide/32.jpg"} alt="#"/></Link>
                                        </div>
                                        <div className="popular-post-widget-brief">
                                            <h6><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link>
                                            </h6>
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date">
                                                        <a href="#"><i className="far fa-calendar-alt"/>05.05.2022</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="popular-post-widget-item clearfix">
                                        <div className="popular-post-widget-img">
                                            <Link to="/blog-details"><img
                                                src={"/assets/img/img-slide/32.jpg"} alt="#"/></Link>
                                        </div>
                                        <div className="popular-post-widget-brief">
                                            <h6><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link>
                                            </h6>
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date">
                                                        <a href="#"><i className="far fa-calendar-alt"/>05.05.2022</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="popular-post-widget-item clearfix">
                                        <div className="popular-post-widget-img">
                                            <Link to="/blog-details"><img
                                                src={"/assets/img/img-slide/32.jpg"} alt="#"/></Link>
                                        </div>
                                        <div className="popular-post-widget-brief">
                                            <h6><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link>
                                            </h6>
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date">
                                                        <a href="#"><i className="far fa-calendar-alt"/>05.05.2022</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        {/* Social Media Widget */}
                        <div className="widget ltn__social-media-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border-2">Takip Et</h4>
                            <div className="ltn__social-media-2">
                                <ul>
                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"/></a></li>
                                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"/></a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Banner Widget */}
                        <div className="widget ltn__banner-widget d-none go-top">
                            <Link to="/shop"><img src={"/assets/img/banner/2.jpg"} alt="#"/></Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
}

VillaInfo.propTypes = {
    data: PropTypes.any,
};

VillaInfo.defaultProps = {
    data: null
};

export default VillaInfo
