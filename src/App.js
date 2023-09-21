import './App.css';

import logo from "./img/login.png"

function App() {
  return (
    <div className="App">

      <main>
        <img src={logo} alt='Sem papel logo'></img>
        <form className="form">
          <input type="text" placeholder='Name'/>
          <input type="password" placeholder='Password'/>
          <button type="summit">login</button>
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
