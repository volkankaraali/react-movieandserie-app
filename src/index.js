import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
// context
import ThemeProvider from './context/ThemeContext';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// mui theme
import theme from './theme/muiTheme';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MUIThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MUIThemeProvider>
      </ThemeProvider>
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);

