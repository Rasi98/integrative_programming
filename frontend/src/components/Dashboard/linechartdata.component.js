import React, { Component } from 'react'
import Chart from "react-google-charts";

export default class LineChartData extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "white", borderRadius:"10px"}}>
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    borderRadius={'10px'}
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'Tempreature'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                    ]}
                    options={{
                        hAxis: {
                            title: 'Time',
                        },
                        vAxis: {
                            title: 'Tempreature',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />

            </div>
        )
    }
}

