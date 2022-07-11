import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (


		<div className="col-lg-4 go-top">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">


						<div className="widget ltn__top-rated-product-widget go-top">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">En Popüler Villalar</h4>
						<ul>
							<li>
							<div className="top-rated-product-item clearfix">
								<div className="top-rated-product-img">
								<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
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
								<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
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
								<Link to="/product-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
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
							<li><Link to="/blog-grid">Fethiye  <span>(30)</span></Link></li>
							<li><Link to="/blog-grid">Kaş  <span>(71)</span></Link></li>
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
							<li><Link to="/blog-grid">Balayı Villaları  <span>(71)</span></Link></li>
							<li><Link to="/blog-grid">Evcil Hayvan İzni <span>(56)</span></Link></li>
							<li><Link to="/blog-grid">Çocuk Havuzlu Villalar <span>(60)</span></Link></li>

						</ul>
						</div>


						{/* Popular Product Widget */}
						<div className="widget ltn__popular-product-widget">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Önerilen Villalar</h4>
						<div className="row ltn__popular-product-widget-active slick-arrow-1">

							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img go-top">
								<Link to="/shop"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
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
										<Link to="/shop"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
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
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img go-top">
								<Link to="/shop"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
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
										<Link to="/shop"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
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
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img go-top">
								<Link to="/shop"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
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
										<Link to="/shop"><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
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
								<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								</div>
								<div className="popular-post-widget-brief">
								<h6><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h6>
								<div className="ltn__blog-meta">
									<ul>
									<li className="ltn__blog-date">
										<a href="#"><i className="far fa-calendar-alt" />05.05.2022</a>
									</li>
									</ul>
								</div>
								</div>
							</div>
							</li>

							<li>
							<div className="popular-post-widget-item clearfix">
								<div className="popular-post-widget-img">
								<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								</div>
								<div className="popular-post-widget-brief">
								<h6><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h6>
								<div className="ltn__blog-meta">
									<ul>
									<li className="ltn__blog-date">
										<a href="#"><i className="far fa-calendar-alt" />05.05.2022</a>
									</li>
									</ul>
								</div>
								</div>
							</div>
							</li>

							<li>
							<div className="popular-post-widget-item clearfix">
								<div className="popular-post-widget-img">
								<Link to="/blog-details"><img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="#" /></Link>
								</div>
								<div className="popular-post-widget-brief">
								<h6><Link to="/blog-details">Villa Flower Aras'ta neden kalmalıyım ?</Link></h6>
								<div className="ltn__blog-meta">
									<ul>
									<li className="ltn__blog-date">
										<a href="#"><i className="far fa-calendar-alt" />05.05.2022</a>
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
							<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
							</ul>
						</div>
						</div>

						{/* Banner Widget */}
						<div className="widget ltn__banner-widget d-none go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
						</div>
					</aside>
					</div>
    )
  }
}

export default Sidebar;
