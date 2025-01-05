import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"

export default function App() {
  function handleRestartGame(){
    alert("Reiniciando o jogo!")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="Uma das linguagens de programação mais utilizadas"/>

        <div className={styles.word}>
          <Letter value="L"/>
          <Letter value="E"/>
          <Letter value="T"/>
          <Letter value="R"/>
          <Letter value="A"/>
          <Letter value="S"/>
        </div>
      </main>
    </div>
  )
}

