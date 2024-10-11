import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'

import './App.css';

import { store } from './store/store'

import Home from './components/home';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/galeria" element={<Galeria/>}/> */}
          {/* <Route path="/detalle-producto" element={<Detalle/>}/> */}
          {/* <Route path="/contacto" element={<Contacto/>}/> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
