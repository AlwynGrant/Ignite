import React from 'react';
import ReactDOM from 'react-dom';
import './base_styles/reset.css'
import App from './App';
import SessionContext from './shared/context'

let sessionUser = {
  userId: 1,
  firstName: 'Alwyn',
  lastName: 'Grant'
}

ReactDOM.render(
    <SessionContext.Provider value={sessionUser}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SessionContext.Provider>,
  document.getElementById('root')
);
