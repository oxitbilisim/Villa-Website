import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import VillaCard from "../global-components/VillaCard";
import PropTypes from "prop-types";
import VillaListV1 from "../villa-list/villa-list-v1";

const PopularVillas = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetPopularVillas?limit=" + props.limit)
            .then((response) => {
                setList(response.data);
            })
    }

    return <div>
        {list.length > 0 ?
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

                        {list.map(item => (
                            <div key={'popular-villa-' + item.id} className="col-xl-4 col-sm-6 col-12">
                                <VillaCard data={item}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div> : null}
    </div>
}

PopularVillas.propTypes = {
    limit: PropTypes.number,
};

PopularVillas.defaultProps = {
    limit: 0
};

export default PopularVillas
