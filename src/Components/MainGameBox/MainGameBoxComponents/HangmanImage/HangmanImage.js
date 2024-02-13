import { useEffect, useState } from "react"
import hg0img from '../../../../assets/w0.png'
import hg1img from '../../../../assets/w1.png'
import hg2img from '../../../../assets/w2.png'
import hg3img from '../../../../assets/w3.png'
import hg4img from '../../../../assets/w4.png'
import hg5img from '../../../../assets/w5.png'
import hg6img from '../../../../assets/w6.png'
import hg7img from '../../../../assets/w7.png'
import hg8img from '../../../../assets/w8.png'
import hg9img from '../../../../assets/w9.png'
import hg10img from '../../../../assets/w10.png'
import hg11img from '../../../../assets/w11.png'



const listOfHangmansPictures = [hg11img, hg10img, hg9img, hg8img, hg7img, hg6img, hg5img, hg4img, hg3img, hg2img, hg1img, hg0img]


export default function HangmanImage({chances}) {
    const [actualHangmanPicture, setActualHangmanPicture] = useState(hg0img)

    useEffect(function () {
        setActualHangmanPicture(listOfHangmansPictures[chances])
    }, [chances])
    return (
        <>
            <div id="image"><img src={actualHangmanPicture} id="image-image" alt="hangman"></img></div>
        </>
    )
}