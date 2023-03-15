import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Contact1 from './components/Contact1';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
        
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/contact' element={<Contact1/>}></Route>
     </Routes>
    </BrowserRouter>  

    </div>
  );
}

export default App;
