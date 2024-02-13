import { useState, useRef, useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js'
import MainGameBox from './Components/MainGameBox/MainGameBox/MainGameBox.js';

function App() {
  const [passwords, setPasswords] = useState(null)
  const container1 = useRef(null)
  const [choosenCategory, setChoosenCategory] = useState(null)
  const [winratio, setWinratio] = useState(JSON.parse(localStorage.getItem("winratio")))

  useEffect(function () {
    if (winratio === null) {
      setWinratio({ you: 0, computer: 0 })
    } else {
      localStorage.setItem("winratio", JSON.stringify(winratio))
    }
  }, [JSON.stringify(winratio)])

  return (
    <>
      <div id="container1" ref={container1} >
        <HomePage
          setPasswords={setPasswords}
          container1={container1}
          setChoosenCategory={setChoosenCategory}
        />
      </div>
      {passwords === null ? null :
        <MainGameBox
          passwords={passwords}
          setPasswords={setPasswords}
          container1={container1}
          choosenCategory={choosenCategory}
          winratio={winratio}
          setWinratio={setWinratio}
        />}
    </>
  );
}

export default App;
