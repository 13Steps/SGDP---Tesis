<template>
<div id="proyectosChart">

    <div ref="proyectosChart" style="height: 300px; width: 100%;"></div>
        
</div >
</template>

<script>
import Highcharts from 'highcharts';

export default {
    mounted() {
        Highcharts.chart(this.$refs.proyectosChart, {
            chart: {
                type: 'bar',
                backgroundColor: "rgba(0,0,0,0)",
            },
            events: {
                load: function() {
                    var chart = this;
                    window.onresize = function() {
                        chart.reflow();
                    };
                },
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: ['Proyecto #1', 'Proyecto #2', 'Proyecto #3', 'Proyecto #4'],
                title: {
                    text: 'Proyectos',
                },
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Carga total',
                    align: 'high',
                },
                labels: {
                    overflow: 'justify'
                },
            },
            tooltip: {
                valueSuffix: '%'
            },
            credits: {
                enabled: false,
            },
            legend: {
                align: 'high',
            },
            series: [{
                    name: 'Planificado',
                    data: [40, 20, 25, 42]
                },
                {
                    name: 'Real',
                    data: [38, 19, 10, 40]
                }
            ]
        });
    }
};


</script>