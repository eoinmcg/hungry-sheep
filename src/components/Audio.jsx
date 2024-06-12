import { useContext } from 'react';
import { MutedContext } from '../App';

import Tune from '../sfx/splash.mp3';
import Bleet from '../sfx/sheep.mp3';
import Hit from '../sfx/hit.mp3';
import Bite from '../sfx/bite.mp3';
import Click from '../sfx/click.mp3';
import Levelup from '../sfx/levelup.mp3';


const sfx = {
  Tune: new Audio(Tune),
  Bleet: new Audio(Bleet),
  Hit: new Audio(Hit),
  Bite: new Audio(Bite),
  Levelup: new Audio(Levelup),
  Click: new Audio(Click)
}

export function MuteButton(props) {

  const { mute, setMute } = useContext(MutedContext);

  const toggleMute = (e) => {
    let newVal = !mute;
    let allAudio = document.querySelectorAll('audio');
    if (newVal) {
      allAudio.forEach((el) => {
        el.muted = true;
        el.pause();
      })
    } else {
      allAudio.forEach((el) => {
        el.muted = false;
        el.currentTime = 0;
      })
    }
    setMute(newVal);
  }

  return (
    <div id="mute"
      onClick={toggleMute}
      className={`${mute ? 'muted' : ''}`}>
    </div>
  );
}


export function playAudio(key) {
  const { mute } = useContext(MutedContext);
  sfx[key].muted = mute;
  return sfx[key];
}
