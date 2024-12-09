import styles from './ContadorDeTarefas.module.css'
import lista from '../assets/Clipboard.svg'

export function ContadorDeTarefas(){
    return(
        <div className={styles.pai}>
        <div className={styles.filhoColunaUm}>
            <div>
                <span className={styles.criadas}>Tarefas criadas</span>
            </div>
            <div>
                <span className={styles.concluidas}>Concluídas</span>
            </div>
            <div className={styles.filhoColunaDois}>
                <img src={lista} className={styles.lista} alt="imagem com indicando uma lista" />
                <div className={styles.texto}>
                    <strong><span>Você ainda não tem tarefas cadastradas</span></strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
        </div>
        </div>
    )
}