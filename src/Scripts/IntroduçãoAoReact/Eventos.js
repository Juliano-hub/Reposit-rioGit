import React from "react"

const MostrarEvento = (e) =>{
    console.log('Evento Clicado')
    console.log(e)
}

const Button = <button onClick={MostrarEvento}>Mostrar Evento</button>

const App = () =>{

    const handleChange = (e) =>{
        const {value} = e.target
        console.log(value)
    }

    return(
        <div>
            <h1>Eventos</h1>
            <h2>Mostra as mudanças que estão acontecendo no console</h2>
            <input onChange={handleChange} />
            {Button}
            
        </div>

    )
}
export default App;