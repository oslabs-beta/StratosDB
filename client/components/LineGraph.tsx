import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

interface LineGraphProps {
  queries: {
    queryString: string;
    queryData: {}[];
    queryStatistics: any;
    querySchema: string;
    queryLabel: string;
  }[];
}

class LineGraph extends Component<LineGraphProps> {
  constructor(props: LineGraphProps) {
    super(props);
  }
  render() {
    const { queries } = this.props;
    const labelData = () => queries.map((query) => query.queryLabel);
    const runtimeData = () =>
      queries.map(
        (query) =>
          query.queryStatistics[0]['QUERY PLAN'][0]['Execution Time'] +
          query.queryStatistics[0]['QUERY PLAN'][0]['Planning Time']
      );
    const data = {
      labels: labelData(),
      datasets: [
        {
          label: 'Runtime',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgb(108, 187, 169)',
          borderColor: 'rgba(247,247,247,247)',
          borderWidth: 2,
          data: runtimeData(),
        },
      ],
    };

    return (
      <div id="line-graph" className="LineGraph">
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: 'QUERY LABEL VS RUNTIME (ms)',
              fontSize: 16,
            },
            legend: {
              display: false,
              position: 'right',
            },
          }}
        />
      </div>
    );
  }
}

export default LineGraph;
