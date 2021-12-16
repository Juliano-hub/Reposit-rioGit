const Button = ({children, ParametroClassName, ParametroOnClick}) =>{
    return(

        <button type="button" className= {ParametroClassName}  onClick={ParametroOnClick}>{children}</button>
    )
}

export default Button