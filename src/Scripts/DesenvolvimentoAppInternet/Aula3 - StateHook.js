// npm start
// react-scripts start

// ctrl + c --- para fechar

import React, { useState } from "react"
                // Hook para criação de estados

const Lista = () =>{
         // Nome do estado, função setter para modificar o estado
    const [itens, setItens] = useState(['Uva', 'Morango', 'Abacate'])
                              // Definição do estado inicial
    
    const AdicionarItens = (itemNovo) =>{
        setItens([...itens, itemNovo])
        //função para modificar o estado
    }

    const RemoverItens = () =>{
        setItens([...itens.slice(1)])
        //função para modificar o estado
    }

    return(
        <div className='Bloco da lista'>
            <p>Lista de compras</p>
        <ul className='Lista estilizada'>
        
        {/* Map para pegar os itens separados e mostrar na tela, como um vetor */}
            {itens.map(itemIndice => <li>{itemIndice}</li>)}
        </ul>
        <button onClick={() => AdicionarItens('Laranja')}>Adicionar item na lista</button>
        <button onClick={() => RemoverItens()}>Remover item na lista</button>
        </div>
    )


}
export default Lista