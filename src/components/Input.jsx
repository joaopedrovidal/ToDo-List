import styles from './Input.module.css'
import adicao from '../assets/adicao.svg'
import { useState } from 'react'


export function Input({ onAdicionartarefa }){
    const [novaTarefa, setNovaTarefa] = useState("");

        function handleSubmit(event){
            event.preventDefault();
            if(novaTarefa.trim() !== ""){
                onAdicionartarefa(novaTarefa);
                setNovaTarefa("");
            }
        }

    return(
            <form className={styles.tarefa} onSubmit={handleSubmit}>
                <input 
                    className={styles.input} 
                    placeholder='Adicione uma nova tarefa'
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <div>
                    <button type="submit" className={styles.button}>
                        Criar <img src={adicao} alt="" />
                    </button>
                </div>
            </form>
    )
}