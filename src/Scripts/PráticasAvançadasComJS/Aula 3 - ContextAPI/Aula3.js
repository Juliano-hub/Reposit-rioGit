import React, {useState, useEffect } from 'react'
import {TemaContexto, Tema} from './Tema'
import Card from './Card'
function App(){
    
    const [token, setToken] = useState()

    useEffect(() =>{
        setTimeout(() => {
            setToken('')
        }, 2000)
    }, [setToken])

    return(
        <TemaContexto.Provider value={{...Tema.primario, token}}>
            <Card />
        </TemaContexto.Provider>
    )
}

export default App