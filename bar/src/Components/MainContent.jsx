import React from 'react'
import fetchContext from "../Context/FetchContext";
import { useContext } from "react";
import Pagination from "../Components/Pagination";
import ProductView from "../Components/ProductView";
import '../Components-Styles/MainContent.css'

function MainContent() {

    const {showSingleProduct} = useContext(fetchContext)

    return (
        <div className='main-content'>{showSingleProduct ? <ProductView/> : <Pagination/>}</div>
    )
}

export default MainContent