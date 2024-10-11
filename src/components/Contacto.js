import CompForm from "./CompForm"
import React from "react"

const Contacto = () => {
    return (
        <div class="container">
            <div class="contact__wrapper shadow-lg mt-n9">
                <div class="row no-gutters">
                    <div class="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                        <h3 className="fw-normal mb-5 text-white" style={{color: '#4835d4'}}>Contactanos</h3>

                        <ul class="contact-info__list list-style--none position-relative z-index-101">
                            <li class="mb-4 pl-4">
                                <span class="position-absolute"><i class="fas fa-envelope"></i></span> correo@ecommerce.com
                            </li>
                            <li class="mb-4 pl-4">
                                <span class="position-absolute"><i class="fas fa-phone"></i></span> (601)-2414545
                            </li>
                            <li class="mb-4 pl-4">
                                <span class="position-absolute"><i class="fas fa-map-marker-alt"></i></span> Lounge group commerce
                                <p> Calle A # d - c</p>
                                <p> Bogotá, Col.</p>
    
                                <div class="mt-3">
                                    <a href="https://www.google.com/maps" target="_blank" class="text-link link--right-icon text-white">Ubicación <i class="link__icon fa fa-directions"></i></a>
                                </div>
                            </li>
                        </ul>    
                    </div>
                    <CompForm/>
                </div>   
            </div>   
        </div>
        
    )
}

export default Contacto; 