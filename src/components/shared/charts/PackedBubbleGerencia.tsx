import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HC_more from 'highcharts/highcharts-more' //module
HC_more(Highcharts) //init module


export const PackedBubbleGerencia = () => {

    const options = {
        chart: {
            type: 'packedbubble',
            height: '80%'
        },
        title: {
            text: 'Fallas por región y estado (Presionar labels)'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
        },
        plotOptions: {
            packedbubble: {
                minSize: '30%',
                maxSize: '120%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{name: 'BAJIO', data: [{name: 'GUANAJUATO', value: 4349}, {name: 'HIDALGO', value: 2895}, {name: 'SAN LUIS POTOSI', value: 1617}, {name: 'AGUASCALIENTES', value: 1239}, {name: 'ZACATECAS', value: 1045}, {name: 'QUERETARO', value: 2140}, {name: 'DISTRITO FEDERAL', value: 4}, {name: 'JALISCO', value: 56}]}, 
                 {name: 'METROPOLITANA NORTE', data: [{name: 'ESTADO DE MEXICO', value: 10121}, {name: 'DISTRITO FEDERAL', value: 3846}]}, 
                 {name: 'METROPOLITANA SUR', data: [{name: 'DISTRITO FEDERAL', value: 9903}, {name: 'ESTADO DE MEXICO', value: 2351}]}, 
                 {name: 'NORESTE', data: [{name: 'COAHUILA', value: 3257}, {name: 'NUEVO LEON', value: 4773}, {name: 'TAMAULIPAS', value: 2897}, {name: 'DURANGO', value: 1123}, {name: 'VERACRUZ', value: 27}]}, 
                 {name: 'NOROESTE', data: [{name: 'SINALOA', value: 2417}, {name: 'CHIHUAHUA', value: 3351}, {name: 'SONORA', value: 2436}, {name: 'BAJA CALIFORNIA', value: 2671}, {name: 'BAJA CALIFORNIA SUR', value: 1275}]}, 
                 {name: 'OCCIDENTE', data: [{name: 'MICHOACAN', value: 3145}, {name: 'JALISCO', value: 7772}, {name: 'NAYARIT', value: 1018}, {name: 'COLIMA', value: 711}, {name: 'GUANAJUATO', value: 29}, {name: 'Jalisco', value: 21}]}, 
                 {name: 'SUR', data: [{name: 'PUEBLA', value: 4092}, {name: 'VERACRUZ', value: 5038}, {name: 'TLAXCALA', value: 753}, {name: 'GUERRERO', value: 1520}, {name: 'OAXACA', value: 1759}, {name: 'MORELOS', value: 1516}]}, 
                 {name: 'SURESTE', data: [{name: 'YUCATAN', value: 1687}, {name: 'TABASCO', value: 1633}, {name: 'QUINTANA ROO', value: 2034}, {name: 'CHIAPAS', value: 1922}, {name: 'CAMPECHE', value: 721}]}]

    }

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}
