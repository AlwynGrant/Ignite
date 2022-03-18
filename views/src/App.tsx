import React, { useContext } from 'react';
import Home from './components/home/home';
import SessionContext from './shared/context'
import { Routes, Route } from 'react-router-dom';


function App() {
  const context = useContext(SessionContext)
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* <Route path='/discover' element={}/> */}
      {/* <Route path='/project/:projId' element={}/> */}
      {/* <Route path='/project/new' element={}/> */}
      {/* <Route path='/project/edit' element={}/> */}

    </Routes>
  );
}

export default App;
