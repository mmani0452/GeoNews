import React, {useContext} from 'react';
import { GlobeMap } from '../components/mapcreate';
import { Searchbar } from '../components/Searchbar';
import { AppContext } from '../components/AppContext';
import './home.css';


export const Home = () => {
  const { HighlightedCountry } = useContext(AppContext);
  return (
    <div>
      <h1>Global News</h1>
      <div className = "description">Instructions:</div>
      <div className = "description">1. Search a country name or simply scroll through the map</div>
      <div className = "description">2. Click a country</div>
      <div className = "description">3. Select desired category of News</div>
      <div className = "description">4. Click Article description to be redirected to news article</div>
      <Searchbar />
      <GlobeMap HighlightedCountry={HighlightedCountry}/>
    </div>
  )
}
