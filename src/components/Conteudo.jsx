import styles from "./Conteudo.module.css";
import Clipboard from '../assets/Clipboard.svg'


export function Conteudo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.registro}>
                <div className={styles.criadas}>
                    <p>Tarefas criadas</p>
                    <span className={styles.contador}>2</span>
                </div>
                <div className={styles.concluidas}>
                    <p>Concluídas</p>
                    <span className={styles.contador}>1</span>
                </div>
            </div>
            <div className={styles.aviso}>
                <div className={styles.alinhamento}>
                    <img src={Clipboard} alt="clipboard" className={styles.clipboard} />
                    <strong><span>Você ainda não tem tarefas cadastradas</span></strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
        </div>
    );
}
