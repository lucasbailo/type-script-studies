import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { ITasks } from "../../types/task";
import { v4 as uuidv4 } from 'uuid'

interface Props {
    setTasks:React.Dispatch<React.SetStateAction<ITasks[]>>
}

export default function Form ({setTasks} : Props) {
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completo: false,
                    id: uuidv4()
                }
            ]
        )
        setTarefa("")
        setTempo("00:00")
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        value={tarefa}
                        onChange={e => setTarefa(e.target.value)}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={tempo}
                        onChange={e => setTempo(e.target.value)}
                        required
                    />
                </div>
                <Button 
                    type="submit" 
                >
                    Adicionar
                </Button>
            </form>
        )
}