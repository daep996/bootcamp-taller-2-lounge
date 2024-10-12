import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'

import './App.css';

import { store } from './store/store'

import Home from './components/home';
import Galeria from './components/galeria';
import Menu from "./components/Menu";
import Contacto from "./components/Contacto";
import CompDetalle from "./components/CompDetalle";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          {<Route path="/contacto" element={<Contacto/>}/>}
          <Route path="/detalle-producto" element={<CompDetalle/>}/>
          {/* <Route path="/contacto" element={<Contacto/>}/> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
