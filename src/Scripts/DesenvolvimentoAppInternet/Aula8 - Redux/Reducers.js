import {Incremento, Decremento} from './Actions'

// Mesmo nome de var no Contador.jsx na linha 5
const EstadoInicial = {Contagem: 0}

// Reducer verifica qual action é disparada
export default function Reducer(Estado = EstadoInicial, action){
    console.log(EstadoInicial)
    console.log(action)
    console.log(Estado.Contagem)
    
    switch(action.type){
        case Incremento:
            return{
                Contagem: Estado.Contagem + 1
            }

        case Decremento:
            return{
                Contagem: Estado.Contagem - 1
            }

        default:
            return {
                Contagem: Estado.Contagem
            }
    }
}