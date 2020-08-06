import React, { useEffect, useState } from 'react';
import Charts from './Visualization/Charts';
import ProgressiveBar from './Visualization/ProgressiveBar';
import {getDataGlobally} from '../api/fetchData';  

const ParentVisualization = ({country}) => {
  const [globalData, setGlobalData] = useState({});
  // get data
  useEffect(() => {
    const fetchAPI = async()=>{
      // fetch data globally
      setGlobalData(await getDataGlobally(country));
    }
    fetchAPI();
  }, [country]); 
  const dataArray = []
  const valueArray = []
  Object.keys(globalData).map(data=>{
    return(
    dataArray.push(data) &&
    valueArray.push(globalData[data].value)
    )
  })
    return (
        <div className="Visualization">
          <Charts dataArray={dataArray} valueArray={valueArray} />
          <ProgressiveBar valueArray={valueArray} />  
        </div>
    );
}

export default ParentVisualization;
