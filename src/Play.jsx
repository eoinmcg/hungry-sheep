import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { LevelContext } from './App';

import Level1 from './levels/level1';
import Level2 from './levels/level2';
import Level3 from './levels/level3';
import Level4 from './levels/level4';
import Level5 from './levels/level5';

import Bleet from './sfx/sheep.mp3';
import Hit from './sfx/hit.mp3';
import Bite from './sfx/bite.mp3';
import Levelup from './sfx/levelup.mp3';

import overlap from './helpers/overlap';

function Play() {

  const sfx = {
    bleet: new Audio(Bleet),
    hit: new Audio(Hit),
    bite: new Audio(Bite),
    levelup: new Audio(Levelup),
  }


  const { level, setLevel } = useContext(LevelContext);
  let currentLevel = level || 0;
  const levels = [ Level1, Level2, Level3, Level4, Level5 ];

  const [sheepHit, setSheepHit] = useState(false);
  const [isMoving, setisMoving] = useState(false);
  const [munched, setMunched] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);

  const navigate = useNavigate();
  const replay = () => { navigate('/reload'); }
  const win = () => { navigate('/win'); }

  // check if game complete
  useEffect(() => {
      if (currentLevel >= levels.length) {
        win();
      }
  });

  useEffect(() => {
    let timer = setInterval(() => {

      if (!sheepHit) {
        const gameDiv = document.querySelector('.game');
        const sheepDiv = document.querySelector('.sheep');
        if (!sheepDiv) return;

        if (sheepDiv.offsetTop > 440 && levelComplete === false) {
          sfx.bleet.play();
          sfx.levelup.play();
          setLevelComplete(true);
          window.setTimeout(() => {
            setLevel(currentLevel + 1);
            sfx.levelup.currentTime = 0;
            sfx.levelup.pause();
            replay();
          }, 2000);
        }

        gameDiv.querySelectorAll('.enemy')
          .forEach((snake) => {
            let collides = overlap(snake, sheepDiv);
            if (collides) {
              sfx.hit.play();
              setSheepHit(() => true);
            }
          });
        gameDiv.querySelectorAll('.fruit')
          .forEach((fruit) => {
            let collides = overlap(fruit, sheepDiv);
            if (collides && !munched) {
              setMunched(true);
              sfx.bite.play();
            }
          });
      }
    }, 250);

    return () => clearInterval(timer)
  }, [sheepHit, isMoving, munched, levelComplete]);


  useEffect(() => {

    const handleDown = () => { setisMoving(true); }
    const handleUp = () => { setisMoving(false); }
    const handleMove = (e) => { e.preventDefault(); }

    window.addEventListener('keypress', handleDown);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('touchstart', handleDown);

    window.addEventListener('keyup', handleUp);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);

    window.addEventListener('touchmove', handleMove);

    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('touchstart', handleDown);

      window.removeEventListener('keyup', handleUp);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);

      window.removeEventListener('touchmove', handleMove);
    };
  }, [isMoving]);


  const Level = levels[currentLevel];

  if (Level) {
    return (
      <>
        <div className={`game
          ${levelComplete === true ? 'complete' : ''}
          ${sheepHit === true ? 'hit' : 'play'}
          ${isMoving ? 'tap' : ''}`}>
          <Link className="replay" to="/reload"> Replay</Link>
          <Level sheepHit={sheepHit} munched={munched} isMoving={isMoving} /> </div>
      </>
    );
  }
}

export default Play;
