import React, {Component, useContext} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import {GlobalContext} from "../global-context";

const ContactInfo = () => {

    const {regions, categories, parameters} = useContext(GlobalContext);

    const email = parameters.find(p => p.code == 'CONTACT_EMAIL').value;
    const phone = parameters.find(p => p.code == 'CONTACT_PHONE').value;
    const phoneMobile = parameters.find(p => p.code == 'CONTACT_PHONE_MOBILE').value;
    const address = parameters.find(p => p.code == 'CONTACT_ADDRESS').value;

    return <div className="ltn__contact-address-area mb-40">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                        <div className="ltn__contact-address-icon">
                            <img src={"assets/img/icons/mail.png"} alt="Icon Image"/>
                        </div>
                        <h3>E-Mail</h3>
                        <p>{email} <br/><br/></p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                        <div className="ltn__contact-address-icon">
                            <img src={"assets/img/icons/phone.png"} alt="Icon Image"/>
                        </div>
                        <h3>Telefon</h3>
                        <p>{phone} <br/> {phoneMobile}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                        <div className="ltn__contact-address-icon">
                            <img src={"assets/img/icons/location.png"} alt="Icon Image"/>
                        </div>
                        <h3>Adres</h3>
                        <p dangerouslySetInnerHTML={{__html: address}}></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ContactInfo
