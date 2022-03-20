import React, { useContext, useEffect } from 'react';
import Home from './components/home/home';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import { Routes, Route } from 'react-router-dom';
import SessionContext from './shared/context';
import Featured from './components/home/featured';
import Discover from './components/projects/discover/discover';
import ProjectPage from './components/projects/discover/project';
import BackerForm from './components/backers/backer';

function App() {
  const context = useContext(SessionContext)

  useEffect(() => {
    if (!context.id) {
          context.firstName =
            window.sessionStorage.getItem('firstName')
          context.lastName =
            window.sessionStorage.getItem('lastName')
          context.email =
            window.sessionStorage.getItem('email')
          context.id =
            window.sessionStorage.getItem('id')
    }
  }, [context.id])

  return (
    <SessionContext.Provider value={context}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/featured' element={<Featured />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/discover' element={<Discover />}/>
        <Route path='/project/:projId' element={<ProjectPage />}/>
        <Route path='/project/:projId/back-project' element={<BackerForm />}/>
        {/* <Route path='/project/edit' element={}/> */}

      </Routes>
    </SessionContext.Provider>
  );
}

export default App;
