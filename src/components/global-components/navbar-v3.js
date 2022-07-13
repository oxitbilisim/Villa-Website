import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import axios from "axios";

class NavbarV3 extends Component {

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
  }



    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
		<div>
           <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
			  <div className="ltn__header-top-area top-area-color-white">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-7">
			          <div className="ltn__top-bar-menu">
			           <ul>
						<li><a href="#"><i className="icon-mail" /> info@villalarim.com</a></li>
						<li><a href="#"><i className="icon-phone-call" />0242 844 22 89</a></li>
							<li><a href="#"><i className="icon-phone-call" />+90 537 734 33 02</a></li>
						</ul>
			          </div>
			        </div>
			        <div className="col-md-5">
			          <div className="top-bar-right text-end">
			            <div className="ltn__top-bar-menu">
			              <ul>

			                <li>
							<Social />
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
			    <div className="container">
			      <div className="row">
			        <div className="col">
			          <div className="site-logo-wrap">
			            <div className="site-logo go-top">
			              <Link to="/"><img style={{height: 50}}  src={publicUrl+"assets/img/logo-2.png"} alt="Logo" /></Link>
			            </div>

			          </div>
			        </div>
			        <div className="col header-menu-column menu-color-white">
			          <div className="header-menu d-none d-xl-block go-top">
			            <nav>
			              <div className="ltn__main-menu">
			                <ul>
			                   <li><Link to="/">Anasayfa</Link></li>
			                  <li><Link to="#">Bölgeler</Link>
			                    <ul>
									  {this.state.bolge.map(item => (
									<li><Link to={item.url}>{item.ad}</Link></li>
								))}

			                    </ul>
			                  </li>
			                  <li><Link to="#">Kategoriler</Link>
			                    <ul>
									  {this.state.kategori.map(item => (
									<li><Link to={item.url}>{item.ad}</Link></li>
										))}

			                    </ul>
			                  </li>

							 <li><Link to="/blog-grid">Blog</Link></li>


			                  <li><Link to="/iletisim">İletişim</Link></li>

			                </ul>
			              </div>
			            </nav>
			          </div>
			        </div>
			        <div className="col--- ltn__header-options ltn__header-options-2 ">
			          {/* Mobile Menu Button */}
			          <div className="mobile-menu-toggle d-xl-none">
			            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
			              <svg viewBox="0 0 800 600">
			                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
			                <path d="M300,320 L540,320" id="middle" />
			                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
			              </svg>
			            </a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</header>
			<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
						<Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="Logo" /></Link>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>

					<div className="ltn__utilize-menu">
					<ul>

 <li><Link to="/">Anasayfa</Link></li>

  <li><Link to="#">Bölgeler</Link>
			                    <ul className="sub-menu">
									  {this.state.bolge.map(item => (
									<li><Link to={item.url}>{item.ad}</Link></li>
								))}

			                    </ul>
			                  </li>

  <li><Link to="#">Kategoriler</Link>
			                    <ul className="sub-menu">
									  {this.state.kategori.map(item => (
									<li><Link to={item.url}>{item.ad}</Link></li>
										))}

			                    </ul>
			                  </li>



						 <li><Link to="/blog-grid">Blog</Link></li>


			                  <li><Link to="/iletisim">İletişim</Link></li>


					</ul>
					</div>

					<div className="ltn__social-media-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
					</div>
				</div>
				</div>
		</div>

        )
    }
}


export default NavbarV3
