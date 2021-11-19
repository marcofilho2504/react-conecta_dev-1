import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { SettingsProvider } from './Context/SettingsContext';
import { getSettings } from './utils/settings';

const settings = getSettings();

reactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <SettingsProvider settings = {settings}>
        <App />
      </SettingsProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);