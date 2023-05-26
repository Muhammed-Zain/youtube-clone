import React, {createContext, useState, useEffect} from "react";
import {fetchData} from '../utils/api'

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetchCategoryData(selectCategories);
    }, [selectCategories]);

    const fetchCategoryData = async (query) => {
        setLoading(true);
        fetchData(`search/?q=${query}`).then(({data}) => {
            // console.log(data);
            setSearchResults(data.posts);
            setLoading(false);
            // console.log(searchResults);
            
        })
    }

    return (
        <Context.Provider value={
            {
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectCategories,
                setSelectCategories,
                mobileMenu,
                setMobileMenu,
                page,
                setPage
            }
        }>
            {props.children}
        </Context.Provider>
    )
}
