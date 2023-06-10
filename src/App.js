import React, { useState } from 'react'
import './App.css'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.toLowerCase().split("").filter(vowel => { // Added .toLowerCase() to include sensitivity for capital vowels
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!

      // Section to process words that begin with a vowel
      // Look at the first letter at eachWord[0] and compare to the letter at vowelsArray[0] to determine whether the first letter is a vowel
      // If the first letter is a vowel, then concat "way" to the end of eachWord

      // Checks to see if eachWord is capitalized, uses a variable that can allow reconstruction after processing the word
      if(eachWord[0] !== eachWord[0].toLowerCase()){
            var capitalLetter = true
      }

      if(eachWord[0].toLowerCase() === vowelsArray[0]){
            eachWord = eachWord.concat("way")
      }

      // Section to process if "qu" is in the first syllable
      // Use conditional statement to confirm if "qu" is in the word
      // Create a substring for the initial syllable
      // Move the syllable from the beginning of the word to the end and concat "ay" 
      
      else if(eachWord.toLowerCase().indexOf("qu") >= 0 && vowelsArray[0] === "u"){
          let vowel = eachWord.toLowerCase().indexOf(vowelsArray[1])  //Location of the first vowel after the "u"
          let syllable = eachWord.substring(0, vowel) //Substring for first syllable
          //console.log("syllable: ", syllable)
          eachWord = eachWord.substring(vowel).concat(syllable, "ay")
      }

      // Section to process words that have y as the only vowel
      // Use conditional statement to confirm that there are no a, e, i, o, u in the word
      // Conditional if "y" is in the word
      // Create a substring for the initial consonants 
      // Move the consonants from the beginning of the word to the end and concat "ay" 

      else if(vowelsArray.length === 0) {
            let yLocation = eachWord.toLowerCase().indexOf("y") //Index location for "y"
            //console.log("y:", yLocation)
            if(yLocation >= 0){ //Confirming there is a "y" in the word
                  let syllable = eachWord.substring(0,yLocation)
                  console.log("syllable: ", syllable)
                  eachWord = eachWord.substring(yLocation).concat(syllable, "ay")
            }
      }

      // Section to process words that start one or more consonants
      // Use conditional statement to confirm that the first vowel is not the first letter
      // Create a substring for the initial consonants 
      // Move the consonants from the beginning of the word to the end and concat "ay" 

      else if(eachWord.toLowerCase().indexOf(vowelsArray[0]) > 0){
        let vowel = eachWord.toLowerCase().indexOf(vowelsArray[0])  // Index for first vowel
        let consonants = eachWord.substring(0, vowel) //substring for initial consonants
        //console.log("syllable: ", consonants)
        eachWord = eachWord.substring(vowel).concat(consonants, "ay")
    }

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      if(capitalLetter){
            eachWord = eachWord.charAt(0).toUpperCase() + eachWord.slice(1).toLowerCase() // Capitalizes the first and only first letter of the word
      }
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <div className="input-section">
            <h4>Enter phrase to be translated:</h4>
            <input
              type="text"
              className="user-input"
              onChange={handleInput}
              value={userInput}
            />
            <br />
            <button onClick={setUpPreventDefault}>Submit</button>
            <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; Alpha 2023 | Coded by: Chris and Mike!</footer>
    </div>
  )
}

export default App