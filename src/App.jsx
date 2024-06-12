import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Splash from './Splash.jsx';
import Info from './Info.jsx';
import Tutorial from './Tutorial.jsx';
import Play from './Play.jsx';
import Reload from './Reload.jsx';
import Win from './Win.jsx';

import resize from './helpers/resize';


// user must interact with screen before music is played
// 'Click Me' screen is displayed rather than splash screen
// until interaction occurs
export const TappedContext = React.createContext({
  tapped: false,
  setTapped: () => { return true; }
});

export const LevelContext = React.createContext({
  level: 0,
  setLevel: (level) => { return level; }
});

export const SkipTutorialContext = React.createContext({
  skipTutorial: false,
  setSkipTutorial: () => { return true; }
});


export const MutedContext = React.createContext({
  mute: false,
  setMute: (val) => { return val; }
});

 const App = () => {

  const [tapped, setTapped] = useState(false);
  const tappedValue = { tapped, setTapped };

  const [level, setLevel] = useState(0);
  const levelValue = { level, setLevel };

  const [skipTutorial, setSkipTutorial] = useState(false);
  const skipTutorialValue = { skipTutorial, setSkipTutorial };

  const [mute, setMute] = useState(false);
  const muteValue = { mute, setMute };

   return (
    <TappedContext.Provider value={tappedValue}>
    <LevelContext.Provider value={levelValue}>
    <SkipTutorialContext.Provider value={skipTutorialValue}>
    <MutedContext.Provider value={muteValue}>
        <HashRouter>
          <Routes>
            <Route path="/" element={ <Splash /> } />
            <Route path="/tutorial" element={ <Tutorial /> } />
            <Route path="/play" element={ <Play /> } />
            <Route path="/info" element={ <Info /> } />
            <Route path="/reload" element={ <Reload /> } />
            <Route path="/win" element={ <Win /> } />
          </Routes>
          </HashRouter>
      </MutedContext.Provider>
      </SkipTutorialContext.Provider>
      </LevelContext.Provider>
      </TappedContext.Provider>
   );
};


window.setTimeout(() => {
    resize();
}, 100);

export default App
