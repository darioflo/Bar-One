import React, { useContext } from 'react'
import '../Components-Styles/AsideMenu.css'
import { useEffect } from 'react'
import InputAsideMenu from './InputAsideMenu'
import fetchContext from '../Context/FetchContext'

function AsideMenu() {
    
    const {dataCheckbox, obtenerDatos} = useContext(fetchContext)

    useEffect(() => {    
        obtenerDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className='aside-menu'>
            <div className="aside-box">
            <h2 className='h3'>Filters</h2>
            </div>
            <details className='aside-box-content' name='drinks'>
            <summary>Alcoholic:</summary>
            {dataCheckbox[0] && dataCheckbox[0].drinks.map((datos, index) => <InputAsideMenu dataName="alcohol" key={`alcoholic-${index}`} id={`alcoholic-${index}`} datos={datos.strAlcoholic}/>)}
            </details>
            <details className='aside-box-content' name='drinks'>
            <summary>Ingredients:</summary>
            {dataCheckbox[1] && dataCheckbox[1].drinks.map((datos, index) => <InputAsideMenu dataName="ingredientes" key={`ingredients-${index}`} id={`ingredients-${index}`} datos={datos.strIngredient1}/>)}
            </details>
            <details className='aside-box-content' name='drinks'>
            <summary>Glass:</summary>
            {dataCheckbox[2] && dataCheckbox[2].drinks.map((datos, index) => <InputAsideMenu dataName="glass" key={`glass-${index}`} id={`glass-${index}`} datos={datos.strGlass}/>)}
            </details>
            <details className='aside-box-content' name='drinks'>
            <summary>Category:</summary>
            {dataCheckbox[3] && dataCheckbox[3].drinks.map((datos, index) => <InputAsideMenu dataName="categoria" key={`category-${index}`} id={`category-${index}`} datos={datos.strCategory}/>)} 
            </details>
        </div>
    )
}

export default AsideMenu

