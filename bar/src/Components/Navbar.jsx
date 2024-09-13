import '../Components-Styles/Navbar.css'
import logo from '../Thirsty-Removed.png';
import { useState } from "react"
import ToggleOptions from "../Components/ToggleOptions";
import { useContext } from 'react';
import fetchContext from '../Context/FetchContext';
import {Link} from "react-router-dom"

export const navOptions = {
    opt_1: "Home",
    opt_2: "Menu",
    opt_3: "Reserves",
    opt_4: 'Contact'
}

function Navbar() {

    const [visibleOptions, setVisibleOptions] = useState(false)

    const showToggleOptions = () => {
        setVisibleOptions(true)
    }

    const onBlur = (e) =>{
        e.target.style.color = 'rgb(247,247,247)'
    }

    const onFocus = (e) => {
        e.target.style.color = 'rgb(247,247,247)' 
    }

    const {inputSearch, handleSearch} = useContext(fetchContext)
    
    return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu-list">
                <ul className="menu-ul-list">
                    <li className='nav-li'><a className='nav-a' href="google.com">{navOptions.opt_1}</a></li>
                    <li className='nav-li'><a className='nav-a' href="google.com">{navOptions.opt_2}</a></li>
                    <li className='nav-li'><a className='nav-a' href="google.com">{navOptions.opt_3}</a></li>
                    <li className='nav-li'><a className='nav-a' href="google.com">{navOptions.opt_4}</a></li>
                </ul>
                <div className="input-container">
                    <input onFocus={onFocus} onBlur={onBlur} className='nav-input' type="text" name='search' value={inputSearch} onChange={handleSearch} placeholder="Search..." autoComplete='off'/>
                </div>
                <div className="menu-options">
                <button className='nav-button'>
                    <Link to='/Cart'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgb(91, 94, 100)" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </Link>
                </button>
                <button className='nav-button'>
                    <Link to='/formulario'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgb(91, 94, 100)" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </Link>
                </button>
                </div>
                <div className="menu-hamburguer">
                <button className='nav-button' onClick={showToggleOptions}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgb(91, 94, 100" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
                {visibleOptions && <ToggleOptions 
                visibleOptions={visibleOptions} 
                setVisibleOptions={setVisibleOptions}/>}
                </div>
            </div>
    </nav>
    )
}

export default Navbar