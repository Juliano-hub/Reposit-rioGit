import React, {useRef} from 'react'


function App(){
    const inputRef = useRef()

    const handleClick = () =>{
        inputRef.current.focus()
        console.log('Atual inputref: ', inputRef.current)
    }

    return(
        <div>
            Foco: <input ref = {inputRef}/> <br/> <br/>
            <button onClick={handleClick}>Focar</button>
        </div>
    )
}

export default App