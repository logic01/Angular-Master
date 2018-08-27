import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatModule } from '../../design/mat.module';
import { ExamplesMainComponent } from './examples-main/examples-main.component';
import { ExampleRoutes } from './examples.routes';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutes,
    MatModule
  ],
  declarations: [
    ExamplesMainComponent
  ]
})
export class ExamplesModule { }
