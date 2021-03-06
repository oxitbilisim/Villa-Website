import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import Sidebar from './shop-sidebar';
import axios from "axios";

class ShopGridV1 extends Component {

    state = {
        villalar: [],
    };


    componentDidMount() {
        axios
            .get(process.env.REACT_APP_API_ENDPOINT+"/Villa/GetBolgeVillas"
            )
            .then((response) => {
                let villalar = response.data;
                this.setState({villalar});
            })
    }


    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div>
            <div className="ltn__product-area ltn__product-gutter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-2 mb-100">
                            <div className="ltn__shop-options">
                                <ul className="justify-content-start">
                                    <li>
                                        <div className="ltn__grid-list-tab-menu ">
                                            <div className="nav">
                                                <a className="active show" data-bs-toggle="tab"
                                                   href="#liton_product_grid"><i className="fas fa-th-large"/></a>

                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-none">
                                        <div className="showing-product-number text-right">
                                            <span>Showing 1–12 of 18 results</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="short-by text-center">
                                            <select className="nice-select">
                                                <option>Default Sorting</option>
                                                <option>Sort by popularity</option>
                                                <option>Sort by new arrivals</option>
                                                <option>Sort by price: low to high</option>
                                                <option>Sort by price: high to low</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="short-by text-center">
                                            <select className="nice-select">
                                                <option>Per Page: 12</option>
                                                <option>Per Page: 20</option>
                                                <option>Per Page: 30</option>
                                                <option>Per Page: 50</option>
                                                <option>Per Page: 100</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="liton_product_grid">
                                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* Search Widget */}
                                                <div className="ltn__search-widget mb-30">
                                                    <form action="#">
                                                        <input type="text" name="search" placeholder="Villa Ara..."/>
                                                        <button type="submit"><i className="fas fa-search"/></button>
                                                    </form>
                                                </div>
                                            </div>

                                            {this.state.villalar.map(item => (
                                                <div className="col-xl-4 col-sm-6 col-12">
                                                    <div
                                                        className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                        <div className="product-img go-top">
                                                            <Link to={item.url}> <img
                                                                src={`data:image/jpeg;base64,${item.image}`}/></Link>
                                                            <div className="real-estate-agent">
                                                                <div className="agent-img">
                                                                    <Link to={item.url}> <img
                                                                        src={`data:image/jpeg;base64,${item.image}`}/></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-info">
                                                            <h2 className="product-title go-top"><Link
                                                                to="/product-details">{item.ad}</Link></h2>
                                                            <div className="product-img-location go-top">
                                                                <ul>
                                                                    <li>
                                                                        <Link to={item.url}><i
                                                                            className="flaticon-pin"/> Antalya,Kalkan,Patara</Link>
                                                                    </li>

                                                                </ul>

                                                                <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                                    <li><i
                                                                        className="flaticon-user"/> {item.kapasite} Kişilik
                                                                    </li>
                                                                    <li><i
                                                                        className="flaticon-bed"/> {item.yatakOdaSayisi} Yatak
                                                                        Odası
                                                                    </li>
                                                                    <li><i
                                                                        className="flaticon-bathtub"/> {item.banyoSayisi} Duş
                                                                    </li>
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
                            <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                    <ul>
                                        <li><Link to="#"><i className="fas fa-angle-double-left"/></Link></li>
                                        <li><Link to="#">1</Link></li>
                                        <li className="active"><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#">...</Link></li>
                                        <li><Link to="#">10</Link></li>
                                        <li><Link to="#"><i className="fas fa-angle-double-right"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Sidebar/>
                    </div>
                </div>
            </div>

            <div className="ltn__modal-area ltn__add-to-cart-modal-area">
                <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="ltn__quick-view-modal-inner">
                                    <div className="modal-product-item">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="modal-product-img">
                                                    <img src={publicUrl + "assets/img/product/7.png"} alt="#"/>
                                                </div>
                                                <div className="modal-product-info go-top">
                                                    <h5><Link to="/product-details">Brake Conversion Kit</Link></h5>
                                                    <p className="added-cart"><i
                                                        className="fa fa-check-circle"/> Successfully added to your
                                                        Wishlist</p>
                                                    <div className="btn-wrapper">
                                                        <Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">View
                                                            Wishlist</Link>
                                                    </div>
                                                </div>
                                                {/* additional-info */}
                                                <div className="additional-info d-none">
                                                    <p>We want to give you <b>10% discount</b> for your first
                                                        order, <br/> Use discount code at checkout</p>
                                                    <div className="payment-method">
                                                        <img src={publicUrl + "assets/img/icons/payment.png"} alt="#"/>
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
            </div>

            <div className="ltn__modal-area ltn__quick-view-modal-area">
                <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    {/* <i class="fas fa-times"></i> */}
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="ltn__quick-view-modal-inner">
                                    <div className="modal-product-item">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="modal-product-img">
                                                    <img src={publicUrl + "assets/img/product/4.png"} alt="#"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="modal-product-info">
                                                    <div className="product-ratting">
                                                        <ul>
                                                            <li><a href="#"><i className="fas fa-star"/></a></li>
                                                            <li><a href="#"><i className="fas fa-star"/></a></li>
                                                            <li><a href="#"><i className="fas fa-star"/></a></li>
                                                            <li><a href="#"><i className="fas fa-star-half-alt"/></a>
                                                            </li>
                                                            <li><a href="#"><i className="far fa-star"/></a></li>
                                                            <li className="review-total"><a href="#"> ( 95 Reviews )</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h3>Brake Conversion Kit</h3>
                                                    <div className="product-price">
                                                        <span>$149.00</span>
                                                        <del>$165.00</del>
                                                    </div>
                                                    <div className="modal-product-meta ltn__product-details-menu-1">
                                                        <ul>
                                                            <li>
                                                                <strong>Categories:</strong>
                                                                <span className="go-top">
											<Link to="/blog">Parts</Link>
											<Link to="/blog">Car</Link>
											<Link to="/blog">Seat</Link>
											<Link to="/blog">Cover</Link>
										</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ltn__product-details-menu-2">
                                                        <ul>
                                                            <li>
                                                                <div className="cart-plus-minus">
                                                                    <input type="text" defaultValue="02"
                                                                           name="qtybutton"
                                                                           className="cart-plus-minus-box"/>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="theme-btn-1 btn btn-effect-1"
                                                                   title="Add to Cart" data-bs-toggle="modal"
                                                                   data-bs-target="#add_to_cart_modal">
                                                                    <i className="fas fa-shopping-cart"/>
                                                                    <span>ADD TO CART</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <hr/>
                                                    <div className="ltn__social-media">
                                                        <ul>
                                                            <li>Share:</li>
                                                            <li><a href="#" title="Facebook"><i
                                                                className="fab fa-facebook-f"/></a></li>
                                                            <li><a href="#" title="Twitter"><i
                                                                className="fab fa-twitter"/></a></li>
                                                            <li><a href="#" title="Linkedin"><i
                                                                className="fab fa-linkedin"/></a></li>
                                                            <li><a href="#" title="Instagram"><i
                                                                className="fab fa-instagram"/></a></li>
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
            </div>

            <div className="ltn__modal-area ltn__add-to-cart-modal-area">
                <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="ltn__quick-view-modal-inner">
                                    <div className="modal-product-item">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="modal-product-img">
                                                    <img src={publicUrl + "assets/img/product/1.png"} alt="#"/>
                                                </div>
                                                <div className="modal-product-info go-top">
                                                    <h5 className="go-top"><Link to="/product-details">Brake Conversion
                                                        Kit</Link></h5>
                                                    <p className="added-cart"><i className="fa fa-check-circle"/>Successfully
                                                        added to your Cart</p>
                                                    <div className="btn-wrapper">
                                                        <Link to="/cart" className="theme-btn-1 btn btn-effect-1">View
                                                            Cart</Link>
                                                        <Link to="/checkout"
                                                              className="theme-btn-2 btn btn-effect-2">Checkout</Link>
                                                    </div>
                                                </div>
                                                {/* additional-info */}
                                                <div className="additional-info d-none">
                                                    <p>We want to give you <b>10% discount</b> for your first
                                                        order, <br/> Use discount code at checkout</p>
                                                    <div className="payment-method">
                                                        <img src={publicUrl + "assets/img/icons/payment.png"} alt="#"/>
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
            </div>


        </div>

    }
}

export default ShopGridV1
