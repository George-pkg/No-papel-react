import './css/App.css';
import FormHome from './pages/FormHome/FormHome.js'
import { BrowserRouter as Router, Routes, Route, Link, redirect} from 'react-router-dom';
import FormNew from './pages/FormNew/FormNew';

function App() {
 
  return (
    <Router>
    
      <Routes>
        <Route exact path='/' element={<FormHome />} />
        <Route path='/NewForm' element={<FormNew />} />
      </Routes>

    </Router>
  );
}

export default App;