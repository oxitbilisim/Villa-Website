import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class ProductListingV1 extends Component {
state = {
    populer: [],
  };


componentDidMount() {
    		      axios
        .get("http://villaadmin.oxit.web.tr/api/Villa/GetAll"
        )
        .then((response) => {
        	let populer=response.data;
			this.setState({ populer });
        })
  }




    render() {



    return   <div>
				<div className="ltn__product-slider-area ltn__product-gutter pt-60 pb-60">
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


  					{this.state.populer.map(item => (
						<div className="col-xl-4 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to={item.url}> <img src={`data:image/jpeg;base64,${item.image}`} /></Link>
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to={item.url}> <img src={`data:image/jpeg;base64,${item.image}`} /></Link>
											</div>
										</div>
										</div>
										<div className="product-info">
										<h2 className="product-title go-top"><Link to="/product-details">{item.ad}</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to={item.url}><i className="flaticon-pin" /> Antalya,Kalkan,Patara</Link>
											</li>

											</ul>

											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
													<li><i className="flaticon-user" /> {item.kapasite} Kişilik</li>
													<li><i className="flaticon-bed" /> {item.yatakOdaSayisi} Yatak Odası</li>
													<li><i className="flaticon-bathtub" /> {item.banyoSayisi} Duş</li>
												</ul>

										</div>

										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>750 TL<label>/Günlük</label></span>
										</div>
										</div>
									</div>
									</div>

 ))}




					</div>
					</div>
				</div>

			</div>
        }
}

export default ProductListingV1
