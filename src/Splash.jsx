import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {version} from '../package.json';
import Cloud from './components/Cloud';

import Tune from './sfx/splash.mp3';

const Splash = () => {

  let hasTapped = window.hasTapped || false
  const [init, setInit] = useState(hasTapped);

  const music = new Audio(Tune);

  useEffect(() => {
    if (init) {
      music.play();
    }

    return function cleanup() {
      music.pause();
    };

  })

  const removeInit = () => {
    window.hasTapped = true;
    music.play();
    setInit(true)
  }

  useEffect(() => {
    window.sessionStorage.setItem('level', 0);
  });

  const hasTouch = ('ontouchstart' in document.documentElement);

  return (
    <div className="game splash">
      <div className={`init ${init ? 'skip' : ''}`} onClick={removeInit}>
        <span>{hasTouch ? 'Tap' : 'Click'} Me!</span>
      </div>
      <h1 className="logo">Hungry Sheep</h1>
      <Link className="btn" to="/tutorial">Play</Link>
      <Link className="btn" to="/info">Info</Link>
      <Cloud />
      <Cloud size="small" top="180" />
      <div className="version">{version}</div>
    </div>
  )

}

export default Splash;
