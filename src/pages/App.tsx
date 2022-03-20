import React, { useState } from 'react';
import Botao from '../components/Botao/Index'
import Cronometro from '../components/Cronometro';
import Form from '../components/Formulario/Index';
import List from '../components/Lista/Index';
import ITarefa from '../interfaces/TarefaInterface';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
