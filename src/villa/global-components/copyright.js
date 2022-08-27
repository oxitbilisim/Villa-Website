import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const CopyRight = () => {
    const [list, setList] = useState([]);
    useEffect(()=>{
        loadData();
    },[]);

    const loadData = () => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetAllPages")
            .then((response) => {
                setList(response.data);
            }).finally(() => {
        })
    }

    return (
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
        <div className="container-fluid ltn__border-top-2">
            <div className="row">
            <div className="col-md-4 col-12">
                <div className="ltn__copyright-design clearfix">
                    <p>All Rights Reserved. Designed By
                        <a target="new_blank" href={"https://www.oxit.com.tr"}> OXIT BİLİŞİM </a><span className="current-year" /></p>
                </div>
            </div>
            <div className="col-md-8 col-12 align-self-center">
                <div className="ltn__copyright-menu text-end">
                <ul className="go-top">
                    {
                        list.map(item =>
                            <li key={'item'+item.id}><Link to={"/sayfa/"+item.url}>{item.baslik}</Link></li>    
                        )
                    }
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}


export default CopyRight
