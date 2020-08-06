import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {getDataGlobally} from '../api/fetchData';
import CountUp from 'react-countup';
import Logo from '../image/image.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "60%",
    margin: "5px auto"
  }
}));
  const Cards = ({country}) =>{
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});
  // get data
  useEffect(() => {
    const fetchAPI = async()=>{
      // fetch data globally
      setGlobalData(await getDataGlobally(country));
    }
    fetchAPI();
  }, [country]);
  return (
    <div className={classes.root }>
    <div className="logo">
    <img className="logoImg" src={Logo} alt="covid-19" />
    </div>
      <Grid container
      spacing={3}>
      {Object.keys(globalData).map((cases,index)=>{
          return(
            <Grid item xs={12} sm={4} key={index} >
                <Paper className={cases==="confirmed" ? "blueBorder" : cases==="recovered" ? "greenBorder" : "redBorder"} 
                elevation={3}>
                <h4>{cases.toUpperCase()} CASES</h4>
                <h4>
                <CountUp start={0} end={globalData[cases].value} duration={2.75} separator="," />
                </h4>
                </Paper>
            </Grid>
          )
      })}
      </Grid>
    </div>
  );
}

export default Cards;