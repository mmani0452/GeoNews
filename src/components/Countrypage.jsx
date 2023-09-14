import React from 'react'
import './Countrypage.css'
import { useParams,Link } from 'react-router-dom'
import { Header } from './header'

export const Countrypage = () => {
    const {countryName} = useParams();
    console.log(countryName)
    return (
      <div>
        <Header />
         <ul className = "grid">
              <li className = 'grid-item'>
                <Link to={`/${countryName}/general`}>Top General News in {countryName}</Link>
              </li>
              <li className = 'grid-item'>
                  <Link to={`/${countryName}/business`}>Business Stories in {countryName}</Link>
              </li>
              <li className = 'grid-item'>
                  <Link to={`/${countryName}/health`}>Health Stories in {countryName}</Link>
              </li>
              <li className = 'grid-item'>
                  <Link to={`/${countryName}/entertainment`}>Entertainment stories in {countryName}</Link>
              </li>
              <li className = 'grid-item'>
                <Link to = {`/${countryName}/science`}>Science stories in {countryName}</Link>
              </li>
              <li className = 'grid-item'>
                <Link to = {`/${countryName}/technology`}>Technology stories in {countryName}</Link>
              </li>
              <li className = 'grid-item'>
                <Link to = {`/${countryName}/sports`}>Sports stories in {countryName}</Link>
              </li>
          </ul>
      </div>
    )
}
