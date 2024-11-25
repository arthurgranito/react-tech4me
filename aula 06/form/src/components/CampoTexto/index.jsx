const CampoTexto = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className="campoTexto">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder} onChange={aoDigitado} value={props.valor}/>
        </div>
    )
}

export default CampoTexto;