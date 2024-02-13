import { useState, useRef, useEffect } from "react"
import './MainGameBox.css'
import Keyboard from '../MainGameBoxComponents/Keyboard/Keyboard.js'
import EndGameScreen from '../MainGameBoxComponents/EndGameScreen/EndGameScreen.js'
import BackgroundMusic from '../MainGameBoxComponents/BackgroundMusic/BackgroundMusic.js'
import ChanceDisplay from '../MainGameBoxComponents/ChanceDisplay/ChanceDisplay.js'
import HangmanImage from '../MainGameBoxComponents/HangmanImage/HangmanImage.js'
import PasswordDisplay from '../MainGameBoxComponents/PasswordDisplay/PasswordDisplay.js'

export default function MainGameBox({ passwords, setPasswords, container1,choosenCategory, winratio, setWinratio }) {
    const [blankPassword, setBlankPassword] = useState(null)
    const [chances, setChances] = useState(11)
    const choosenPassword = useRef(null)

    useEffect(function () {
        const temp = Math.floor(Math.random() * passwords.length);
        let blankPasswordList = []

        if (choosenPassword.current === null) {
            choosenPassword.current = passwords[temp].split("")
            console.log(passwords[temp])
        }

        for (let i = 0; i < choosenPassword.current.length; i++) {
            blankPasswordList[i] = ""
        }
        setBlankPassword(blankPasswordList)

    }, [])

    return (
        <>
            <div id="body">
                <div className="choosen-category">
                    <span>Kategoria: {choosenCategory}</span>
                    <span>Wins {winratio.you} / Loses {winratio.computer}</span>
                    </div>
                <BackgroundMusic />
                <div id="container">
                    <HangmanImage
                        chances={chances}
                    />
                    <ChanceDisplay
                        chances={chances}
                    />
                    <PasswordDisplay
                        passwords={passwords}
                        setBlankPassword={setBlankPassword}
                        blankPassword={blankPassword}
                    />
                    <Keyboard
                        choosenPassword={choosenPassword}
                        blankPassword={blankPassword}
                        setBlankPassword={setBlankPassword}
                        setChances={setChances}
                    />
                </div>
                <EndGameScreen
                    container1={container1}
                    setPasswords={setPasswords}
                    blankPassword={blankPassword}
                    chances={chances}
                    setWinratio={setWinratio}
                    winratio={winratio}
                />
            </div>
        </>

    )
}