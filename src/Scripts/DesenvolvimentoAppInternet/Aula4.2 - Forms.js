// npm start
// react-scripts start

// ctrl + c --- para fechar

import React from "react"
                // Hook para criação de estados

class Carro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Cor: 'Cinza',
            CentralMultmidia: false,
            VidrosEletricos: 'Não'
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleInputChange(event){
        // caso for checkbox ele pega o checked da caixa, c.c. pega o valor 
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const name = event.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        const {Cor, CentralMultmidia, VidrosEletricos} = this.state
        alert('Cor: ' + Cor + ' Central multmidia? ' + CentralMultmidia + ' Vidros eletricos? ' + VidrosEletricos)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Escolha uma cor:
                        <select name='Cor' value={this.state.Cor} onChange={this.handleInputChange}>
                        <option value = 'Cinza'>Cinza</option>
                        <option value = 'Azul'>Azul</option>
                        <option value = 'Vermelho'>Vermelho</option>
                       </select>
                </label>

                <label>
                    <input type='checkbox' Nome='CentralMultimidia' defaultChecked={this.state.CentralMultmidia} onClick={this.handleInputChange}/>
                    Tem central multimidia?
                </label>

                <label>
                    Tem vidros elétricos?
                    <div>
                        <label>
                            <input type='radio' id='VidrosEletricos' name='VidrosEletricos' value='sim'
                            checked={this.state.VidrosEletricos === 'sim'} onChange={this.handleInputChange} />
                            sim
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type='radio' id='VidrosEletricos' name='VidrosEletricos' value='não'
                            checked={this.state.VidrosEletricos === 'não'} onChange={this.handleInputChange} />
                            não
                        </label>
                    </div>
                </label>

                <input type='submit' value='enviar'/>
            </form>
        )
    }


}
export default Carro