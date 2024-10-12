import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

const Menu = () => {
    return (
        <>
<<<<<<< HEAD
            <nav className ="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-around">
                <NavLink className={({ isActive }) => (isActive ? "navbar-brand" : null)} to='/'>Home</NavLink>
=======
            <nav className ="navbar navbar-expand-lg bg-body-tertiary">
                <NavLink className={({ isActive }) => (isActive ? "navbar-brand" : null)} to='/'>Home</NavLink>ln\
>>>>>>> Milton
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : null)} to='/galeria'>Galeria</NavLink>
                {/* <NavLink className={({ isActive }) => (isActive ? "nav-link active" : null)} to='detalle-producto'>Detalle-Producto</NavLink> */}
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : null)} to='contacto'>Contacto</NavLink>
            </nav>
        </>
    )
}

export default Menu