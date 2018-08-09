import { RouterModule, Routes } from '@angular/router';

import { CreateAccountComponent } from './website/account/create-account/create-account.component';

const routes: Routes = [
    { path: 'account/create', component: CreateAccountComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
