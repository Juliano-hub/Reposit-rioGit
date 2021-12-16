import React from "react";
import { connect } from 'react-redux'

class Contador extends React.Component{
    state = {Contagem: 1}
    
    Incremento = () =>{
        this.props.dispatch({type: 'Incremento'})
        console.log(this.state.Contagem)
    }

    Decremento = () =>{
        this.props.dispatch({type: 'Decremento'})
        console.log(this.state.Contagem)
    }

    render(){
        return(
            <div>
                <h3>Contador</h3>
                <div>
                    <button onClick={this.Decremento}>Decrementar</button>
                    <span>{this.props.Contagem}</span>
                    <button onClick={this.Incremento}>Incrementar</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        Contagem: state.Contagem
    }
}

export default connect(mapStateToProps)(Contador)