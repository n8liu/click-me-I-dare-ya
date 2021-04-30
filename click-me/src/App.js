import './App.css';
import { useState } from 'react'

function App() {
  const [buttonStyle, setButtonStyle] = useState('button1')
  const [styleState, setStyleState] = useState(false)

  const handleToggle = () => {
    setStyleState(!styleState)
  }

  return (
    <div >
      <button className={ styleState ? 'button1' : 'button2' } onClick={handleToggle}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
