import React, { useState } from 'react'
import Button from './Components/Button/index'
import Calc from './Components/Calc/index'

function App(){

    const [value, setValue] = useState(0)
    const [Var1, setMin] = useState(0)
    const [Var2, setMax] = useState(0)

    const handleClick = () =>{
        setMin(10)
    }

    const handleClickCalc = ({target}) =>{
        const value = target.value
        setValue(Var1 + Var2)
    }

    return(
        // Fragmento
        <>
            <Button>
                onClick={handleClickCalc}
                Botão
            </Button> <br/>

            <div>
                <h1>Valor total: {value}</h1>
                <Calc
                    Var1 = {Var1}
                    Var2 = {Var2}
                    onClick={handleClickCalc}
                />
            </div>
        </>
    )

}

export default App