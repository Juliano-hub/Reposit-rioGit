import React from 'react'
import Shop from './Shop'

function App(){

    const handleClick = () => {
        console.log('Iniciando banho')
    }

    return(
        <Shop
            // todos os parametros que o Shop.js recebe na linha 7
            Cachorro = {15}
            ClientesNome = 'ABC'
            onClick = {handleClick}
            Status = 'Em andamento'
        />
    )
}

export default App