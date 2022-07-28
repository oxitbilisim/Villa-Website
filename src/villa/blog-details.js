import React, {useEffect, useState} from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import axios from "axios";

const BlogDetailsPage = (props) => {
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        const subUri = props.match.params.subUri;
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetBlogByURL?url=" + subUri)
            .then((response) => {
                setData(response.data);
            }).finally(() => {
            setLoaded(true);
        })
    }
    return <div>
        <Navbar />
        <PageHeader headertitle={data?.baslik} />
        <BlogDetails data={data} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogDetailsPage

