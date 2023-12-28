import './Botao.css';

const Botao = ({ children }) => {
    return <button className='botao' type='submit'> { children } </button>
}

export default Botao;