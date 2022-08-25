import React, {useEffect, useState} from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogGrid from './blog-components/blog-grid';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import axios from "axios";
import PageDetails from "./page-details";

const Page = (props) => {
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        loadData();
    },[props.match.params.subUri]);

    const loadData = () => {
        const subUri = props.match.params.subUri;
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetPageByURL?url=" + subUri)
            .then((response) => {
                setData(response.data);
            }).finally(() => {
        })
    }
    
    return <div>
        <Navbar />
        <PageHeader headertitle={data?.baslik} />
        <PageDetails data={data} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Page

