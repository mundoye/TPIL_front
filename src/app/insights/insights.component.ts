import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { Options } from "highcharts";
import HC_data from 'highcharts/modules/data';
import { $ } from 'protractor';
HC_data(Highcharts);

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})

export class InsightsComponent implements OnInit {

  public traficData: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: { 
      text: 'Evolution du trafic data (GBytes)'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['janv-18',	'févr-18',	'mars-18',	'avr-18',	'mai-18',	'juin-18',	'juil-18',	'août-18',	'sept-18',	'oct-18',	'nov-18',	'déc-18',	'janv-19',	'févr-19',	'mars-19',	'avr-19',	'mai-19',	'juin-19',	'juil-19',	'août-19',	'sept-19',	'oct-19',	'nov-19',	'déc-19',	'janv-20',	'févr-20',	'mars-20',	'avr-20',	'mai-20',	'juin-20',	'juil-20',	'août-20',	'sept-20',	'oct-20'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: '2G',
      data: [254, 254,	259,	260,	304,	288,	295,	317,	300,	294,	298,	325,	354,	352,	391,	383,	415,	397,	402,	412,	404,	379,	362,	377,	404,	397,	465,	489,	499,	421,	406,	367,	344,	334]
  }, {
      name: '3G',
      data: [4620,	4399,	5031,	5029,	5228,	5231,	5200,	5052,	5244,	5600,	6089,	6675,	7150,	7110,	7985,	8049,	8873,	8699,	9038,	9173,	9160,	9197,	9190,	9802,	10129,	9851,	11436,	12066,	12860,	11315,	10668,	10369,	10163,	10715]
  }, {
      name: '4G',
      data: [1401,	1417,	1690,	1862,	2166,	2246,	2392,	2572,	2772,	3117,	3463,	4104,	4589,	4817,	5537,	5771,	6528,	7033,	7863,	8047,	8374,	8693,	8774,	9991,	10631,	10890,	13430,	14905,	16295,	14717,	14321,	14097,	13879,	15250]
  }]
  }

  public traficVoix: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: { 
      text: 'Evolution du trafic voix (Erlang)'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['janv-18',	'févr-18',	'mars-18',	'avr-18',	'mai-18',	'juin-18',	'juil-18',	'août-18',	'sept-18',	'oct-18',	'nov-18',	'déc-18',	'janv-19',	'févr-19',	'mars-19',	'avr-19',	'mai-19',	'juin-19',	'juil-19',	'août-19',	'sept-19',	'oct-19',	'nov-19',	'déc-19',	'janv-20',	'févr-20',	'mars-20',	'avr-20',	'mai-20',	'juin-20',	'juil-20',	'août-20',	'sept-20',	'oct-20'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: '2G',
      data: [2301,	2126,	2429,	2372,	2286,	2282,	2335,	2415,	2296,	2254,	2089,	2241,	2243,	2120,	2333,	2257,	2107,	2206,	2183,	2045,	1686,	1790,	1757,	1985,	2005,	1929,	2180,	2068,	2259,	2278,	2255,	1948,	1833,	1993]
  }, {
      name: '3G',
      data: [1075,	967,	1147,	1184,	1198,	1275,	1303,	1350,	1265,	1272,	1263,	1403,	1439,	1344,	1524,	1509,	1497,	1535,	1600,	1500,	1307,	1401,	1429,	1671,	1751,	1827,	1961,	1889,	2080,	2142, 2325,	1911,	1893,	2096]
  }]
  }

  public poidsData: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: { 
      text: 'Evolution du poids de trafic data (%)'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['janv-18',	'févr-18',	'mars-18',	'avr-18',	'mai-18',	'juin-18',	'juil-18',	'août-18',	'sept-18',	'oct-18',	'nov-18',	'déc-18',	'janv-19',	'févr-19',	'mars-19',	'avr-19',	'mai-19',	'juin-19',	'juil-19',	'août-19',	'sept-19',	'oct-19',	'nov-19',	'déc-19',	'janv-20',	'févr-20',	'mars-20',	'avr-20',	'mai-20',	'juin-20',	'juil-20',	'août-20',	'sept-20',	'oct-20'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: '2G',
      data: [4,	4,	4,	4,	4,	4,	4,	4,	4,	3,	3,	3,	3,	3,	3,	3,	3,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	2,	1,	1,	1,]
  }, {
      name: '3G',
      data: [74,	72,	72,	70,	68,	67,	66,	64,	63,	62,	62,	60,	59,	58,	57,	57,	56,	54,	52,	52,	51,	50,	50,	49,	48,	47,	45,	44,	43,	43,	42,	42,	42,	41,]
  }, {
      name: '4G',
      data: [22,	23,	24,	26,	28,	29,	30,	32,	33,	35,	35,	37,	38,	39,	40,	41,	41,	44,	45,	46,	47,	48,	48,	50,	50,	52,	53,	54,	55,	56,	56,	57,	57,	58,]
  }]
  }

  public poidsVoix: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: { 
      text: 'Evolution du poids de trafic voix (%)'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['janv-18',	'févr-18',	'mars-18',	'avr-18',	'mai-18',	'juin-18',	'juil-18',	'août-18',	'sept-18',	'oct-18',	'nov-18',	'déc-18',	'janv-19',	'févr-19',	'mars-19',	'avr-19',	'mai-19',	'juin-19',	'juil-19',	'août-19',	'sept-19',	'oct-19',	'nov-19',	'déc-19',	'janv-20',	'févr-20',	'mars-20',	'avr-20',	'mai-20',	'juin-20',	'juil-20',	'août-20',	'sept-20',	'oct-20'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: '2G',
      data: [68,	69,	68,	67,	66,	64,	64,	64,	64,	64,	62,	61,	61,	61,	60,	60,	58,	59,	58,	58,	56,	56,	55,	54,	53,	51,	53,	52,	52,	52,	49,	50,	49,	49,]
  }, {
      name: '3G',
      data: [32,	31,	32,	33,	34,	36,	36,	36,	36,	36,	38,	39,	39,	39,	40,	40,	42,	41,	42,	42,	44,	44,	45,	46,	47,	49,	47,	48,	48,	48,	51,	50,	51,	51,]
  }]
  }
  
  
  public poidsDatam: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Octobre 2020',
      align: 'center',
      verticalAlign: 'middle',
      y: 60
    },
    
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'pie',
      name: 'Poids de Trafic data',
      innerSize: '50%',
      data: [
        ['2G', 1],
        ['3G', 41],
        ['4G', 58] 
      ]
    }]
    
  }

  public poidsVoixm: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Octobre 2020',
      align: 'center',
      verticalAlign: 'middle',
      y: 60
    },
    
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'pie',
      name: 'Poids de Trafic data',
      innerSize: '50%',
      data: [
        ['2G', 49],
        ['3G', 51],
      ]
    }]
    
  }
  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('data', this.traficData);
    Highcharts.chart('voix', this.traficVoix);
    Highcharts.chart('poids_data', this.poidsData);
    Highcharts.chart('poids_voix', this.poidsVoix);
    Highcharts.chart('poids_datam', this.poidsDatam);
    Highcharts.chart('poids_voixm', this.poidsVoixm);
  }

}
