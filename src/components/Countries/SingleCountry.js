import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    console.log(props.desh.population);
    return (
        <div className='country'>

            {/* <p>Capital: {props.desh.country.capital}</p> */}
            {/* <p>Capital: {props.country.population}</p> */}
            
        </div>
    );
};

export default SingleCountry;