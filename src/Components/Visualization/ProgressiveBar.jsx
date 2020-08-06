import React from "react";
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressiveBar = ({valueArray}) => {
    const recoveredRate = parseInt((valueArray[1]/valueArray[0]) * 100);
    const deathRate = parseInt((valueArray[2]/valueArray[0]) * 100);
  return (
    <div className="mainProgressBar">
      <div className="progressBar" >
        <CircularProgressbar value={recoveredRate}
         text={`${recoveredRate}%`}
         styles={buildStyles({
        pathTransitionDuration: 0.8,
        textColor: '#4ccc4c',
        pathColor: '#4ccc4c',
        trailColor: '#d6d6d6',
         })}
          />
        <h4 style={{textAlign:"center",color:"#4ccc4c"}}>Recovered Rate</h4>
      </div>
      <div className="progressBar">
        <CircularProgressbar value={deathRate}
         text={`${deathRate}%`}
         styles={buildStyles({
        pathTransitionDuration: 0.8,
        textColor: '#f13333',
        pathColor: '#f13333',
        trailColor: '#d6d6d6',
         })}
          />
        <h4 style={{textAlign:"center",color:"#f13333"}}>Fartile Rate</h4>
      </div>
    </div>
  );
};

export default ProgressiveBar;
