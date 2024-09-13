import React, { useState } from 'react'
import '../Components-Styles/Form.css'
import logo from '../Thirsty-Removed.png';


const initialStateCreate = {
    name: '',
    lastName: '',
    userName: '',
    email: '',
    password:'',
    passwordConfirm:''
}

function FormCreate() {

    const [form, setForm] = useState(initialStateCreate)
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: [e.target.value]
        })
    }

    const handleReset = () => {
        setForm(initialStateCreate)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if (form.password !== form.passwordConfirm) {
            alert('Las contrasenas no coinciden')
            return
        }

        console.log(form);
        handleReset()
    }
    const showhidePass = (e) =>{
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const showhidePasswordConfirm = (e) => {
        e.preventDefault()
        setShowPasswordConfirm(!showPasswordConfirm)
    }

return (
    <form className="input-dates-form" onSubmit={handleSubmit}>
    <div className="logo-form">
                <img src={logo} alt="" />
    </div>
        <h3>Create an account</h3>
    <div className="input-dates-box">
        <input type="text" 
        name='name' 
        placeholder='Name' 
        className='inputForm' 
        pattern="[A-Z][A-Za-z]*" 
        title="Solo se permiten letras que comiencen con mayuscula"
        onChange={handleChange}
        value={form.name}
        autoComplete='off'/>
        <input type="text" 
        name='lastName' 
        placeholder='Last Name' 
        className='inputForm' 
        pattern="[A-Z][A-Za-z]*" 
        title="Solo se permiten letras que comiencen con mayuscula"
        onChange={handleChange}
        value={form.lastName}
        autoComplete='off'/>
        <input type="text" 
        name='userName' 
        placeholder='Username' 
        className='inputForm' 
        pattern="\w+" 
        title="Solo se permiten letras, números y guiones bajos"
        onChange={handleChange}
        value={form.userName}
        autoComplete='off'/>
        <input type="email" 
        name='email' 
        placeholder='Email' 
        className='inputForm' 
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
        title="Por favor, introduce un correo electrónico válido"
        onChange={handleChange}
        value={form.email}
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
        <div className="input-password-box">
        <input type={showPasswordConfirm ? "text" : "password"} 
        name='passwordConfirm' 
        placeholder='Confirm password' 
        className='inputForm'
        onChange={handleChange}
        value={form.passwordConfirm}/>
        <button className='show' onClick={showhidePasswordConfirm}>{ showPasswordConfirm 
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
        <input type="submit" value="Send" className='button-form' id='sendButton'/>
        <input type="button" value="Cancel" className='button-form' onClick={handleReset} />
    </div>
    </form>
)
}

export default FormCreate