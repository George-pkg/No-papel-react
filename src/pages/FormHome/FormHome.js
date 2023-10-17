import logo from '../../assets/img/login.png'
import './styles.css'
import { useNavigate, Link } from 'react-router-dom';

function FormHome() {

    // MUdança da tela de login, 
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        console.log('login');
        return navigate("/HomePage");
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
                    <Link to="/ForgotPassword">Forgot Password</Link>
                </label>
                </div>
            </main>
        </div>
    )   
}

export default FormHome;