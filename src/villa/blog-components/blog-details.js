import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
import PropTypes from "prop-types";
import VillaImage from "../villa-detail/villa-image";
import moment from "moment/moment";
import draftToHtml from "draftjs-to-html";

const BlogDetails = (props) => {
    const [detail, setDetail] = useState();
    useEffect(()=>{
        if(props?.data?.blogIcerik[0]?.icerik!=null){
            const jo = JSON.parse(props?.data?.blogIcerik[0]?.icerik);
            setDetail(draftToHtml(jo));
        }
    },[props.data])

    return (
        <div className="ltn__page-details-area ltn__blog-details-area mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__blog-details-wrap">
                            <div className="ltn__page-details-inner ltn__blog-details-inner">
                                <div className="ltn__blog-meta">
                                    {/*<ul>
                                        <li className="ltn__blog-category">
                                            <Link to="/shop">Kalkan</Link>
                                        </li>
                                    </ul>*/}
                                </div>
                                <h2 className="ltn__blog-title">{props.data?.altBaslik}</h2>
                                <div className="ltn__blog-meta">
                                    <ul>
                                        {props.data?.createDate != null ? <li className="ltn__blog-date"><i
                                            className="far fa-calendar-alt"/>{moment(props.data?.createDate).format('dd.MM.yyyy')}
                                        </li> : null}
                                    </ul>
                                </div>
                                <p style={{textAlign:'left'}}>
                                    <img style={{maxHeight:'350px'}} src={process.env.REACT_APP_API_ENDPOINT+"/VillaFE/GetBlogImage?id=" + props.data?.id} alt="Image" />
                                </p>
                                <div dangerouslySetInnerHTML={{ __html: detail }}></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BlogDetails.propTypes = {
    data: PropTypes.object,
};

BlogDetails.defaultProps = {
    data: {}
};

export default BlogDetails;
