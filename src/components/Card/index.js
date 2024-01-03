import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import './Card.css';

const Card = ({ colaborador, cor, aoDeletar, id, favorita }) => {
    const aoFavoritar = () => {
        favorita(id);
    }

    const propsFavorita = {
        onClick: () => aoFavoritar(),
        size: 25,
        class: 'icone-coracao'
    };
    return (
        <div className='colaborador'>
            <button className='deletar' onClick={() => aoDeletar(id) }>X</button>
            <div className='cabecalho' style={{ backgroundColor: cor }}>
                <img src={ colaborador.imagem } alt='foto do colaborador'/>
            </div>
            <div className='rodape'>
                <h4>
                    { colaborador.nome }
                </h4>
                <h5>
                    { colaborador.cargo }
                </h5>
                {colaborador.favorito ? <GoHeartFill { ...propsFavorita } color="red"/> : <GoHeart { ...propsFavorita }/>}
            </div>
        </div>

        
    );
}

export default Card;