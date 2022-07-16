import React, {Component, useEffect} from 'react';
import PropTypes from "prop-types";
import $ from 'jquery';
import ReactDOM from "react-dom";
import Root from "../../index";

const VillaImage = (props) => {

    useEffect(() => {
       const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = "/assets/js/main.js";
        document.body.appendChild(minscript);

        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/assets/css/plugins.js';
        link.media = 'all';
        document.body.appendChild(link);

    }, [props.list])

    return <div>
        {/*<div className="ltn__img-slider-area mb-20">
            <div className="container-fluid">
                <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                    {
                        props.list.map(item =>
                            <div key={'img-' + item.id} className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href={"" + item.id} data-rel="lightcase:myCollection">
                                        <img src={"data:image/png;base64," + item.image}
                                             alt="Image"/>
                                    </a>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>*/}
        <div className="ltn__img-slider-area mb-20">
            <div className="container-fluid">
                <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                    
                            <div className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href={"/assets/img/img-slide/31.jpg"} data-rel="lightcase:myCollection">
                                        <img src="/assets/img/img-slide/31.jpg"
                                             alt="Image"/>
                                    </a>
                                </div>
                            </div>
                            <div  className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href={"/assets/img/img-slide/32.jpg"} data-rel="lightcase:myCollection">
                                        <img src="/assets/img/img-slide/32.jpg"
                                             alt="Image"/>
                                    </a>
                                </div>
                            </div>
                            <div  className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href={"/assets/img/img-slide/33.jpg"} data-rel="lightcase:myCollection">
                                        <img src="/assets/img/img-slide/33.jpg"
                                             alt="Image"/>
                                    </a>
                                </div>
                            </div>
                            <div  className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href={"/assets/img/img-slide/34.jpg"} data-rel="lightcase:myCollection">
                                        <img src="/assets/img/img-slide/34.jpg"
                                             alt="Image"/>
                                    </a>
                                </div>
                            </div>
                            <div  className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href={"/assets/img/img-slide/35.jpg"} data-rel="lightcase:myCollection">
                                        <img src="/assets/img/img-slide/35.jpg"
                                             alt="Image"/>
                                    </a>
                                </div>
                            </div>
    

                </div>
            </div>
        </div>
    </div>
}

VillaImage.propTypes = {
    list: PropTypes.array,
};

VillaImage.defaultProps = {
    list: []
};

export default VillaImage

ReactDOM.render(<VillaImage/>, document.getElementById('quarter'));