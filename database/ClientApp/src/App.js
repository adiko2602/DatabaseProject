import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors';

import Header from './components/Header'
import Klient from './components/Klient'
import Transakcja from './components/Transakcja'
import Pojazd from './components/Pojazd'
import Home from './components/Home'
import Sprzedawca from './components/Sprzedawca'

const theme = createTheme({
  palette: {
    primary: grey,
    primary: {
      main: grey[200]
    },
    secondary: grey,
    secondary: {
      main: grey[800]
    },
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Router>
            <div>
              <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>
                <Route path="/transakcja" element={<Transakcja />}>
                </Route>
                <Route path="/klient" element={<Klient />}>
                </Route>
                <Route path="/pojazd" element={<Pojazd />}>
                </Route>
                <Route path="/sprzedawca" element={<Sprzedawca />}>
                </Route>
              </Routes>
            </div>
          </Router>
        </ThemeProvider>
      </>
    );
  }
}
