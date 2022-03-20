import ITarefa from '../../../interfaces/TarefaInterface'
import style from '../Lista.module.scss'

export default function Item({estudo, tempo, selecionado, completado, id}: ITarefa) {
    
    console.log({estudo, tempo, selecionado, completado, id});
    
    return (
        <li className={style.item}>
            <h3>{estudo}</h3>
            <span>{tempo}</span>
        </li>
    )
}