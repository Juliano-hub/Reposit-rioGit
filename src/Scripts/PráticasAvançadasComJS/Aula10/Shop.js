import React from 'react'
import PropTypes from 'prop-types'


function Shop(props){

    const {Cachorro, Gato, Clientes, ClientesNome, onClick, Status} = props

    return(
        <div>
            <h2>Cachorro: {Cachorro}</h2>
            <h3>Gato: {Gato}</h3>
        
            <div>
                Quantidade de clientes: {Clientes}
            </div>

            <div>
                Nome do cliente: {ClientesNome}
            </div>

            <div>
                Status: {Status}
            </div>

            <button onClick={onClick}>Banho</button>
        </div>
    )

}

Shop.defaultProps = {
    Gato: 1,
    Clientes: []
}

// validação de símbolo, checagem
// propTypes deve ser p minúsculo
Shop.propTypes = {
    Cachorro: PropTypes.number.isRequired,
    Gato: PropTypes.number,
    Clientes: PropTypes.array,
    ClientesNome: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    Status: PropTypes.oneOf(['Completo', 'Em andamento'])
}

export default Shop