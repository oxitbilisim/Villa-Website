import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import {GlobalContext} from "../global-context";
import VillaCard from "../global-components/VillaCard";

const VillaListV1 = (props) => {
    const [list, setList] = useState([]);
    const {regions, categories} = useContext(GlobalContext)

    useEffect(() => {
        loadData();
    }, [props.match.params.subUri]);

    const loadData = () => {
        let apiUri = '';
        let parentId = null;
        const subUri = props.match.params.subUri;
        if (props.type === 'REGION') {
            console.log("REGION");
            console.table(regions);
            parentId = regions.find(i => i.url === subUri)?.id;
            const queryParams = (parentId != null ? '?bolgeId=' + parentId : '')
            apiUri = '/VillaFE/GetBolgeVillas' + queryParams;

        } else if (props.type === 'CATEGORY') {
            parentId = categories.find(i => i.url === subUri)?.id;
            const queryParams = (parentId != null ? '?kategoriId=' + parentId : '')
            apiUri = '/VillaFE/GetKategoriVillas' + queryParams;
        }

        axios.get(process.env.REACT_APP_API_ENDPOINT + apiUri)
            .then((response) => {
                setList(response.data);
            });
    }

    return <div>
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

                        {list.map(item => (
                            <div key={'villa-' + item.id} className="col-xl-6 col-sm-6 col-12">
                                <VillaCard data={item}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </div>
}

VillaListV1.propTypes = {
    type: PropTypes.string,
};

VillaListV1.defaultProps = {
    type: 'REGION'
};

export default VillaListV1
