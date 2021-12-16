import React from 'react'
import Prototype from 'prop-types'

function Calc(props){

    const {Var1, Var2, onChange} = props

    return(
        <div>

            Valor menor digitado: {Var1}
            <br/>
            Valor maior digitado: {Var2}
            <br/>
            <input type='number' onChange={onChange}/> 
        </div>
    )
}

Calc.prototype = {
    Min: Prototype.number.isRequired,
    Max: Prototype.number.isRequired,
}

export default Calc