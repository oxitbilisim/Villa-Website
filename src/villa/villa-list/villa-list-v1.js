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
    }, [props.match.params.subUri,props.location.search]);

    const loadData = () => {
        let apiUri = '';
        let parentId = null;
        const subUri = props.match.params.subUri;
        if (props.type === 'REGION') {
            parentId = regions.find(i => i.url === subUri)?.id;
            const queryParams = (parentId != null ? '?bolgeId=' + parentId : '')
            apiUri = '/VillaFE/GetBolgeVillas' + queryParams;
        } else if (props.type === 'CATEGORY') {
            parentId = categories.find(i => i.url === subUri)?.id;
            const queryParams = (parentId != null ? '?kategoriId=' + parentId : '')
            apiUri = '/VillaFE/GetKategoriVillas' + queryParams;
        } else if (props.type === 'SEARCH') {
            apiUri =  "/VillaFE/SearchVilla"+props.location.search;
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
