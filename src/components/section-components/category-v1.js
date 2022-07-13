import axios from "axios";
import React, {Component } from "react";
import { Link } from 'react-router-dom';


class CategoryV1 extends Component {
 state = {
    kategori: [],
  };

  componentDidMount() {
    		      axios.get("http://villaadmin.oxit.web.tr/api/VillaFE/GetKategoriAll?rules=1")
        .then((response) => {
        	let kategori=response.data;
			this.setState({ kategori });
        })
  }


    render() {



    return <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-60 pb-60 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Kategoriler</h6>
			          <h1 className="section-title">Villa Kategorileri</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">



					  {this.state.kategori.map(item => (
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          <Link to={item.url}>
			          <img src={`data:image/jpeg;base64,${item.image}`} />
			            <span className="category-title">{item.ad} </span>
			            <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
					 ))}








			    </div>
			  </div>
			</div>
        }
}

export default CategoryV1
