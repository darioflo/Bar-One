import { navOptions } from "./Navbar"
import '../Components-Styles/ToggleOptions.css'


function ToggleOptions({visibleOptions,setVisibleOptions}) {

    const changeVisibility = () => {
            setVisibleOptions(!visibleOptions)
    }

    return (
    <div className={`toggle-options animate__animated ${visibleOptions ? "animate__bounceInRight" : "animate__bounceOutRight"}`}>
        <button className="button-toggle-options" onClick={changeVisibility}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="6" fill="rgb(91, 94, 100)"viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        </button>
        <ul className="menu-ul-toggle-list">
        <li className="li-toggle"><a className="a-toggle" href="google.com">{navOptions.opt_1}</a></li>
        <li className="li-toggle"><a className="a-toggle" href="google.com">{navOptions.opt_2}</a></li>
        <li className="li-toggle"><a className="a-toggle" href="google.com">{navOptions.opt_3}</a></li>
        <li className="li-toggle"><a className="a-toggle" href="google.com">{navOptions.opt_4}</a></li>
        </ul>
    </div>
    )
}

export default ToggleOptions































