import * as React from 'react'
import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const GlobalContext = createContext();
export const GlobalContextProvider = (props) => {
    const [regions, setRegions] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetBolgeAll?rules=1")
            .then((response) => {
                setRegions(response.data);
            })

        axios.get(process.env.REACT_APP_API_ENDPOINT + "/VillaFE/GetKategoriAll?rules=1")
            .then((response) => {
                setCategories(response.data);
            })
    },[]);

    return (
        <GlobalContext.Provider
            value={{
                regions,
                categories
            }}>
            {regions!=null && categories!=null?props.children:null}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider