import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  caseChart: typeof Highcharts = Highcharts;
  caseChartOpt!: Highcharts.Options;
  ngOnInit(): void {
    this.caseChartOpt = {
      title: { text: 'My cases in 2021', style: { color: '#363636' } },
      chart: {
        width: '1200',
      },
      tooltip: {
        animation: true,
        backgroundColor: 'rgba(255, 255, 255, .85)',
        borderRadius: 3,
        borderWidth: 1,
        dateTimeLabelFormats: {
          millisecond: '%A, %b %e, %H:%M:%S.%L',
          second: '%A, %b %e, %H:%M:%S',
          minute: '%A, %b %e, %H:%M',
          hour: '%A, %b %e, %H:%M',
          day: '%A, %b %e, %Y',
        },
        enabled: true,
        footerFormat: '</table>',
        headerFormat:
          '<span style="font-size:10px">{point.key} 2021</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr>',
        shadow: true,
        useHTML: true,
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        max: 11,
      },
      yAxis: {
        title: {
          text: 'No. of Files/Matters',
          style: {
            'font-weight': '900',
          },
        },
      },
      series: [
        {
          type: 'column',
          data: [0, 0, 0, 0, 0, 0, 0, 5, 2, 0, 0, 0],
          color: '#78B41E',
          name: 'New Clients',
        },
        {
          type: 'column',
          data: [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
          name: 'New Matters',
          color: '#363636',
        },
      ],
    };
  }
}
