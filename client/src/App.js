import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {createTheme} from '@mui/material/styles';
import ThemeProvider from "./theme/index";
import {themeSettings} from './theme'
import './App.css';
import { CssBaseline } from '@mui/material';
import Router from './routes/Route';

function App() {
  const {mode}= useSelector((state)=> state.global);
  const theme= useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  console.log(theme);

  return (
    <div className="app">
       <ThemeProvider >
        <Router></Router>
        <CssBaseline></CssBaseline>
        </ThemeProvider>    
    </div>
  );
}

export default App;
