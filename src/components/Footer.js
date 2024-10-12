import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                        <nav className='row'>
                            <Link to='/' className="col-12 col-md-3 d-flex aling-items-center justify-content-center">
                                <img src= './logo.png' className='mx-2' height='260'/>
                            </Link>
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bol mb-2'>LOUNGE.SHOP</li>
                                <li className='text-center'>Si te sobra un poquito de dinero de tu salario y no sabes qué hacer. LOUNG.SHOP está para ti</li>
                            </ul>
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bol mb-2'>Contacto</li>
                                <li>
                                    <Link to ='/contacto'className='text-reset '>Formulario de Contacto</Link>
                                </li>
                                <i className="bi bi-geo-alt"/><li>Bogotá 7th Street -199</li>
                                <i className="bi bi-telephone"/><li>+018000067890123</li>
                            </ul>
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bol mb-4'>Encuéntranos</li>
                                <li className='d-flex justify-content-between'>
                                    <i className="bi bi-facebook"/>
                                    <i className="bi bi-instagram"/>
                                    <i className="bi bi-twitter-x"/>
                                    <i className="bi bi-linkedin"/>
                                </li>
                            </ul>
                        </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer