import { useState } from "react"
import './Keyboard.css'

const firstKeyboardRowArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
const secoundKeyboardRowArray = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
const thirdKeyboardRowArray = ["z", "x", "c", "v", "b", "n", "m"]

export default function Keyboard({ choosenPassword, blankPassword, setBlankPassword, setChances }) {
    const [clickedButtons, setClickedButtons] = useState([])

    function handleCheck(event) {
        if (!clickedButtons.includes(event.target.textContent)) {
            if (choosenPassword.current.includes(event.target.textContent)) {
                event.target.className = "button-green"
                for (let i = 0; i < choosenPassword.current.length; i++) {
                    if (event.target.textContent === choosenPassword.current[i]) {
                        setBlankPassword(prevState => {
                            let temp = [...prevState];
                            temp[i] = event.target.textContent;
                            return temp;
                        });
                        console.log("znalazłem ", event.target.textContent)
                    }
                }
            } else {
                event.target.className = "button-red"
                setChances(prevChances => prevChances - 1)
                console.log("not include")
            }
            setClickedButtons([...clickedButtons, event.target.textContent])
        }
    }

    return (
        <>
            <div id="keyboard1">
                {firstKeyboardRowArray.map((item, index) => {
                    return (
                        <div key={"1keyboard" + item} onClick={handleCheck} className="button">{item}</div>
                    )
                })}
            </div>
            <div id="keyboard2">
                {secoundKeyboardRowArray.map((item, index) => {
                    return (
                        <div key={"2keyboard" + item} onClick={handleCheck} className="button">{item}</div>
                    )
                })}
            </div>
            <div id="keyboard3">
                {thirdKeyboardRowArray.map((item, index) => {
                    return (
                        <div key={"3keyboard" + item} onClick={handleCheck} className="button">{item}</div>
                    )
                })}
            </div>
        </>
    )
}