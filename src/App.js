import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import {createMuiTheme} from '@material-ui/core/styles';
import muiTheme from "./customTheme/muiTheme";
import {ThemeProvider} from "@material-ui/styles";

import MainType from './routes/MainType/App';

const theme = createMuiTheme({
  palette: {
      primary: {
          // light: will be calculated from palette.primary.main,
          main: '#ff4400',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
          light: '#0066ff',
          main: '#0044ff',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#ffcc00',
      },
      // error: will use the default color
  },
});

const App = (props) => {
  return (

      <React.Fragment>
          <ThemeProvider theme={muiTheme}>
              <Router>
                  <Route path={'/'} component={MainType}/>
              </Router>
          </ThemeProvider>
      </React.Fragment>
  )
};
export default App;
