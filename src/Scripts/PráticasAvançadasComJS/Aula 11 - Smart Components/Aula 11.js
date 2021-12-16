import React from 'react'
import Galeria from './Components/Galeria/index'
import Img1 from './Components/Img/Img1.png'
import Img2 from './Components/Img/Img2.png'

function App (){

    const Fotos =[
        Img1,
        Img2
    ]

    return(
        <div>
            <h2>Galeria</h2>
            <Galeria Fotos = {Fotos} />
        </div>
    )

}

export default App