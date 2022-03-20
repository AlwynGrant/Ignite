import React, { useContext, useState } from 'react';
import Home from './components/home/home';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import { Routes, Route } from 'react-router-dom';
import SessionContext from './shared/context';
import Featured from './components/home/featured';
import Discover from './components/projects/discover/discover';

function App() {
  const context = useContext(SessionContext)

  return (
    <SessionContext.Provider value={context}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/featured' element={<Featured />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/discover' element={<Discover />}/>
        {/* <Route path='/project/:projId' element={}/> */}
        {/* <Route path='/project/new' element={}/> */}
        {/* <Route path='/project/edit' element={}/> */}

      </Routes>
    </SessionContext.Provider>
  );
}

export default App;
