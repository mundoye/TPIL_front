import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_data from 'highcharts/modules/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
HC_data(Highcharts);

@Component({
  selector: 'app-prev',
  templateUrl: './prevision.component.html',
  styleUrls: ['./prevision.component.scss']
})

export class PrevisionComponent implements OnInit {

  Test: typeof Highcharts = Highcharts;

  cellule = '';
  public cells : any ;

  public prevData: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Trafic data (TBytes)'
    },
    xAxis: {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'TBytes'
      },
      exporting: {
        enabled: true
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: 'grey'
        }
      }
    },
    legend: {
      align: 'left',
      x: 70,
      verticalAlign: 'top',
      y: 45,
      floating: true,
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '2G',
      data: [325, 377,	407,	316,	311,	311]
    }, {
      name: '3G',
      data: [6675, 9802,	14322,	19757,	22784,	22721]
    }, {
      name: '4G',
      data: [4104, 9991,	21203,	43956,	88295,	158306]
    }, {
      name: '5G',
      data: [0, 0, 0, 0, 0, 20781]
    }]
  }

  public prevParc: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Parc data par techno'
    },
    xAxis: {
      categories: ['2019', '2020', '2021', '2022', '2023']
    },
    yAxis: {
      min: 0,
      title: {
        text: '(000)'
      },
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: 'bold',
          color: 'orange'
        }
      }
    },
    legend: {
      align: 'left',
      x: 70,
      verticalAlign: 'top',
      y: 45,
      floating: true,
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '2G',
      data: [4503, 4796, 4433, 3799, 3004]
    }, {
      name: '3G',
      data: [4430, 5593, 6261, 6800, 7340]
    }, {
      name: '4G',
      data: [1595, 2821, 4091, 5456, 6980]
    }, {
      name: '5G',
      data: [0, 0, 0, 0, 75]
    }]
  }
  
  constructor(public http : HttpClient) { }

  ngOnInit(): void {
    Highcharts.chart('prev_data', this.prevData);
    Highcharts.chart('prev_parc', this.prevParc);

  }

  get_data(){
    this.http.post('http://localhost:5000/get_data',{'cellule': this.cellule}).subscribe((dat : any) => {

       this.cells = {
        Chart: {
          type: 'area',
          height: 700
        },
        title: { 
          text: 'Evolution du trafic data (GBytes): ' + this.cellule
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: dat['mois'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
        series: [{
          name: 'Avg7 ',
          data: dat['moy7']
      }, {
          name: 'Avg21',
          data: dat['moy21']
      }, {
          name: 'Max',
          data: dat['max']
      }]
      }

      Highcharts.chart('cells', this.cells);

    })
  }

}
