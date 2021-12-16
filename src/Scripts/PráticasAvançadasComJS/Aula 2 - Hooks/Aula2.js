import React, { Component, useState } from 'react'
import Plataforma from './Plataforma'

class App extends Component{

    state = { 
        Carregando: false, 
        Ativado: true
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 2000)
    }

    onRemove(){
        this.setState({
            actived: false
        })
    }

    render(){

        const postagem = [{
            titulo: 'xpto',
            descricao: 'foo'
        }]

        return(
            <div>
                <button onclick={this.onRemove}>Remover componente</button>

                {this.state.Ativado &&(
                    <Plataforma postagem={postagem} Carregando={this.state.Carregando}/>
                )}
            </div>
        )
    }
}

export default App