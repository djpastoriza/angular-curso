import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input() public doughnutChartLabels:string[] = [];
  @Input() public doughnutChartData:number[] = [];
  @Input() public doughnutChartType:string;
  @Input() public leyenda:string;

  constructor() { }

  ngOnInit() {
  }

}
