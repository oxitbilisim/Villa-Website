import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const VillaCard = (props) => {
    return <div>
        <div
            className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
            <div className="product-img go-top">
                <Link
                    to={"/villa/" + props.data?.url} style={{textAlign: 'center'}}>
                    <img src={`data:image/jpeg;base64,${props.data?.image}`}
                         style={{maxHeight: '281px'}}/>
                </Link>
            </div>
            <div className="product-info">
                <h2 className="product-title go-top">
                    <Link to={"/villa/" + props.data?.url}>{props.data?.ad}</Link></h2>
                <div className="product-img-location go-top">
                    <ul>
                        <li>
                            <Link
                                to={"/villa/" + props.data?.url}
                                title={props.data?.il + ', ' + props.data?.ilce + ', ' + props.data?.mevki}
                                style={{
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden'
                                }}>
                                <i className="flaticon-pin"/> {props.data?.il + ', ' + props.data?.ilce + ', ' + props.data?.mevki}</Link>
                        </li>

                    </ul>

                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><i
                            className="flaticon-user"/> {props.data?.kapasite} Kişilik
                        </li>
                        <li><i
                            className="flaticon-bed"/> {props.data?.yatakOdaSayisi} Yatak
                            Odası
                        </li>
                        <li><i
                            className="flaticon-bathtub"/> {props.data?.banyoSayisi} Duş
                        </li>
                    </ul>

                </div>

            </div>
            <div className="product-info-bottom">
                <div className="product-price">
                    {props.data?.fiyat != null ? <span>{props.data?.fiyat + props.data?.paraBirimi}<label>/{props.data?.fiyatTuru}</label></span> :
                        <span>&nbsp;</span>}
                </div>
            </div>
        </div>
    </div>
}

VillaCard.propTypes = {
    data: PropTypes.any,
};

VillaCard.defaultProps = {
    data: null
};

export default VillaCard
