import React from "react"

const styles = {
    container: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      width: '300px',
      textAlign: 'left',
      backgroundColor: '#f9f9f9',
    },
  };
  
const informacion = () => {

    return (
        <div style={styles.container}>
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

export default informacion;