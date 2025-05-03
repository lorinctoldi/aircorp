import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from 'router';
import Provider from 'Provider';

import './assets/styles/index.css';

function App() {
  return (
    <Provider>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
