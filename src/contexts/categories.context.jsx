import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({ children })=>{
    const [categoriesMap, setCategoriesMap] = useState({});

    //The example below shows how to use an async function when you use useEffect
    useEffect(()=>{
        //When you use the useEffect to load a async function you should write it like below
        const getCategoriesMap = async ()=> {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
        
    },[]);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}> { children }</CategoriesContext.Provider>
    )
};