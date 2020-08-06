import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {getDataCountry} from '../api/fetchData';

const useStyles = makeStyles(theme => ({
  mainSelectDiv: {
    Width: "100%"
  },
  formControl: {
    minWidth: "50%",
    margin: "5px 25%"
  },
  mainHeading: {
    textAlign : "center"
  }
}));

const SelectOption = ({handleCountry}) => {
  const classes = useStyles();
  const [fetchData, setFetchData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    // fetch data country wise
    const fetchAPI = async() =>{
      setFetchData(await getDataCountry());
    }
    fetchAPI();
  }, []);

  const handleChange = (event) => {
    if(event.target.value==="globalData"){
      setCountry(event.target.value);
    }
    else{
      setCountry(event.target.value);
    }
  };
  handleCountry(country)
 
  return (
    <div className={classes.mainSelectDiv}>
      <h2 className={classes.mainHeading}>
      {country ? country.toUpperCase()+" CASES RECORDS" : "GLOBAL CASES RECORDS"}
      </h2>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-country-native-simple">
          Select Country
        </InputLabel>
        <Select
          native
          value= {country}
          onChange={handleChange}
        >
          <option aria-label="None" value=""/>
          <option value="">GLOBAL RECORDS</option>
          {Object.keys(fetchData).map((dataObj, index) => {
            return (
                <option value={fetchData[dataObj].name} key={index}>
                  {fetchData[dataObj].name}
                </option> 
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectOption;
