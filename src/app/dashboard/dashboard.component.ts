import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import * as moment from 'moment';

Exporting(Highcharts);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  selectedYear = moment().year();
  registrationYears = [2015, 2016, 2017, 2018, 2019, 2020, 2021].reverse();

  caseChart: typeof Highcharts = Highcharts;
  caseChartOpt!: Highcharts.Options;
  months = moment.monthsShort();
  newClients = [0, 0, 0, 0, 0, 0, 0, 5, 2, 0, 0, 0];
  newMatters = [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0];

  outcomeChart: typeof Highcharts = Highcharts;
  outcomeChartOpt!: Highcharts.Options;
  ngOnInit(): void {
    this.caseChartInit();
  }
  caseChartInit() {
    this.caseChartOpt = {
      title: {
        text: `My cases in ${this.selectedYear}`,
        style: { color: '#363636' },
      },
      tooltip: {
        animation: true,
        backgroundColor: 'rgba(255, 255, 255, .85)',
        borderRadius: 3,
        borderWidth: 1,
        enabled: true,
        headerFormat: `<div class="w-100" style="font-size:12px">{point.key} ${this.selectedYear}</div>`,
        shadow: true,
        useHTML: true,
      },
      xAxis: {
        categories: this.months,
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
      lang: {
        loading: 'Loading...',
        decimalPoint: '.',
        numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
        resetZoom: 'Reset zoom',
        resetZoomTitle: 'Reset zoom level 1:1',
        thousandsSep: ',',
        printChart: 'Print chart',
        downloadPNG: 'Download PNG image',
        downloadJPEG: 'Download JPEG image',
        downloadPDF: 'Download PDF document',
        downloadSVG: 'Download SVG vector image',
        contextButtonTitle: 'Chart context menu',
      },
      exporting: {
        type: 'image/png',
        url: 'http://export.highcharts.com/',
        buttons: {
          contextButton: {
            symbol: 'menu',
            titleKey: 'contextButtonTitle',
          
            menuItems: [
              'printChart',
              'separator',
              'downloadPNG',
              'downloadJPEG',
              'downloadPDF',
              'downloadSVG',
            ],
          },
        },
      },
      navigation: {
        menuStyle: {
          border: '1px solid #A0A0A0',
          background: '#FFFFFF',
          padding: '5px 0',
        },
        menuItemStyle: {
          padding: '10px',
          background: 'none',
          color: '#303030',
          fontSize: '11px',
        },
        menuItemHoverStyle: {
          background: '#4572A5',
          color: '#FFFFFF',
        },
        buttonOptions: {
          symbolFill: '#E0E0E0',
          symbolSize: 14,
          symbolStroke: '#666',
          symbolStrokeWidth: 3,
          symbolX: 12.5,
          symbolY: 10.5,
          align: 'right',
          buttonSpacing: 3,
          height: 22,
          theme: {
            fill: 'white',
            stroke: 'none',
          },
          verticalAlign: 'top',
          width: 24,
        },
      },
      series: [
        {
          type: 'column',
          data: this.newClients,
          color: '#78B41E',
          name: 'New Clients',
        },
        {
          type: 'column',
          data: this.newMatters,
          name: 'New Matters',
          color: '#363636',
        },
      ],
    };
  }
  changeYear() {
    this.caseChartInit();
  }
}
