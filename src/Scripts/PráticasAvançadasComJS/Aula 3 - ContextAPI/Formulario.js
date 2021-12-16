import React, {useContext} from 'react'
import { TemaContexto } from './Tema'

export default function Formulario (){

    const contexto = useContext(TemaContexto)

    const renderForm = (
        <form>
            <label>Nome:  </label> <input/><br />
            <label>Idade: </label> <input/><br />
            <label>E-mail:</label> <input/><br />
        </form>       
    )

    const renderNotLogged = (
        <h1>
            É necessário fazer o login!
        </h1>
    )
    
    return(
        <div>
            {!contexto.token ? renderNotLogged : renderForm}
        </div>
    )
}
