import './mock';
import React from 'react';
import theme from './theme';
import store from './store';
import Feed from './pages/Feed';
import Home from './pages/home';
import Sigin from './pages/sigin';
import Auth from './components/Auth';
import { Provider } from 'react-redux';
import NewPost from './pages/Post/New';
import GuestRoute from './routes/GuestRoute';
import Postview from './components/Postview';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Auth>
              <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/post/new" element = {<NewPost/>} />
                <Route path = "/post/:slug" element = { <Postview /> } /> 
                <Route path = "/feed" element = {<Feed/>} />
                <GuestRoute path = "/sigin" element = {<Sigin/>}/>
                <Route path="*" element={<h1> PAGINA NÃO ENCONTRADA! </h1>} />
              </Routes>
            </Auth>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
  );
}

export default App;
