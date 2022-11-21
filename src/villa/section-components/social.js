import React, {Component, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import {GlobalContext} from "../global-context";

const Social = () => {

    const {regions, categories, parameters} = useContext(GlobalContext);
    
    const socialMediaList = [];
    const [socialMedia, setSocialMedia] = useState([]);

    useEffect(() =>{
        if(parameters!=null) {
            parameters.forEach(p => {
                if (p.code.startsWith("SOCIAL_NAME")) {
                    const socialCode = p.code.replaceAll("SOCIAL_NAME_", "");

                    const name = parameters.find(s => s.code == "SOCIAL_NAME_" + socialCode)?.value;
                    const link = parameters.find(s => s.code == "SOCIAL_LINK_" + socialCode)?.value;
                    const icon = parameters.find(s => s.code == "SOCIAL_ICON_" + socialCode)?.value;
                    const order = parameters.find(s => s.code == "SOCIAL_ORDER_" + socialCode)?.value;

                    socialMediaList.push({
                        name: name,
                        link: link,
                        icon: icon,
                        order: order,
                    });
                }
            });

            setSocialMedia(socialMediaList.sort((a, b) => a > b ? 1 : -1));
        }
    },[parameters]);
    

    return <div className="ltn__social-media">
        <ul>
            {
                socialMedia.map((s,i )=>
                    <li key={i}><a href={s.link} target="_blank" title={s.name}><i ref={element => {
                        if (element) element.style.setProperty('color', 'white', 'important');
                    }} className={s.icon}/></a></li>    
                )
            }
            
            {/*<li><a href="https://www.instagram.com/villalarim/" target="_blank" title="Instagram"><i
                ref={element => {
                    if (element) element.style.setProperty('color', 'white', 'important');
                }} className="fab fa-instagram"/></a></li>*/}

        </ul>
    </div>
}

export default Social
