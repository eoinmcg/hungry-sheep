import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { TappedContext, LevelContext, SkipTutorialContext } from './App';

import { version } from '../package.json';
import { MuteButton, playAudio } from './components/Audio';
import Cloud from './components/Cloud';

const Splash = () => {

  const { tapped, setTapped } = useContext(TappedContext);
  const { setLevel } = useContext(LevelContext);
  const { SkipTutorial } = useContext(SkipTutorialContext);

  const music = playAudio('Tune');

  useEffect(() => {
    if (tapped) {
      music.play();
    }

    return function cleanup() {
      music.pause();
    };
  });

  const firstTap = () => {
    setTapped(true);
    music.play();
  }

  useEffect(() => {
    setLevel(0);
  });

  const hasTouch = ('ontouchstart' in document.documentElement);

  return (
    <div className={`game splash ${tapped ? 'ready' : 'not-ready'}`}>
      <div className={`init ${tapped ? 'skip' : ''}`} onClick={firstTap}>
        <span>{hasTouch ? 'Tap' : 'Click'} Me!</span>
      </div>
      <MuteButton />
      <h1 className="logo">Hungry Sheep</h1>
      <Link className="btn" to={`/${SkipTutorial ? 'play' : 'tutorial'}`}>
        Play
      </Link>
      <Link className="btn" to="/info">Info</Link>
      <Cloud /> <Cloud size="small" top="180" />
      <Cloud /> <Cloud size="small" top="180" />
      <div className="version">{version}</div>
    </div>
  )

}

export default Splash;
