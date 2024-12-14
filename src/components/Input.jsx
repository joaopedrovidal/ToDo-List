import styles from './Input.module.css'
import adicao from '../assets/adicao.svg'
import { useState } from 'react'


export function Input(){

    return(
            <form className={styles.tarefa}>
                <input className={styles.input} placeholder='Adicione uma nova tarefa'/>
                <div>
                    <button className={styles.button}>Criar
                        <img src={adicao} alt="" />
                    </button>
                </div>
            </form>
    )
}