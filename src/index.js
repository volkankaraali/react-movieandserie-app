import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MovieProvider } from './context/MovieContext';
import { BrowserRouter } from 'react-router-dom';

// context
import ThemeProvider from './context/ThemeContext';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MovieProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MovieProvider>
      </ThemeProvider>
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);

