import { languages } from './data/languages.js'
import { useState } from 'react'


function App() {
  const [currentWord, setCurrentWord] =useState('react')
  const [guessedLetters, setGuessedLetters] = useState([])
  alert(guessedLetters)

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetter(letter){
    setGuessedLetters(prevLetters => prevLetters.includes(letter) ?
     prevLetters : [...prevLetters, letter])
  }

  const languageElements = languages.map(lang => {
    const styles = {
        backgroundColor: lang.backgroundColor,
        color: lang.color
      }
      return (
        <span className ="chip" style={styles} key={lang.name}>{lang.name}</span>
      )
    })


      const letterElements = currentWord.split('').map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
      ))

      const keyboardElements = alphabet.split('').map(letter => (
        <button key={letter} onClick={() => addGuessedLetter(letter)}>{letter.toUpperCase()}</button>
      ))

      console.log(keyboardElements)

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well Done</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className='word'>{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      <button className="new-game">New Game</button>
    </main>
  )
}

export default App
