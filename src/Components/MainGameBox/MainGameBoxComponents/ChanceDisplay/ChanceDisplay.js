import { useEffect, useRef } from "react"
import './ChanceDisplay.css'

export default function ChanceDisplay({chances}) {
    const displayChances = useRef(null)

    useEffect(function () {

        if (chances >= 2 && chances <= 5) {
            displayChances.current.style.color = "orange"
        } else if (chances === 1) {
            displayChances.current.style.color = "red"
        }
    }, [chances])

    


    return (
        <>
            <div id="header" ref={displayChances}>
                {chances < 2 ? "Ostatnia szansa !" : `Liczba szans : ${chances}`}
            </div>
        </>
    )
}