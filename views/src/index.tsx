import React from 'react';
import ReactDOM from 'react-dom';
import './base_styles/reset.css'
import App from './App';
import SessionContext from './shared/context'
import { BrowserRouter } from 'react-router-dom';

let sessionUser = {
  userId: 1,
  firstName: 'Alwyn',
  lastName: 'Grant'
}

ReactDOM.render(
      <BrowserRouter>
        <SessionContext.Provider value={sessionUser}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </SessionContext.Provider>
      </BrowserRouter>,
  document.getElementById('root')
);
