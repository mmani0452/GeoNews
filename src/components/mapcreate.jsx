import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "leaflet/dist/leaflet.css"
import "./mapcreate.css"
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import GEOworld from '../GEOworld.json'
import { AppContext } from './AppContext';



export const GlobeMap = () => {
      const minZoom = 2;
      const maxZoom = 6;
      const [allData, setAllData] = useState({});
      const navigate = useNavigate();
      const {HighlightedCountry} = useContext(AppContext);
      const geoJsonLayers = useRef([]);
      
      const onEachCountry = (country, layer) => {
        geoJsonLayers.current.push(layer);
        console.log(HighlightedCountry);
        if (HighlightedCountry.includes(country.properties.name)) {
          layer.setStyle({ fillColor: 'red' });
        }
        else {
          layer.setStyle({ fillColor: 'blue' });
        }
        layer.on('click', (event) => {
          navigate(`/country/${country.properties.name}`);
        });
      }


      useEffect(() => {
        geoJsonLayers.current.forEach(layer => {
          if (HighlightedCountry.includes(layer.feature.properties.name)) {
            layer.setStyle({ fillColor: 'red' }); 
          } else {
            layer.setStyle({ fillColor: 'blue' }); 
          } 
        });
      }, [HighlightedCountry]);




    
  return (
    <div className = "leaflet-container">
    <MapContainer center={[0, 0]} zoom={2}
    >
      <TileLayer
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        minZoom = {minZoom}
        maxZoom = {maxZoom}
      />
      <GeoJSON data={GEOworld} onEachFeature = {onEachCountry} />
    </MapContainer>
    </div>
  );
};
