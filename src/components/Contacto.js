import CompForm from "./CompForm"
import React from "react"
import Menu from "./Menu"
/*import CompFormConf from "./CompFormConf"*/

const Contacto = () => {
    return (
        <div class="container">
            <div class="contact__wrapper shadow-lg mt-n9">
                <div class="row no-gutters">
                    <div class="col-lg-13 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                        <h1 className="fw-normal mb-5 text-black" >Contactanos</h1>
                        <CompForm/>
                        
                    </div>
                    
                        
                </div>
                  
            </div>   
        </div>
        
    )
}

export default Contacto; 