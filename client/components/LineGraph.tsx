import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

interface LineGraphProps {
  queries: {}[];
  queryStatistics: number[];
}

class LineGraph extends Component<LineGraphProps> {
  constructor(props: LineGraphProps) {
    super(props);
  }

  // componentDidUpdate() {
  //   // const labelData = () => {};
  //   const execTimeArr: number[] = [];
  //   const runtimeData = (results: any) => {
  //     const newData: any = this.props.queries[execTime];
  //     execTimeArr.push(newData);
  //   };
  //   this.setState({
  //     queryStatistics: execTimeArr,
  //   });
  // }
  // const execTime: any = 'Execution Time';

  render() {
    const { queries, queryStatistics } = this.props;

    const labelData = () => queryStatistics.map((query, i) => i);
    // const runtimeData = () => queryStatistics.map((query) => queries);

    const data = {
      labels: () => queryStatistics.map((query, i) => i),
      datasets: [
        {
          label: 'Runtime',
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
        console.log('here lies queries', queries)
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: 'QUERY REQUEST VS RUNTIME (ms)',
              fontSize: 16,
              fontColor: '#ffffff',
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
    );
  }
}

export default LineGraph;
