import React , {Fragment} from 'react';
import Header from './components/Header';
import Login from './components/Login';
import MainRouter from './MainRouter'
// import Search from './components/Search';
// import MemeMaker from  './components/MemeMaker';
// import MemeShare from  './components/MemeShare';
// import Footer from './components/Footer';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#757de8',
    main: '#3f51b5',
    // main: 'hsl(0,0%,0%)',
    dark: '#002984',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff79b0',
    main: '#ff4081',
    dark: '#c60055',
    contrastText: '#000',
  },
    openTitle: indigo['400'],
    protectedTitle: pink['400'],
    type: 'light'
  }
})

const App = ()=>{
   return (
     <MuiThemeProvider theme={theme}>
       <MainRouter/>
     </MuiThemeProvider>
   )
}

export default App;
