import './mock';
import React from 'react';
import createTheme from './theme';
import Feed from './pages/Feed';
import Home from './pages/home';
import Sigin from './pages/sigin';
import SiginUp from './pages/SiginUp';
import Auth from './components/Auth';
import NewPost from './pages/Post/New';
import GuestRoute from './routes/GuestRoute';
import Postview from './components/Postview';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import { useSettings } from './Context/SettingsContext'

function App() {
  const settings = useSettings();

  return (
        <ThemeProvider>
          <BrowserRouter>
            <Auth>
              <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/profile" element = {<Profile/>} />
                <Route path = "/post/new" element = {<NewPost/>} />
                <Route path = "/post/:slug" element = { <Postview /> } /> 
                <Route path = "/SiginUp" element = {<SiginUp />} />
                <Route path = "/feed" element = {<Feed/>} />
                <GuestRoute path = "/sigin" element = {<Sigin/>}/>
                <Route path="*" element={<h1> PAGINA NÃO ENCONTRADA! </h1>} />
              </Routes>
            </Auth>
          </BrowserRouter>
        </ThemeProvider>
  );
}

export default App;