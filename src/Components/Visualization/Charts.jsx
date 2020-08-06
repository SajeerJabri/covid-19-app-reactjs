import React from 'react';
import {Bar} from 'react-chartjs-2';


const Charts = ({dataArray, valueArray}) => {
  const data = {
    labels: dataArray,
    datasets: [
      {
        label: 'COVID-19',
        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: valueArray
      }
    ]
  };
    return (
        <div className="chartBar">
            <Bar
          data={data}
          width={20}
          height={20}
          options={{
            legend: { display: false },
            maintainAspectRatio: false
            
          }}
        />
        </div>
    );
}

export default Charts;
