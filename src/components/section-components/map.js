import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="container">
				<div className="row">
        <div className="google-map mb-60">


        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.0970415628835!2d29.41023652218447!3d36.27180562243338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c02d2bd6cf1941%3A0x5e27889fcb344d7d!2sKalkan%2C%20%C5%9Eehitler%20Cd.%20No%3A16%2C%2007580%20Ka%C5%9F%2FAntalya!5e0!3m2!1str!2str!4v1655714420430!5m2!1str!2str"
            width="100%" height="400" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0}></iframe>
		</div>
                    </div>
        </div>
        }
}

export default Map
