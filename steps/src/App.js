import { useState } from 'react';
import './index.css'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  const handlePrevious = () => {
    if (step >= 2)
      setStep((prevValue) => prevValue - 1)
  }

  const handleNext = () => {
    if (step <= 2)
      setStep((prevValue) => prevValue + 1)
  }

  return (
      <>
        <button
          // onClick={setIsOpen((prevValue) => !prevValue)}
          onClick={() => setIsOpen((prevValue) => !prevValue)}
          className='close'>&times;
        </button>
        {
          isOpen && <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active': ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">Step {step}: {messages[step - 1]}</p>

          <div className="buttons">
            <button 
              onClick={handlePrevious}
              style={{ backgroundColor: '#7950f2', color: '#fff' } }>Previous
            </button>

            <button
              onClick={handleNext}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}>Next        
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default App;
