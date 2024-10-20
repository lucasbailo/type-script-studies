import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import './style.scss'
import Crono from '../components/Crono';
import { ITasks } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [selecionado, setSelecionado] = useState<ITasks>();

  function selecionaTarefa(tarefaSelecionada: ITasks) {
    setSelecionado(tarefaSelecionada);
    setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completo: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className="AppStyle">
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selecionaTarefa={selecionaTarefa}
      />
      <Crono 
      finalizarTarefa={finalizarTarefa}
      selecionado={selecionado}
      />
    </div>
  );
}

export default App;
