import React, { useState, useEffect, memo } from 'react'

const areEqual = (prevProps, nextProps) =>{
    // se for igual quer dizer que não teve atualização, não renderiza
    return prevProps.loading !== nextProps.loading
}

function Plataforma(props){
    const {loading} = props
    const[plataformaUseEffect, setPlataforma] = useState()

    // verifica caso tenha renderizado o componente, estrutura estiver pronta 
    // componentDidMount
    useEffect(() =>{
        const {postagem, loading} = this.props
        // recebe pelo parâmetro a postagem
        console.log('componentDidMount', postagem)
        console.log('componentDidMount', loading)
    }, [])

    // assim que loading for alterado entra aqui
    //  componentDidUpdate
    useEffect(() =>{
            console.log('componentDidUpdate', loading)
        }, [loading])

    
    // componentWillUnmount 
    useEffect(() =>{
        // separar o componentWillUnmount sendo o único a usar return
        return() =>{
            console.log('componentWillUnmount, componente desmontado')
        }
    }, [])

    // renderizar novamente
    //shouldComponentUpdate 

    const handleClick = () =>{
        setPlataforma('Renderizado')
    }

    console.log('render', plataformaUseEffect)
    return(
        <div>
            Teste
            <button onClick={handleClick}>Renderizar</button>
        </div>
        )

}

export default memo(Plataforma, areEqual)