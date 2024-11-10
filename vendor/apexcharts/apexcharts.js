(function ($) {
    "use strict";

            
    // bar chart 
    var options = {
        series: [{
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "Page Views",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: 'Total Visits',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        },
        
      ],
      colors: ['#104FCF', '#A155B9', '#F765A3'],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'straight',
        dashArray: [0, 0, 0],
      },
      title: {
        text: 'Current Ticket Status',
        align: 'left'
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['01Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
          '10 Jan', '11 Jan', '12 Jan'
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: '#203676',
      }
      };

    var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
    chart.render();
    

    // spider chart js 

    var options = {
        series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }],
    plotOptions: {
        radar: {
          polygons: {
            strokeColors: '#104FCF',
            
          }
        }
      },
    colors: ['#104FCF', '#A155B9', '#F765A3'],
        chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
        }
    },
    title: {
        text: 'Subscribers'
    },
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.6
    },
    markers: {
        size: 0
    },
    yaxis: {
        stepSize: 20
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    
   
    };

    var chart = new ApexCharts(document.querySelector("#spider"), options);
    chart.render();



})(window.jQuery);