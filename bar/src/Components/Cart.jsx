import "../Components-Styles/Cart.css"
import { useContext, useRef } from "react";
import fetchContext from "../Context/FetchContext";


function Cart({product}) {

    const {productsCart,setProductsCart} = useContext(fetchContext)

    const cardRef = useRef(null);
    const handleMouseMove = (e) => {
        let { offsetLeft, offsetTop } = cardRef.current;
        let x = e.pageX - offsetLeft;
        let y = e.pageY - offsetTop;
        cardRef.current.style.setProperty('--x', `${x}px`)
        cardRef.current.style.setProperty('--y', `${y}px`)
    }


    const deleteOne = (e) => {
        e.preventDefault()
        console.log(e.target.dataset.id);
        console.log(productsCart);
        const newProducts = productsCart.filter(element => element.idDrink !== e.target.dataset.id)
        setProductsCart(newProducts);
    }


    return (
        <div className='card-box'onMouseMove={handleMouseMove} ref={cardRef}>
            <div className="cart-container">
                <div className="img-cart">
                    <img src={product.strDrinkThumb} alt={product.strDrink}/>
                </div>
                <div className="cart-info">
                <h4>Name:</h4><p><i>{product.strDrink}</i></p>
                <h4>Tags:</h4><p><i>{product.strTags || "Classic"}</i></p>
                <h4>Instructions:</h4><p><i>{product.strInstructions.length < 200 ? product.strInstructions : "No instructions"}</i></p>
                <h4>Ingredients:</h4><p><i>{product.strIngredient1}</i>,<i>{product.strIngredient2}</i>,<i>{product.strIngredient3}</i></p>
                <h4>Price:</h4><p><i>${product.idDrink}.00</i></p>
                <div className="controls">
                    <div className="cant">3</div>
                    <button className="controls-btn" onClick={deleteOne} data-id={product.idDrink}>
                    <svg data-id={product.idDrink} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(91,94,100)" viewBox="0 0 16 16">
                        <path data-id={product.idDrink} d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                    </button>
                    <button className="controls-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(91,94,100)" viewBox="0 0 16 16">
                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>
                        </svg>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cart