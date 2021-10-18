import React from 'react';
import GuestRoute from './routes/GuestRoute';
import Sigin from './pages/sigin';
import Home from './pages/home';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import './mock';
import store from './store'
import Auth from './components/auth';

function App() {
  return (
    <div>
     <Provider store = {store}>
       <ThemeProvider theme={theme}>
         <BrowserRouter>
           {/* <Auth>
             <Routes>
                 <Route path = "/" element = {<Home/>} />
                 <GuestRoute path = "/sigin" element = {<Sigin/>}/>
                 <Route path = "*" element = {<h1> PAGINA NÃO ENCONTRADA! </h1>}/>
             </Routes>
           </Auth> */}
         </BrowserRouter>
       </ThemeProvider>
     </Provider>
    </div>    
  );
}

export default App;
