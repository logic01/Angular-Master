import { RouterModule, Routes } from '@angular/router';

import { ExamplesMainComponent } from './examples-main/examples-main.component';

const routes: Routes = [
    { path: '', component: ExamplesMainComponent },
    { path: 'main', component: ExamplesMainComponent },
];

export const ExampleRoutes = RouterModule.forChild(routes);
