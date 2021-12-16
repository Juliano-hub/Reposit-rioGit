import React, { memo, useState } from 'react'
import Button from '../Button/index'

function FotosGaleria(props){
    const {Fotos} = props

    const [Galeria, setGaleria] = useState(Fotos)

    const handleRemove = (key) =>{
        const GaleriaAux = Galeria.filter((imagem, index) => index !== key)
        setGaleria(GaleriaAux)
    }

    const Renderizar = (imagem, key) =>{
        return (
            <div>
                <img src={imagem}/>
                <Button onClick = {() => handleRemove(key)}>
                    Remover Foto {key}
                </Button>
            </div>
        )
    }

    return(
        <div>
            {Galeria.map(Renderizar)}
        </div>

    )
}

export default memo(FotosGaleria)