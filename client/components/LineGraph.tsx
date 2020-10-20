import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

interface LineGraphProps {
  queries: {}[];
  queryStatistics: number[];
  queryHistory: any;
}

class LineGraph extends Component<any, LineGraphProps> {
  constructor(props: LineGraphProps) {
    super(props);
  }

  render() {
    const { queries, queryStatistics, queryHistory } = this.props;
    const labelData = () => {
      let newArr = [];
      for (let i = 0; i < queryHistory.length; i++) {
        newArr.push(queryHistory[i]);
      }
      return newArr;
    };

    const data = {
      labels: labelData(),
      datasets: [
        {
          label: 'Run Time',
          fill: true,
          lineTension: 0.5,
          backgroundColor: '#399cff',
          borderColor: 'rgba(247,247,247,247)',
          borderWidth: 2,
          data: queryStatistics,
        },
      ],
    };

    return (
      <div id='line-graph' className='LineGraph'>
        <Line
          data={data}
          options={{
            title: {
              display: false,
              text: 'QUERY REQUEST VS RUNTIME (ms)',
              fontSize: 16,
              fontColor: '#ffffff',
            },
            legend: {
              display: false,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default LineGraph;
