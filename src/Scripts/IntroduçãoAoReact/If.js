// npm start
// react-scripts start

// ctrl + c --- para fechar

import React from "react"

const BotaoA = <button>Cadastrar</button>
const BotaoB = <button>Histórico</button>

const TemCliente = true

const App = () => {

    const MostrarHistorico = () =>{
        return(
            <div>
                Clique para mostrar o histórico de clientes
                <br />
                {BotaoB}
            </div>
        )
    }

    const AdicionarCliente = () =>{
        return(
            <div>
                Clique para cadastrar algum clientes
                <br/>
                {BotaoA}
            </div>
        )
    }

    console.log('Tem Cliente?', TemCliente)

    const MostrarCliente = () =>{
        if(!TemCliente) return null

        return(
            <div>
                Nome do cliente: Juliano-Hub
                <br/>
            </div>            
        )
    }

    return(
        <div>
            <h1>If e Else</h1>
            
            {/* entre chaves a função para executar o JSX/javascript no html */}
            {TemCliente ? MostrarHistorico() : AdicionarCliente()}

            <div>
                {MostrarCliente()}
            </div>
        </div>
    )
}

export default App;