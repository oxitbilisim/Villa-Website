import React, {Component, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import draftToHtml from "draftjs-to-html";

const PageDetails = (props) => {
    const [detail, setDetail] = useState();
    useEffect(()=>{
        if(props?.data?.sayfaIcerik[0]?.icerik!=null){
            try {
                const jo = JSON.parse(props?.data?.sayfaIcerik[0]?.icerik);
                setDetail(draftToHtml(jo));    
            }catch (e) {
                
            }
            
        }
    },[props.data])

    return (
        <div className="ltn__page-details-area ltn__blog-details-area mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__blog-details-wrap">
                            <div className="ltn__page-details-inner ltn__blog-details-inner">
                                <div dangerouslySetInnerHTML={{ __html: detail }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PageDetails.propTypes = {
    data: PropTypes.object,
};

PageDetails.defaultProps = {
    data: {}
};

export default PageDetails;
