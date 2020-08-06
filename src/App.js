import React, { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import SelectOption from './Components/SelectOption';
import ParentVisualization from './Components/parentVisualization';

function App() {
  const [countryChange, setcountryChange] = useState("")
  const HandleCountryValue = (country) =>{
  setcountryChange(country)
}
  return (
    <>
    <Cards country = {countryChange} />
    <SelectOption handleCountry= {HandleCountryValue}/>
    <ParentVisualization country = {countryChange} />
    </>
  );
}

export default App;
