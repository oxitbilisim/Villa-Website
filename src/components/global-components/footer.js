import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import axios from "axios";

class Footer_v1 extends Component {

	 state = {
    bolge: [],
	 kategori: [],
  };

    componentDidMount() {

    	  axios.get("http://villaadmin.oxit.web.tr/api/VillaFE/GetBolgeAll")
        .then((response) => {
        	let bolge=response.data;
			this.setState({ bolge });

        }),


					   axios.get("http://villaadmin.oxit.web.tr/api/VillaFE/GetKategoriAll")
        .then((response) => {
        	let kategori=response.data;
			this.setState({ kategori });
        })


    	const $ = window.$;

        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/logo-2.png"} alt="Logo" />
				              </div>
				            </div>
				            <p>Gürha Turizm olarak 15 yıllık turizm tecrübemiz, her sezon arttırdığımız kalitemiz ve TÜRSAB güvencesiyle KALKAN ve KAŞ ağırlıklı olmak üzere FETHİYE ve BODRUM bölgelerinde de profesyonel villa kiralama, ulaşım ve tur hizmetleri sunmaktayız.</p>

				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Tatil Bölgeleri</h4>
				            <div className="footer-menu go-top">
				              <ul>
								    {this.state.bolge.map(item => (
									<li><Link to={item.url}>{item.ad}</Link></li>
								))}



				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Villa Kategorileri</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                {this.state.kategori.map(item => (
									<li><Link to={item.url}>{item.ad}</Link></li>
										))}
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">İletişim</h4>
				             <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>Menteşe Mah. Şehitler Cad. No:16 <br/> Kalkan / Kaş / ANTALYA</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="tel:+0123-456789">0242 844 22 89</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="mailto:example@example.com">info@villalarim.com</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>






				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1
