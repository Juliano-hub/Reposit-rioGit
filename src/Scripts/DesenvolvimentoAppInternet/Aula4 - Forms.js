// npm start
// react-scripts start

// ctrl + c --- para fechar

import React from "react"
                // Hook para criação de estados

class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state = {Nome: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event){
        this.setState({Nome: event.target.Nome})
    }

    handleSubmit(event){
        alert('O nome enviado foi: ' + this.state.Nome)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Digite seu nome:
                <input type='text' Nome={this.state.Nome} onChange={this.handleChange} />
                </label>
                <input type='submit' Nome='submit' />
            </form>
        )
    }


}
export default Formulario