import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Bleet from './sfx/sheep.mp3';
import Bite from './sfx/bite.mp3';
import Click from './sfx/click.mp3';

const Tutorial = () => {

  const sfx = {
    bleet: new Audio(Bleet),
    bite: new Audio(Bite),
    click: new Audio(Click),
  };
  const navigate = useNavigate();

  const play = () => {
    navigate('/play');
  }

  const updateStep = () => {
    setStep((prev) => {
      if (prev === 1) { sfx.bleet.play(); }
      if (prev === 4) { sfx.bite.play(); }
      if (prev + 1 < 7) {
        sfx.click.play();
        return prev + 1;
      } else {
        return 6;
      }
    })
  }


  const hasTouch = ('ontouchstart' in document.documentElement);
  const [step, setStep] = useState(1);

  return (
    <div className="game splash info" onClick={updateStep}>
      <Link className="skip" to="/play">Skip &gt;</Link>
      <h2 style={{overflow: 'auto'}}>How To Play</h2>

      <div className={`step step1 ${step !== 1 ? 'hidden' : ''}`}>
        <p>Sheep is hungry!</p>
        <div className="sheep" style={{left: '140px'}}></div>
      </div>

      <div className={`step step2 ${step !== 2 ? 'hidden' : ''}`}>
        <p>{hasTouch ? 'Tap' : 'Click'} to move</p>
        <div className="sheep flip" style={{left: '140px', transform: 'scale(1,-1)' }}></div>
      </div>

      <div className={`step step3 ${step !== 3 ? 'hidden' : ''}`}>
        <p>Avoid the baddies</p>
        <div className="snake" style={{left: '40px'}}></div>
        <div className="sheep" style={{left: '140px'}}></div>
      </div>

      <div className={`step step4 ${step !== 4 ? 'hidden' : ''}`}>
        <div className="fruit apple" style={{top: '-30px', left: '120px'}}></div>
        <div className="sheep flip" style={{left: '140px'}}></div>
        <p>Eat the apple</p>
      </div>

      <div className={`step step5 ${step !== 5 ? 'hidden' : ''}`}>
        <div className="fruit apple munched" style={{top: '-230px', left: '120px'}}></div>
        <div className="sheep" style={{left: '140px'}}></div>
        <p>Escape!</p>
      </div>
      <div className={`step step6 ${step !== 6 ? 'hidden' : ''}`}>
        <Link className="btn" to="/play">Ready?</Link>
      </div>


    </div>
  )

}

export default Tutorial;
