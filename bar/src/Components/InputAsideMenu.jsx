import { useContext } from "react"
import fetchContext from "../Context/FetchContext"

function InputAsideMenu({datos,dataName}) {
    const {isSelected, handleChange} = useContext(fetchContext)
    return (
            <label>
                <input type="checkbox" name={dataName} id={datos} onChange={handleChange} checked={isSelected === datos}/>
                {datos}
            </label>
    )
}

export default InputAsideMenu