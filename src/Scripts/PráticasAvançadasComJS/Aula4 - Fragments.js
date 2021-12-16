import React, {Fragment} from 'react'

const store = ['', '', '']

function Coluna(){
    return(
        <tr>
            <td>Caixa</td>
            <td>Mesa</td>
        </tr>
    )
}

function App(){
    
    const renderizarColuna = (elemento, key) =>{
        <Fragment key={`coluna- ${key}`}>
            <Coluna/>
        </Fragment>
    }

    return(
        <table>
            {store.map(renderizarColuna)}
        </table>
    )
}

export default App