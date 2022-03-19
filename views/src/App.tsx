import React, { useContext, useState } from 'react';
import Home from './components/home/home';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import SessionContext from './shared/context'
import { Routes, Route } from 'react-router-dom';
import { Session } from './shared/context'

function App() {
  const context = useContext(SessionContext)

  return (
    <SessionContext.Provider value={context}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        {/* <Route path='/discover' element={}/> */}
        {/* <Route path='/project/:projId' element={}/> */}
        {/* <Route path='/project/new' element={}/> */}
        {/* <Route path='/project/edit' element={}/> */}

      </Routes>
    </SessionContext.Provider>
  );
}

export default App;
