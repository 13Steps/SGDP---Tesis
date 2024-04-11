<template>
<div id="semicircleChart">
    
    <div >
        <div ref="semicircleChart" style="height: 200px; width: 200px;"></div>
    </div>
    
</div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
    mounted() {
        Highcharts.chart(this.$refs.semicircleChart, {
            chart: {
                type: 'pie',
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
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>',
            },
            accessibility: {
                point: {
                    valueSuffix: '%',
                },
            },
            credits: {
                enabled: false,
            },
            colors: ['#009688', '#2196f3', '#ffc107', '#f44336'],
            series: [{
                type: 'pie',
                name: 'Estado',
                innerSize: '50%',
                data: [
                    ['Completado', 9.554],
                    ['En ejecución', 60],
                    ['En revisión', 15],
                    ['Cancelado', 15],
                ],
                dataLabels: {
                    enabled: false,
                },
            }],
        });
    }
};

</script>