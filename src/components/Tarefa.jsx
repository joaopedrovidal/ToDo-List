import styles from './Tarefa.module.css'
import adicao from '../assets/adicao.svg'


export function Tarefa(){
    return(
        <div className={styles.tarefa}>
            <input className={styles.input} placeholder='Adicione uma nova tarefa'/>
            <div>
                <button className={styles.button}>Criar
                    <img src={adicao} alt="" />
                </button>

            </div>
        </div>
    )
}