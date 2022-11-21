import React, {Component, useContext} from 'react';
import {Link} from 'react-router-dom';
import Social from '../section-components/social';
import axios from "axios";
import {GlobalContext} from "../../villa/global-context";
import LikedVillas from "./LikedVillas";
import {LikedVillaContext} from "../liked-villa-context";

const NavbarV3 = () => {
    const {regions, categories, parameters} = useContext(GlobalContext)
    let publicUrl = process.env.PUBLIC_URL + '/'
    const [state, dispatch] = useContext(LikedVillaContext);
    
    const renderMenu = (type) => {
        return <ul>
            <li key={'home'}><Link to="/">Anasayfa</Link></li>
            <li key={'regions'}><Link to="#">Bölgeler</Link>
                <ul className={type == 'MOBILE' ? 'sub-menu' : ''}>
                    {regions.sort((a,b) => (a.toplam > b.toplam) ? -1 : ((b.toplam > a.toplam) ? 1 : 0)).map(item => (
                        <li key={'region-' + item.id}><Link to={'/bolge/' + item.url}>{item.ad}</Link></li>
                    ))}

                </ul>
            </li>
            <li key={'categories'}><Link to="#">Kategoriler</Link>
                <ul className={type == 'MOBILE' ? 'sub-menu' : ''}>
                    {categories.map(item => (
                        <li key={'category-' + item.id}><Link to={'/kategori/' + item.url}>{item.ad}</Link></li>
                    ))}

                </ul>
            </li>
            <li key={'blog'}><Link to="/blog">Blog</Link></li>
            <li key={'contact'}><Link to="/iletisim">İletişim</Link></li>
            <li key={'liked-villa'}>
                <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                    <span className="mini-cart-icon" style={{lineHeight:'37px'}}>
                        <i className="flaticon-heart-1"/>
                        <sup>{state?.likedVillaIds?.length}</sup>
                    </span>
                </a>
            </li>
        </ul>
    }
    
    const email =  parameters.find(p => p.code == 'CONTACT_EMAIL').value;
    const phone =  parameters.find(p => p.code == 'CONTACT_PHONE').value;
    const phoneMobile =  parameters.find(p => p.code == 'CONTACT_PHONE_MOBILE').value;

    return (
        <div>
            <header
                className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- ">
                <div className="ltn__header-top-area top-area-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="ltn__top-bar-menu">
                                    <ul>
                                        <li><a href={"mailto:"+email}><i ref={element => {
                                            if (element) element.style.setProperty('color', 'white', 'important');
                                        }} className="icon-mail"/> {email}</a></li>
                                        <li><a href={"tel:"+phone.replaceAll(" ","")}><i ref={element => {
                                            if (element) element.style.setProperty('color', 'white', 'important');
                                        }} className="icon-phone-call"/> {phone}</a></li>
                                        <li><a href={"tel:"+phoneMobile.replaceAll(" ","")}><i ref={element => {
                                            if (element) element.style.setProperty('color', 'white', 'important');
                                        }} className="icon-phone-call"/>{phoneMobile}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="top-bar-right text-end">
                                    <div className="ltn__top-bar-menu">
                                        <ul>
                                            <li>
                                                <Social/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="site-logo-wrap">
                                    <div className="site-logo go-top">
                                        <Link to="/"><img className={"logo"}
                                                          src={publicUrl + "assets/img/logo-2.png"}
                                                          alt="Logo"/></Link>
                                    </div>

                                </div>
                            </div>
                            <div className="col header-menu-column menu-color-black">
                                <div className="header-menu d-none d-xl-block go-top">
                                    <nav>
                                        <div className="ltn__main-menu">
                                            {renderMenu()}
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col--- ltn__header-options ltn__header-options-2 ">
                                {/* Mobile Menu Button */}
                                <div className="mobile-menu-toggle d-xl-none">
                                    <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path
                                                d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                                id="top"/>
                                            <path d="M300,320 L540,320" id="middle"/>
                                            <path
                                                d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                                id="bottom"
                                                transform="translate(480, 320) scale(1, -1) translate(-480, -318) "/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <LikedVillas/>
            <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                <div className="ltn__utilize-menu-inner ltn__scrollbar">
                    <div className="ltn__utilize-menu-head">
                        <div className="site-logo">
                            <Link to="/"><img src={publicUrl + "assets/img/logo.png"} alt="Logo"/></Link>
                        </div>
                        <button className="ltn__utilize-close close-menu-card">×</button>
                    </div>

                    <div className="ltn__utilize-menu">
                        {renderMenu('MOBILE')}
                    </div>

                    <div className="ltn__social-media-2">
                        <ul>
                            <li><a href="https://www.facebook.com/villalarim" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="https://www.instagram.com/villalarim/" target="_blank" title="Instagram"><i className="fab fa-instagram" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarV3
