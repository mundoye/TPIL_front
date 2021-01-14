import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: { 
      text: 'Evolution du trafic data'
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

  constructor() { }

  ngOnInit() {
    Highcharts.chart('container', this.options);
  }

}
