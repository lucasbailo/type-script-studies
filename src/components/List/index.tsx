import style from './List.module.scss'
import Item from "./Item";
import { ITasks } from '../../types/task';


function List ({tasks}: {tasks: ITasks[]}) {    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item
                    key={index}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default List;