import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HC_more from 'highcharts/highcharts-more' //module
HC_more(Highcharts) //init module

export const Pie = ({options}:any) => {
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}
