import { Conteudo } from './components/Conteudo'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css'
import './global.css'


function App() {
  return (
    <div>
        <Header />
      <body>
        <main>
          <Input />
          <div className={styles.caixaCentral}>
            <Conteudo />
          </div>
        </main>
      </body>
    </div>
  )
}

export default App
