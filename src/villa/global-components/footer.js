import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import axios from "axios";
import {GlobalContext} from "../global-context";

const Footer = (props) => {
    const {regions, categories} = useContext(GlobalContext)


    useEffect(() => {

        const $ = window.$;

        let publicUrl = process.env.PUBLIC_URL + '/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

        $('.go-top').find('a').on('click', function () {

            $(".quarter-overlay").fadeIn(1);

            $(window).scrollTop(0);

            setTimeout(function () {
                $(".quarter-overlay").fadeOut(300);
            }, 800);

        });


        $(document).on('click', '.theme-btn-1 ', function () {
            $('div').removeClass('modal-backdrop');
            $('div').removeClass('show');
            $('div').removeClass('fade');
            $('body').attr("style", "");
        });
    }, [])

    return (
        <footer className="ltn__footer-area  ">
            <div className="footer-top-area  section-bg-2 plr--5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-about-widget">
                                <div className="footer-logo">
                                    <div className="site-logo">
                                        <img src={"/assets/img/logo-2.png"} alt="Logo"/>
                                    </div>
                                </div>
                                <p style={{textAlign: "justify"}}>Gürha Turizm olarak 15 yıllık turizm tecrübemiz, her
                                    sezon arttırdığımız
                                    kalitemiz ve TÜRSAB güvencesiyle KALKAN ve KAŞ ağırlıklı olmak üzere FETHİYE ve
                                    BODRUM bölgelerinde de profesyonel villa kiralama, ulaşım ve tur hizmetleri
                                    sunmaktayız.</p>

                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Tatil Bölgeleri</h4>
                                <div className="footer-menu go-top">
                                    <ul>
                                        {regions.map(item => (
                                            <li key={'footer-region-' + item.id}><Link to={item.url}>{item.ad}</Link>
                                            </li>
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
                                        {categories.map(item => (
                                            <li key={'footer-category-' + item.id}><Link to={item.url}>{item.ad}</Link>
                                            </li>
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
                                                <i className="icon-placeholder"/>
                                            </div>
                                            <div className="footer-address-info">
                                                <p>Menteşe Mah. Şehitler Cad. No:16 <br/> Kalkan / Kaş / ANTALYA</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-call"/>
                                            </div>
                                            <div className="footer-address-info">
                                                <p><a href="tel:+0123-456789">0242 844 22 89</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-mail"/>
                                            </div>
                                            <div className="footer-address-info">
                                                <p><a href="mailto:example@example.com">info@villalarim.com</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ltn__social-media mt-20">
                                    <Social/>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <h6 className='mt-2' style={{fontSize: '12px', textAlign: 'center'}}>Acentamız
                                        TURSAB güvencesi ile hizmet vermektedir</h6>
                                    <a href="https://www.tursab.org.tr/tr/ddsv" target="_blank"
                                       className="tursab">
                                        <img src={"/assets/img/tursab.39a6ebb.png"}
                                                               style={{height: "90px"}} />
                                        </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Copyright/>
        </footer>
)
}


export default Footer
