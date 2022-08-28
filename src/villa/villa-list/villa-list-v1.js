import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import {GlobalContext} from "../global-context";
import VillaCard from "../global-components/VillaCard";

const VillaListV1 = (props) => {
    const [list, setList] = useState([]);
    const [pn, setPn] = useState(1);
    const [maxPN, setMaxPN] = useState(1);
    const {regions, categories} = useContext(GlobalContext)

    useEffect(() => {
        setList([]);
        setPn(1);
        setMaxPN(1);
        loadData(1);
    }, [props.match.params.subUri, props.location.search]);

    const loadData = (pn) => {
        let apiUri = '';
        let parentId = null;
        const subUri = props.match.params.subUri;
        if (props.type === 'REGION') {
            parentId = regions.find(i => i.url === subUri)?.id;
            const queryParams = (parentId != null ? '?bolgeId=' + parentId + '&pn=' + pn : 'pn=' + pn)
            apiUri = '/VillaFE/GetBolgeVillas' + queryParams;
        } else if (props.type === 'CATEGORY') {
            parentId = categories.find(i => i.url === subUri)?.id;
            const queryParams = (parentId != null ? '?kategoriId=' + parentId + '&pn=' + pn : 'pn=' + pn)
            apiUri = '/VillaFE/GetKategoriVillas' + queryParams;
        } else if (props.type === 'SEARCH') {
            let qs = props.location.search;
            if(!qs.startsWith("?")){
                qs = "?"+qs;
            }
            apiUri = "/VillaFE/SearchVilla" + qs + '&pn=' + pn;
        }

        axios.get(process.env.REACT_APP_API_ENDPOINT + apiUri)
            .then((response) => {
                if(pn==1){
                    setList(response.data.data)
                }else {
                    setList([...list,...response.data.data]);
                }
                setMaxPN(response.data.totalPage);
                console.log(response.data);
            });
    }

    const loadMore = () => {
        const newPN = pn + 1;
        console.log("pn:"+pn+" newPN:"+newPN+" maxPN:"+maxPN)
        if (newPN <= maxPN) {
            setPn(newPN);
            loadData(newPN);
        }
    }

    return <div>
        <div className="tab-content">
            <div className="tab-pane fade active show" id="liton_product_grid">
                <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                        {list?.map(item => (
                            <div key={'villa-' + item.id} className="col-xl-6 col-sm-6 col-12">
                                <VillaCard data={item}/>
                            </div>
                        ))}

                        <div className="col-lg-12 text-center">
                            <div className="btn-wrapper">
                                {maxPN > pn ?
                                    <button onClick={loadMore} style={{zIndex: 0}}
                                            className="theme-btn-1 btn black-btn filter-button-custom">Daha Fazla
                                    </button>
                                    : null}
                            </div>
                        </div>
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
