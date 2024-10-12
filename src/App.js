import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'

import './App.css';

import { store } from './store/store'

import Home from './components/home';
import Galeria from './components/galeria';
import Menu from "./components/Menu";
import CompDetalle from "./components/CompDetalle";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path="/detalle-producto" element={<CompDetalle/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      <Footer/> 
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
