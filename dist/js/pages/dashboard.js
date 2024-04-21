


/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

/* global moment:false, Chart:false, Sparkline:false */
var donutData        = {
  labels: [
      'Chrome',
      'IE',
      'FireFox',
      'Safari',
      'Opera',
      'Navigator',
  ],
  datasets: [
    {
      data: [700,500,400,600,300,100],
      backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
    }
  ]
}

var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
var pieData        = donutData;
var pieOptions     = {
  maintainAspectRatio : false,
  responsive : true,
}

new Chart(pieChartCanvas, {
  type: 'pie',
  data: pieData,
  options: pieOptions
})


$(function () {
  'use strict'


  // bootstrap WYSIHTML5 - text editor
  $('.textarea').summernote()

  $('.daterange').daterangepicker({
    ranges: {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start, end) {
    // eslint-disable-next-line no-alert
    alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
  })

    // The Calender
  $('#calendar').datetimepicker({
    format: 'L',
    inline: true
  })

  /* jQueryKnob */
  $('.knob').knob()

})
