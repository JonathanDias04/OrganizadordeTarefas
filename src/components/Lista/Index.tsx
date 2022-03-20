import ITarefa from '../../interfaces/TarefaInterface';
import Item from './Item/index';
import style from './Lista.module.scss';

function Lista({ tarefas } : {tarefas: Array<ITarefa>}) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map((item, index) => (
                        <Item 
                            key={index}
                            estudo={item.estudo} 
                            tempo={item.tempo} 
                            selecionado={item.selecionado}
                            completado={item.completado}
                            id={item.id}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default Lista;