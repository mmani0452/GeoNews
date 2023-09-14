import React from 'react'
import { useState } from 'react';
import { AppContext } from './AppContext';
import { useContext } from 'react';
import GEOworld from '../GEOworld.json';
import './Searchbar.css';

export const Searchbar = () => {
  const [input,setinput] = useState("");
  const { setHighlightedCountry } = useContext(AppContext);
  




  const handleChange = (value) => {
    setinput(value);
    const userInput = value.toLowerCase();
    const matchingCountries = GEOworld.features.filter((feature) =>
      feature.properties.name.toLowerCase().includes(userInput)
    );
    setHighlightedCountry(matchingCountries.map(country => country.properties.name));

};
  
  return (
    <div className = "container">
      <input  className = "search-bar"placeholder = "type to search"
      value = {input}
      onChange = {(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
