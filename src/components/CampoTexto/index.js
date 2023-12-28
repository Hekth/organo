import "./CampoTexto.css";

/* as props vem através do parametro da função */
const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterar }) => {
    const aoDigitar = ({ target }) => {
        aoAlterar(target.value);
    }

    return (
        <div className="container-campo">
            <label htmlFor={ label }>
                { label }
            </label>
            <input value={ valor } onChange={ aoDigitar } type="text" id={ label } placeholder={ placeholder } required={ obrigatorio } />
        </div>
    );
}

export default CampoTexto;