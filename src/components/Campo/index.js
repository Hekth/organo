import "./Campo.css";

/* as props vem através do parametro da função */
const Campo = ({ type = 'text', label, placeholder, obrigatorio, valor, aoAlterar }) => {
    const aoDigitar = ({ target }) => {
        aoAlterar(target.value);
    }

    return (
        <div className="container-campo">
            <label htmlFor={ label }>
                { label }
            </label>
            <input value={ valor } onChange={ aoDigitar } type={ type } id={ label } placeholder={ placeholder } required={ obrigatorio } />
        </div>
    );
}

export default Campo;