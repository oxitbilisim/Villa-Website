import React, {Component, useEffect} from 'react';
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import './villa-image.css'
import $ from "jquery";

const VillaImage = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }
        ]
    };
    useEffect(() => {
    
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = "/assets/js/main.js";
        document.body.appendChild(minscript);
        //$('.ltn__img-slider-area').lightcase();
    }, [props.list]);

    return <div>
        <Slider {...settings}>
            {
                props.list.sort((a,b) => (a.sirano > b.sirano) ? 1 : ((b.sirano > a.sirano) ? -1 : 0)).map(item =>
                    <div key={'img-' + item.id}>
                        
                            <a href={process.env.REACT_APP_API_ENDPOINT+"/VillaFE/villa-image/"+item.id+".jpg"} data-rel="lightcase:myCollection:slideshow">
                                <img src={process.env.REACT_APP_API_ENDPOINT+"/VillaFE/villa-image/"+item.id+".jpg"} alt="Image"/>
                            </a>
                     
                    </div>
                )
            }
        </Slider>
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