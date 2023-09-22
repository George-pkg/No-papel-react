import { useState } from 'react';
import logo from '../../img/login.png'
import './styles.css'
import { BrowserRouter as Router, Witch, Route, Link } from 'react-router-dom';

function FormHome() {

    // visualizar o valor, alterar o valor
    // const [valueInput, setValueInput] = useState("");

    const login = (e) => {
        e.preventDefault()
        console.log('login')
    }
    
    const handleChange = (event) => {
    console.log(event.target.value)
    }

    return (
        <div className='body'>
            <main >
                <img src={logo} alt='Sem papel logo'></img>
                <form className="form">
                <input type="text" placeholder='Name' onChange={handleChange} data-testid='nome' />
                <input type="password" placeholder='Password'/>
                <button type="summit" onClick={login}>login</button>
                </form>

                <div className="Dice-pass">
                <label id="save">
                    <input type="checkbox" name="save-password" id="save"/>
                    <p>Remember me</p>
                </label>

                <label id="forgot">
                    <a href="#">Forgot Password</a>
                </label>
                </div>
            </main>
        </div>
    )   
}

export default FormHome;