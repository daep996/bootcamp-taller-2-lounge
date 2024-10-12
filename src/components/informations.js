import React from "react"

const Informacion = () => {
const styles = {
    container: {
      width: '800px',
    },
  };

    return (
        <div className="container bg-light border rounded-3 p-4 mx-auto my-4" style={styles.container} >
            <h1>información</h1>
            <p>
                Página en construcción
            </p>
            <h2>Cómo Usarl@</h2>
            <p>
                FakeStoreApi se puede utilizar con cualquier tipo de proyecto de compra que necesite productos, carros y usuarios en JSON formato. puede utilizar ejemplos a continuación para comprobar cómo funciona fakeStoreApi y no dude en disfrutarlo en su impresionante ¡proyectos!
            </p>
        </div>
    )
}

export default Informacion;