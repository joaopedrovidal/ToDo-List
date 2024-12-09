import styles from './Header.module.css'
import todoLogo from '../assets/logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>               
                <img src={todoLogo} className={styles.img} alt="logotipo todo list" />
                <div className={styles.texto}>
                    <strong><span className={styles.spanBlue}>to</span></strong>
                    <strong><span className={styles.spanPurple}>do</span></strong>
                </div>
            </div>
        </header>
    )
}