import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {GlobalContext} from "../global-context";


const CategoryItems = () => {
    const {regions, categories} = useContext(GlobalContext);

    return <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Kategoriler</h6>
                        <h1 className="section-title">Villa Kategorileri</h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center go-top">
                {categories.map(item => (
                    <div key={'category-'+item.id} className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div style={{height:'320px'}} className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                            <Link to={'/kategori/'+item.url}>
                                <span className="category-icon"><i className="flaticon-house-1"/></span>
                                <span className="category-number">01</span>
                                <span className="category-title">{item.ad}</span>
                                <span className="category-btn d-none"><i className="flaticon-right-arrow"/></span>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
}

export default CategoryItems
