import React, { Component } from 'react'

class Plataforma extends Component{

    // verifica caso tenha renderizado o componente, estrutura estiver pronta 
    componentDidMount(){
        const {postagem, loading} = this.props
        // recebe pelo parâmetro a postagem
        console.log('componentDidMount', postagem)
        console.log('componentDidMount', loading)
    }

    componentDidUpdate(prevProps){
        const {Carregando} = this.props
        if(this.props.Carregando !== prevProps.Carregando)
            console.log('componentDidUpdate', Carregando)
    }

    componentWillUnmount(){
            console.log('componentWillUnmount, componente desmontado')
    }

    // renderizar novamente
    shouldComponentUpdate(nextProps, nextState){
        return this.state.App !== nextState.App
        // se for igual quer dizer que não teve atualização, não renderiza
    }

    AppRenderizar = () =>{
        this.setState({
            App: true
        })
    }

    render(){
        const{postagem} = this.postagem
        console.log('render', postagem)
        return(
            <div>
                Teste
                <button onClick={this.AppRenderizar}>Renderizar</button>
            </div>
        )
    }
}

export default Plataforma