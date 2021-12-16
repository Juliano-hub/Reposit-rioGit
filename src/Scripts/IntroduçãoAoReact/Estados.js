// npm start
// react-scripts start

// ctrl + c --- para fechar

import React, {Component} from "react"

class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            // estado inicial uva
            Fruta: 'uva'
        }
    }

    // após 4 segundos muda de estado para laranja, independente do seu estado anterior
    componentDidMount(){
        window.setTimeout(() => {
            this.setState({
                Fruta: 'laranja'
            })
        }, 4000)
    }

    // quando apertar no botão seu estado vai para maça
    alterarFruta = () =>{
        this.setState({
            Fruta: 'maça'
        });
    }

    render(){
        const{Fruta} = this.state
        return(
            <div>
                <button onClick={() => this.alterarFruta()}><h1>{Fruta}</h1></button>
            </div>
        )
    }

}
//entre chaves a função para executar o JSX/javascript no html

export default App;