import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './website/blog/blog/blog.component';
import { ProfileComponent } from './website/profile/profile.component';

const routes: Routes = [
    { path: '', loadChildren: './website/examples/examples.module#ExamplesModule' },
    { path: 'examples', loadChildren: './website/examples/examples.module#ExamplesModule' },
    { path: 'blog', component: BlogComponent },
    { path: 'profile', component: ProfileComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
