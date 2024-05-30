import React, { useEffect } from 'react';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Splash from './Splash.jsx';
import Info from './Info.jsx';
import Tutorial from './Tutorial.jsx';
import Play from './Play.jsx';
import Reload from './Reload.jsx';
import Win from './Win.jsx';

import resize from './helpers/resize';


 const App = () => {

   return (
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
   );
};


window.setTimeout(() => {
    resize();
}, 100);

export default App
