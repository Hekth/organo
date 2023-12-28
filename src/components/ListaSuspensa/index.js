import './ListaSuspensa.css';

const ListaSuspensa = ({ nomesDosTimes, label, obrigatorio, valor, aoAlterar }) => {
    return (
        <div className="lista">
            <label>
                { label }
            </label>
            <select onChange={ ({ target }) => aoAlterar(target.value) } value={ valor } required={ obrigatorio }>
                { nomesDosTimes.map((nome) => <option key={ nome }> { nome } </option>) }
            </select>
        </div>
    );
}

export default ListaSuspensa;