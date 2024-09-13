/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useRef } from 'react'
import '../Components-Styles/Card.css'
import fetchContext from '../Context/FetchContext';



function Card({datos}) {

    
    const {handleClick,addToCart} = useContext(fetchContext)

    const cardRef = useRef(null);
    const handleMouseMove = (e) => {
        let { offsetLeft, offsetTop } = cardRef.current;
        let x = e.pageX - offsetLeft;
        let y = e.pageY - offsetTop;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    
    };


    return (
        <div className='card animate__animated animate__bounceInRight'  onClick={handleClick} id={datos.idDrink} onMouseMove={handleMouseMove} ref={cardRef}>
            <div className="img-container">
                <img src={datos.strDrinkThumb} alt={datos.strDrink} />
            </div>
            <div className="card-info-drink" data-id={datos.idDrink}>
                <h4>Nombre:<i>{datos.strDrink}</i></h4>
                <h4>Categoria:<i>{datos.strCategory || "Drink"}</i></h4>
                <h4>Precio:<i>${datos.idDrink}.00</i></h4>
            </div>
            <div className="card-buttons">
                    <button onClick={addToCart} data-id={datos.idDrink}><svg data-id={datos.idDrink} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(91,94,100)" viewBox="0 0 16 16">
                        <path data-id={datos.idDrink} d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                        <path data-id={datos.idDrink} d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                    </button>
                    <button id='btn-pay'><svg id='svg-pay' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(91,94,100)" viewBox="0 0 16 16">
                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>
                        </svg>
                    </button>
            </div>
        </div>
    )
}

export default Card