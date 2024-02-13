export default function HomePage({ setPasswords, container1, setChoosenCategory }) {

    const listOFAll = [
        ["agata", "agnieszka", "adnrzej", "karolina", "kinga", "konrad", "kuba"],
        ["antylopa", "aligator", "pies", "kot", "lew", "tygrys", "gepard"],
        ["lekarz", "architekt", "kucharz", "kierowca", "programista", "barman"],
        ["jaguar", "skoda", "audi", "bmw", "opel", "ferrarri", "bugatti"],
        ["bloodborne", "uncharted", "doom", "infamous", "diablo"],
        ["javascript", "python", "react", "mysql", "mongodb", "jquery", "chatgpt"]
    ]
    const chooseCategory1 = ["Imiona", "Zwierzęta", "Zawody"]
    const chooseCategory2 = ["Samochody", "Gry", "Technologie"]

    function handleClick(event, index, number) {
        setChoosenCategory(event.target.textContent)
        if(number === 1){
            setPasswords(listOFAll[index])
        } else {
            setPasswords(listOFAll[index + 3])
        }
        container1.current.style.marginTop = "-100vh"
        container1.current.style.transition = "all 0.5s linear"
    }
    return (
        <>
            <div id="article1"><span>Wybierz</span> <span>Kategorię</span></div>
            <div className="ancor1-box">
                <div className="first-ancor1-box">
                    {chooseCategory1.map((item, index) => {
                        return (
                            <div className='ancor1' onClick={(event) => { handleClick(event,index, 1) }} key={"categories" + index}><div>{item}</div></div>
                        )
                    })}
                </div>
                <div className="secound-ancor1-box">
                    {chooseCategory2.map((item, index) => {
                        return (
                            <div className='ancor1' onClick={(event) => { handleClick(event,index, 2) }} key={"categories" + index}><div>{item}</div></div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}