import React from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { ITasks } from "../../types/task";

class Form extends React.Component<{
    setTasks:React.Dispatch<React.SetStateAction<ITasks[]>>
}> {

    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTasks(oldTasks => [...oldTasks, {...this.state}])  
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        value={this.state.tarefa}
                        onChange={e => this.setState({ ...this.state, tarefa: e.target.value})}
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
                        value={this.state.tempo}
                        onChange={e => this.setState({ ...this.state, tempo: e.target.value })}
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
}

export default Form;