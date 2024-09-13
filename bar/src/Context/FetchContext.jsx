import { createContext } from "react";
import { useState } from "react";



const fetchContext = createContext()

let urls = {    
    urlAlcoholic : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list',
    urlIngredient : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
    urlGlass : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list',
    urlCategory : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    }


function FetchContextProvider ({children}) {

    const [inputSearch, setInputsearch] = useState("")
    const [dataCheckbox, setDataCheckbox] = useState([])
    const [isSelected, setIsSelected] = useState("")
    const [dataForSwitch, setDataForSwitch] = useState("")
    const [showSingleProduct, setShowSingleProduct] =  useState(false)
    const [singleProduct, setSingleProduct] = useState("")
    const [productsCart, setProductsCart] = useState([])

    
    const addToCart = async (e) =>{
        e.stopPropagation()
        let catchId = e.target.dataset.id

        console.log(catchId);
        let res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${catchId}`)
        let data = await res.json()

        /*setProductsCart([
            ...productsCart,
            ...data.drinks
        ])*/

        setProductsCart(prevProducts => [...prevProducts, ...data.drinks]);
    }



    const handleSearch = (e) =>{
        setInputsearch(e.target.value)
        setShowSingleProduct(false)
    }

    const handleChange = (e) => {
        setIsSelected(e.target.id)
        setDataForSwitch(e.target.name);
        setShowSingleProduct(false)
    }

    const handleClick = (e) => {
        setShowSingleProduct(true)
        setSingleProduct(e.currentTarget)
        console.log(e.currentTarget);
        if (e.target.id !== "btn-cart" && e.target.id !== "btn-pay" && e.target.id !== "svg-pay" && e.target.id !== "svg-cart") {
            setSingleProduct(e.target.parentNode.parentNode.id);
        }
    }
    
    const obtenerDatos = async () => {
        try {
            const responses = await Promise.all([
                fetch(urls.urlAlcoholic),
                fetch(urls.urlIngredient),
                fetch(urls.urlGlass),
                fetch(urls.urlCategory)
            ]);
            const dataFetch = await Promise.all(responses.map(response => response.json()));
            setDataCheckbox(dataFetch)
            console.log(dataCheckbox);
        
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const data = {
        inputSearch,
        handleSearch,
        dataCheckbox,
        obtenerDatos,
        isSelected,
        handleChange,
        dataForSwitch,
        handleClick,
        showSingleProduct,
        setShowSingleProduct,
        singleProduct,
        addToCart,
        productsCart,
        setProductsCart
    }

    return(
        <fetchContext.Provider value={data}>{children}</fetchContext.Provider>
    )
}


export default fetchContext
export {FetchContextProvider}