import React, { useContext } from 'react'
import { TemaContexto } from './Tema'
import Formulario from './Formulario'

export default function Card(){
    
    const Tema = useContext(TemaContexto)

    const handleClick = () =>{
        Tema.token = true
    }
    return(
        <div>
            <Formulario/>
            <button onClick={handleClick} style={{background: Tema.background, color: Tema.color}}>Botão do card</button>
        </div>
    )

}