import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import './style.scss'
import Crono from '../components/Crono';
import { ITasks } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])

  return (
    <div className="AppStyle">
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Crono />
    </div>
  );
}

export default App;
