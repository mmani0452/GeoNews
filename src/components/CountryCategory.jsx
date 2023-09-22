import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Header } from './header';
import './CountryCategory.css';
import axios from 'axios';
import he from 'he';


export const CountryCategory = () => {
    const {countryName, category} = useParams();
    const [table,settable] = useState([]);
    const [translatedTable, setTranslatedTable] = useState([]);
    const [isTranslated, setIsTranslated] = useState(false);

    const countryCodeMapping = {
        'United Arab Emirates': 'ae',
        'Argentina': 'ar',
        'Austria': 'at',
        'Australia': 'au',
        'Belgium': 'be',
        'Bulgaria': 'bg',
        'Brazil': 'br',
        'Canada': 'ca',
        'Switzerland': 'ch',
        'China': 'cn',
        'Colombia': 'co',
        'Cuba': 'cu',
        'Czech Republic': 'cz',
        'Germany': 'de',
        'Egypt': 'eg',
        'France': 'fr',
        'United Kingdom': 'gb',
        'Greece': 'gr',
        'Hong Kong': 'hk',
        'Hungary': 'hu',
        'Indonesia': 'id',
        'Ireland': 'ie',
        'Israel': 'il',
        'India': 'in',
        'Italy': 'it',
        'Japan': 'jp',
        'South Korea': 'kr',
        'Lithuania': 'lt',
        'Latvia': 'lv',
        'Morocco': 'ma',
        'Mexico': 'mx',
        'Malaysia': 'my',
        'Nigeria': 'ng',
        'Netherlands': 'nl',
        'Norway': 'no',
        'New Zealand': 'nz',
        'Philippines': 'ph',
        'Poland': 'pl',
        'Portugal': 'pt',
        'Romania': 'ro',
        'Serbia': 'rs',
        'Russia': 'ru',
        'Sweden': 'se',
        'Singapore': 'sg',
        'Slovenia': 'si',
        'Slovakia': 'sk',
        'Thailand': 'th',
        'Turkey': 'tr',
        'Taiwan': 'tw',
        'Ukraine': 'ua',
        'United States of America': 'us',
        'Venezuela': 've',
        'South Africa': 'za'
      };
      const twoLetterCode = countryCodeMapping[countryName]

      const translateText = async (text, targetLanguage) => {
        try {
            const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`, null, {
                params: {
                    q: text,
                    target: targetLanguage,
                    key: 'AIzaSyAJIAfo9JhNH_g8z99EFfrl4KdGdkhv6Rs',
                },
            });
            console.log(response.data.data.translations[0].translatedText);
            return response.data.data.translations[0].translatedText;
        } catch (error) {
            console.error(error);
            return text;
        }
    };

    const handleTranslateClick = async () => {
      if (!isTranslated) {
        const translatedArticles = await Promise.all(
          table.slice(0, 8).map(async (article) => {
            const translatedTitle = he.decode(await translateText(article.title, 'en'));
            return {
              ...article,
              translatedTitle: translatedTitle,
            };
          })
        );
        setTranslatedTable(translatedArticles);
      }
      setIsTranslated(!isTranslated);
    };
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${twoLetterCode}&category=${category}&apiKey=3954a35f0ea248a18b6aedecb291a561`)        
        .then((response) =>response.json())
        .then((data) =>{
            console.log(data);
            const toptwelve = data.articles.slice(0,8);
            settable(toptwelve);
        })
        .catch((error) => {
            console.log(error);
    })
    }
    ,[countryName,category,twoLetterCode]);


    
  return (
    <div>
        <Header />
        <h2>Top {category} stories in {countryName}</h2>
        <div className = "buttonn-container">
        <button className = "buttonn" onClick={handleTranslateClick}>
        {isTranslated ? 'Show Original Titles' : 'Translate Titles'}
      </button>
      </div>
        <div className = 'grid2'>
        {(isTranslated ? translatedTable : table).map((item, index) => (
          <a href={item.url} target='_blank' rel="noopener noreferrer" key={index}>
            <div className='grid-item2'>
              <div className='title'>
                {isTranslated ? item.translatedTitle : item.title}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};





