import React from 'react';
import './App.css';
import './components/header.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppProvider } from './components/AppContext';
import { Home } from './pages/home';
import { Countrypage } from './components/Countrypage.jsx';
import { CountryCategory } from './components/CountryCategory';



function App() {
  return (
    <BrowserRouter>
    <AppProvider>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/Map" element = {<Home/>}/>
      <Route path = "/country/:countryName" element = {<Countrypage />} />
      <Route path = "/:countryName/:category" element = {<CountryCategory />} />
    </Routes>
    </AppProvider>
    </BrowserRouter>
  );
}

export default App;
