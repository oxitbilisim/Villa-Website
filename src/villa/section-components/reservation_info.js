import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import axios from "axios";
import {dateFormat} from "../Constants";
import moment from "moment";

const ReservationInfo = (props) => {

    const [data, setData] = useState(null);

    const loadData = (code) => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetReservationInfo?reservationNo=" + code).then(response => {
            setData(response.data);
        })
    }

    useEffect(() => {
        loadData(props.match.params.subUri);
    }, [props.match.params.subUri]);

    return <div className="ltn__team-details-area mb-120">
        {data != null ?
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ltn__team-details-member-info text-center mb-40">
                            <div className="team-details-img">
                                <img
                                    src={process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetVillaImage?id=" + data?.villaImageId}/>
                            </div>
                            <h4>{data.villaName}</h4>
                            <h6 className="text-uppercase ltn__secondary-color">{data.villaRegionName}</h6>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ltn__team-details-member-info-details">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="title-2">Rezervasyon Bilgileri</h4>
                                    <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                                        <ul>
                                            <li><label>Villa Adı:</label> <span>{data.villaName}</span></li>
                                            <li><label>Giriş Tarihi: </label> <span>{moment(data.entryDate).format(dateFormat)}</span></li>
                                            <li><label>Çıkış Tarihi:</label> <span>{moment(data.exitDate).format(dateFormat)}</span></li>
                                            <li><label>Toplam Gece Sayısı:</label> <span>{data.nightCount+" Gece"}</span></li>
                                            <li><label>Toplam Satış Fiyatı:</label> <span>{data.totalPrice+data.currency}</span></li>
                                            <li><label>Ön Ödeme Tutarı:</label> <span>{data.downPayment+data.currency}</span></li>
                                            <li><label>Kalan Villa Ödemesi:</label> <span>{(data.totalPrice-data.downPayment)+data.currency}</span></li>
                                            <li><label>Temizlik Ücreti:</label> <span>{(data.cleaningFee)+data.currency}</span></li>
                                            <li><label>Hasar Depozito Ödemesi:</label> <span>{(data.deposit)+data.currency}</span></li>
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <h4 className="title-2">Misafir İletişim Bilgileri</h4>
                                    <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                                        <ul>
                                            <li><label>Adı Soyadı:</label> <span>{data.guestName}</span></li>
                                            <li><label>Kişi Sayısı: </label> <span>{data.guestCount+" Kişi"}</span></li>
                                            <li><label>Mail Adresi:</label> <span><a href={'mailto:'+data.email}>{data.email}</a></span></li>
                                            <li><label>Telefon Numarası:</label> <span><a href={'tel:'+data.phone}>{data.phone}</a></span></li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            : null}
    </div>
}

export default ReservationInfo