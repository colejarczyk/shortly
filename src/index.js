import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
import 'npm-font-open-sans';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const themeV1 = createMuiTheme({
  palette: {
    primary: {
      light: '#FFCCBC',
      main: '#FF5722',
      dark: '#E64A19',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575'
    },
    divider: '#BDBDBD',
    action: {
      active: '#FF5252',
    },
  },
 });

ReactDOM.render(
  <MuiThemeProvider theme={themeV1}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
