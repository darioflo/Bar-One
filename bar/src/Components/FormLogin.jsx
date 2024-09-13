import '../Components-Styles/Form.css'
import logo from '../Thirsty-Removed.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const initialStateLogin = {
    username: '',
    password: '',
}

function FormLogin() {

    const [form, setForm] = useState(initialStateLogin)
    const [showPassword, setShowPassword] = useState(false)


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(form);
        handleReset()
    }

    const handleReset = () => {
        setForm(initialStateLogin)
    }

    const showhidePass = (e) =>{
        e.preventDefault()
        setShowPassword(!showPassword)
    }


return (
    <form className="input-dates-formLogin" onSubmit={handleSubmit}>
        <div className="logo-formLogin">
                <img src={logo} alt="" />
        </div>
        <h3>Login</h3>
    <div className="input-dates-box">
        <input type="text" 
        name='username' 
        placeholder='Username' 
        className='inputForm'
        onChange={handleChange}
        value={form.username}
        autoComplete='off'/>
        <div className="input-password-box">
        <input type={showPassword ? "text" : "password"} 
        name='password' 
        placeholder='Password' 
        className='inputForm'
        onChange={handleChange}
        value={form.password}/>
        <button className='show' onClick={showhidePass}>{ showPassword 
        ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ffaa" viewBox="0 0 16 16">
        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
        </svg>
        :<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(91,94,100)" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
        </svg>}
        </button>
        </div>
    </div>
    <div className="inputs-buttons-form">
        <input type="submit" value="Login" className='button-form' id='sendButtonLogin'/>
        <p className='text-login'>Don't have an account? <Link className='a-login' to="/Crear-cuenta">Sign up here</Link></p>
        <input type="button" value="Cancel" className='button-form' onClick={handleReset}/>
    </div>
    </form>
)
}

export default FormLogin