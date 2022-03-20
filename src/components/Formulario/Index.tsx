import React from 'react';
import ITarefa from '../../interfaces/TarefaInterface';
import Botao from '../Botao/Index';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        estudo: "",
        tempo: "00:00"
    }

    AdicionarEstudo(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            estudo: "",
            tempo: "00:00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.AdicionarEstudo.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name='tarefa' 
                        id='tarefa' 
                        placeholder='O que você quer estudar?' 
                        required 
                        value={this.state.estudo}
                        onChange={evt => this.setState({
                            ...this.state, estudo: evt.target.value
                        })} />
                </div>
    
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name='tempo'
                        id='tempo'
                        min="00:00:00"
                        value={this.state.tempo} 
                        onChange={evt => this.setState({
                            ...this.state, tempo: evt.target.value
                        })} />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Form;