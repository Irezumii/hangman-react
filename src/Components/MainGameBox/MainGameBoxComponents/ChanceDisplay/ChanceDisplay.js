import { useEffect, useRef } from "react"

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
                {chances < 2 ? "Pozostała ostatnia Próba" : `Pozostałych Prób : ${chances}`}
            </div>
        </>
    )
}