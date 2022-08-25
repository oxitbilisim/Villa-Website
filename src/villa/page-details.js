import React, {Component, useEffect, useState} from 'react';
import PropTypes from "prop-types";

const PageDetails = (props) => {
    const [detail, setDetail] = useState();
    useEffect(()=>{
        if(props?.data?.sayfaIcerik[0]?.icerik!=null){
            setDetail(JSON.parse(props?.data?.sayfaIcerik[0]?.icerik));
            console.log(JSON.parse(props?.data?.sayfaIcerik[0]?.icerik));
        }
    },[props.data])

    return (
        <div className="ltn__page-details-area ltn__blog-details-area mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__blog-details-wrap">
                            <div className="ltn__page-details-inner ltn__blog-details-inner">
                                <p>{detail?.blocks.map(item =>
                                        <>{item.text}</>
                                )}</p>

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
