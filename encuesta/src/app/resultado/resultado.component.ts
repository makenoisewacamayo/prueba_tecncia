import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

// services
import { GetResultadoService } from '../services/get-resultado.service';
// interfaces
import { ResultadoDataInterface } from '../interfaces/general.interfaces';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements AfterViewInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  public show: boolean = false;
  public error: boolean = false;

  constructor(
    private breakpoint_observer: BreakpointObserver,
    private get_resultado_service:GetResultadoService
  ) {}

  ngAfterViewInit(): void {
    this.get_resultado_service.getResultado()
    .subscribe({
      next: (response) => {
        const labels = response.map( (item) => item.genero);
        const series = response.map( (item) => item.count);

        this.barChartData = {
          labels: labels,
         datasets: [{
          data: series ,
          label: 'Generos Musicales'
          }]
        }

        this.show = true;
        this.chart?.update();
      },
      error: () => this.error = true

    })
  }

  public isHandset$: Observable<boolean> = this.breakpoint_observer.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];



  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
}
