import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Sidebar from "../blog-components/sidebar";
import axios from "axios";

class ShopDetails extends Component {

	state = {
    villa: {ad:null,baslik:null,kapasite:null,yatakOdaSayisi:null,banyoSayisi:null},
		images:[],
		icerik:{icerikBasligi:null,icerik:null},
		lokasyon:{bolgeId:null,ilceId:null,mevki:null,map:null,mrkUzaklik:null,pljUzaklik:null,hvlUzaklik:null,sglUzaklik:null,marktUzaklik:null,rstUzaklik:null},
		kategori:[],
		ozellik:[],
		gorunum:{havuzOzellik:null},
		periyodikFiyat:[],
		periyodikFiyatAyarlari:[]

  };
	  componentDidMount() {
    		  axios.get("http://villaadmin.oxit.web.tr/api/VillaFE/GetVillaById?villaId=3")
        .then((response) => {
        	let villa=response.data.villa;
			this.setState({ villa });
			let icerik=response.data.icerik;
			this.setState({icerik})
			let ozellik=response.data.ozellik;
			this.setState({ozellik})
			let lokasyon=response.data.lokasyon;
			this.setState({lokasyon})
			let gorunum=response.data.gorunum;
			this.setState({gorunum})
			let periyodikFiyat=response.data.periyodikFiyat;
			this.setState({periyodikFiyat})
			let images=response.data.images;
			this.setState({images})
        })
  }


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">

<div className="ltn__img-slider-area mb-10">
				<div className="container-fluid">
				<div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/31.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/31.jpg"} alt="Image" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/32.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="Image" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/33.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/33.jpg"} alt="Image" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/34.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/34.jpg"} alt="Image" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/35.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/35.jpg"} alt="Image" />
						</a>
					</div>
					</div>
				</div>
				</div>
			</div>

					<div className="container">
				<div className="row">

					<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">

						<h1>{this.state.villa.ad}</h1>
						<label><span className="ltn__secondary-color">
							<i className="flaticon-pin" /></span> {this.state.lokasyon.bolgeId},{this.state.lokasyon.ilceAd},{this.state.lokasyon.mevki}</label>

						<ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
							<li><span>{this.state.villa.kapasite} <i className="flaticon-user"></i></span>Kapasite</li>
							<li><span>{this.state.villa.yatakOdaSayisi} <i className="flaticon-bed"></i> </span>Yatak Odası</li>
							<li><span>{this.state.villa.banyoSayisi} <i className="flaticon-clean"></i></span>Banyo</li>

						</ul>




						<h4 className="title-2">{this.state.icerik.icerikBasligi}</h4>

						<p>{this.state.icerik.icerik}</p>
						<p>Giriş :16:00</p>
							<p>Çıkış  :10:00</p>




						<h4 className="title-2 mb-10">Özellikler</h4>
						<div className="property-details-amenities mb-60">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<h6 className="title-4 ">Havuz Özellikleri</h6>
							<p>{this.state.gorunum.havuzOzellik}</p>
							</div>


							<div className="col-lg-4 col-md-6">

							<div className="ltn__menu-widget">
								<div className="ltn__blog-meta-btn">
									<div className="ltn__blog-meta">
										<ul>
											 {this.state.ozellik.map(item => (
											<li className="ltn__blog-date">
												<i className="far fa-check-square"></i>{item.ozellikAd}
											</li>
												 ))}
										</ul>
									</div>

								</div>



							</div>
							</div>

						</div>
						</div>
						<h4 className="title-2">Villa Konumu</h4>
						<div className="property-details-google-map mb-90">

<iframe src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed" width="100%" height="400"></iframe>
						</div>

						<div className="property-detail-info-list section-bg-1 clearfix mb-60">
						<ul>
							<li><label>Havaalanına:</label> <span>{this.state.lokasyon.hvlUzaklik} KM</span></li>
							<li><label>Merkeze: </label> <span>{this.state.lokasyon.mrkUzaklik} KM</span></li>
							<li><label>Plaja:</label> <span>{this.state.lokasyon.pljUzaklik} KM</span></li>

						</ul>
						<ul>
							<li><label>Sağlık Kurumuna:</label> <span>{this.state.lokasyon.sglUzaklik} KM</span></li>
							<li><label>Markete:</label> <span>{this.state.lokasyon.marktUzaklik} KM</span></li>
							<li><label>Restorana:</label> <span>{this.state.lokasyon.rstUzaklik} KM</span></li>
						</ul>
						</div>





						<h4 className="title-2">Fiyatlar</h4>
						{/* APARTMENTS PLAN AREA START */}
						<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
						<div className="ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
							<div className="nav">
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_1">TL</a>

							</div>
						</div>
						<div className="tab-content">


							<div className="tab-pane fade active show" id="liton_tab_3_1">
							<div className="ltn__product-tab-content-inner">


									<div className="select-availability-area pb-20">
			  <div className="container">

			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__select-availability-table-wrap">
			          <div className="ltn__select-availability-table d-none d-md-block">
			            <ul className="ltn__select-availability-table-head">
			              <li><b>Tarih</b></li>
			              <li><b>En Az Kiralama Günü</b></li>
			              <li><b>Fiyat(Gecelik) </b></li>

			            </ul>


						  {this.state.periyodikFiyat.map(item => (
			            <ul className="ltn__select-availability-table-row">
							<li>{item.baslangic} - {item.bitis}</li>

			              <li>{item.enAzKiralama} Gece</li>
							 <li>{item.fiyat} {item.paraBirimiAd}</li>

			            </ul>
							  ))}




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


						<h4 className="title-2">Benzer Villalar</h4>
						<div className="row">
						{/* ltn__product-item */}
						<div className="col-xl-6 col-sm-6 col-12">
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
						{/* ltn__product-item */}
						<div className="col-xl-6 col-sm-6 col-12">
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

				<div className="col-lg-4 go-top">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">

<div className="widget ltn__author-widget">
						<div className="ltn__author-widget-inner text-center">
							<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
							<h5>Rosalina D. Willaimson</h5>
							<small>Traveller/Photographer</small>
							<div className="product-ratting">
							<ul>
								<li><a href="#"><i className="fas fa-star" /></a></li>
								<li><a href="#"><i className="fas fa-star" /></a></li>
								<li><a href="#"><i className="fas fa-star" /></a></li>
								<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
								<li><a href="#"><i className="far fa-star" /></a></li>
								<li className="review-total"> <a href="#"> ( 1 Reviews )</a></li>
							</ul>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
							<div className="ltn__social-media">
							<ul>
								<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
								<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
								<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
								<li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
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
				</div>
				</div>
			</div>
        }
}

export default ShopDetails
