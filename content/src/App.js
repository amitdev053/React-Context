import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './Component/Navbar';
import {Product} from './Component/Product'



function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path ='/' Component={Product}/>
    </Routes>
     
    </>
  );
}

export default App;
