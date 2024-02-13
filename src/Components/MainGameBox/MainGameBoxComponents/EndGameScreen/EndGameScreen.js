import { useEffect, useRef } from "react"

export default function EndGameScreen({ container1, setPasswords, blankPassword, chances, setWinratio, winratio }) {
    const winLoseElements = useRef({})

    useEffect(function () {
        console.log(blankPassword, "blankpassword")
        if (blankPassword && !blankPassword.includes("")) {
            let temp = winratio
            temp.you++
            setWinratio(temp)
    setTimeout(function () {
        endOfGame("Wygrałeś !", "green")
    }, 300)
}
if (chances <= 0) {
    let temp = winratio
    temp.computer++
    setWinratio(temp)
    setTimeout(function () {
        endOfGame("Przegrałeś !", "red")
    }, 300)
}
    }, [JSON.stringify(blankPassword), chances])


function endOfGame(info, color) {
    const temp = winLoseElements.current
    temp.youLost.textContent = info
    temp.youLost.style.backgroundColor = color
    temp.animationDiv.style.display = "flex"

    setTimeout(function () {
        temp.youLost.style.opacity = "0"
        temp.youLost.style.width = "300px"
        temp.youLost.style.height = "150px"
        temp.youLost.style.fontSize = "10px"
    }, 1000)
    setTimeout(function () {
        temp.youLost.style.display = "none"
        temp.yesOrNo.style.display = "grid"
    }, 1500)
    setTimeout(function () {
        temp.yesOrNo.style.width = "60vw"
        temp.yesOrNo.style.height = "70vh"
        temp.yesOrNo.style.opacity = "1"
        temp.yNIfno.style.fontSize = "40px"
    }, 1700)
    setTimeout(function () {
        temp.yNIfno.style.color = "white"
        temp.animationDiv.style.backgroundColor = "rgba(0, 0, 0, 0.759)"
        temp.youLost.style.transition = "none"
        temp.yesOrNo.style.transition = "none"
    }, 2700)
}

function startNewGame() {
    winLoseElements.current.animationDiv.style.display = "none"
    container1.current.style.marginTop = "0px"
    setTimeout(function () {
        container1.current.style.transition = "none"
        setPasswords(null)
    }, 600)
}

return (
    <>
        <div id="animation-div"
            ref={(element) => { winLoseElements.current.animationDiv = element }} >
            <div className="you-lost-blank"
                ref={(element) => { winLoseElements.current.youLostBlank = element }} >
                <div className="you-lost"
                    ref={(element) => { winLoseElements.current.youLost = element }} ><h1>Przegrałeś !!</h1></div>
                <div id="yes-or-no"
                    ref={(element) => { winLoseElements.current.yesOrNo = element }} >
                    <div id="yn-info"
                        ref={(element) => { winLoseElements.current.yNIfno = element }} >Chcesz zagrać jeszcze raz ?</div>
                    <div id="y-button" className="y-n-button" onClick={startNewGame}
                        ref={(element) => { winLoseElements.current.yButton = element }} >Tak</div>
                    <div id="n-button" className="y-n-button"
                        ref={(element) => { winLoseElements.current.nButton = element }} ><a href="https://www.google.pl/?hl=pl">Nie</a></div>
                </div>
            </div>
        </div>
    </>
)
}