import './App.css';
import logo from "./img/login.png";
import { useState } from 'react';

function App() {
  // visualizar o valor, alterar o valor
  const [valueInput, setValueInput] = useState("");

  const handleClick = (event) => {
    
  }
  const handleChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <div className="App">

      <main>
        <img src={logo} alt='Sem papel logo'></img>
        <form className="form">
          <input type="text" placeholder='Name' onChange={handleChange}/>
          <input type="password" placeholder='Password'/>
          <button type="summit" onClick={handleClick}>login</button>
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
  );
}

export default App;