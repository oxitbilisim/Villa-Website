import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import moment from "moment/moment";

const BlogGrid = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        loadData();
    },[])

    const loadData = () => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetAllBlogs")
            .then((response) => {
                setData(response.data);
            }).finally(() => {
        })
    }

    return (
        <div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
            <div className="container">
                <div className="row">
                    {
                        data.map(item =>
                            <div key={'blog-'+item.id} className="col-lg-4 col-sm-6 col-12">
                                <div className="ltn__blog-item ltn__blog-item-3">
                                    <div className="ltn__blog-img">
                                        <Link to={"/blog/"+item.url}><img src={process.env.REACT_APP_API_ENDPOINT+"/VillaFE/GetBlogImage?id=" + item.id} alt="#"/></Link>
                                    </div>
                                    <div className="ltn__blog-brief">

                                        <h3 className="ltn__blog-title"><Link to={"/blog/"+item.url}>{item.baslik}</Link></h3>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    {item.createDate != null ? <li className="ltn__blog-date"><i
                                                        className="far fa-calendar-alt"/>{moment(item.createDate).format('dd.MM.yyyy')}
                                                    </li> : null}
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <Link to={"/blog/"+item.url}>Daha Fazla</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className="row">
                    <div className="col-lg-12">
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
                </div>
            </div>
        </div>

    )
}

export default BlogGrid;
