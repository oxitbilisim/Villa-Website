import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Sidebar from "../blog-components/sidebar";
import axios from "axios";

class ShopDetails extends Component {

	state = {
    villa: {ad:null,baslik:null},
		images:[],
		icerik:{},
		lokasyon:{mrkUzaklik:null,pljUzaklik:null,hvlUzaklik:null,sglUzaklik:null,marktUzaklik:null,rstUzaklik:null},
		kategori:[],
		ozellik:[],
		gorunum:{},
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
        })
  }


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">

					<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">

						<h1>{this.state.villa.ad}</h1>
						<label><span className="ltn__secondary-color">
							<i className="flaticon-pin" /></span> Antalya,Kalkan,Patara</label>

						<h4 className="title-2">Kalkan Patara da Muhafazakar Tatil Villası</h4>

						<p>Patara merkezde bulunan kiralık balayı villası modern tarzıyla ,size özel havuzu romantik jakuzisi ve geniş bahçesi ile hayallerinizdeki balayı tatilini unutulmaz kılacaktır.

1 amerikan mutfaklı salonu, yemek odası ve 1 yatak odasından oluşan villamızda tek çocuklu aileler de konaklayabilir.

Dünyaca ünlü gün batımını doyasıya izleyeceğiniz Kum Tepeleri ve Patara plajına 1,5 km mesafede bulunan villamız köy merkezine 250 metre yürüyüş mesafesindedir. 50 metre mesafede durak bulunan villamıza araçsız gelen misafirlerimiz; Patara plajı,Kaş, Kalkan ve Kaputaş plajına saat başı geçen dolmuşlar ile ulaşım sağlayabilirler.

Yine 50 metre mesafede bulunan otelimize ait restauranttan akşam yemekleri(ev yemekleri) için seçenek oluşturabilir, otelimiz kahvaltısından da ek ücret karşılığı kahvaltı talebinde bulunabilirler. 200 metre mesafede ihtiyaçlarınızı karşılayabileceğiniz market ve banka atm leri bulunmaktadır.

Villamız korunaklı olmasından dolayı muhafazakar villalar ve balayı villaları kategorisine hitap etmektedir. Geniş ve korunaklı bahçesi, donanımlı mutfağı, rahat ve zevkli mobilyaları ile sizlere rahat ve unutulmaz bir tatil imkanı sağlayan villamızın bahçesinde istediğiniz zaman yakacağınız bir barbekü şöminesi bulunmaktadır

</p>
						<p>Giriş :16:00</p>
							<p>Çıkış  :10:00</p>




						<h4 className="title-2 mb-10">Özellikler</h4>
						<div className="property-details-amenities mb-60">
						<div className="row">
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
									   {this.state.ozellik.map(item => (
								<li>
									<label className="checkbox-item">{item.ozellikAd}
									<input type="checkbox"  defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								))}
								</ul>
							</div>
							</div>

						</div>
						</div>
						<h4 className="title-2">Villa Konumu</h4>
						<div className="property-details-google-map mb-90">
						 <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.0970415628835!2d29.41023652218447!3d36.27180562243338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c02d2bd6cf1941%3A0x5e27889fcb344d7d!2sKalkan%2C%20%C5%9Eehitler%20Cd.%20No%3A16%2C%2007580%20Ka%C5%9F%2FAntalya!5e0!3m2!1str!2str!4v1655714420430!5m2!1str!2str"
            width="100%" height="400" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0}></iframe>
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
							<a  data-bs-toggle="tab" href="#liton_tab_3_2">USD</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >GBP</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_4" >EURO</a>
							</div>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade active show" id="liton_tab_3_1">
							<div className="ltn__apartments-tab-content-inner">



									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-12">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>15 Mrt 2022 - 30 Nis 2022</label> <span>Gecelik</span></li>
											<li><label>En az kiralama 3 gece</label> <span>707 TL</span></li>
											</ul>

										</div>
										</div>

									</div>


									</div>






							</div>
							</div>



							<div className="tab-pane fade " id="liton_tab_3_2">
							<div className="ltn__product-tab-content-inner">

									<div className="product-details-apartments-info-list  section-bg-1">
								<div className="row">
										<div className="col-lg-12">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>15 Mrt 2022 - 30 Nis 2022</label> <span>Gecelik</span></li>
											<li><label>En az kiralama 3 gece</label> <span>50 USD</span></li>
											</ul>

										</div>
										</div>

									</div>
									</div>

							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_3">
							<div className="ltn__product-tab-content-inner">

									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-12">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>15 Mrt 2022 - 30 Nis 2022</label> <span>Gecelik</span></li>
											<li><label>En az kiralama 3 gece</label> <span>40 GBP</span></li>
											</ul>

										</div>
										</div>

									</div>
									</div>

							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_4">
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
			              <li><b>Fiyat </b></li>

			            </ul>
			            <ul className="ltn__select-availability-table-row">
							<li>15 Mrt 2022 - 30 Nis 2022</li>

			              <li>3 Gece</li>
							 <li>Gecelik/40 EURO</li>

			            </ul>
						  <ul className="ltn__select-availability-table-row">
							<li>15 Mrt 2022 - 30 Nis 2022</li>

			              <li>3 Gece</li>
							  <li>Gecelik/40 EURO</li>

			            </ul>
						  <ul className="ltn__select-availability-table-row">
							<li>15 Mrt 2022 - 30 Nis 2022</li>

			              <li>3 Gece</li>
							 <li>Gecelik/40 EURO</li>

			            </ul>
						  <ul className="ltn__select-availability-table-row">
							<li>15 Mrt 2022 - 30 Nis 2022</li>

			              <li>3 Gece</li>
							  <li>Gecelik/40 EURO</li>

			            </ul>
						  <ul className="ltn__select-availability-table-row">
							<li>15 Mrt 2022 - 30 Nis 2022</li>

			              <li>3 Gece</li>
							  <li>Gecelik/40 EURO</li>

			            </ul>
						  <ul className="ltn__select-availability-table-row">
							<li>15 Mrt 2022 - 30 Nis 2022</li>

			              <li>3 Gece</li>
							  <li>Gecelik/40 EURO</li>

			            </ul>

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

					<Sidebar/>
				</div>
				</div>
			</div>
        }
}

export default ShopDetails
