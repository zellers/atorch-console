import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { configureStore } from './configureStore';
import { AtorchConsole } from './components/AtorchConsole';

const store = configureStore();

const Entry: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AtorchConsole />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default Entry;
