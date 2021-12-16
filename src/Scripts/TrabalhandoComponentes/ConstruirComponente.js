// npm start
// react-scripts start

// ctrl + c --- para fechar
import React from "react"

import Item from './Components/Item/index.js'
import Card from './Components/Card/index.js'

const App = () =>{

    return(
        <div>
            <h1>Construindo um componente</h1>

            {/* no Item ele passa só os filhos, que no caso são os 3 componentes */}
            <div className="Lista/Grupo">
                <Item>Componente 1</Item>   
                <Item>Componente 2</Item>  
                <Item>Componente 3</Item>  
            </div> <br/>

            <h1>Componente do card</h1>
            <div className="Card">
                <Card/>
            </div>

        </div>
    )
}
export default App;


//export default function App(){
//    return(
//        <div>
//            <h1>Hello World</h1>
//        </div>
//    )
//}