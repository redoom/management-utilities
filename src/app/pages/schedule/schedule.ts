import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { Chart } from "chart.js";

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  @ViewChild("barCanvas1" , { static: true }) barCanvas1;
  @ViewChild("barCanvas2" , { static: true }) barCanvas2;

  @ViewChild("doughnutCanvas1" , { static: true }) doughnutCanvas1;
  @ViewChild("doughnutCanvas2" , { static: true }) doughnutCanvas2;
  @ViewChild("doughnutCanvas3" , { static: true }) doughnutCanvas3;
  @ViewChild("doughnutCanvas4" , { static: true }) doughnutCanvas4;

  @ViewChild("lineCanvas" , { static: true }) lineCanvas;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;

  barChart: Chart;
  doughnutChart: Chart;
  lineChart: Chart;
  productsData: DataSet[] = [];



  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config
  ) { }

  ngOnInit() {

    const product1old = new Data(105, 45.02, 12000, 50000, 8913);
    const product1new = new Data(105, 45.02, 12000, 50000, 8913);
    const product1 = new DataSet(product1old, product1new)
    this.productsData.push(product1);

    const product2old = new Data(145, 32.02, 3000, 10000, 12913);
    const product2new = new Data(145, 32.02, 3000, 10000, 12913);
    const product2 = new DataSet(product2old, product2new)
    this.productsData.push(product2);

    const product3old = new Data(224, 55.52, 18000, 64000, 7913);
    const product3new = new Data(224, 55.52, 18000, 64000, 7913);
    const product3 = new DataSet(product3old, product3new)
    this.productsData.push(product3);

    const product4old = new Data(94, 37.02, 8000, 30000, 18913);
    const product4new = new Data(94, 37.02, 8000, 30000, 18913);
    const product4 = new DataSet(product4old, product4new)
    this.productsData.push(product4);

      //4 PRODUCTS DOUGHNOUTCHART

      this.doughnutChart = new Chart(this.doughnutCanvas1.nativeElement, {
        type: "doughnut",
        data: {
          labels: ["Price", "Marketing", "Maintenance", "Cross-sale", "Company"],
          datasets: [
            {
              label: "% of Total",
              data: [32, 30, 8, 16, 14],
              backgroundColor: [
                "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"
              ],
              hoverBackgroundColor: [               
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)"
              ]
            }
          ]
        }
      });


      this.doughnutChart = new Chart(this.doughnutCanvas2.nativeElement, {
        type: "doughnut",
        data: {
          labels: ["Price", "Marketing", "Maintenance", "Cross-sale", "Company"],
          datasets: [
            {
              label: "% of Total",
              data: [24, 28, 16, 20, 12],
              backgroundColor: [
                "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"
              ],
              hoverBackgroundColor: [               
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)"
              ]
            }
          ]
        }
      });

      this.doughnutChart = new Chart(this.doughnutCanvas3.nativeElement, {
        type: "doughnut",
        data: {
          labels: ["Price", "Marketing", "Maintenance", "Cross-sale", "Company"],
          datasets: [
            {
              label: "% of Total",
              data: [8, 20, 28, 10, 14],
              backgroundColor: [
                "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"
              ],
              hoverBackgroundColor: [               
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)"
              ]
            }
          ]
        }
      });

      this.doughnutChart = new Chart(this.doughnutCanvas4.nativeElement, {
        type: "doughnut",
        data: {
          labels: ["Price", "Marketing", "Maintenance", "Cross-sale", "Company"],
          datasets: [
            {
              label: "% of Total",
              data: [18, 30, 18, 20, 14],
              backgroundColor: [
                "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"
              ],
              hoverBackgroundColor: [               
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)"
              ]
            }
          ]
        }
      });

      this.barChart = new Chart(this.barCanvas1.nativeElement, {
        type: "bar",
        data: {
          labels: ["SR-3000", "SR-3450", "SR-4300", "SR-9000"],
          datasets: [
            {
              label: "# Number of sales P1",
              data: [12340, 19647, 13123, 9087],
              backgroundColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });

      this.barChart = new Chart(this.barCanvas2.nativeElement, {
        type: "bar",
        data: {
          labels: ["SR-3000", "SR-3450", "SR-4300", "SR-9000"],
          datasets: [
            {
              label: "# Predicted number of sales P2",
              data: [15210, 12647, 18123, 7087],
              backgroundColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });

     /* this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "My First dataset",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40],
              spanGaps: false
            }
          ]
        }
      });*/

    


    this.ios = this.config.get('mode') === 'ios';
  }

}

class DataSet {
  constructor(public oldData: Data, public newData: Data) {
    
  }
}

class Data {
  constructor(public price: number, public priceIndex: number, public quality: number, public marketing: number, public sales: number) {
    
  }
}
