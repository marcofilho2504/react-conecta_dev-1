import React from 'react';
import GuestRoute from './routes/GuestRoute';
import Sigin from './pages/sigin';
import Home from './pages/home';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './mock';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <GuestRoute path = "/sigin" element = {<Sigin/>}/>
            <Route path = "*" element = {<h1> PAGINA NÃO ENCONTRADA! </h1>}/>
        </Routes>
      </BrowserRouter>
      {/* "IF OR ELSE outra maneira de percorrer a lista " */}
      {/*
        url === 'http://localhost:3000/'
        ? <Home />
        : <Sigin />
      */ }
    </ThemeProvider>
  );
}

export default App;
