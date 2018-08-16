import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './website/blog/blog/blog.component';
import { ExamplesComponent } from './website/examples/examples.component';
import { ProfileComponent } from './website/profile/profile.component';

const routes: Routes = [
    { path: '', component: ExamplesComponent },
    { path: 'examples', component: ExamplesComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'profile', component: ProfileComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
