import React, { useContext } from 'react';
import Home from './components/home/home';
import SessionContext from './shared/context'

function App() {
  const context = useContext(SessionContext)
  return (
    <div className="App">
      <header className="App-header">
          {context?.lastName}
          <Home />
      </header>
    </div>
  );
}

export default App;
