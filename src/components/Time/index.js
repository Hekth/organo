import hexToRgba from 'hex-to-rgba';
import Card from '../Card';
import './Time.css';

const Time = ({ titulo, cor, colaboradores, aoDeletar, mudaCorDoTime, id, favorita }) => {
    return (
        colaboradores.length > 0 && (
            <section className="time" style={{ backgroundColor: hexToRgba(cor, 0.6) }}>
                <input type='color' value={cor} className='color' onChange={({ target }) => mudaCorDoTime(id, target.value)} />
                <h2>
                    { titulo }
                </h2>
                <hr style={{ borderColor: cor }} />
                <div className='colaboradores'>
                    { colaboradores.map((colaborador, index) => 
                        <Card 
                            colaborador={ colaborador } 
                            key={colaborador.nome + index} 
                            cor={ cor }
                            id={ colaborador.id }
                            aoDeletar={ aoDeletar }
                            favorita={ (id) => favorita(id) }
                        />
                    )}
                </div>
            </section>
        )
    );
}

export default Time;