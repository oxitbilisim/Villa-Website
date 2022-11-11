import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
				<li><a href="https://www.facebook.com/villalarim" title="Facebook"><i ref={element => {
					if (element) element.style.setProperty('color', 'white', 'important');
				}} className="fab fa-facebook-f" /></a></li>
				<li><a href="https://www.instagram.com/villalarim/" title="Instagram"><i ref={element => {
					if (element) element.style.setProperty('color', 'white', 'important');
				}} className="fab fa-instagram" /></a></li>

			</ul>
		</div>
        }
}

export default Social
