import { Link } from 'react-router-dom';
import axios from "axios";
import React, {Component } from "react";

class CategoryV3 extends Component {
 state = {
    bolge: [],
  };
	  componentDidMount() {
    		  axios.get("http://villaadmin.oxit.web.tr/api/VillaFE/GetBolgeAll?rules=1")
        .then((response) => {
        	let bolge=response.data;
			this.setState({ bolge });
        })
  }





    render() {
    return <div className="ltn__banner-area pt-60 go-top">
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

					       {this.state.bolge.map(item => (
							   			<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
						style={{backgroundImage: `url(data:image/gif;base64,${item.image})`}}>

						<div className="ltn__banner-info">
						<h3><Link to={item.url}> {item.ad} </Link></h3>
						<mark> {item.toplam} Villa</mark>
						</div>
					</div>
					</div>
          ))}







				</div>
				</div>
			</div>

        }
}

export default CategoryV3
