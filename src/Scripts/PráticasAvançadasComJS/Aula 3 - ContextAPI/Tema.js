import {createContext} from 'react'

export const Tema = {
    
    primario: {
        background: '#000',
        color: '#fff'
    },
    secundario: {
        background: '#fff',
        color: '#000'
    },
}

export const TemaContexto = createContext(Tema.primario)