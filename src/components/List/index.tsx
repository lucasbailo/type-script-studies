import style from './List.module.scss'
import Item from "./Item";
import { ITasks } from '../../types/task';

interface Props {
    tasks: ITasks[],
    selecionaTarefa: (tarefaSelecionada: ITasks) => void
}

function List ({tasks, selecionaTarefa}: Props) {    
    return (
        <aside className={style.listaTarefas}>
            <h2>Escolha um card e inicie a tarefa:</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={task.id}
                            {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default List;