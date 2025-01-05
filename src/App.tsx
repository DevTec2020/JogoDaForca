import styles from "./App.module.css"
import { useEffect, useState } from "react"
 
import { WORDS, Challenge } from "./utils/words"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/input"
import { Button } from "./components/Button"
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed"

export default function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [challege, setChallenge] = useState<Challenge | null>(null)

  function handleRestartGame(){
    alert("Reiniciando o jogo!")
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)

    setScore(0)
    setLetter("")
    setLettersUsed([])
  }

  function handleConfirm() {
    if(!challege) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra!")
    }

    const value = letter.toLocaleUpperCase()
    const exists = lettersUsed.find((used) => used.value.toLocaleUpperCase() === value)

    if (exists) {
      return alert("Vacê já utilizou a letra "+ value)
    }

    const hits = challege.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length

      const correct = hits > 0
      const currentScore = score + hits

    setLettersUsed((prevStage) => [...prevStage, {value, correct}])
    
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
        <Header current={score} max={10} onRestart={handleRestartGame} />
        
        <Tip tip={challege.tip}/>

        <div className={styles.word}>
          {challege.word.split("").map((letter, index) => { 
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter
              .toUpperCase()
            )


            return (
              <Letter 
                key={index} 
                value={letterUsed?.value} 
                color={letterUsed?.correct ? "correct" : "default"} 
              />
            )  
          })}
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
        
        <LettersUsed data={lettersUsed}/>
      </main>
    </div>
  )
}

