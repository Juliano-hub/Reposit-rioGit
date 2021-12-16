// npm start
// react-scripts start

// ctrl + c --- para fechar

import React from "react"
import ReactDOM from "react-dom"

let soma = (a, b) => a + b

function primeiroJSX(){
    return(
        <div>
            Juliano-Hub
        </div>
    )
}

const App = () =>{

    return(
        <div className="App">
            
            {/* entre chaves a função para executar o JSX/javascript no html */}
           {primeiroJSX()}
           <h1>Soma: {soma(10, 20)}</h1>

        </div>
    )

}
        

const rootElement = document.getElementById("root")
// pega a div pelo id do root

ReactDOM.render(<App />, rootElement)

// pelo render ele executa o elemento

export default App;