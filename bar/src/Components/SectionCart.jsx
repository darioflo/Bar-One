import React, { useContext } from 'react'
import fetchContext from '../Context/FetchContext'
import '../Components-Styles/SectionCart.css'
import Cart from './Cart'

function SectionCart() {

    const {productsCart,setProductsCart} = useContext(fetchContext)

    if (productsCart.length === 0) {
        return null;
    }

    const deleteAll = (e) => {
        e.preventDefault()
        setProductsCart([])
    }

    return (
        <section className='cart-section'>
            <div className="delete-all">
                <button className='delete-all-btn' onClick={deleteAll}>Delete All</button>
            </div>
            {productsCart.map((product,index)=> <Cart key={index} product={product}/>)}
        </section>
    )
}

export default SectionCart