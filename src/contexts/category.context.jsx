import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoryContext = createContext({
    categoriesMap: {},
});

export const CategoryProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            setcategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    }, []);
    
    const value = { categoriesMap };

    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
}