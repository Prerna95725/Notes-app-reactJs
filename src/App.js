import logo from './logo.svg';
import './App.css';
import {  Route, Switch } from "react-router-dom";
import Navbar from './Component/Navbar'
import Home from './Component/Home'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>

    </div>
  );
}

export default App;


 