import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import VillaCard from "../global-components/VillaCard";
import PropTypes from "prop-types";
import VillaListV1 from "../villa-list/villa-list-v1";

const SimilarVillas = (props) => {
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
            <>
                <h4 className="title-2">Benzer Villalar</h4>
                <div className="row">
                    {list.map(item => (
                        <div key={'popular-villa-' + item.id} className="col-xl-6 col-sm-6 col-12">
                            <VillaCard data={item}/>
                        </div>
                    ))}
                </div>
            </>
            : null}
    </div>
}

SimilarVillas.propTypes = {
    limit: PropTypes.number,
};

SimilarVillas.defaultProps = {
    limit: 0
};

export default SimilarVillas
