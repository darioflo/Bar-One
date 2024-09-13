import '../Components-Styles/ProductView.css'
import { useState ,useContext, useEffect, useRef } from 'react'
import fetchContext from '../Context/FetchContext';


function ProductView() {

    const { singleProduct} = useContext(fetchContext)
    const [dataID, setDataID] = useState([])



    console.log(singleProduct);
    const cardRef = useRef(null);
    const handleMouseMove = (e) => {
        let { offsetLeft, offsetTop } = cardRef.current;
        let x = e.pageX - offsetLeft;
        let y = e.pageY - offsetTop;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    
    };

    useEffect(()=>{
        const getIdDrink = async () =>{
            try {
                let res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${singleProduct}`)
                let data = await res.json()

                setDataID(data.drinks[0])
                console.log(data.drinks[0]);

            } catch (error) {
                console.log(error);
            }
        }

        getIdDrink()
    },[singleProduct])


    return (
        <div ref={cardRef} className='product-view animate__animated animate__backInUp' onMouseMove={handleMouseMove}>
            <div className="product-image">
                <img src={dataID.strDrinkThumb} alt="" />
            </div>
            <div className="product-info">
            <h4>Name:</h4><p><i>{dataID.strDrink}</i></p>
            <h4>Tags:</h4><p><i>{dataID.strTags || "Classic"}</i></p>
            <h4>Instructions:</h4><p><i>{dataID.strInstructions && dataID.strInstructions.length < 200 ? dataID.strInstructions : "No instructions"}</i></p>
            <h4>Ingredients:</h4><p><i>{dataID.strIngredient1}</i>,<i>{dataID.strIngredient2}</i>,<i>{dataID.strIngredient3}</i></p>
            <h4>Price:</h4><p><i>${dataID.idDrink}.00</i></p>
            <div className="card-buttons">
                    <button className='button-view-products'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(91,94,100)" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                    </button>
                    <button className='button-view-products'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(91,94,100)" viewBox="0 0 16 16">
                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>
                        </svg>
                    </button>
            </div>
            </div>
        </div>
    )
}

export default ProductView