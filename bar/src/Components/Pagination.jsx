import React, { useContext, useEffect, useState } from 'react'
import '../Components-Styles/Pagination.css'
import fetchContext from '../Context/FetchContext'
import Card from './Card'
//import CardsLoader from './CardsLoader'

export default function Pagination() {

    const { inputSearch,isSelected, dataForSwitch } = useContext(fetchContext)
    const [dataByName, setDataByName] = useState([])
    const [shouldRenderCard, setShouldRenderCard] = useState(false)
    const [shouldRenderCardInput, setShouldRenderCardInput] = useState(false)
    const [dataByFilter, setDataByFilter] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([]);
    const itemsPerPage = 4;
    //const loadersCards = [1,2,3,4]

    
    const fetchSearchByName = async () =>{
        try {
            let res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch}`)
            let data = await res.json()

            setDataByName(data.drinks)
            console.log(dataByName);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    useEffect(()=>{
        if (inputSearch) {
            fetchSearchByName()
            setCurrentPage(0)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inputSearch])

    useEffect(()=>{
        if (inputSearch) {
            const temp = setTimeout(() => {
                setShouldRenderCard(true)
            },1000);

            return () => clearInterval(temp)
        }
    },[inputSearch])

    useEffect(() => {
        setShouldRenderCard(false);
    }, [inputSearch]);

    async function getDataSwitch (url) {
        try {
            let res = await fetch(url)
            let data = await res.json(res)

            setDataByFilter(data.drinks)
            console.log(dataByFilter);
        
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        console.log(isSelected);
        console.log(dataForSwitch);
        const getDataInputs = () => {
            switch (dataForSwitch) {
                case "alcohol":
                    getDataSwitch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${isSelected}`)
                    break;
                case "glass":
                    getDataSwitch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${isSelected}`)
                    break;
                case "ingredientes":
                    getDataSwitch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${isSelected}`)
                    break;    
                case "categoria":
                    getDataSwitch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${isSelected}`)
                    break; 
                    default:
                    break;
            }
        }
        getDataInputs()
        setCurrentPage(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isSelected])
    
    useEffect(()=>{
        if (dataByFilter) {
            const temp = setTimeout(() => {
                setShouldRenderCardInput(true)
            },1000);

            return () => clearInterval(temp)
        }
    },[dataByFilter])


    useEffect(() => {
        const newPages = [];
        for (let i = 0; i < dataByName.length; i += itemsPerPage) {
            newPages.push(dataByName.slice(i, i + itemsPerPage));
        }
        setPages(newPages);
    }, [dataByName]);

    useEffect(() => {
        const newPages = [];
        for (let i = 0; i < dataByFilter.length; i += itemsPerPage) {
            newPages.push(dataByFilter.slice(i, i + itemsPerPage));
        }
        setPages(newPages);
    }, [dataByFilter]);

const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, pages.length - 1));
};

const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 0));
};

const goToPage = (number) => {
    setCurrentPage(number);
};

    return (
    <div className='pagination-container'>
        <div className="pagination-content">
        {/*(!shouldRenderCard || !shouldRenderCardInput) && loadersCards.map((dato)=> <CardsLoader datos={dato}/>)*/}
        {(shouldRenderCard || shouldRenderCardInput) && pages[currentPage] && pages[currentPage].map((datos,index)=> <Card datos={datos} key={`card-${index}`}/>)}
        </div>
        <div className="pagination-handle">
        <div className="button-box">
            <button onClick={goToPreviousPage} className='prev'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgb(91,94,100)" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
            </button>
            {pages.map((_, index) => (
            <button className={`button-pagination ${currentPage === index ? 'active' : ''}`} key={index} onClick={() => goToPage(index)}>
                {index + 1}
            </button>
            ))}
            <button onClick={goToNextPage} className='next'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgb(91,94,100)" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
            </div>
        </div>
    </div>
    );
}
