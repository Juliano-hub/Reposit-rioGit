import {useState} from 'react';
import Button from '../Button/index.js'

const Card = () =>{
                    //setCalculo vem do useState
    const [Calculo, setCalculo] = useState(0)

    function Somar(){
        setCalculo(Calculo + 1)
    }

    function Diminuir(){
        setCalculo(Calculo - 1)
    }

    function Dividir(){
        setCalculo(Calculo / 2)
    }

    function Multiplicar(){
        setCalculo(Calculo * 2)
    }

    function Reset(){
        setCalculo(Calculo * 0)
    }

    return(
        <div className="card">
            <h5 className="card-header">Meu primeiro card</h5>

            <div className="card-body">
                <h5 className="card-title">Título do card</h5>

                <p className="card-text">Aperte os botões para realizar cálculos.</p>

                <div className="Buttons">
                    <Button ParametroClassName="btn btn-dark" ParametroOnClick={Reset}>Resetar</Button> <br/>
                    <Button ParametroClassName="btn btn-success" ParametroOnClick={Somar}>Somar +1</Button>
                    <Button ParametroClassName="btn btn-danger" ParametroOnClick={Diminuir}>Diminuir -1</Button> <br/>
                    <Button ParametroClassName="btn btn-warning" ParametroOnClick={Dividir}>Dividir ÷2</Button>
                    <Button ParametroClassName="btn btn-primary" ParametroOnClick={Multiplicar}>Multiplicar x2</Button>
                </div>

                <p>{Calculo}</p>

            </div>
        </div>

    )
}

export default Card