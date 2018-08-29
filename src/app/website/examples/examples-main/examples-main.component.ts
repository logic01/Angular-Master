import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'am-examples-main',
  templateUrl: './examples-main.component.html',
  styleUrls: ['./examples-main.component.scss']
})
export class ExamplesMainComponent implements OnInit {

  public viewKey = '';

  public observableDef = ['Concat', 'ForkJoin', 'MergeMap', 'Pairwise', 'SwitchMap', 'CombineLatest'];
  public pipesDef = ['Date', 'UpperCase', 'LowerCase', 'Currency', 'Percent', 'Async', 'KeyValue'];
  public formsDef = ['Template', 'Reactive'];
  public directivesDef = ['ngFor', 'ngIf', 'ngSwitch'];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
