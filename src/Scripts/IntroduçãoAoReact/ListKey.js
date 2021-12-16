import React from "react"

const ListaClientes = [
    {
        id: 1,
        nome: 'AVA',
        idade: ['19']
        // idade tá desse jeito para poder usar o map na LINHA 48
    },
    {
        id: 2,
        nome: 'AVE',
        idade: ['20']
    },
    {        
        id: 3,
        nome: 'AVI',
        idade: ['21']
    },
    {
        id: 4,
        nome: 'AVO',
        idade: ['22']
    }, 
    {
        id: 5,
        nome: 'AVU',
        idade: ['23']
    }
]


const App = () =>{

    const handleClick = (id, e) =>{
        console.log('Deletar cliente')
        alert(`ID do cliente: ${id}`)
    }

    // Renderizar e retornar a lista
    const RenderizarClientes = (Cliente, Index) =>{
        // {`Clientes-${Cliente.id}`}, as chaves devem ser únicas

        return(
        <div>      
            {/* passar variáveis para os manipuladores de eventos */}                                                                     
            <li chave={`Clientes-${Cliente.id}`}>{Cliente.nome} <button onClick={(e) => handleClick(Cliente.id, e)}>Deletar cliente</button></li>
            
            {Cliente.idade.map(RenderizarIdades)}
        </div>
        )

    }

    // Renderizar e retornar a lista somente das idades
    const RenderizarIdades = (Idade, Index) =>{
        return(
        <li chave={`Idade-${Index}`}>{Idade}</li>
                //chaves devem ser únicas
        )
    }


    return(
        <div>
            <h1>Lista e chaves</h1>

            <div>
            {ListaClientes.map(RenderizarClientes)}
            </div>
            
        </div>

    )
}
export default App;