import {Link} from 'react-router-dom';
import React, { useContext} from "react";
import {GlobalContext} from "../global-context";

const RegionItems = () => {
    const {regions, categories} = useContext(GlobalContext);

    return <div className="ltn__banner-area pt-60 go-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Bölgeler</h6>
                        <h1 className="section-title">Tatil Bölgeleri</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                {regions.sort((a,b) => (a.toplam > b.toplam) ? -1 : ((b.toplam > a.toplam) ? 1 : 0)).map(item => (
                    <div key={'region-'+item.id} className="col-lg-4 col-md-6">
                        <Link to={'/bolge/' + item.url}>
                        <div className="ltn__banner-item ltn__banner-style-4 text-color-white bg_image"
                             style={{backgroundImage: "url('"+process.env.REACT_APP_API_ENDPOINT+"/VillaFE/GetRegionImage?id="+item.id+"')"}}>
                            <div className="ltn__banner-info">
                                <h3> {item.ad} </h3>
                                <mark> {item.toplam} Villa</mark>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default RegionItems
