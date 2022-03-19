import React from 'react';
import { useEffect, useState } from 'react';
import SingleCountry from './SingleCountry';

const Countries = () => {
    const [countries, setCountry] = useState([]); 
  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountry(data));
  },[])
    return (
        <div>
            {
        countries.map(country => <SingleCountry desh={country}></SingleCountry>)
      }
        </div>
    );
};

export default Countries;