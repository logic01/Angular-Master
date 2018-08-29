import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatModule } from '../../design/mat.module';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { ExamplesMainComponent } from './examples-main/examples-main.component';
import { ExampleRoutes } from './examples.routes';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TemplateComponent } from './forms/template/template.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { ConcatComponent } from './observables/concat/concat.component';
import { ForkJoinComponent } from './observables/fork-join/fork-join.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { PairwiseComponent } from './observables/pairwise/pairwise.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { AsyncComponent } from './pipes/async/async.component';
import { CurrencyComponent } from './pipes/currency/currency.component';
import { DateComponent } from './pipes/date/date.component';
import { KeyValueComponent } from './pipes/key-value/key-value.component';
import { LowerCaseComponent } from './pipes/lower-case/lower-case.component';
import { PercentComponent } from './pipes/percent/percent.component';
import { UpperCaseComponent } from './pipes/upper-case/upper-case.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutes,
    MatModule
  ],
  declarations: [
    ExamplesMainComponent,
    KeyValueComponent,
    AsyncComponent,
    DateComponent,
    UpperCaseComponent,
    LowerCaseComponent,
    PercentComponent,
    ConcatComponent,
    ForkJoinComponent,
    MergeMapComponent,
    PairwiseComponent,
    SwitchMapComponent,
    CombineLatestComponent,
    TemplateComponent,
    ReactiveComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    CurrencyComponent
  ]
})
export class ExamplesModule { }
