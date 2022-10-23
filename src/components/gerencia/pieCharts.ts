var pieColors = ["#C98200", "#063978", "#85d5e6", "#78909c", "#ffab40", "#0097a7", "#01224A", "#1D69C4", "#FDF7EB", "#5E3F05"]

export const transaccionesPorTipo = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Transacciones por tipo'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data:[{
                name: 'DEPOSITO',
                y: 295384
            },{
            	name: 'RETIRO',
  	            y: 1107620
               }] }]
}

export const depositoPorDivision = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Despósitos por división'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Depositos',
        colorByPoint: true,
        data:[{
  name: 'NOROESTE',
  y: 33196
}, {
  name: 'OCCIDENTE',
  y: 48900
}, {
  name: 'BAJIO',
  y: 36242
}, {
  name: 'SUR',
  y: 40509
}, {
  name: 'METROPOLITANA SUR',
  y: 40103
}, {
  name: 'METROPOLITANA NORTE',
  y: 41708
}, {
  name: 'SURESTE',
  y: 23904
}, {
  name: 'NORESTE',
  y: 30822
}]
    }]
}

export const retirosPorDivision = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Retiros por división'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Retiros',
        colorByPoint: true,
        data:[{
  name: 'OCCIDENTE',
  y: 143340
}, {
  name: 'METROPOLITANA NORTE',
  y: 160955
}, {
  name: 'NOROESTE',
  y: 140101
}, {
  name: 'SURESTE',
  y: 94646
}, {
  name: 'SUR',
  y: 149014
}, {
  name: 'METROPOLITANA SUR',
  y: 145509
}, {
  name: 'BAJIO',
  y: 130346
}, {
  name: 'NORESTE',
  y: 143709
}]
    }]
}

export const topCincoTransaccionesEstados = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Estados con mas transacciones'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Fallas',
        colorByPoint: true,
        data:[{
  name: 'Jalisco',
  y: 420
}, {
  name: 'COLIMA',
  y: 7972
}, {
  name: 'TLAXCALA',
  y: 9436
}, {
  name: 'CAMPECHE',
  y: 11368
}, {
  name: 'NAYARIT',
  y: 13511
}]
    }]
}