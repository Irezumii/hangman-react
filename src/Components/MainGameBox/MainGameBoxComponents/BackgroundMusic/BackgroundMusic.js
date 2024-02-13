import { useState, useRef } from "react"
import backgroundMp3 from '../../../../assets/background.mp3'
import soundOnImg from '../../../../assets/sound-on.png'
import soundOffImg from '../../../../assets/sound-off.png'


export default function BackgroundMusic() {
    const [voiceImg, setVoiceImg] = useState(soundOffImg)
    const backgroundMusic = useRef(null)



    function handleMute(event) {
        if (event.target.currentSrc.includes("sound-on")) {
            backgroundMusic.current.pause()
            setVoiceImg(soundOffImg)
        } else {
            backgroundMusic.current.play()
            setVoiceImg(soundOnImg)
        }
    }

    return (
        <>
            <audio id="background-music" loop ref={backgroundMusic}>
                <source src={backgroundMp3} type="audio/mpeg"></source>
            </audio>
            <div id="button-play">
                <img id="musicMP3" src={voiceImg} onClick={handleMute} alt="sound on/of"></img>
            </div>
        </>
    )
}