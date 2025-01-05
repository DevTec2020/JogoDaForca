import styles from "./App.module.css"
import { useEffect, useState } from "react"
 
import { WORDS, Challenge } from "./utils/words"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/input"
import { Button } from "./components/Button"
import { LetterUsed } from "./components/LettersUsed"

export default function App() {
  const [attempts, setAttempt] = useState(0)
  const [letter, setLetter] = useState("")
  const [challege, setChallenge] = useState<Challenge | null>(null)

  function handleRestartGame(){
    alert("Reiniciando o jogo!")
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)

    setAttempt(0)
    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, [])

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="Uma das linguagens de programação mais utilizadas"/>

        <div className={styles.word}>
          <Letter value="L"/>
          <Letter value="E"/>
          <Letter value="T"/>
          <Letter value="R"/>
          <Letter value="A"/>
          <Letter value="S"/>
        </div>

        <h4>Palpite</h4>
        
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirmar" />
        </div>
        
        <LetterUsed />
      </main>
    </div>
  )
}

