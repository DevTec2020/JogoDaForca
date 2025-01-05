import styles from "./App.module.css"
import { useEffect, useState } from "react"
 
import { WORDS, Challenge } from "./utils/words"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/input"
import { Button } from "./components/Button"
import { LetterUsed, LettersUsedProps } from "./components/LettersUsed"

export default function App() {
  const [letter, setLetter] = useState("")
  const [attempts, setAttempt] = useState(0)
  const [letterUsed, setLetterUsed] = useState<LettersUsedProps[]>([])
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

  function handleConfirm() {
    if(!challege) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra!")
    }

    const value = letter.toLocaleUpperCase()
    const exists = letterUsed.find((used) => used.value.toLocaleUpperCase() === value)

    if (exists) {
      return alert("Vacê já utilizou a letra "+ value)
    }

    setLetterUsed((prevStage) => [...prevStage, {value, correct: false}])
    
    setLetter("")
  
  }

  useEffect(() => {
    startGame()
  }, [])

  if(!challege){
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="Uma das linguagens de programação mais utilizadas"/>

        <div className={styles.word}>
          {challege.word.split("").map(() => (
              <Letter value=""/>
          ))}
        </div>

        <h4>Palpite</h4>
        
        <div className={styles.guess}>
          <Input 
            autoFocus 
            maxLength={1} 
            placeholder="?" 
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm}/>
        </div>
        
        <LetterUsed data={letterUsed}/>
      </main>
    </div>
  )
}

